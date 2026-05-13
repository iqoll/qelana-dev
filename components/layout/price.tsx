import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ButtonContact from "../ui/button-contact";

const SERVICES_LIST = [
  "Praktik Dental & Umum",
  "Showroom Mobil / Motor",
  "Modifikasi Mobil / Audio System",
  "UMKM & Bisnis Lokal",
  "Optimasi SEO",
  "Automasi Sistem",
  "Custom"
];

const PRICING_DATA: Record<string, any> = {
  "Praktik Dental & Umum": [
    {
      name: "Starter",
      price: "2.500.000",
      description:
        "Cocok untuk praktik dokter yang ingin tampil profesional dan mempermudah pasien menghubungi klinik.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page (scroll panjang)",
        "CTA Reservasi via WhatsApp",
        "Section Dokter & Layanan",
        "Google Maps Integration",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "2x Revisi Gratis",
        "Free SSL",
        "Garansi Maintenance 15 Hari",
        "Video Panduan Akses Website"
      ]
    },
    {
      name: "Professional",
      price: "6.000.000",
      popular: true,
      description:
        "Website lengkap untuk meningkatkan kredibilitas klinik dan mempermudah reservasi pasien.",
      features: [
        "Semua fitur Starter, plus:",
        "Hosting 1 Tahun",
        "5–7 Halaman Utama (Home, About, Treatment, Galeri, Testimoni, Contact, FAQ)",
        "Halaman Detail Treatment / Layanan",
        "Form Reservasi Online",
        "Galeri Foto & Video Klinik & Fasilitas",
        "Testimoni Pasien",
        "SEO On-Page Dasar (meta title, slug, heading structure)",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "Garansi Maintenance 1 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "12.000.000",
      description:
        "Sistem digital modern untuk klinik dengan fitur booking dan pembayaran online.",
      features: [
        "Semua fitur Professional, plus:",
        "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe)",
        "Dashboard Booking Pasien",
        "Form Appointment Otomatis (Nama, Jadwal, Keluhan/Layanan yang Diinginkan)",
        "Email Notifikasi Otomatis (ke admin & customer)",
        "Blog & Artikel Edukasi",
        "Fitur Kalender Jadwal Ketersediaan",
        "Desain Interaktif & Animasi",
        "Speed Optimization",
        "Priority Support",
        "3 Email Bisnis",
        "5x Revisi Gratis",
        "Garansi Maintenance 1,5 Bulan"
      ]
    }
  ],

  "Showroom Mobil / Motor": [
    {
      name: "Starter",
      price: "2.500.000",
      description:
        "Landing page profesional untuk meningkatkan trust calon buyer dan menampilkan koleksi kendaraan secara elegan.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page (scroll panjang)",
        "Galeri Mobil / Motor (harga & deskripsi singkat)",
        "Tombol Beli Sekarang -> Direct ke WhatsApp",
        "Section Featured Unit / Testimoni / FAQ / Promo",
        "Google Maps Integration",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "2x Revisi Gratis",
        "Free SSL",
        "Garansi Maintenance 15 Hari"
      ]
    },
    {
      name: "Professional",
      price: "7.000.000",
      popular: true,
      description:
        "Website showroom lengkap untuk meningkatkan kredibilitas bisnis dan mempermudah calon customer melihat unit.",
      features: [
        "Semua fitur Starter, plus:",
        "Hosting 1 Tahun",
        "5–7 Halaman Utama (Home, Katalog, Showroom, About Us, Contact, FAQ, Promo)",
        "Filter Jenis Mobil / Motor",
        "Halaman Detail Tiap Unit",
        "SEO On-Page Basic (meta title, slug, heading structure)",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "Garansi Maintenance 1 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "12.000.000",
      description:
        "Platform showroom modern dengan sistem inquiry dan booking digital untuk meningkatkan konversi penjualan.",
      features: [
        "Semua fitur Professional plus:",
        "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe) untuk Booking Fee",
        "Sistem Pengelola Calon Pembeli Otomatis (CRM Inquiry)",
        "Katalog Mobil / Motor Real Time",
        "CMS Editable",
        "Desain Interaktif & Animasi",
        "Speed Optimization",
        "Priority Support",
        "3 Email Bisnis",
        "5x Revisi Gratis",
        "Garansi Maintenance 1,5 Bulan"
      ]
    }
  ],

  "Modifikasi Mobil / Audio System": [
    {
      name: "Starter",
      price: "2.500.000",
      description:
        "Landing page modern untuk menampilkan hasil modifikasi dan meningkatkan trust calon customer.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page (scroll panjang)",
        "CTA Konsultasi via WhatsApp",
        "Galeri Hasil Modifikasi (Before & After)",
        "Section Produk & Layanan",
        "Google Maps Integration",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "2x Revisi Gratis",
        "Free SSL",
        "Garansi Maintenance 15 Hari",
        "Video Panduan Akses Website"
      ]
    },
    {
      name: "Professional",
      price: "6.000.000",
      popular: true,
      description:
        "Website lengkap untuk workshop audio dan modifikasi agar tampil lebih premium dan profesional.",
      features: [
        "Semua fitur Starter",
        "Hosting 1 Tahun",
        "5–7 Halaman Utama (Home, About Us, Project, Products, Services, Contact, FAQ)",
        "Page Individual untuk Setiap Layanan/Paket",
        "Form Booking Instalasi",
        "Testimoni Customer",
        "SEO On-Page Basic (meta title, slug, heading structure)",
        "CTA WhatsApp di setiap halaman Layanan",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "Garansi Maintenance 1 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "12.000.000",
      description:
        "Sistem digital modern untuk workshop audio dan modifikasi dengan fitur booking dan inquiry otomatis.",
      features: [
        "Semua fitur Professional, plus:",
        "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe)",
        "Online Booking System (Nama, Jadwal, Jasa yang Diinginkan)",
        "Email/WhatsApp Notifikasi Otomatis (ke admin & customer)",
        "CMS Editable",
        "Desain Interaktif & Animasi (Parallax & Smooth Scroll)",
        "Speed Optimization",
        "Priority Support",
        "3 Email Bisnis",
        "5x Revisi Gratis",
        "Garansi Maintenance 1,5 Bulan"
      ]
    }
  ],
  "UMKM & Bisnis Lokal": [
    {
      name: "Starter",
      price: "1.500.000",
      description:
        "Landing page profesional untuk membantu UMKM tampil lebih terpercaya dan mudah dihubungi customer.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page",
        "CTA WhatsApp Order / Konsultasi",
        "Section Produk / Layanan",
        "Google Maps Integration",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "2x Revisi Gratis",
        "Free SSL",
        "Garansi Maintenance 15 Hari",
        "Video Panduan Akses Website"
      ]
    },
    {
      name: "Professional",
      price: "3.500.000",
      popular: true,
      description:
        "Website company profile lengkap untuk meningkatkan kredibilitas dan penjualan bisnis lokal.",
      features: [
        "Semua fitur Starter, plus:",
        "Hosting 1 Tahun",
        "5–7 Halaman Utama (Home, About Us, Contact, FAQ, Testimoni, Layanan/Produk)",
        "Halaman Detail Produk / Layanan",
        "Galeri Portfolio / Produk",
        "Form Order / Konsultasi",
        "SEO On-Page Basic (meta title, slug, heading structure)",
        "Google Business Integration",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "Garansi Maintenance 1 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "7.500.000",
      description:
        "Sistem website modern untuk UMKM yang ingin meningkatkan penjualan dan otomatisasi bisnis.",
      features: [
        "Semua fitur Professional, plus:",
        "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe)",
        "Dashboard Admin/User",
        "Metode Pembayaran: Transfer, QRIS, e-wallet, Credit Card",
        "Request Quotation System",
        "Email & WhatsApp Notification",
        "Desain Interaktif & Animasi",
        "Speed Optimization",
        "Priority Support",
        "3 Email Bisnis",
        "5x Revisi Gratis",
        "Garansi Maintenance 1,5 Bulan"
      ]
    }
  ],
  "Optimasi SEO": [
    {
      name: "Starter",
      price: "1.500.000",
      description:
        "Langkah awal mendominasi pencarian lokal dan meningkatkan visibilitas bisnis.",
      features: [
        "SEO Audit Website",
        "Keyword Research (5 Keywords)",
        "On-page SEO Optimization",
        "Google Search Console Setup",
        "Google Analytics Setup",
        "Local SEO Setup"
      ]
    },
    {
      name: "Profesional",
      price: "3.500.000",
      description:
        "Strategi SEO berkelanjutan untuk meningkatkan trafik organik bisnis.",
      popular: true,
      features: [
        "Semua Fitur Starter",
        "Keyword Research (15 Keywords)",
        "4 SEO Articles",
        "Technical SEO Fixes",
        "Backlink Strategy Dasar",
        "Monthly Report"
      ]
    },
    {
      name: "Enterprise",
      price: "7.500.000",
      description:
        "Strategi SEO agresif untuk meningkatkan ranking dan konversi bisnis.",
      features: [
        "Semua Fitur Profesional",
        "Unlimited Keyword Tracking",
        "10 SEO Articles",
        "Competitor Analysis",
        "Premium Backlink Strategy",
        "Conversion Optimization",
        "Bi-weekly Consultation"
      ]
    }
  ],

  "Automasi Sistem": [
    {
      name: "Starter",
      price: "3.000.000",
      description:
        "Automasi dasar untuk meningkatkan efisiensi operasional bisnis.",
      features: [
        "WhatsApp Automation",
        "Google Sheets Integration",
        "Auto-reply Customer Service",
        "Email Notifications",
        "Basic CRM Integration"
      ]
    },
    {
      name: "Profesional",
      price: "6.500.000",
      description:
        "Workflow otomatis untuk mempercepat operasional dan meningkatkan produktivitas.",
      popular: true,
      features: [
        "Custom Workflow Automation",
        "Payment Gateway Integration",
        "Realtime Dashboard",
        "Invoice Automation",
        "Inventory Sync",
        "Maintenance 2 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "12.000.000",
      description:
        "Ekosistem digital terintegrasi untuk bisnis skala besar.",
      features: [
        "Full Custom Automation",
        "Third-party API Integration",
        "AI Chatbot Integration",
        "Custom Admin Dashboard",
        "Advanced Security",
        "Priority Support",
        "Maintenance 12 Bulan"
      ]
    }
  ],

  "Custom": [
    {
      name: "Custom Project",
      price: "Custom",
      description:
        "Punya kebutuhan unik? Kami siap membangun solusi digital sesuai kebutuhan bisnis Anda.",
      features: [
        "Free Consultation",
        "Custom Tech Stack",
        "Scalable Architecture",
        "Dedicated Development",
        "Flexible Features",
        "Post-launch Support"
      ]
    }
  ]
};

export function Price() {
  const [activeService, setActiveService] = useState("Praktik Dental & Umum");

  return (
    <section id="price" className="px-6 py-24 bg-[#07050a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Pricing Plans</h2>
          <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-10">Pilih Paket yang <span className="text-primary italic">Sesuai</span></h3>

          {/* Service Filter */}
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit mx-auto">
            {SERVICES_LIST.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeService === service
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid gap-8 ${activeService === "Custom" ? "max-w-2xl mx-auto grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
          {PRICING_DATA[activeService].map((plan: any, index: number) => (
            <div
              key={plan.name}
              data-reveal
              className={`relative group p-8 rounded-[40px] border transition-all duration-500 flex flex-col ${plan.popular
                ? "bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10 scale-105 z-20"
                : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest flex items-center gap-2 shadow-xl">
                  <Sparkles size={14} />
                  PALING POPULER
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-white/50 text-xl font-medium">{plan.price === "Custom" ? "" : "Rp"}</span>
                  <span className="text-white text-4xl md:text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm">{plan.price === "Custom" ? "" : ""}</span>
                </div>
                <p className="text-white/50 text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3 group/item">
                      <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover/item:bg-primary transition-colors">
                        <Check size={12} className="text-primary group-hover/item:text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonContact
                variant="large"
                greetingMessage={`%20${activeService}%20-%20${plan.name}`}
                className={`w-full ${plan.popular ? "bg-primary" : "bg-white/10 hover:bg-white hover:text-black"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}