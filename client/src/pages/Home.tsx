import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Ambience from "@/components/Ambience";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedMenu />
        <Ambience />
        
        {/* Footer / Contact Section */}
        <footer className="bg-black py-20 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-white">GROOVE.</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  A premium dining and nightlife destination. Join us for an unforgettable experience.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80 hover:text-primary transition-colors cursor-pointer">
                    <Phone size={18} />
                    <span>+66 12 345 6789</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80 hover:text-primary transition-colors cursor-pointer">
                    <MapPin size={18} />
                    <span>123 Groove Street, City Center</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80">
                    <Clock size={18} />
                    <span>Daily: 5:00 PM - 2:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Newsletter</h4>
                <p className="text-white/50 text-sm">Stay updated with our latest events and promotions.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-none text-white w-full focus:outline-none focus:border-primary transition-colors"
                  />
                  <Button className="rounded-none bg-primary text-black hover:bg-white">
                    JOIN
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-white/30 uppercase tracking-widest">
              © 2024 Groove Bar & Restaurant. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
