import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import img1 from "@assets/IMG-20260215-WA0031_1771098426975.jpg";
import img2 from "@assets/IMG-20260215-WA0029_1771098426954.jpg";
import img3 from "@assets/IMG-20260215-WA0030_1771098426996.jpg";
import img4 from "@assets/IMG-20260215-WA0032_1771098427049.jpg";
import motionPhoto from "@assets/motion_photo_8995399903294201225_1771098426921.jpg";

export default function GalleryPage() {
  const images = [
    { src: motionPhoto, alt: "Stage and Lighting", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: img1, alt: "Interior Ceiling", span: "col-span-1" },
    { src: img4, alt: "Exterior Night View", span: "col-span-1" },
    { src: img2, alt: "Seating Area", span: "col-span-1 md:col-span-2" },
    { src: img3, alt: "Neon Signage", span: "col-span-1" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Gallery</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
            A glimpse into the Groove experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl border border-white/10 ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-xl tracking-widest">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
