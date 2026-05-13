interface ButtonContactProps {
  variant?: "large" | "small";
  className?: string; // Untuk tambahan class jika diperlukan nanti
  greetingMessage?: string;
}

export default function ButtonContact({ variant = "large", className = "", greetingMessage = "" }: ButtonContactProps) {
  const baseStyles = "bg-primary text-white border border-transparent font-bold transition-all active:scale-95 flex items-center justify-center whitespace-nowrap group hover:bg-transparent hover:border-[#131118] hover:text-[#131118]";

  const sizeStyles = variant === "large"
    ? "min-w-[200px] h-14 px-8 rounded-xl text-base hover:shadow-xl hover:shadow-primary/20"
    : "px-6 py-2.5 rounded-lg text-sm tracking-wide hover:shadow-lg hover:shadow-primary/10";

  return (
    <a
      href={`https://wa.me/6285713849998?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20jasa%20pembuatan%20website${greetingMessage}`}
      className={`${baseStyles} ${sizeStyles} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Mulai Proyek
    </a>
  );
}