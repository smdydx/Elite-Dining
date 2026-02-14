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
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Why <span className="text-primary italic">Groove</span>?
            </h2>
            <p className="text-white/60 font-light leading-relaxed">
              We aren't just a bar; we are a destination for those who appreciate the finer rhythms of life.
            </p>
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
              <img src={img3} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Groove atmosphere" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-primary/20 transition-all group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
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
