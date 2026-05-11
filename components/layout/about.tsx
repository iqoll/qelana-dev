import Image from "next/image";
import qelanaAboutImg from "@/assets/images/qala-about-hero.jpg";
import { Zap, Eye, ShieldCheck, Box, ChevronDown } from 'lucide-react';

const VALUES = [
  {
    id: "agility",
    icon: "Zap",
    title: "Agility",
    description: "Kami cepat beradaptasi dengan perubahan, mengubah ide menjadi solusi tanpa menunda-nunda."
  },
  {
    id: "clarity",
    icon: "Eye",
    title: "Clarity",
    description: "Kami berkomunikasi secara terbuka, membuat visi yang kompleks menjadi sangat jelas."
  },
  {
    id: "reliability",
    icon: "ShieldCheck",
    title: "Reliability",
    description: "Kami memberikan solusi yang dapat diandalkan dan dapat dipercaya, setiap saat."
  },
  {
    id: "simplicity",
    icon: "Box",
    title: "Simplicity",
    description: "Menyederhanakan teknologi yang kompleks, menjaga segala sesuatu tetap sederhana dan ramah pengguna."
  }
];

export function About() {
  const iconMap: Record<string, any> = {
    Zap, Eye, ShieldCheck, Box
  }

  return (
    <section id="about" className="px-6 py-24 mb-32 bg-[#07050a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left: Image Container - Overflowing to the left */}
          <div data-reveal="reveal-left" className="relative group lg:-ml-[15%] xl:-ml-[25%] w-full lg:w-[125%]">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-duration-700"></div>
            <div className="relative aspect-video lg:aspect-[16/9] rounded-[32px] lg:rounded-r-[48px] lg:rounded-l-none overflow-hidden border-y border-r border-white/10 shadow-2xl">
              <Image
                src={qelanaAboutImg}
                alt="Tentang Qelana"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07050a]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#07050a]/20"></div>
            </div>
          </div>

          {/* Right: Content Container */}
          <div data-reveal="reveal-right" className="px-6 lg:px-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              Tentang Kami
            </div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
              Membangun <span className="text-primary italic">Masa Depan</span> Digital Anda
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                Qelana bermula dari visi untuk menghadirkan inovasi digital yang personal dan berdampak. Kami bukan sekadar agensi, tapi partner pertumbuhan bisnis Anda.
              </p>
              <p className="text-white/50 text-base md:text-lg leading-relaxed font-normal">
                Dikelola oleh Haiqal, seorang developer yang berdedikasi membantu UMKM, praktisi medis, dan bisnis lokal bertransformasi di dunia digital dengan solusi yang profesional dan terukur.
              </p>
            </div>

            {/* Our Values Section */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                Our Values
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {VALUES.map((v) => {
                  const Icon = iconMap[v.icon];
                  return (
                    <div key={v.id} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-all group">
                      <div className="shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-base font-bold mb-1">{v.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}