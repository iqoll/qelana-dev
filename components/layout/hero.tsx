"use client";

import { useEffect, useState } from "react";
import ButtonContact from "../ui/button-contact";

const services = [
  "Praktik Dental & Umum",
  "Showroom Mobil / Motor",
  "Modifikasi Mobil / Audio System",
  "UMKM & Bisnis Lokal",
  "Optimasi SEO",
  "Automasi Sistem",
  "Custom"
];

export function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    // Intersection Observer for Reveal Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!el.classList.contains('reveal') &&
          !el.classList.contains('reveal-stagger') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right')) {
          el.classList.add('reveal');
        }
        observer.observe(el);

        // Force active if scroller is at top and element is in viewport
        const rect = el.getBoundingClientRect();
        if (window.scrollY < 50 && rect.top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    };

    // Initial check
    observeElements();

    // Add scroll listener to ensure visibility when returning to top
    const handleScroll = () => {
      if (window.scrollY < 10) {
        document.querySelectorAll('[data-reveal]').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(observeElements, 300);
    const revealInterval = setInterval(observeElements, 2000);

    // Text Swap Animation Interval
    const swapInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(revealInterval);
      clearInterval(swapInterval);
    };
  }, []);

  return (
    <section className="relative pt-40 pb-20 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <h1 data-reveal className="text-5xl md:text-[88px] font-black leading-[1.05] tracking-tighter mb-8 text-[#131118]">
          Jasa Pembuatan <br />
          <span className="text-primary italic">Website</span> <br />
          Profesional
        </h1>

        <div data-reveal className="relative h-20 md:h-24 w-full flex flex-col items-center justify-center overflow-hidden mb-8">
          <div className="text-2xl md:text-3xl font-bold text-secondary/80 flex flex-col md:flex-row items-center gap-4">
            <span>Kami melayani website</span>
            <div className="relative h-12 overflow-hidden min-w-[320px] md:min-w-[400px] text-center md:text-left">
              {services.map((service, index) => (
                <div
                  key={service}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center md:justify-start whitespace-nowrap ${index === currentServiceIndex
                    ? "translate-y-0 opacity-100"
                    : index < currentServiceIndex
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                    }`}
                >
                  <span className="text-primary underline decoration-primary/30 underline-offset-8">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p data-reveal className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Hadirkan identitas digital yang memukau untuk bisnis Anda. Kami membangun website yang tidak hanya indah, tapi juga berfokus pada konversi dan performa.
        </p>

        <div data-reveal className="flex flex-col sm:flex-row gap-6">
          <ButtonContact variant="large" />
        </div>
      </div>
    </section>
  );
}