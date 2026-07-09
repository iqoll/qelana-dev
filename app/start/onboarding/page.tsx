"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Send, Sparkles, Stethoscope, MessageSquare, MapPin, User } from "lucide-react";
import qelanaLogo from "@/assets/images/logo_black.png";

export default function StartOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clinicName: "",
    clinicLocation: "",
    clinicType: "Dental & Gigi",
    goals: [] as string[],
    contactName: "",
    contactRole: "Owner / Dokter",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const goalOptions = [
    "Sistem Booking Pasien Otomatis (WhatsApp / Web)",
    "Asisten AI Chatbot Pasien 24/7",
    "Showcase Treatment & Layanan Modern",
    "Integrasi Review & Reputasi Google Maps",
    "Menaikkan Trafik Pasien Lokal (SEO Klinik)",
    "Desain Kredibilitas Premium (Non-Template)"
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate WhatsApp link with form details
  const getWhatsAppLink = () => {
    const text = `Halo Qelana! Saya tertarik dengan Digital Clinic Growth System. Berikut detail klinik kami:
    
Nama Klinik: ${formData.clinicName}
Lokasi: ${formData.clinicLocation}
Spesialisasi: ${formData.clinicType}
Goal Utama: ${formData.goals.length > 0 ? formData.goals.join(", ") : "Konsultasi Strategi"}
PIC Klinik: ${formData.contactName} (${formData.contactRole})
No. WhatsApp: ${formData.whatsapp}

Mohon jadwalkan sesi Private Strategy Session & Business Consultation untuk klinik kami.`;
    return `https://wa.me/6285713849998?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#07050a] text-white flex flex-col relative overflow-hidden selection:bg-violet-500/20 selection:text-violet-300">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] size-[600px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] size-[500px] bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[40%] size-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Image
            src={qelanaLogo}
            alt="Logo Qelana"
            width={120}
            height={120}
            className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
      </header>

      {/* Main Form Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-xl">
          {/* Progress Indicator */}
          {!submitted && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Step {step} of 3</span>
                <span className="text-xs text-white/50 font-semibold">
                  {step === 1 && "Profil Klinik"}
                  {step === 2 && "Goal & Kebutuhan"}
                  {step === 3 && "Informasi Kontak"}
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-500 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: CLINIC INFO */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
                        <Sparkles size={12} />
                        Digital Clinic Growth System
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                        Mari rancang ekosistem digital klinik Anda.
                      </h2>
                      <p className="text-white/60 text-sm">
                        Langkah awal untuk mengubah klinik konvensional menjadi klinik modern dengan sistem booking otomatis.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">Nama Klinik / Praktik</label>
                        <div className="relative">
                          <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input 
                            type="text" 
                            required
                            placeholder="Contoh: Klinik Dental Sehat"
                            value={formData.clinicName}
                            onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">Spesialisasi Klinik</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Dental & Gigi", "Umum & Keluarga", "Kecantikan & Estetika", "Lainnya"].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({...formData, clinicType: type})}
                              className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                                formData.clinicType === type
                                  ? "bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-500/10"
                                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">Lokasi Kota / Daerah</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input 
                            type="text" 
                            required
                            placeholder="Contoh: Tasikmalaya, Jawa Barat"
                            value={formData.clinicLocation}
                            onChange={(e) => setFormData({...formData, clinicLocation: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.clinicName || !formData.clinicLocation}
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:pointer-events-none text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/40 transition-all cursor-pointer active:scale-95"
                      >
                        Lanjutkan
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: GOALS & CHALLENGES */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                        Apa goal utama klinik Anda saat ini?
                      </h2>
                      <p className="text-white/60 text-sm">
                        Pilih satu atau beberapa modul yang ingin Anda bangun bersama Qelana.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-1 gap-2.5 max-h-[300px] overflow-y-auto pr-1 no-scrollbar">
                        {goalOptions.map((goal) => {
                          const isSelected = formData.goals.includes(goal);
                          return (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => handleGoalToggle(goal)}
                              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-violet-600/10 border-violet-500/60 text-white shadow-md"
                                  : "bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/[0.08]"
                              }`}
                            >
                              <span className="text-sm font-semibold pr-4">{goal}</span>
                              <div className={`size-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                                isSelected
                                  ? "bg-violet-500 border-violet-400 text-white"
                                  : "border-white/20 text-transparent"
                              }`}>
                                <Check size={12} strokeWidth={3} />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <ArrowLeft size={16} />
                        Kembali
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={formData.goals.length === 0}
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:pointer-events-none text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/40 transition-all cursor-pointer active:scale-95"
                      >
                        Lanjutkan
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT INFORMATION */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                        Siapa yang dapat kami hubungi?
                      </h2>
                      <p className="text-white/60 text-sm">
                        Kami akan menganalisis data klinik Anda dan menghubungi Anda untuk sesi konsultasi 1-on-1 gratis.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">Nama Lengkap PIC</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input 
                            type="text" 
                            required
                            placeholder="Contoh: drg. Amanda Putri"
                            value={formData.contactName}
                            onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">Jabatan / Posisi</label>
                        <div className="grid grid-cols-3 gap-2">
                          {["Owner / Dokter", "Manager", "Admin / Staff"].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => setFormData({...formData, contactRole: role})}
                              className={`py-3 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                formData.contactRole === role
                                  ? "bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-500/10"
                                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white/80">No. WhatsApp</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input 
                            type="tel" 
                            required
                            placeholder="Contoh: 081234567890"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <ArrowLeft size={16} />
                        Kembali
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.contactName || !formData.contactRole || !formData.whatsapp}
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:pointer-events-none text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/40 transition-all cursor-pointer active:scale-95"
                      >
                        Kirim Spesifikasi
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* SUCCESS STATE */
              <div className="space-y-6 text-center py-6 animate-fade-in">
                <div className="mx-auto size-20 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/35 mb-6 relative">
                  <Check size={36} strokeWidth={3} className="text-white" />
                  <div className="absolute inset-0 rounded-full border border-violet-400 animate-ping opacity-25"></div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl font-black tracking-tight">Klinik Anda Siap Berkembang!</h2>
                  <p className="text-white/60 text-sm max-w-sm mx-auto leading-relaxed">
                    Terima kasih telah melengkapi spesifikasi. Data Anda telah kami rangkum.
                  </p>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left max-w-sm mx-auto text-sm space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Klinik:</span>
                    <span className="font-bold text-white/90">{formData.clinicName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Lokasi:</span>
                    <span className="font-semibold text-white/90">{formData.clinicLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">PIC / Role:</span>
                    <span className="font-semibold text-white/90">{formData.contactName} ({formData.contactRole})</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3 max-w-sm mx-auto">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-6 rounded-2xl text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all cursor-pointer active:scale-95"
                  >
                    Hubungi Lead Consultant Sekarang
                    <MessageSquare size={18} />
                  </a>
                  <p className="text-[11px] text-white/40 leading-normal">
                    Klik tombol di atas untuk mengirim ringkasan spesifikasi langsung ke WhatsApp kami agar konsultasi 1-on-1 Anda segera dijadwalkan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Qelana Growth System. All rights reserved.</p>
        <div className="flex items-center gap-1 font-semibold text-white/40">
          <span>Eksklusif dibuat oleh</span>
          <a href="/" className="hover:text-violet-400 transition-colors">Qelana</a>
        </div>
      </footer>
    </div>
  );
}
