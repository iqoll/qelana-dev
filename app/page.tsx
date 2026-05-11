"use client";

import { Hero } from "@/components/layout/hero";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/layout/about";
import { Portfolio } from "@/components/layout/portfolio";
import { Price } from "@/components/layout/price";
import WhatsappWidget from "@/components/ui/whatsapp-widget";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-bgLight selection:bg-primary/20 selection:text-primary">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <About />
      <Portfolio />
      <Price />
      <WhatsappWidget />
      {/* Decorative Circles */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </main>
  );
}
