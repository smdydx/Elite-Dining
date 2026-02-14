import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import downloaded stock images
import drinks1 from "@/assets/images/drinks_1.jpg";
import drinks2 from "@/assets/images/drinks_2.jpg";
import drinks3 from "@/assets/images/drinks_3.jpg";
import barLife1 from "@/assets/images/bar_life_1.jpg";
import barLife2 from "@/assets/images/bar_life_2.jpg";
import barLife3 from "@/assets/images/bar_life_3.jpg";

export default function FeaturedMenu() {
  const categories = [
    { id: "signature", label: "Signature" },
    { id: "drinks", label: "Drinks" },
    { id: "appetizers", label: "Appetizers" },
  ];

  const items = [
    {
      id: 1,
      category: "signature",
      name: "Spicy Salmon Salad",
      price: "189",
      description: "Fresh salmon with spicy Thai herbs and lime dressing",
      image: barLife1,
    },
    {
      id: 2,
      category: "signature",
      name: "Fried Sea Bass",
      price: "399",
      description: "Deep fried sea bass served with special fish sauce",
      image: drinks3,
    },
    {
      id: 3,
      category: "drinks",
      name: "Sangsom Set",
      price: "1,599",
      description: "700ml Bottle + 4 Mixers + Ice + Snack",
      image: drinks1,
    },
    {
      id: 4,
      category: "appetizers",
      name: "Salmon Wasabi",
      price: "139",
      description: "Fresh salmon served with premium wasabi sauce",
      image: barLife2,
    },
    {
      id: 5,
      category: "drinks",
      name: "Regency Set",
      price: "1,299",
      description: "350ml Bottle + 4 Mixers + Ice + Snack",
      image: drinks2,
    },
    {
      id: 6,
      category: "appetizers",
      name: "Fried Chicken Wings",
      price: "159",
      description: "Crispy fried wings marinated in special house sauce",
      image: barLife3,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] md:text-xs">
            Our Selections
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Curated Tastes</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-sm md:text-base px-4">
            Discover our carefully selected menu featuring local favorites and signature cocktails.
          </p>
        </div>

        <Tabs defaultValue="signature" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full w-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full px-4 md:px-8 py-2 text-[10px] md:text-sm uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
             <TabsContent key={cat.id} value={cat.id} className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {items.filter(i => i.category === cat.id).map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Link href="/menu">
            <Button variant="link" className="text-white hover:text-primary border-b border-primary/50 pb-1 uppercase text-sm tracking-widest transition-all hover:border-primary rounded-none h-auto px-0">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row h-full">
        <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
            <span className="text-primary font-bold font-mono whitespace-nowrap">฿{item.price}</span>
          </div>
          <p className="text-sm text-white/50 font-light leading-relaxed line-clamp-2 md:line-clamp-none">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
