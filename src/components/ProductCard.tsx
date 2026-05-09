import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/src/constants';
import { cn } from '@/src/lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-white px-3 py-1 text-[8px] uppercase tracking-widest font-bold border border-brand-ink/5">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-brand-rose text-white px-3 py-1 text-[8px] uppercase tracking-widest font-bold">
            Best Seller
          </span>
        )}
      </div>

      {/* Wishlist Toggle */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Heart size={16} strokeWidth={1.5} className="text-brand-ink" />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-blush">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
          )}
        />
        <img 
          src={product.hoverImage} 
          alt={`${product.name} lifestyle`}
          referrerPolicy="no-referrer"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 translate-y-full group-hover:translate-y-0">
          <button className="w-full bg-brand-ink text-white py-3 text-[10px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-brand-mocha transition-colors">
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">
          {product.category}
        </p>
        <Link 
          to={`/product/${product.id}`}
          className="text-lg font-serif hover:italic transition-all duration-300"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-center gap-4 mt-2">
          <p className="text-sm font-medium">${product.price}</p>
          <div className="flex items-center gap-1">
            <Star size={12} fill="currentColor" className="text-brand-rose" />
            <span className="text-[10px] text-brand-ink/60">{product.rating} ({product.reviews})</span>
          </div>
        </div>

        {/* Shade Previews if available */}
        {product.shades && (
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {product.shades.slice(0, 4).map((shade, i) => (
              <div 
                key={shade} 
                className={cn(
                  "w-3 h-3 rounded-full border border-brand-ink/10",
                  i === 0 ? "bg-[#D9B3A8]" : i === 1 ? "bg-[#F5E6E0]" : i === 2 ? "bg-[#8C736A]" : "bg-[#FDFBF7]"
                )}
                title={shade}
              />
            ))}
            {product.shades.length > 4 && (
              <span className="text-[8px] text-brand-ink/40">+{product.shades.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
