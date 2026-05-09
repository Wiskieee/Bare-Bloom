import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Sparkles, Shield, Leaf, Heart } from 'lucide-react';
import { ProductCard } from '@/src/components/ProductCard';
import { PicturesInput } from '@/src/components/PicturesInput';
import { PRODUCTS, CATEGORIES } from '@/src/constants';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

import { BUTTON_STYLES, GLASS_EFFECT } from '@/src/styles';

export default function Home() {
  return (
    <div className="pt-[100px]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden px-6 lg:px-12">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Beauty"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/80 via-brand-cream/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-brand-ink/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-ink/60">
                Luminance Reimagined
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Beauty That <br /> 
              <span className="italic font-light italic text-brand-rose">Feels Like You.</span>
            </h1>

            <p className="text-lg text-brand-ink/70 leading-relaxed max-w-md">
              Minimalist essentials crafted for your natural glow. Effortless morning routines, all-day confidence.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <Link to="/shop" className={BUTTON_STYLES.primary}>
                Shop Collection
              </Link>
              <Link to="/about" className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold">
                Our Story
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className={cn("absolute bottom-12 right-12 hidden lg:flex items-center gap-8 px-8 py-6 rounded-2xl", GLASS_EFFECT)}>
          <div className="text-center">
            <p className="text-2xl font-serif">15k+</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-ink/60">Loyal Bloomers</p>
          </div>
          <div className="w-px h-8 bg-brand-ink/10" />
          <div className="text-center">
            <p className="text-2xl font-serif">4.9/5</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-ink/60">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-rose">New Arrivals</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">The Best Sellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-brand-ink pb-1 hover:text-brand-rose hover:border-brand-rose transition-colors">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story / Philosophy */}
      <section className="bg-brand-blush/30 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[100px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1200" 
              alt="Model with Glow"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-rose/10 mix-blend-multiply" />
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-rose">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.1]">
                Simplicity is the <br /> <span className="italic font-light">Highest Sophistication.</span>
              </h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed">
                We believe that makeup should never hide who you are. Bare & Bloom was born from the idea that beauty is most profound when it's effortless. Our formulas are breathable, vegan, and designed to move with you, not mask you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <Sparkles className="text-brand-rose" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">Clean Beauty</h4>
                <p className="text-xs text-brand-ink/60">Sustainably sourced, non-toxic ingredients only.</p>
              </div>
              <div className="space-y-3">
                <Shield className="text-brand-rose" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">Cruelty Free</h4>
                <p className="text-xs text-brand-ink/60">Never tested on animals. 100% Vegan formulas.</p>
              </div>
              <div className="space-y-3">
                <Leaf className="text-brand-rose" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">Ethical</h4>
                <p className="text-xs text-brand-ink/60">Conscious packaging and responsible production.</p>
              </div>
              <div className="space-y-3">
                <Heart className="text-brand-rose" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">Inclusive</h4>
                <p className="text-xs text-brand-ink/60">Shades for every skin tone and every story.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/about" className={BUTTON_STYLES.secondary}>
                Meet the Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-16 underline decoration-brand-rose underline-offset-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
                <h3 className="text-2xl font-serif italic">{cat.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
              <Link to={`/shop?category=${cat.name}`} className="absolute inset-0 z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#D9B3A8" className="text-brand-rose" />)}
          </div>
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed italic text-brand-ink mb-12">
            "Finally, a brand that gets it. The Skin Tint is like a second skin—breathable, radiant, and exactly the kind of 'no-makeup' makeup I've been searching for."
          </blockquote>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-1 font-sans">Elena Rosales</p>
            <p className="text-[10px] text-brand-ink/60 uppercase tracking-widest font-sans">Verified Bloom Club Member</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[60px] overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1620917670397-dc71bce6d01d?auto=format&fit=crop&q=80&w=1500" 
            alt="Newsletter Glow"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-rose/60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-brand-cream/80" />
          
          <div className="relative z-10 py-20 px-8 text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-ink">Stay Radiant.</h2>
            <p className="text-brand-ink/70">
              Join the Bloom Club and get exclusive early access to drops, beauty tutorials, and 10% off your first purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="yours@email.com" 
                className="flex-1 bg-white border border-brand-ink/10 px-6 py-4 rounded-full outline-none focus:border-brand-rose transition-colors"
              />
              <button className={cn(BUTTON_STYLES.primary, "rounded-full")}>
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest">
              By subscribing, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Pictures Input / Community Section */}
      <section className="py-24 bg-brand-blush/20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-serif italic mb-4">The Bloom Community</h2>
          <p className="text-brand-ink/60">Real people, real glow. Show us how you bloom.</p>
        </div>
        <PicturesInput />
      </section>
    </div>
  );
}
