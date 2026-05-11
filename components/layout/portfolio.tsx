import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import ButtonContact from "../ui/button-contact";
import Image from "next/image";
import intanBeautyImg from "@/assets/images/projects/intanbeauty.png";

const PROJECTS = [
  {
    id: "intan-beauty",
    title: "Intan Beauty",
    year: "2025",
    image: intanBeautyImg,
    tag: "Company Profile",
    websiteUrl: "https://intanbeauty.com",
    client: "IntanBeauty",
    bgColor: "bg-[#0d1b2a]"
  }
]

export function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-28 px-6 bg-[#f0f0f2] overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
          <div>
            <h2 className="text-primary text-xs font-bold uppercase tracking-widest">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Case Studies</h3>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="size-14 rounded-full border border-borderLight bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-14 rounded-full border border-borderLight bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory reveal-stagger"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          data-reveal
        >
          {PROJECTS.map((p, i) => (
            <a 
              href={p.websiteUrl} 
              key={i} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group shrink-0 snap-center w-[80vw] md:w-[500px] lg:w-[700px]"
            >
              <div className={`relative aspect-[16/10] rounded-[32px] md:rounded-[48px] overflow-hidden mb-8 ${p.bgColor} shadow-2xl transition-all duration-500 group-hover:shadow-primary/20`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-2xl translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-2">
                    View Website <ArrowRight size={18} />
                  </div>
                </div>
                
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-100 group-hover:opacity-80"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 500px, 700px"
                />
              </div>
              
              <div className="flex justify-between items-start px-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-[#131118] group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                </div>
                <span className="text-secondary/60 font-bold text-lg bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-borderLight shadow-sm">
                  {p.year}
                </span>
              </div>
            </a>
          ))}
          <div className="min-w-px md:min-w-5"></div>
        </div>

        <div className="mt-16 flex justify-center" data-reveal>
          <ButtonContact variant="large" />
        </div>
      </div>
    </section>
  )
}