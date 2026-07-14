'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  // Jika dimuat di dalam iframe, arahkan tab utama (parent) ke halaman ini
  useEffect(() => {
    if (window.self !== window.top && window.top) {
      window.top.location.href = window.location.href;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#07050a] flex items-center justify-center p-6 text-white font-sans relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-[32px] p-8 text-center relative z-10 shadow-2xl backdrop-blur-md">
        <div className="size-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-emerald-400 size-10 animate-[bounce_2s_infinite]" />
        </div>

        <h1 className="text-2xl font-black tracking-tight mb-3">Pembayaran Berhasil!</h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          Terima kasih atas pembayaran Anda. Tim kami akan segera menghubungi Anda untuk memulai proses pengerjaan proyek.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center w-full h-14 bg-primary text-white font-bold rounded-xl transition-all hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/20 active:scale-95"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
