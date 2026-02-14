import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Music Critic",
      text: "The best sound system I've experienced in a bar. The live sessions are truly soulful.",
      rating: 5
    },
    {
      name: "Sarah Lim",
      role: "Food Blogger",
      text: "Their Salmon Wasabi is a game changer. Perfectly balanced flavors in a stunning setting.",
      rating: 5
    },
    {
      name: "Mark T.",
      role: "Local Guide",
      text: "Amazing atmosphere! The lighting alone is worth the visit. Definitely my new weekend spot.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-white">What People Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-black border border-white/5 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/70 italic mb-6 font-light leading-relaxed">"{r.text}"</p>
              <div>
                <h4 className="text-white font-bold">{r.name}</h4>
                <p className="text-primary/60 text-xs uppercase tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
