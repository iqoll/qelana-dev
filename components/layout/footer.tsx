import Image from "next/image";
import qelanaLogo from "@/assets/images/logo_black.png";
import { Phone, MapPin, MessageSquare } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = "https://wa.me/6285713849998?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20jasa%20pembuatan%20website";

  return (
    <footer className="px-6 pt-24 pb-12 bg-[#07050a] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-20%] left-[-10%] size-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] size-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10" data-reveal>
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="/" className="inline-block mb-6 cursor-pointer">
                {/* Apply CSS filter to invert black logo to white on dark background */}
                <Image
                  src={qelanaLogo}
                  alt="Logo Qelana"
                  width={140}
                  height={140}
                  className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                Jasa pembuatan website profesional dan premium. Kami membangun identitas digital yang berfokus pada konversi, performa, dan estetika modern untuk kesuksesan bisnis Anda.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qelanadev"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.facebook.com/qelana"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1877F2]/20"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/20"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white text-lg font-bold tracking-tight relative pb-2 w-fit">
              Kontak & Alamat
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
            </h4>

            <div className="flex flex-col gap-4 text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-0.5">Kantor Utama</p>
                  <p className="text-sm leading-relaxed">
                    Perum Rancabungur Indah,<br />
                    Rancabungur, Tasikmalaya,<br />
                    Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <div>
                  <p className="font-bold text-white mb-0.5">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    0857-1384-9998
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <h5 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Navigasi</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <span className="text-white/20">•</span>
                <a href="#portfolio" className="hover:text-primary transition-colors">Portofolio</a>
                <span className="text-white/20">•</span>
                <a href="#price" className="hover:text-primary transition-colors">Harga</a>
              </div>
            </div>
          </div>

          {/* Column 3: Google Maps Embed */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-white text-lg font-bold tracking-tight relative pb-2 w-fit">
              Lokasi Google Maps
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
            </h4>

            <div className="relative w-full h-[220px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-1 group hover:border-primary/50 transition-all duration-500 shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=-7.337740, 108.125521&hl=id&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[22px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                title="Perum Rancabungur Indah Location"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Qelana. All rights reserved.</p>
          <div className="flex items-center gap-1 font-semibold text-white/60">
            <span>Made with</span>
            <span className="text-rose-500 animate-pulse">♥</span>
            <span>by</span>
            <a href="/" className="hover:text-primary transition-colors">Qelana</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
