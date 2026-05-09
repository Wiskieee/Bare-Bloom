import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0);
    setCartCount(total);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateCartCount();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-brand-ink/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          className="lg:hidden text-brand-ink"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-ink/70 hover:text-brand-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link 
          to="/" 
          className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif tracking-tighter"
        >
          Bare <span className="italic font-light text-brand-rose">&</span> Bloom
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden md:block text-brand-ink/70 hover:text-brand-ink transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button className="hidden md:block text-brand-ink/70 hover:text-brand-ink transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </button>

          <Link to="/account" className="text-brand-ink/70 hover:text-brand-ink transition-colors">
            <User size={20} strokeWidth={1.5} />
          </Link>

          <button
            onClick={updateCartCount}
            className="relative text-brand-ink/70 hover:text-brand-ink transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-brand-rose text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <nav className="mt-20 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-brand-ink"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-brand-ink/10 flex gap-6">
              <Instagram size={20} />
              <Twitter size={20} />
              <Facebook size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-ink/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          <div className="space-y-6">
            <h3 className="text-xl font-serif">Bare & Bloom</h3>
            <p className="text-sm text-brand-ink/60 leading-relaxed max-w-xs">
              Minimalist beauty tools designed to enhance your natural luminance. 
              Clean, vegan, and mindfully crafted.
            </p>
            <div className="flex gap-4">
              <Instagram size={18} className="text-brand-ink/60 hover:text-brand-ink cursor-pointer" />
              <Twitter size={18} className="text-brand-ink/60 hover:text-brand-ink cursor-pointer" />
              <Facebook size={18} className="text-brand-ink/60 hover:text-brand-ink cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              {['All Products', 'Lip Collection', 'Skin Tint', 'Blush', 'Gifts'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-ink/60 hover:text-brand-ink transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Customer Care</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'FAQ', 'Track Order', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-brand-ink/60 hover:text-brand-ink transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-brand-ink/60 mb-6">Join the Bloom Club for 10% off your first order.</p>
            <div className="flex border-b border-brand-ink/20 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full py-2 placeholder:text-brand-ink/40"
              />
              <button className="text-[10px] uppercase tracking-tighter font-bold ml-4">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-brand-ink/40">© 2024 Bare & Bloom. All rights reserved.</p>
          <div className="flex gap-6 grayscale opacity-30">
            <span className="text-[10px] font-bold">VISA</span>
            <span className="text-[10px] font-bold">AMEX</span>
            <span className="text-[10px] font-bold">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};