import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white">Contact Us</h1>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Have a question or want to make a reservation? Reach out to us directly or fill out the form.
              We look forward to hosting you.
            </p>

            <div className="space-y-6 pt-8">
              <ContactItem icon={Phone} title="Phone" content="+66 12 345 6789" />
              <ContactItem icon={MapPin} title="Address" content="123 Groove Street, City Center, Thailand" />
              <ContactItem icon={Mail} title="Email" content="reservations@groovebar.com" />
              <ContactItem icon={Clock} title="Opening Hours" content="Daily: 5:00 PM - 2:00 AM" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border border-white/10 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-white/50">Name</label>
                  <Input className="bg-white/5 border-white/10 text-white focus:border-primary" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-white/50">Phone</label>
                  <Input className="bg-white/5 border-white/10 text-white focus:border-primary" placeholder="+66..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-white/50">Email</label>
                <Input type="email" className="bg-white/5 border-white/10 text-white focus:border-primary" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-white/50">Message</label>
                <Textarea className="bg-white/5 border-white/10 text-white focus:border-primary h-32" placeholder="I would like to book a table for..." />
              </div>
              <Button size="lg" className="w-full bg-primary text-black hover:bg-white text-sm uppercase tracking-widest font-bold h-12">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <p className="text-white/60">{content}</p>
      </div>
    </div>
  );
}
