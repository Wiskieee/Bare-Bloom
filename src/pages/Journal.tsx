import React from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES } from '@/src/styles';
import { cn } from '@/src/lib/utils';

export default function Journal() {
  const posts = [
    {
      title: "The Ultimate Guide to 'No-Makeup' Makeup",
      excerpt: "Discover the secrets to achieving a flawless, skin-first look that lasts all day.",
      category: "Tutorial",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800",
      isFeatured: true
    },
    {
      title: "Why Squalane is Your Skin's New Best Friend",
      excerpt: "Unpacking the science behind our favorite hydrating ingredient and how it transforms dewy skin.",
      category: "Skin Science",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Morning Rituals for a Radiance that Lasts",
      excerpt: "The 3-step routine our founder swears by for immediate and long-term glow.",
      category: "Self Care",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1620917670397-dc71bce6d01d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Shade Matching 101: Finding Your Undertone",
      excerpt: "Cold? Warm? Neutral? Here's how to finally identify your true undertone for the perfect match.",
      category: "Education",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1586776193466-85df5c0d13b2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-[160px] pb-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-rose">The Bare Journal</span>
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Editorial & <span className="italic font-light">Education.</span></h1>
        </div>
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
           {['All', 'Tutorials', 'Skincare', 'Philosophy'].map(cat => (
             <button key={cat} className="text-brand-ink/40 hover:text-brand-ink transition-colors">{cat}</button>
           ))}
           <Search size={18} className="text-brand-ink/40" />
        </div>
      </div>

      {/* Featured Post */}
      <section className="mb-24">
        {posts.filter(p => p.isFeatured).map(post => (
          <motion.div 
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[60px] overflow-hidden"
          >
            <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
               <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 lg:p-24 space-y-8">
              <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-rose">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-rose/40" />
                <span>{post.readTime} Read</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight group-hover:italic transition-all duration-500">
                {post.title}
              </h2>
              <p className="text-lg text-brand-ink/60 leading-relaxed">
                {post.excerpt}
              </p>
              <button className={cn(BUTTON_STYLES.primary, "rounded-full group")}>
                <span className="flex items-center gap-3">
                  Read Full Article
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Grid Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {posts.filter(p => !p.isFeatured).map((post, i) => (
          <motion.article 
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-8">
               <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-bold text-brand-ink/40">
                <span>{post.category}</span>
                <span className="flex items-center gap-1.5"><Clock size={10} /> {post.readTime}</span>
              </div>
              <h3 className="text-2xl font-serif group-hover:italic transition-all">{post.title}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-brand-rose transition-colors">
                Read Article <ChevronRight size={12} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
