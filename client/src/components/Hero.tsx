import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/motion_photo_8995399903294201225_1771098426921.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Groove Bar Interior"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.8em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-primary text-sm md:text-base uppercase font-bold tracking-[0.8em] pl-[0.8em]"
          >
            Est. 2024
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9]">
            The Rhythm <br />
            <span className="italic text-white/80">of Taste</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            A sanctuary for sound, spirits, and soul. Experience the finest dining and nightlife atmosphere in the heart of the city.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/menu">
              <Button 
                size="lg" 
                className="bg-primary text-black hover:bg-white rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold"
              >
                View Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white rounded-none px-8 py-6 text-sm uppercase tracking-widest"
              >
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
}
