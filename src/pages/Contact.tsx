import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowRight, MessageCircle } from 'lucide-react';
import { BUTTON_STYLES } from '@/src/styles';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  return (
    <div className="pt-[160px] pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Info Side */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Let's <span className="italic font-light">Bloom Together.</span></h1>
            <p className="text-lg text-brand-ink/60 leading-relaxed max-w-md">
              Have a question about your order or need help finding the right shade? Our beauty experts are here for you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-brand-blush rounded-2xl text-brand-rose transition-transform group-hover:scale-110">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Email Us</h4>
                <p className="text-brand-ink/60">hello@bareandbloom.com</p>
                <p className="text-[10px] text-brand-ink/40 mt-2 italic">We usually reply within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-brand-blush rounded-2xl text-brand-rose transition-transform group-hover:scale-110">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Call Us</h4>
                <p className="text-brand-ink/60">+1 (888) 456-7890</p>
                <p className="text-[10px] text-brand-ink/40 mt-2 italic">Mon — Fri, 9am — 6pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-brand-blush rounded-2xl text-brand-rose transition-transform group-hover:scale-110">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Live Chat</h4>
                <p className="text-brand-ink/60">Start a conversation</p>
                <p className="text-[10px] text-brand-ink/40 mt-2 italic">Available for instant help.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-brand-ink/5">
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Stay Connected</h4>
            <div className="flex gap-6">
              <Instagram size={20} className="text-brand-ink/40 hover:text-brand-ink transition-colors cursor-pointer" />
              <Twitter size={20} className="text-brand-ink/40 hover:text-brand-ink transition-colors cursor-pointer" />
              <Facebook size={20} className="text-brand-ink/40 hover:text-brand-ink transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-brand-rose/5 space-y-8"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-4">First Name</label>
                <input type="text" placeholder="Ariana" className="w-full bg-brand-cream border border-transparent focus:border-brand-rose/20 px-6 py-4 rounded-full outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-4">Last Name</label>
                <input type="text" placeholder="Grande" className="w-full bg-brand-cream border border-transparent focus:border-brand-rose/20 px-6 py-4 rounded-full outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-4">Email Address</label>
              <input type="email" placeholder="ariana@cloud.com" className="w-full bg-brand-cream border border-transparent focus:border-brand-rose/20 px-6 py-4 rounded-full outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-4">How can we help?</label>
              <select className="w-full bg-brand-cream border border-transparent focus:border-brand-rose/20 px-6 py-4 rounded-full outline-none transition-all appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Order Status</option>
                <option>Shade Matching Help</option>
                <option>Returns & Exchanges</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-4">Message</label>
              <textarea rows={4} placeholder="Tell us more about your beauty journey..." className="w-full bg-brand-cream border border-transparent focus:border-brand-rose/20 px-6 py-6 rounded-[30px] outline-none transition-all resize-none"></textarea>
            </div>
            
            <button className={cn(BUTTON_STYLES.primary, "w-full rounded-full group py-5")}>
              <span className="flex items-center justify-center gap-3">
                Send Message
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
