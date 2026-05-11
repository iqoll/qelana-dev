import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ButtonContact from "../ui/button-contact";

const SERVICES_LIST = [
  "Praktik Dental & Umum",
  "Company Profile",
  "Optimasi SEO",
  "Automasi Sistem",
  "Custom"
];

const PRICING_DATA: Record<string, any> = {
  "Praktik Dental & Umum": [
    {
      name: "Starter",
      price: "2.000.000",
      description: "Solusi tepat untuk memulai kehadiran digital praktik Anda.",
      features: [
        "Landing Page Profesional",
        "Mobile Responsive",
        "Integrasi WhatsApp & Maps",
        "Fitur Jadwal Praktik",
        "Domain .com/ .id (1 Thn)",
        "Hosting Cloud (1 Thn)",
        "SSL Security Certificate"
      ]
    },
    {
      name: "Profesional",
      price: "4.500.000",
      description: "Fitur lengkap untuk manajemen pasien yang lebih baik.",
      popular: true,
      features: [
        "Website Multi-Page (5 Hal)",
        "Sistem Reservasi Online",
        "Galeri Fasilitas & Tim Medis",
        "Optimasi SEO Dasar",
        "Copywriting Profesional",
        "Integrasi Google My Business",
        "Maintenance 3 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "7.500.000",
      description: "Sistem digital terintegrasi untuk klinik skala besar.",
      features: [
        "Custom UI/UX Design",
        "Sistem Rekam Medis Dasar",
        "Fitur Blog & Edukasi",
        "Optimasi Speed (Core Web Vitals)",
        "Premium SEO Strategy",
        "Priority Support 24/7",
        "Maintenance 6 Bulan"
      ]
    }
  ],
  "Company Profile": [
    {
      name: "Starter",
      price: "1.500.000",
      description: "Identitas digital esensial untuk bisnis Anda.",
      features: [
        "Modern Landing Page",
        "Company Profile Section",
        "Product/Service Showcase",
        "Contact Form Integration",
        "Domain & Hosting (1 Thn)",
        "Mobile Friendly Design"
      ]
    },
    {
      name: "Profesional",
      price: "3.500.000",
      description: "Meningkatkan kredibilitas bisnis ke level selanjutnya.",
      popular: true,
      features: [
        "Multi-page Business Site",
        "CMS (Bisa Edit Konten)",
        "Portfolio/Project Gallery",
        "Integrasi Sosial Media",
        "SEO Optimization",
        "Professional Business Email",
        "Maintenance 2 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "6.500.000",
      description: "Solusi korporat dengan performa dan keamanan tinggi.",
      features: [
        "High-Performance Website",
        "Multi-language Support",
        "Advanced Analytics Tool",
        "Custom Iconography",
        "Lead Generation System",
        "Security Hardening",
        "Maintenance 6 Bulan"
      ]
    }
  ],
  "Optimasi SEO": [
    {
      name: "Starter",
      price: "1.500.000",
      description: "Langkah awal mendominasi pencarian lokal.",
      features: [
        "Audit SEO Website",
        "Keyword Research (5 Keywords)",
        "On-Page Optimization",
        "Google Search Console Setup",
        "Google Analytics Setup",
        "Local SEO Setup"
      ]
    },
    {
      name: "Profesional",
      price: "3.500.000",
      description: "Strategi konten untuk trafik organik yang berkelanjutan.",
      popular: true,
      features: [
        "Semua Fitur Starter",
        "Keyword Research (15 Keywords)",
        "4 SEO-Optimized Articles",
        "Technical SEO Fixes",
        "Backlink Strategy Dasar",
        "Monthly Performance Report"
      ]
    },
    {
      name: "Enterprise",
      price: "6.500.000",
      description: "Dominasi pasar secara menyeluruh dan agresif.",
      features: [
        "Semua Fitur Profesional",
        "Unlimited Keywords Tracking",
        "10 Premium SEO Articles",
        "Competitor Analysis",
        "Premium Backlink Building",
        "Conversion Rate Optimization",
        "Bi-weekly Strategy Call"
      ]
    }
  ],
  "Automasi Sistem": [
    {
      name: "Starter",
      price: "2.500.000",
      description: "Efisiensi alur kerja untuk operasional harian.",
      features: [
        "Automasi WhatsApp Blast",
        "Integrasi Google Sheets",
        "Auto-reply Customer Service",
        "Sistem Notifikasi Email",
        "Basic CRM Integration"
      ]
    },
    {
      name: "Profesional",
      price: "4.500.000",
      description: "Sistem cerdas untuk pertumbuhan tanpa hambatan.",
      popular: true,
      features: [
        "Custom Workflow Automation",
        "Integrasi Payment Gateway",
        "Dashboard Laporan Real-time",
        "Automasi Invoice & Receipt",
        "Inventory Management Sync",
        "Maintenance 2 Bulan"
      ]
    },
    {
      name: "Enterprise",
      price: "8.500.000",
      description: "Ekosistem digital otonom untuk skala perusahaan.",
      features: [
        "Full ERP/CRM Customization",
        "API Third-party Integration",
        "AI Chatbot Implementation",
        "High-security Data Tunneling",
        "Custom Admin Panel",
        "Priority Technical Support",
        "Maintenance 12 Bulan"
      ]
    }
  ],
  "Custom": [
    {
      name: "Custom Project",
      price: "Custom",
      description: "Punya ide unik atau kebutuhan spesifik? Kami siap membangun sistem kustom sesuai visi Anda.",
      features: [
        "Free Konsultasi & Strategi",
        "Custom Tech Stack Selection",
        "Scalable Architecture",
        "Dedicated Development Team",
        "Flexible Scope & Features",
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
                className={`w-full ${plan.popular ? "bg-primary" : "bg-white/10 hover:bg-white hover:text-black"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}