import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount, customerEmail, customerName, planName, customerPhone } = await request.json();

    // Validasi input dasar
    if (!amount || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Data tidak lengkap. Mohon isi nama, email, dan pilih paket.' },
        { status: 400 }
      );
    }

    // Parse harga format Indonesia (misal: "2.000.000" → 2000000)
    const numericAmount = Number(String(amount).replace(/\./g, '').replace(',', '.'));

    if (isNaN(numericAmount) || numericAmount <= 0) {
      return NextResponse.json(
        { error: 'Harga tidak valid.' },
        { status: 400 }
      );
    }

    // Generate unique ID untuk transaksi ini
    const externalId = `invoice-${Date.now()}`;

    // Dapatkan origin secara dinamis untuk redirect URL
    const { origin } = new URL(request.url);

    // Panggil API Xendit dengan basic authentication (Secret Key dikodekan ke Base64)
    const token = Buffer.from(`${process.env.XENDIT_SECRET_KEY}:`).toString('base64');

    const description = planName
      ? `Pembelian Jasa - ${planName} (${customerName}) [Phone: ${customerPhone}]`
      : `Pembelian Jasa Pembuatan Website - ${customerName} [Phone: ${customerPhone}]`;

    const xenditResponse = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        external_id: externalId,
        amount: numericAmount,
        description,
        payer_email: customerEmail, // Added so Xendit returns it in Webhook
        payer_phone: customerPhone,
        invoice_duration: 86400, // 24 jam masa berlaku
        customer: {
          given_names: customerName,
          email: customerEmail,
          mobile_number: customerPhone
        },
        success_redirect_url: `${origin}/success`, // Halaman setelah sukses
        failure_redirect_url: `${origin}/failed`,  // Halaman jika gagal
      }),
    });

    const data = await xenditResponse.json();

    if (!xenditResponse.ok) {
      return NextResponse.json({ error: data.message || 'Gagal membuat invoice' }, { status: xenditResponse.status });
    }

    // Kembalikan invoice_url ke frontend
    return NextResponse.json({ invoiceUrl: data.invoice_url, invoiceId: data.id });
  } catch (error) {
    console.error('Checkout Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}