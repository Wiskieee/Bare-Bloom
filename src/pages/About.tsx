import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Leaf, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES } from '@/src/styles';

export default function About() {
  return (
    <div className="pt-[100px]">
      {/* Editorial Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=2000" 
            alt="Skin Detail"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-cream/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-rose"
          >
            Since 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif tracking-tighter"
          >
            Rooted in <br /> <span className="italic font-light">Luminance.</span>
          </motion.h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif italic">Our Humble Beginning</h2>
          <div className="space-y-6 text-brand-ink/70 leading-relaxed">
            <p>
              Bare & Bloom started in a small sun-drenched studio with a simple goal: to create makeup that felt like skincare. No masks, no heavy textures, just breathable radiance.
            </p>
            <p>
              We noticed a gap in the beauty world between 'luxury' and 'logic'. Our founder, Elena, wanted products that were sophisticated enough for the runway but simple enough for a 5-minute morning routine.
            </p>
            <p>
              Today, we continue that mission by obsessing over every ingredient and every shade, ensuring that when you wear Bare & Bloom, you simply feel more like yourself.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden rotate-2 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1586776193466-85df5c0d13b2?auto=format&fit=crop&q=80&w=1200" 
            alt="Bare & Bloom Founder"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif italic underline decoration-brand-rose underline-offset-8">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
               { icon: <Sparkles />, title: "Skin First", desc: "Formulas that prioritize skin health and hydration above everything." },
               { icon: <Leaf />, title: "Mindful Ingredients", desc: "Non-toxic, vegan, and ethically sourced components from global partners." },
               { icon: <Heart />, title: "Inclusivity", desc: "Reflecting the real world with shades that celebrate every skin tone." },
               { icon: <Shield />, title: "Transparency", desc: "Complete honesty about our supply chain and formulation process." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-rose">
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{value.title}</h3>
                <p className="text-xs text-brand-ink/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-rose text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif italic">Ready to bloom?</h2>
          <p className="opacity-80">Discover your new go-to routine today.</p>
          <div className="pt-4">
             <Link to="/shop" className="inline-block px-12 py-4 bg-white text-brand-rose rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-cream transition-all duration-300">
               Explore Collection
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
