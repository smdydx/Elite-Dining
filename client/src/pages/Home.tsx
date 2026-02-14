import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Ambience from "@/components/Ambience";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-24 bg-black border-y border-white/5">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 italic">"Where every beat meets a unique flavor profile."</h2>
            <p className="text-white/50 font-light text-lg leading-relaxed">
              Located in the heart of the city, Groove is more than a restaurant—it's a sensory journey. 
              We blend industrial architecture with warm hospitality to create a space that feels both 
              raw and refined. From our signature cocktails to our authentic Thai fusion menu, 
              everything is served with a side of soul.
            </p>
          </div>
        </section>

        <Features />
        <FeaturedMenu />
        <Ambience />
        <Testimonials />
        
        {/* Call to Action */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-black mb-8 leading-tight">Ready for an <br/> Unforgettable Night?</h2>
            <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium">
              Join us for the finest cocktails and live music in town. Tables are filling up fast for the weekend.
            </p>
            <Link href="/contact">
              <Button size="xl" className="bg-black text-white hover:bg-zinc-800 rounded-none px-12 py-8 text-lg uppercase tracking-[0.2em] font-bold">
                Reserve Your Table
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-20 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-white tracking-tighter">GROOVE<span className="text-primary">.</span></h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
                  A premium dining and nightlife destination. Experience the rhythm of taste in an atmosphere designed for connection.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-light">+66 12 345 6789</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <MapPin size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-light">123 Groove Street, City Center</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-white/80">
                    <Clock size={18} className="text-primary" />
                    <span className="font-light">Daily: 5:00 PM - 2:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Newsletter</h4>
                <p className="text-white/50 text-sm font-light">Stay updated with our latest events and exclusive promotions.</p>
                <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/5 border border-white/10 px-4 py-3 rounded-none text-white w-full focus:outline-none focus:border-primary transition-colors font-light"
                  />
                  <Button className="rounded-none bg-primary text-black hover:bg-white w-full font-bold uppercase tracking-widest">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
               <div className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
                © 2024 Groove Bar & Restaurant. All rights reserved.
              </div>
              <div className="flex gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
