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
    <section ref={containerRef} className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Atmosphere <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                & Vibes
              </span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Immerse yourself in our industrial-chic space, designed for unforgettable nights. 
              From the warm glow of our signature lighting to the rhythmic energy of live music, 
              every corner of Groove is crafted for connection.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-white">Live Music</h4>
                <p className="text-sm text-white/50">Every Fri - Sun</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-white">Open Air</h4>
                <p className="text-sm text-white/50">Spacious & Breezy</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[600px] relative grid grid-cols-2 gap-4">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img src={img1} className="w-full h-full object-cover" alt="Interior" />
              </div>
              <div className="h-80 rounded-lg overflow-hidden">
                <img src={img4} className="w-full h-full object-cover" alt="Exterior" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-12">
              <div className="h-80 rounded-lg overflow-hidden">
                <img src={img2} className="w-full h-full object-cover" alt="Seating" />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img src={img3} className="w-full h-full object-cover" alt="Signage" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
