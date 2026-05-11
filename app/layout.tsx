import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | Qelana Dev",
  description: "Jasa pembuatan website profesional untuk praktik dental, dokter, company profile, dan custom website. Optimasi SEO dan desain premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans bg-bgLight text-[#131118] antialiased`}>
        {children}
      </body>
    </html>
  );
}
