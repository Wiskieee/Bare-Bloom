import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, Heart, Share2, Plus, Minus, Check, 
  Truck, ShieldCheck, Leaf, Sparkles, ChevronRight,
  Play
} from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { ProductCard } from '@/src/components/ProductCard';
import { cn } from '@/src/lib/utils';
import { BUTTON_STYLES, GLASS_EFFECT } from '@/src/styles';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedShade, setSelectedShade] = useState(product.shades?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdded, setIsAdded] = useState(false);

const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProduct = cart.find(
    (item: any) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
      selectedShade,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  setIsAdded(true);

  setTimeout(() => {
    setIsAdded(false);
  }, 2000);
};

  return (
    <div className="pt-[100px] pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-brand-ink/40">
        <Link to="/" className="hover:text-brand-ink">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
        <ChevronRight size={10} />
        <Link to={`/shop?category=${product.category}`} className="hover:text-brand-ink">{product.category}</Link>
        <ChevronRight size={10} />
        <span className="text-brand-ink">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] overflow-hidden bg-brand-blush rounded-2xl relative group"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Virtual Try On Placeholder */}
            <button className={cn("absolute bottom-6 left-6 px-4 py-2 rounded-full flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold", GLASS_EFFECT)}>
              <Play size={12} fill="currentColor" />
              Virtual Try On
            </button>
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.hoverImage, ...Array(2)].map((img, i) => (
              <div 
                key={i} 
                className="aspect-square rounded-xl overflow-hidden bg-brand-blush cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-brand-rose"
              >
                <img 
                  src={img || "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=300"} 
                  alt="Product view"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="space-y-6 pb-8 border-b border-brand-ink/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-rose">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-brand-blush rounded-full transition-colors">
                  <Share2 size={18} strokeWidth={1.5} />
                </button>
                <button className="p-2 hover:bg-brand-blush rounded-full transition-colors">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#D9B3A8" : "none"} className="text-brand-rose" />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-brand-ink/40 text-sm">({product.reviews} Reviews)</span>
            </div>

            <p className="text-2xl font-serif">${product.price}</p>
            <p className="text-brand-ink/70 leading-relaxed max-w-lg">
              {product.description}
            </p>
          </div>

          {/* Shade Selector */}
          {product.shades && (
            <div className="py-8 space-y-4 border-b border-brand-ink/5">
              <div className="flex justify-between items-center">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Select Shade:</h4>
                <p className="text-xs text-brand-rose italic underline cursor-pointer">Find your perfect match</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.shades.map((shade) => (
                  <button
                    key={shade}
                    onClick={() => setSelectedShade(shade)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 transition-all p-0.5",
                      selectedShade === shade ? "border-brand-ink scale-110 shadow-lg" : "border-transparent hover:border-brand-ink/20"
                    )}
                  >
                    <div className={cn(
                      "w-full h-full rounded-full bg-brand-blush border border-brand-ink/5",
                      shade === "Rose" ? "bg-[#D9B3A8]" : shade === "Honey" ? "bg-[#F5E6E0]" : shade === "Berry" ? "bg-[#8C736A]" : "bg-[#FDFBF7]"
                    )} />
                  </button>
                ))}
              </div>
              <p className="text-xs font-medium text-brand-ink/60">Selected: {selectedShade}</p>
            </div>
          )}

          {/* Purchase Actions */}
          <div className="py-8 space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-brand-ink/10 rounded-full px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-brand-rose transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-brand-rose transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={cn(
                  BUTTON_STYLES.primary,
                  "flex-1 rounded-full",
                  isAdded && "bg-green-600 hover:bg-green-700"
                )}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.span 
                      key="added"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Check size={16} /> Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="default"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      Add to Bag — ${product.price * quantity}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Trust Badges & Delivery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-brand-cream border border-brand-ink/5 rounded-2xl">
                <Truck size={18} className="text-brand-ink/40 mt-1" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest">Free Shipping</p>
                  <p className="text-[10px] text-brand-ink/60">On all orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand-cream border border-brand-ink/5 rounded-2xl">
                <ShieldCheck size={18} className="text-brand-ink/40 mt-1" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest">90-Day Returns</p>
                  <p className="text-[10px] text-brand-ink/60">Risk-free beauty guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="mt-auto space-y-2">
            {[
              { id: 'description', label: 'Details', icon: <Sparkles size={16} /> },
              { id: 'how-to-use', label: 'How to use', icon: <Play size={16} /> },
              { id: 'ingredients', label: 'Ingredients', icon: <Leaf size={16} /> }
            ].map((tab) => (
              <div key={tab.id} className="border-b border-brand-ink/5 overflow-hidden">
                <button 
                  onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  className="w-full py-4 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-brand-ink/40 group-hover:text-brand-rose transition-colors">{tab.icon}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{tab.label}</span>
                  </div>
                  <Plus 
                    size={16} 
                    className={cn(
                      "transition-transform duration-500",
                      activeTab === tab.id ? "rotate-45" : "rotate-0"
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {activeTab === tab.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pb-6 text-sm text-brand-ink/60 leading-relaxed"
                    >
                      {tab.id === 'ingredients' ? (
                        <p>Aqua (Water), Squalane, Glycerin, Jojoba Oil, Rosehip Seed Extract, Peptides, Hyaluronic Acid, Vitamin E. Free from parabens, sulfates, and synthetic fragrances.</p>
                      ) : tab.id === 'how-to-use' ? (
                        <p>Apply 2-3 drops to clean skin. Gently massage in upward motions until fully absorbed. Can be used alone or under your favorite moisturizer for an extra boost of radiance.</p>
                      ) : (
                        <p>{product.description} Built with clean, skin-loving ingredients to ensure long-term skin health while providing immediate cosmetic benefits.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <section className="mt-32 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif italic">Complete the Look</h2>
          <Link to="/shop" className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-ink pb-1">Shop Collection</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).map(p => (
            <div key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
