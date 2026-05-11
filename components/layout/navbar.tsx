import Image from "next/image";
import qelanaLogo from "@/assets/images/logo_black.png";
import ButtonContact from "../ui/button-contact";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-borderLight/50">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <Image src={qelanaLogo} alt="Logo Qelana" width={140} height={140} />
        </a>
        <div className="hidden md:flex gap-8 font-semibold text-secondary">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portofolio</a>
          <a href="#price" className="hover:text-primary transition-colors">Harga</a>
        </div>
        <ButtonContact variant="small" />
      </div>
    </nav>
  )
}