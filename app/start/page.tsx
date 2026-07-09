"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Sparkles, CheckCircle2, PlayCircle,
  Globe, CalendarClock, MessageSquareText, BellRing, Database, Megaphone,
  ChevronDown, ChevronUp, Lock, Zap, Clock
} from "lucide-react";
import qelanaLogo from "@/assets/images/logo_black.png";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

// FAQ Component for Accordion
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors cursor-pointer"
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-teal-400" /> : <ChevronDown className="text-white/40" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/70 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function StartLandingPage() {
  return (
    <div className="min-h-screen bg-[#040914] text-white font-sans selection:bg-violet-500/20 selection:text-violet-300">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6 bg-bgLight text-black">
        {/* <div className="absolute top-[-20%] left-[-10%] size-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] size-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div> */}

        <div className="max-w-[1000px] mx-auto relative z-10 animate-fade-in space-y-8">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
            <Sparkles size={16} />
            Eksklusif untuk Owner Klinik Gigi
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Buat Owner Klinik Gigi yang Capek Admin-nya <br className="hidden md:block" /> Sibuk Balas WA Booking Satu-Satu...
          </h1>

          <h2 className="text-xl md:text-3xl font-bold text-primary">
            Sistem Ini Bikin Pasien Booking Sendiri 24 Jam, Dapat Reminder Otomatis, dan Admin Kamu Nggak Perlu Balas Chat Lagi.
          </h2>

          <div className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto space-y-3 pt-4 text-left md:text-center flex flex-col items-start md:items-center">
            <p className="font-semibold text-white mb-2">Dalam 10 hari, klinik gigi kamu punya:</p>
            <div className="space-y-2 text-left inline-block">
              <div className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span className="text-black font-semibold">Website profesional yang bikin pasien percaya</span></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span className="text-black font-semibold">Sistem booking otomatis yang kunci slot tanpa bentrok</span></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span className="text-black font-semibold">AI Assistant yang jawab pertanyaan pasien 24/7 via WhatsApp</span></div>
            </div>
            <p className="pt-4 font-semibold text-primary">Tanpa ganti cara kerja klinik. Tanpa ribet.</p>
          </div>

          <div className="pt-8 flex flex-col items-center gap-4">
            <Link
              href="/start/onboarding"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white font-black py-5 px-10 rounded-2xl text-xl flex items-center justify-center gap-3 shadow-primary/30 hover:shadow-primary transition-all cursor-pointer active:scale-95 group w-full max-w-md"
            >
              👉 Lihat Demo Sistemnya (Gratis 15 Menit)
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm italic text-white/50 pt-2">
              <span className="flex items-center gap-2 text-black font-semibold"><Lock size={16} className="text-primary" /> Konsultasi 100% gratis · Tanpa komitmen</span>
              <span className="flex items-center gap-2 text-black font-semibold"><Zap size={16} className="text-primary" /> Sudah bantu 12+ klinik gigi di Jabodetabek</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM & BRIDGING */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#07050a]">
        <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Kenapa Banyak Klinik Gigi Masih Struggle <br className="hidden md:block" /> Meski Pasien Terus Bertambah?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy Narrative */}
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p><strong>Jujur aja, Dok...</strong></p>
              <p>Punya klinik gigi itu harusnya bikin hidup lebih tenang. Pasien datang, revenue naik, sistem jalan mulus.</p>
              <p>Tapi kenyataannya?</p>
              <ul className="space-y-3 py-2 text-white/80">
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">❌</span> <span>Admin kamu kewalahan balas WA booking dari pagi sampai malam</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">❌</span> <span>Pasien sering lupa jadwal — slot kosong tiba-tiba, revenue hilang</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">❌</span> <span>Double booking masih terjadi karena pencatatan manual</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">❌</span> <span>Data pasien berantakan di buku tulis atau grup WA</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">❌</span> <span>Pertanyaan "Jam berapa buka?", "Harga scaling berapa?" dijawab manual berkali-kali</span></li>
              </ul>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl my-6 text-red-200">
                <p className="font-semibold mb-2">Dan yang paling nyebelin:</p>
                <p>Kamu udah capek-capek bangun praktik, tapi 50% energi habis buat hal-hal administratif yang seharusnya bisa otomatis. Rasanya kayak kamu kerja DUA kali lebih keras dari yang seharusnya.</p>
              </div>
              <p className="font-bold text-white text-xl">Padahal...</p>
              <p>Kalau sistemnya bener, klinik gigi kamu bisa jalan sendiri. Admin cukup monitor. Pasien booking sendiri. Kamu tinggal fokus ke treatment — bukan ke WhatsApp.</p>
              <p className="text-primary font-bold">Dan sistemnya nggak seribet yang kamu bayangkan.</p>
            </div>

            {/* VSL Placeholder */}
            <div className="relative aspect-video bg-gray-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group flex items-center justify-center cursor-pointer hover:border-primary/10 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <PlayCircle size={80} className="text-primary mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <span className="font-semibold text-white tracking-widest uppercase text-sm">Play Video Overview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION & VALUE PROPOSITION */}
      <section className="py-24 px-6 bg-bgLight relative">
        <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Sistem yang Bikin Klinik Gigi Kamu <br className="hidden md:block" /> Jalan Sendiri — Tanpa Ribet
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Ini Bukan Cuma Website. Ini Ekosistem Lengkap.</h3>
            <p className="text-lg text-black/60 max-w-3xl mx-auto pt-4 leading-relaxed">
              Kebanyakan "jasa website" cuma kasih kamu halaman cantik. Tapi pas pasien mau booking? Masih manual lewat WA. Pas pasien nanya jam buka? Admin masih harus jawab. <br /><br />
              <span className="text-black font-medium">Sistem kami beda. Ini 3-in-1: Website + Booking Otomatis + AI Assistant. Semuanya terintegrasi jadi satu ekosistem yang jalan 24/7.</span>
            </p>
          </div>

          {/* Alur Kerja (The Process) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { step: "STEP 1", icon: "📋", title: "Konsultasi & Audit (30 Menit)", desc: "Kami diskusi kebutuhan klinik kamu: Berapa dokter? Layanan apa aja? Pain point terbesar apa? Output: Blueprint sistem yang pas." },
              { step: "STEP 2", icon: "🛠️", title: "Build & Setup (7–10 Hari)", desc: "Kami kerjakan semuanya: Website custom, sistem booking Cal.com, Chatbot AI, Database Airtable. Kamu nggak perlu ngapa-ngapain." },
              { step: "STEP 3", icon: "🎓", title: "Training Admin (1 Jam)", desc: "Kami ajarin admin cara lihat jadwal, update jam operasional, dan broadcast promosi. Semuanya simpel, tanpa skill teknis." },
              { step: "STEP 4", icon: "🚀", title: "Go Live & Support", desc: "Sistem aktif. Kami monitor 30 hari pertama. Setelah itu? Sistem jalan sendiri, pasien bisa booking 24/7." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 relative shadow-xl border-l-4 border-l-primary flex flex-col h-full text-gray-900 hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-6">{item.icon}</div>
                <div className="absolute top-6 right-6 bg-gray-100 text-gray-400 text-xs font-black px-3 py-1 rounded-lg">{item.step}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefit Utama */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">Apa yang Klinik Kamu Dapatkan?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Website Profesional yang Bikin Pasien Percaya", desc: "Landing page modern dengan info dokter, layanan, harga transparan, dan testimoni. Pasien baru yang cek Google langsung yakin." },
                { icon: CalendarClock, title: "Booking Online 24 Jam Tanpa Admin", desc: "Pasien pilih dokter, jadwal, isi data. Slot terkunci real-time. Nggak mungkin double booking. Admin cuma perlu cek dashboard." },
                { icon: MessageSquareText, title: "AI Assistant Jawab Pertanyaan 24/7", desc: "Semua pertanyaan standar dijawab AI via WhatsApp akurat dan cepat. Admin cuma handle pertanyaan kompleks." },
                { icon: BellRing, title: "Reminder Otomatis H-1 & H-0", desc: "Sistem kirim pesan WA otomatis pengingat jadwal. No-show turun drastis, revenue naik secara konsisten." },
                { icon: Database, title: "Database Pasien Tersimpan Rapi", desc: "Semua data pasien (nama, nomor WA, riwayat booking) tersimpan di cloud. Gampang dicari, aman, nggak bakal hilang." },
                { icon: Megaphone, title: "Broadcast Promosi Langsung", desc: "Promo paket pemutihan gigi bulan ini? Broadcast langsung ke database pasien lewat WhatsApp dengan satu klik." }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/[0.03] border border-primary/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-colors">
                  <div className="size-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                    <benefit.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-black">{benefit.title}</h4>
                  <p className="text-black/60 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Eksklusif */}
          <div className="bg-gradient-to-br from-primary to-black rounded-3xl p-8 md:p-12 border border-primary/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-64 bg-teal-500/20 blur-[100px] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-white">BONUS KHUSUS UNTUK 3 KLINIK PERTAMA BULAN INI:</h3>
            <ul className="space-y-4 mb-8 text-lg font-medium text-teal-100">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" /> <span className="text-white">Setup Google My Business & SEO Lokal (senilai Rp 3 juta)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" /> <span className="text-white">Template Broadcast Promosi siap pakai (10 template)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" /> <span className="text-white">3 bulan pertama: Priority Support via WhatsApp</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" /> <span className="text-white">Training ulang gratis kalau ganti admin</span></li>
            </ul>
            <div className="pt-6 border-t border-primary/30">
              <p className="text-xl text-primary">Total nilai bonus: <span className="line-through text-white/50">Rp 5.000.000</span></p>
              <p className="text-2xl font-bold mt-2 text-white">Tapi kamu dapat GRATIS kalau ambil paket ini bulan ini.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING & CTA */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Urgency Copy */}
          <div className="space-y-8 relative">
            <h2 className="text-4xl font-black text-primary">Kenapa Harus Sekarang?</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>Jujur, sistem ini butuh effort setup yang nggak main-main.</p>
              <p>Kami maksimal handle <strong>3 klinik baru per bulan</strong> — soalnya kami jamin setiap klien dapat perhatian penuh.</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                <p className="font-bold text-white mb-4">Bulan ini:</p>
                <p className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span>1 slot sudah terisi (drg. Rina - Bekasi)</span></p>
                <p className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <strong className="text-white">2 slot tersisa</strong></p>
              </div>
              <p>Kalau slot bulan ini penuh, kamu harus tunggu sampai bulan depan — dan harga bisa naik.</p>
              <p>Plus, bonus senilai Rp 5 juta cuma buat yang ambil paket bulan ini.</p>
              <p className="text-xl font-bold text-primary italic pt-4">
                Jadi kalau kamu udah capek dengan sistem manual dan pengen admin kamu bisa pulang tepat waktu... Ini saatnya.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 text-gray-900 shadow-2xl relative border-4 border-primary">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white font-black px-6 py-1.5 rounded-full text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
              Paket Lengkap
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold mb-2">Sistem Automasi Operasional Klinik</h3>
              <p className="text-primary font-semibold">Website + Booking + AI Assistant + Database + Training</p>
            </div>

            <div className="text-center mb-8 space-y-2 border-y border-gray-100 py-6">
              <p className="text-gray-400 font-medium text-lg">Investasi Normal: <span className="line-through">Rp 25.000.000</span></p>
              <p className="text-sm font-bold text-gray-800 uppercase tracking-wide pt-2">Harga Spesial Bulan Ini:</p>
              <h4 className="text-4xl md:text-5xl font-black text-primary">Rp 15jt - 20jt</h4>
              <p className="text-sm text-gray-500 italic">(tergantung kompleksitas klinik)</p>
            </div>

            <div className="mb-10 text-gray-600 font-medium text-center">
              <p className="mb-2 font-bold text-gray-900">💳 Pembayaran:</p>
              <p>50% DP (sebelum mulai) & 50% Pelunasan (saat go-live)</p>
              <p className="my-2 text-sm text-gray-400">atau</p>
              <p>Cicilan 3x tanpa bunga via kartu kredit</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <Link
                href="/start/onboarding"
                className="w-full bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-black py-5 px-6 rounded-2xl text-lg md:text-xl flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer active:scale-95 animate-pulse text-center"
              >
                <span>🚀 Klaim Konsultasi Gratis Sekarang</span>
                <span className="text-sm font-medium mt-1 opacity-90">(Sisa 2 Slot Bulan Ini)</span>
              </Link>

              <div className="text-sm italic text-gray-500 mt-6 space-y-1 text-center w-full">
                <p>✅ Konsultasi via Zoom/WA (15–30 menit)</p>
                <p>✅ Kami tunjukkan demo sistem langsung</p>
                <p>✅ Tanpa komitmen — kamu tentukan sendiri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-[1000px] mx-auto mt-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/60 font-medium">
          <div className="flex items-center gap-3"><Lock className="text-primary" /> Data klinik kamu 100% aman & privat</div>
          <div className="flex items-center gap-3"><Zap className="text-primary" /> Sudah dipercaya 12+ klinik gigi</div>
          <div className="flex items-center gap-3"><Clock className="text-primary" /> Response time support: &lt;24 jam</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#02050a]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Pertanyaan yang Sering Ditanyakan</h2>
          <div className="space-y-4">
            <FAQItem
              question="Apa bedanya sistem ini dengan website biasa?"
              answer="Website biasa cuma halaman info. Sistem ini lengkap: booking otomatis, AI chatbot, reminder, database. Pasien bisa booking 24 jam tanpa admin."
            />
            <FAQItem
              question="Berapa lama sistemnya jadi?"
              answer="7–10 hari kerja setelah konsultasi selesai dan konten (foto, teks) lengkap."
            />
            <FAQItem
              question="Kalau admin saya gaptek, gimana?"
              answer="Kami kasih training 1 jam. Dashboard-nya simpel banget, bahkan admin yang nggak biasa pakai komputer bisa."
            />
            <FAQItem
              question="Kalau mau berhenti langganan, bisa?"
              answer="Nggak ada langganan bulanan untuk paket ini. Sekali bayar, website & sistemnya jadi milik klinik kamu selamanya. (Opsional: maintenance & update bisa ambil paket terpisah kalau perlu.)"
            />
            <FAQItem
              question="Apa saya harus ganti cara kerja klinik?"
              answer="Nggak. Sistem ini menyesuaikan dengan cara kerja klinik kamu — bukan sebaliknya."
            />
          </div>
        </div>
      </section>

      {/* Footer Final CTA */}
      <section className="py-24 px-6 bg-bgDark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Siap Bikin Klinik Gigi Kamu Jalan Otomatis?</h2>
          <p className="text-xl text-teal-100 font-medium">Slot terbatas. Jangan sampai kehabisan.</p>
          <div className="flex justify-center pt-8">
            <Link
              href="/start/onboarding"
              className="bg-white text-teal-900 font-black py-5 px-12 rounded-2xl text-xl md:text-2xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform"
            >
              📞 Saya Tertarik
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
