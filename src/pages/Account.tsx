import React from 'react';
import { motion } from 'motion/react';
import { Package, Heart, Settings, User, LogOut, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES } from '@/src/styles';
import { cn } from '@/src/lib/utils';

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  if (!isLoggedIn) {
    return (
      <div className="pt-[160px] pb-24 max-w-sm mx-auto px-6 text-center space-y-8">
        <h1 className="text-4xl font-serif">Welcome Back.</h1>
        <p className="text-brand-ink/60 text-sm">Sign in to your Bloom Club account to track orders and see your favorites.</p>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full bg-brand-cream border border-brand-ink/10 px-6 py-4 rounded-full outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-brand-cream border border-brand-ink/10 px-6 py-4 rounded-full outline-none" />
          <button className={cn(BUTTON_STYLES.primary, "w-full rounded-full")} onClick={() => setIsLoggedIn(true)}>Log In</button>
        </div>
        <p className="text-xs text-brand-ink/40">Don't have an account? <span className="text-brand-rose underline cursor-pointer">Join the Club</span></p>
      </div>
    );
  }

  return (
    <div className="pt-[160px] pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-blush flex items-center justify-center text-brand-rose text-xl font-serif">
              A
            </div>
            <div>
              <p className="text-lg font-serif">Ariana Bloom</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">Member since 2024</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              { label: 'Order History', icon: <Package size={18} />, active: true },
              { label: 'Wishlist', icon: <Heart size={18} /> },
              { label: 'Saved Addresses', icon: <ShoppingBag size={18} /> },
              { label: 'Account Settings', icon: <Settings size={18} /> },
              { label: 'Beauty Profile', icon: <User size={18} /> }
            ].map((item) => (
              <button 
                key={item.label}
                className={cn(
                  "flex items-center justify-between w-full p-4 rounded-2xl transition-all group",
                  item.active ? "bg-white shadow-xl shadow-brand-rose/5" : "hover:bg-brand-blush/50"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className={cn("transition-colors", item.active ? "text-brand-rose" : "text-brand-ink/40 group-hover:text-brand-ink")}>
                    {item.icon}
                  </span>
                  <span className={cn("text-xs uppercase tracking-widest font-bold", item.active ? "text-brand-ink" : "text-brand-ink/60 group-hover:text-brand-ink")}>
                    {item.label}
                  </span>
                </div>
                <ChevronRight size={14} className="text-brand-ink/20 group-hover:text-brand-ink transition-all" />
              </button>
            ))}
            <button className="flex items-center gap-4 w-full p-4 rounded-2xl hover:bg-red-50 text-red-400 group transition-all mt-8">
               <LogOut size={18} />
               <span className="text-xs uppercase tracking-widest font-bold">Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-brand-ink/5">
            <h2 className="text-3xl font-serif italic mb-8">Recent Orders</h2>
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-brand-cream rounded-3xl gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-brand-blush overflow-hidden">
                      <img 
                        src={i === 1 ? "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=300" : "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=300"} 
                        alt="Order"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest">Order #BB-90{i}2</h4>
                      <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest mt-1">Placed on May {i + 1}, 2024</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-green-50 text-green-600 text-[8px] uppercase tracking-widest font-bold rounded-full">
                        {i === 1 ? 'Delivered' : 'In Transit'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-lg font-serif">$62.00</p>
                    <button className="text-[10px] uppercase tracking-widest font-bold px-6 py-3 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-white transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-rose text-white p-12 rounded-[40px] space-y-4">
              <Sparkles size={32} />
              <h3 className="text-2xl font-serif italic">The Bloom Rewards</h3>
              <p className="text-white/80 text-sm">You have 450 Bloom Points available to redeem.</p>
              <button className="text-[10px] uppercase tracking-widest font-bold underline">Redeem Now</button>
            </div>
            <div className="bg-brand-blush p-12 rounded-[40px] space-y-4">
              <Heart className="text-brand-rose" size={32} />
              <h3 className="text-2xl font-serif italic">Your Beauty Profile</h3>
              <p className="text-brand-ink/60 text-sm">Help us personalize your experience by completing your profile.</p>
              <button className="text-[10px] uppercase tracking-widest font-bold underline">Complete Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
