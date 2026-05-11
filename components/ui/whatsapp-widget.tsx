import { MessageCircle } from "lucide-react";

export default function WhatsappWidget() {
  const whatsappUrl = "https://wa.me/6285713849998?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20jasa%20pembuatan%20website";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip/Label */}
      <div className="bg-white text-[#131118] px-4 py-2 rounded-xl shadow-xl border border-borderLight font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat with us!
      </div>
      
      {/* Icon Button */}
      <div className="size-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-slow">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
}
