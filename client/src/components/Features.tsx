import { motion } from "framer-motion";
import { Music, GlassWater, Utensils, Zap, Users, Star } from "lucide-react";
import img3 from "@assets/IMG-20260215-WA0030_1771098426996.jpg";

export default function Features() {
  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Soul Sessions",
      description: "Experience local and international artists performing live jazz, blues, and acoustic sets every weekend."
    },
    {
      icon: <GlassWater className="w-8 h-8" />,
      title: "Mixology Masters",
      description: "Our bartenders are artists, crafting signature cocktails that balance bold flavors with elegant presentation."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Thai Fusion",
      description: "A culinary journey through Thailand's finest flavors, reimagined with modern techniques and premium ingredients."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electric Vibes",
      description: "As the sun sets, the energy rises. Our lighting and sound systems create an immersive nightlife atmosphere."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Events",
      description: "From birthdays to corporate gatherings, we offer bespoke event planning and exclusive lounge access."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Lounge",
      description: "Enjoy our VIP sections with dedicated service and the most comfortable seating in the city center."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-xs uppercase tracking-[0.4em] font-bold">The Experience</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1]">
                Why <span className="text-primary italic">Groove</span>?
              </h2>
            </div>
            <p className="text-white/50 font-light text-lg leading-relaxed max-w-sm">
              We aren't just a bar; we are a destination for those who appreciate the finer rhythms of life.
            </p>
            <div className="relative h-80 rounded-3xl overflow-hidden border border-white/5 group shadow-2xl shadow-primary/5">
              <img src={img3} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Groove atmosphere" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-10 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="text-primary mb-6 relative z-10 p-4 bg-primary/5 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">{f.title}</h3>
                <p className="text-white/40 font-light leading-relaxed relative z-10 group-hover:text-white/60 transition-colors">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
