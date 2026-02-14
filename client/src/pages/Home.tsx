import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Ambience from "@/components/Ambience";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "wouter";

// Import stock images for the new lifestyle section
import barLife1 from "@/assets/images/bar_life_1.jpg";
import barLife2 from "@/assets/images/bar_life_2.jpg";
import drinks1 from "@/assets/images/drinks_1.jpg";
import drinks2 from "@/assets/images/drinks_2.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-20 md:py-32 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-tight italic">
              "Where every beat meets a <span className="text-primary not-italic">unique</span> flavor profile."
            </h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto mb-10" />
            <p className="text-white/60 font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Located in the heart of the city, Groove is more than a restaurant—it's a sensory journey. 
              We blend industrial architecture with warm hospitality to create a space that feels both 
              raw and refined.
            </p>
          </div>
        </section>

        <Features />
        
        {/* New Lifestyle / Atmosphere Grid */}
        <section className="py-12 md:py-24 bg-black overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
              <div className="md:col-span-2 h-[400px] md:h-auto relative overflow-hidden group rounded-2xl">
                <img src={barLife1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Bar Life" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-widest">Electric Nights</h3>
                    <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">The city's most vibrant atmosphere.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 h-[300px] md:h-auto relative overflow-hidden group rounded-2xl">
                <img src={drinks1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Signature Drink" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-xl font-serif text-white uppercase tracking-widest">Crafted Spirits</h3>
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col gap-4 h-[400px] md:h-auto">
                <div className="flex-1 relative overflow-hidden group rounded-2xl">
                  <img src={barLife2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vibe" />
                </div>
                <div className="flex-1 relative overflow-hidden group rounded-2xl">
                  <img src={drinks2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cheers" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedMenu />
        <Ambience />
        <Testimonials />
        
        {/* Call to Action */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-[1.1] tracking-tighter">
              READY FOR THE <br className="hidden md:block"/> <span className="italic">EXPERIENCE?</span>
            </h2>
            <p className="text-black/80 mb-10 max-w-xl mx-auto font-medium text-lg">
              Join us for the finest cocktails and live music in town. Tables are filling up fast for the weekend.
            </p>
            <Link href="/contact">
              <Button size="xl" className="bg-black text-white hover:bg-zinc-800 rounded-none px-12 py-8 text-lg uppercase tracking-[0.2em] font-bold h-auto min-h-16">
                Reserve Your Table
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#050505] py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center md:text-left">
              <div className="space-y-8 lg:col-span-1">
                <h3 className="text-3xl font-serif text-white tracking-tighter">GROOVE<span className="text-primary">.</span></h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  A premium dining and nightlife destination. Experience the rhythm of taste in an atmosphere designed for connection.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 group">
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 group">
                    <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Navigation</h4>
                <div className="flex flex-col gap-4">
                  {['Home', 'Menu', 'Gallery', 'Contact'].map((item) => (
                    <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                      <a className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide">{item}</a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Visit Us</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 justify-center md:justify-start group">
                    <Phone size={18} className="text-primary mt-1 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Call Us</span>
                      <span className="text-white font-light">+66 12 345 6789</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-center md:justify-start group">
                    <MapPin size={18} className="text-primary mt-1 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</span>
                      <span className="text-white font-light leading-relaxed">123 Groove Street, <br/> City Center, Bangkok</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Newsletter</h4>
                <p className="text-white/40 text-sm font-light">Stay updated with our latest events and exclusive promotions.</p>
                <div className="flex flex-col gap-4">
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-white/[0.03] border border-white/10 px-6 py-4 rounded-none text-white w-full focus:outline-none focus:border-primary/50 transition-all font-light placeholder:text-white/20"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-focus-within:w-full transition-all duration-700" />
                  </div>
                  <Button className="rounded-none bg-primary text-black hover:bg-white w-full font-bold uppercase tracking-widest py-6 h-auto transition-all duration-500">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium">
                © 2024 Groove Bar & Restaurant. All rights reserved.
              </div>
              <div className="flex gap-8 text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">
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
