import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import logoImg from "@assets/IMG-20260215-WA0021_1771098427017.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled || isOpen
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-serif font-bold tracking-tighter text-white flex items-center gap-2">
            <span className="text-primary">GROOVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location === link.href ? "text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a
              className="px-6 py-2 bg-primary text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              Book Table
            </a>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-3xl font-serif text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <div className="flex gap-6 mt-8">
                <Instagram className="text-white/60 hover:text-primary transition-colors" />
                <Facebook className="text-white/60 hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
