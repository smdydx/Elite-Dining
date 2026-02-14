import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuDrinks from "@assets/IMG-20260215-WA0024_1771098427032.jpg";
import menuAppetizers from "@assets/IMG-20260215-WA0023_1771098427065.jpg";
import menuStirFried from "@assets/IMG-20260215-WA0022_1771098427079.jpg";

export default function MenuPage() {
  const categories = [
    { id: "all", label: "Full Menu" },
    { id: "drinks", label: "Drinks & Promotions" },
    { id: "food", label: "Food" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Menu</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
            Explore our wide selection of premium spirits, signature cocktails, and delicious Thai cuisine.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full px-6 py-2 text-sm uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black transition-all whitespace-nowrap"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0 space-y-12">
             <MenuSection title="Drinks & Promotions" image={menuDrinks} />
             <MenuSection title="Appetizers & Recommendations" image={menuAppetizers} />
             <MenuSection title="Stir-Fried & Spicy Salads" image={menuStirFried} />
          </TabsContent>

          <TabsContent value="drinks" className="mt-0">
            <MenuSection title="Drinks & Promotions" image={menuDrinks} />
          </TabsContent>

          <TabsContent value="food" className="mt-0 space-y-12">
            <MenuSection title="Appetizers & Recommendations" image={menuAppetizers} />
            <MenuSection title="Stir-Fried & Spicy Salads" image={menuStirFried} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function MenuSection({ title, image }: { title: string, image: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-serif text-primary border-l-4 border-primary pl-4">{title}</h3>
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </motion.div>
  );
}
