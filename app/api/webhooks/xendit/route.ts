import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('📥 Webhook Xendit received request...');

    // 1. Ambil token verifikasi dari header request
    const callbackToken = request.headers.get('x-callback-token');
    console.log(`🔑 Callback Token received: ${callbackToken ? 'YES (exists)' : 'NO (missing)'}`);
    console.log(`🔑 Expected Webhook Token: ${process.env.XENDIT_WEBHOOK_TOKEN ? 'YES (configured)' : 'NO (missing)'}`);

    // 2. Validasi token untuk keamanan
    if (!callbackToken || callbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
      console.warn('❌ Webhook Unauthorized: Callback token does not match!');
      return NextResponse.json({ error: 'Unauthorized callback token' }, { status: 401 });
    }

    // 3. Ambil data JSON kiriman Xendit
    const body = await request.json();
    console.log(`📄 Webhook Body Status: ${body?.status}`);
    console.log(`📄 Invoice ID: ${body?.id}, External ID: ${body?.external_id}`);
    console.log('📄 Full Webhook Body:', JSON.stringify(body, null, 2));

    // Pastikan ini adalah callback untuk Invoice dan statusnya PAID
    if (body.status === 'PAID') {
      const invoiceId = body.id;             // ID Invoice dari Xendit (misal: invoice-...)
      const externalId = body.external_id;   // ID unik yang kamu buat di backend kemarin
      const amount = body.amount;             // Nominal yang dibayarkan
      const email =
        body.customer?.email ||
        body.payer_email ||
        body.customer_details?.email ||
        'Tidak ada email'; // Fallback teks agar terlihat di Sheets jika memang kosong
      // Extract phone from description if available since Xendit e-wallet webhooks sometimes drop customer details
      const phoneMatch = body.description?.match(/\[Phone:\s*(.*?)\]/);
      const extractedPhone = phoneMatch && phoneMatch[1] ? phoneMatch[1] : null;

      const phone =
        extractedPhone ||
        body.customer_details?.mobile_number ||
        body.customer?.mobile_number ||
        'Tidak ada nomor'; // Fallback
      const description = body.description;  // Deskripsi invoice berisi nama & plan
      const paymentMethod = body.payment_method; // Metode pembayaran (e.g. OVO, QRIS)

      console.log(`✅ Pembayaran Sukses! Invoice: ${externalId}, Total: Rp ${amount}, Email: ${email}`);

      // Forward data ke Google Sheets via webhook URL jika dikonfigurasi
      const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (googleSheetsWebhookUrl) {
        try {
          const payload = {
            invoiceId,
            externalId,
            amount,
            email,
            phone,
            phoneNumber: phone,
            description,
            paymentMethod,
            paidAt: body.paid_at || new Date().toISOString(),
          };

          const response = await fetch(googleSheetsWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            console.log('✅ Data berhasil dikirim ke Google Sheets');
          } else {
            console.error('❌ Gagal mengirim data ke Google Sheets:', response.status, response.statusText);
          }
        } catch (webhookErr) {
          console.error('❌ Error saat mengirim ke Google Sheets webhook:', webhookErr);
        }
      } else {
        console.warn('⚠️ GOOGLE_SHEETS_WEBHOOK_URL belum dikonfigurasi di .env.local');
      }

    }

    // 4. Selalu kembalikan respon 200 OK ke Xendit agar Xendit tahu data sudah sukses diterima
    return NextResponse.json({ message: 'Callback received successfully' }, { status: 200 });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}