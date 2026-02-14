import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img1 from "@assets/IMG-20260215-WA0031_1771098426975.jpg";
import img2 from "@assets/IMG-20260215-WA0029_1771098426954.jpg";
import img3 from "@assets/IMG-20260215-WA0030_1771098426996.jpg";
import img4 from "@assets/IMG-20260215-WA0032_1771098427049.jpg";

export default function Ambience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-zinc-950 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] md:leading-tight">
              Atmosphere <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary/80 animate-gradient-x">
                & Vibes
              </span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Immerse yourself in our industrial-chic space, designed for unforgettable nights. 
              From the warm glow of our signature lighting to the rhythmic energy of live music.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-3 relative group">
                <div className="absolute -left-4 top-0 w-px h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                <h4 className="text-2xl font-serif text-white uppercase tracking-tight">Live Music</h4>
                <p className="text-sm text-white/40 font-light">Every Fri - Sun Night</p>
              </div>
              <div className="space-y-3 relative group">
                <div className="absolute -left-4 top-0 w-px h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                <h4 className="text-2xl font-serif text-white uppercase tracking-tight">Open Air</h4>
                <p className="text-sm text-white/40 font-light">Spacious & Breezy Seating</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[500px] md:h-[700px] relative grid grid-cols-2 gap-4">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
              <div className="h-2/5 md:h-64 rounded-2xl overflow-hidden border border-white/5">
                <img src={img1} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Interior" />
              </div>
              <div className="h-3/5 md:h-96 rounded-2xl overflow-hidden border border-white/5">
                <img src={img4} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Exterior" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-12">
              <div className="h-3/5 md:h-96 rounded-2xl overflow-hidden border border-white/5">
                <img src={img2} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Seating" />
              </div>
              <div className="h-2/5 md:h-64 rounded-2xl overflow-hidden border border-white/5">
                <img src={img3} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Signage" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
