import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image, Maximize2, X, ChevronLeft, ChevronRight, Grid, Filter, Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "mining" | "processing" | "packaging" | "products";
  categoryLabel: string;
  description: string;
  url: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "quarry-extraction",
    title: "High-Purity Quarry Extraction",
    category: "mining",
    categoryLabel: "Sourcing & Mining",
    description: "Selective extraction of pristine crystalline calcitic marble from our premium mining assets.",
    url: "https://lh3.googleusercontent.com/d/13yOjqIfm-CdzyBbU-cia-HF6HkcfxCOo"
  },
  {
    id: "grinding-control",
    title: "Ultrafine Grinding & Milling Control",
    category: "processing",
    categoryLabel: "Milling & Processing",
    description: "State-of-the-art automated vertical roller mills achieving precise particle size distribution.",
    url: "https://lh3.googleusercontent.com/d/1m4OFycZpn4Eug34NOHEUpwwRBxnGFHZP"
  },
  {
    id: "processing-unit",
    title: "Advanced Processing Facility",
    category: "processing",
    categoryLabel: "Milling & Processing",
    description: "Modern control consoles and high-capacity micro-grinding lines running continuously.",
    url: "https://lh3.googleusercontent.com/d/1MeIbaXiFaA3XTe6J3X8ngpItr89UPGIm"
  },
  {
    id: "packaging-stock",
    title: "Automated Packaging Line & Warehouse",
    category: "packaging",
    categoryLabel: "Packaging & Logistics",
    description: "Automated packaging systems with built-in moisture protection barrier liners.",
    url: "https://lh3.googleusercontent.com/d/1dnx_WgI_bu-NbpEcQ8AzkOSGVlJ_5QxK"
  },
  {
    id: "calcium-carbonate-powder",
    title: "Industrial Calcium Carbonate Powder",
    category: "products",
    categoryLabel: "Finished Products",
    description: "Pure white micronized mineral powder utilized globally for compounding and high-end coatings.",
    url: "https://lh3.googleusercontent.com/d/15cPGXC3BUAWXtBX7HjaF5PGm9HoZr7G_"
  },
  {
    id: "terrazzo-marble-chips",
    title: "Premium Crushed Marble Chips",
    category: "products",
    categoryLabel: "Finished Products",
    description: "Supreme whiteness pre-sorted marble fractions for architectural landscaping and terrazzo floorings.",
    url: "https://lh3.googleusercontent.com/d/1z2iHy-q20jeYskcwc_vatuTrUvaraTND"
  }
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex === 0 ? GALLERY_ITEMS.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(prevIndex);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const nextIndex = selectedImageIndex === GALLERY_ITEMS.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(nextIndex);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-red-700 selection:text-white">
      {/* Banner Section - Full Width */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-red-600 block"></span>
              <span className="text-red-500 font-black text-sm tracking-[0.3em] uppercase">Visual Directory</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold uppercase italic tracking-tighter mb-6 text-white"
            >
              INDUSTRIAL <span className="text-red-600">GALLERY</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
            >
              Explore our comprehensive assets, from raw limestone mining reserves to premium micro-grinding rollers, automated hygiene-controlled bagging facilities, and finished mineral powders.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter and Grid System - Full Width */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="w-full px-6 md:px-12 lg:px-16">
          {/* Masonry-like Grid - No Fixed Max Width, 100% wrapper span */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {GALLERY_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  {/* Image Container */}
                  <div 
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-zoom-in"
                  >
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Label Overlay */}
                    <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full text-white">
                      {item.categoryLabel}
                    </span>

                    {/* Expand icon overlay */}
                    <div className="absolute bottom-4 right-4 p-3 bg-red-700 text-white rounded-full translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Metadata Card Footer */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 bg-slate-950/98 z-[999] flex flex-col justify-between items-center p-4 md:p-8 select-none"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white relative z-10 max-w-full">
              <div className="text-left">
                <span className="text-red-500 font-extrabold text-[10px] tracking-[0.3em] uppercase block mb-1">
                  {GALLERY_ITEMS[selectedImageIndex].categoryLabel}
                </span>
                <h4 className="text-lg md:text-2xl font-black uppercase tracking-tight">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h4>
              </div>

              <button 
                onClick={() => setSelectedImageIndex(null)}
                className="p-3 bg-slate-900/80 border border-slate-700/50 hover:bg-red-700 hover:border-red-600 rounded-full text-white transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage with Prev / Next */}
            <div className="relative flex-grow w-full flex items-center justify-center max-h-[75vh]">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 p-4 rounded-full bg-slate-900/60 border border-slate-800 hover:bg-slate-800 text-white cursor-pointer z-10 transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img
                key={selectedImageIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_ITEMS[selectedImageIndex].url}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 p-4 rounded-full bg-slate-900/60 border border-slate-800 hover:bg-slate-800 text-white cursor-pointer z-10 transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full text-center text-slate-400 text-sm max-w-xl pb-4">
              <p className="font-medium leading-relaxed">
                {GALLERY_ITEMS[selectedImageIndex].description}
              </p>
              <span className="text-[10px] font-black text-slate-600 block mt-3 uppercase tracking-widest">
                Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
