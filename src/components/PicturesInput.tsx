import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, X, Check, Image as ImageIcon, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { BUTTON_STYLES, GLASS_EFFECT } from '@/src/styles';

export const PicturesInput = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setUploadComplete(false);
  };

  const handleUpload = () => {
    if (selectedImages.length === 0) return;
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      // Reset after a while
      setTimeout(() => setUploadComplete(false), 3000);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-[40px] border border-brand-ink/5 shadow-2xl shadow-brand-rose/5">
      <div className="text-center mb-10 space-y-3">
        <div className="flex justify-center">
          <span className="bg-brand-blush/50 text-brand-rose px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
            <Sparkles size={12} />
            Community Bloom
          </span>
        </div>
        <h2 className="text-3xl font-serif italic">Share Your Radiance</h2>
        <p className="text-sm text-brand-ink/60">Upload your Bare & Bloom look and join our community gallery.</p>
      </div>

      <div 
        className={cn(
          "relative border-2 border-dashed rounded-[32px] p-12 transition-all duration-300 flex flex-col items-center justify-center gap-4",
          isDragging ? "border-brand-rose bg-brand-rose/5 scale-[0.98]" : "border-brand-ink/10 hover:border-brand-rose/40 bg-brand-cream/30",
          selectedImages.length > 0 ? "pb-24" : ""
        )}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const files = e.dataTransfer.files;
          if (files) {
            Array.from(files).forEach(file => {
              const reader = new FileReader();
              reader.onloadend = () => {
                setSelectedImages(prev => [...prev, reader.result as string]);
              };
              reader.readAsDataURL(file);
            });
          }
        }}
      >
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-rose shadow-sm">
          <Upload size={24} />
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="text-sm font-bold uppercase tracking-widest hover:text-brand-rose transition-colors"
          >
            Click to upload
          </button>
          <p className="text-xs text-brand-ink/40 mt-1">or drag and drop your photos here</p>
        </div>

        {/* Selected Images Preview Overlay */}
        <AnimatePresence>
          {selectedImages.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-xl border border-brand-ink/5 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">
                  {selectedImages.length} Image{selectedImages.length > 1 ? 's' : ''} Selected
                </p>
                <div className="flex gap-4">
                   <button 
                    onClick={handleUpload}
                    disabled={isUploading || uploadComplete}
                    className={cn(
                      "text-[10px] uppercase tracking-widest font-bold px-6 py-2 rounded-full transition-all",
                      uploadComplete 
                        ? "bg-green-500 text-white" 
                        : isUploading 
                          ? "bg-brand-ink/10 text-brand-ink animate-pulse" 
                          : "bg-brand-ink text-white hover:bg-brand-rose"
                    )}
                  >
                    {uploadComplete ? (
                      <span className="flex items-center gap-2"><Check size={12} /> Bloom Shared</span>
                    ) : isUploading ? (
                      "Sharing..."
                    ) : (
                      "Share My Look"
                    )}
                  </button>
                  <button 
                    onClick={() => setSelectedImages([])}
                    className="text-[10px] uppercase tracking-widest font-bold text-red-400 hover:text-red-500"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {selectedImages.map((src, index) => (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden group"
                  >
                    <img src={src} className="w-full h-full object-cover" alt="Selected Preview" />
                    <button 
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-brand-ink/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={10} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square bg-brand-cream rounded-2xl flex items-center justify-center">
            <ImageIcon size={24} className="text-brand-ink/20" />
          </div>
        ))}
      </div>
    </div>
  );
};
