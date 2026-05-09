import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import { ProductCard } from '@/src/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { BUTTON_STYLES } from '@/src/styles';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-[120px] pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight">The Collection</h1>
        <p className="text-brand-ink/60 max-w-lg mx-auto">
          Explore our range of minimalist beauty essentials designed to enhance your natural radiance.
        </p>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[80px] z-30 bg-brand-cream/80 backdrop-blur-md border-y border-brand-ink/5 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
            >
              <Filter size={14} />
              Filter
            </button>
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-medium transition-colors",
                  !selectedCategory ? "text-brand-ink border-b border-brand-ink" : "text-brand-ink/40 hover:text-brand-ink"
                )}
              >
                All
              </button>
              {CATEGORIES.slice(0, 4).map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-medium transition-colors",
                    selectedCategory === cat.name ? "text-brand-ink border-b border-brand-ink" : "text-brand-ink/40 hover:text-brand-ink"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 flex-1 max-w-md justify-end">
             <div className="relative hidden md:block w-full max-w-[200px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/40" />
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-brand-ink/10 pl-9 pr-4 py-2 rounded-full text-xs outline-none focus:border-brand-rose transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
              <span>Sort:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Drawer Placeholder for Mobile */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white border-b border-brand-ink/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Category</h4>
                <div className="flex flex-col gap-3">
                  {CATEGORIES.map(cat => (
                    <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        checked={selectedCategory === cat.name}
                        onChange={() => setSelectedCategory(cat.name)}
                        className="accent-brand-rose"
                      />
                      <span className="text-sm text-brand-ink/60 group-hover:text-brand-ink">{cat.name}</span>
                    </label>
                  ))}
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-[10px] text-brand-rose underline text-left mt-2"
                  >
                    Clear Category
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Finish</h4>
                <div className="flex flex-col gap-3">
                  {['Dewy', 'Satin', 'Matte', 'Sheer'].map(finish => (
                    <label key={finish} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-brand-rose" />
                      <span className="text-sm text-brand-ink/60 group-hover:text-brand-ink">{finish}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Price Range</h4>
                <div className="flex flex-col gap-3">
                  {['Under $25', '$25 - $50', '$50 - $100'].map(range => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-brand-rose" />
                      <span className="text-sm text-brand-ink/60 group-hover:text-brand-ink">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex flex-col justify-end">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className={cn(BUTTON_STYLES.primary, "w-full")}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Bar */}
      {(selectedCategory || searchQuery) && (
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Active:</span>
          {selectedCategory && (
            <span className="bg-brand-blush/50 px-3 py-1 rounded-full text-xs flex items-center gap-2">
              {selectedCategory}
              <button onClick={() => setSelectedCategory(null)}><X size={12} /></button>
            </span>
          )}
          {searchQuery && (
            <span className="bg-brand-blush/50 px-3 py-1 rounded-full text-xs flex items-center gap-2">
              "{searchQuery}"
              <button onClick={() => setSearchQuery("")}><X size={12} /></button>
            </span>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-6 border border-dashed border-brand-ink/10 rounded-3xl">
            <h3 className="text-2xl font-serif italic text-brand-ink/40">No products found for this search.</h3>
            <button 
              onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
              className="text-xs uppercase tracking-widest font-bold border-b border-brand-ink pb-1"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
