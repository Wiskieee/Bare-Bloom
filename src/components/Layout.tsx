import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart, Instagram, Twitter, Facebook, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const location = useLocation();

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateCart();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
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
              type="button"
              onClick={() => {
                updateCart();
                setIsCartOpen(true);
              }}
              className="relative text-brand-ink/70 hover:text-brand-ink transition-colors cursor-pointer"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-brand-rose text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

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

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/30 z-[80]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[90] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-brand-ink/10 flex items-center justify-between">
                <h2 className="text-2xl font-serif">Your Bag</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <ShoppingBag size={48} className="text-brand-ink/20 mb-4" />
                    <p className="text-sm text-brand-ink/60">Your bag is empty.</p>

                    <Link
                      to="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-6 py-3 rounded-full bg-brand-ink text-white text-[10px] uppercase tracking-widest font-bold"
                    >
                      Shop Now
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-brand-ink/5 pb-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover bg-brand-blush"
                        />

                        <div className="flex-1">
                          <div className="flex justify-between gap-3">
                            <div>
                              <h3 className="text-sm font-bold">{item.name}</h3>
                              <p className="text-[11px] text-brand-ink/50">{item.category}</p>
                              {item.selectedShade && (
                                <p className="text-[11px] text-brand-ink/50">Shade: {item.selectedShade}</p>
                              )}
                              <p className="text-[11px] text-brand-ink/50">Qty: {item.quantity}</p>
                            </div>

                            <button onClick={() => removeFromCart(index)} className="text-brand-ink/40 hover:text-red-500">
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <p className="mt-2 text-sm font-serif">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-brand-ink/10 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-ink/60">Subtotal</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full py-4 rounded-full bg-brand-ink text-white text-[10px] uppercase tracking-widest font-bold">
                    Checkout
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full py-3 rounded-full border border-brand-ink/10 text-[10px] uppercase tracking-widest font-bold"
                  >
                    Clear Bag
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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