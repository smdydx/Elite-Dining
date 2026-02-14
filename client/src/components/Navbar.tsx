import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          scrolled || isOpen
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-serif font-bold tracking-tighter text-white flex items-center gap-2 group">
              <span className="group-hover:text-primary transition-colors duration-500">GROOVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group py-2 ${
                    location === link.href ? "text-primary" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                size="sm" 
                className="bg-primary text-black font-bold text-[10px] uppercase tracking-widest hover:bg-white rounded-none px-6 transition-all duration-500"
              >
                Book Table
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-black md:hidden overflow-hidden"
          >
            {/* Background Grain/Noise or Gradient */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col h-full px-8 pt-32 pb-12 relative z-10">
              <div className="flex flex-col gap-6">
                <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 opacity-50">Navigation</span>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link href={link.href}>
                      <a
                        className={`text-5xl font-serif lowercase italic flex items-center gap-4 group ${
                          location === link.href ? "text-primary" : "text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm not-italic font-mono opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                        {link.name}
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5 flex justify-between items-end">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Socials</p>
                  <div className="flex gap-6">
                    <a href="#" className="text-white/60 hover:text-primary transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-white/60 hover:text-primary transition-colors"><Facebook size={24} /></a>
                  </div>
                </div>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="bg-primary text-black font-bold uppercase tracking-widest rounded-none px-8 py-6 h-auto">
                    Reserve
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
