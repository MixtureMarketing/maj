"use client";

import React from "react";
import { Info, LayoutGrid, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function KitchenCabinets() {
  const technicalData = [
    {
      brand: "Senosan AM1800TopX",
      type: "Double-side laminated high-gloss hardcoat MDF.",
      dimensions: "110x51 in.",
      colors: "White, Cashmere, Dark Grey, Red, Cappuccino, Blue, Green",
      finish: "Superior Hardcoat High-Gloss"
    },
    {
      brand: "Cleaf",
      type: "Textured melamine-faced particleboard. Optional HPL available.",
      dimensions: "120x51 in.",
      colors: "Ares-Beton, Matrix-Vintage, Esperia, Sable, Sherwood",
      finish: "Synchronized Textures"
    },
    {
      brand: "Oneskin",
      type: "UV lacquered high gloss or super matte melamine MDF.",
      dimensions: "112x48 in.",
      colors: "Lava-Grey, Denim-Blue, Brown-Cement, Natural-Oak, Sunny-White",
      finish: "Lacquered Gloss/Matte"
    },
    {
      brand: "Skin",
      type: "Deep textured melamine particleboard with HPL options.",
      dimensions: "110x51 in.",
      colors: "Casabianca-Perla, Arduo, Argento, Olmo-Grigio, Rovere-Bianco",
      finish: "Deep Realistic Textures"
    },
    {
      brand: "di lusso crystallo",
      type: "Innovative Crystallo laminated MDF panels.",
      dimensions: "110x51 in.",
      colors: "White Marble, Onyx, Dark Concrete, Silver Oak, Hebano Macassar",
      finish: "Glass-like Crystal Finish"
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Banner Section */}
      <section className="bg-luxury-black py-32 px-8 text-center text-white relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/products/kitchen-cabinets/kitchen-hero.jpg')] lg:bg-[url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif tracking-tight mb-8 uppercase leading-tight"
          >
            Modern <br /> <span className="italic font-light text-oak-warmth">Kitchen Cabinetry</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-24 h-[1px] bg-oak-warmth mx-auto mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-stone-400 text-xs tracking-[0.4em] uppercase font-bold"
          >
            Exclusive / Unique / Elegant / Stylish
          </motion.p>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-24 px-8 bg-cream border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-serif text-luxury-black mb-10 tracking-tight leading-snug">
            What is <span className="italic font-light underline decoration-oak-warmth/30 underline-offset-8">Acrylic Cabinetry?</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed">
            Acrylic is a non-toxic, high-quality synthetic material providing an incredibly smooth texture and a brilliant glossy look. Due to advanced engineering, it is far more durable and significantly less prone to dangerous cracks and chips than conventional synthetic materials.
          </p>
        </div>
      </section>

      {/* Technical Data Section (Technical Grid) */}
      <section className="py-24 px-8 bg-zinc-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-100 pb-8 gap-4">
              <div>
                <h4 className="text-xl font-serif text-luxury-black mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-oak-warmth" /> Technical Material Specifications
                </h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Standard thickness: 18mm | Edgeband matching available</p>
              </div>
              <div className="px-6 py-3 bg-luxury-black text-white text-[10px] tracking-[0.2em] uppercase font-bold">
                Carb 2 Compliant & TSCA Title VI Certified
              </div>
            </div>

            <section className="py-24 px-8 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <LayoutGrid className="w-6 h-6 text-oak-warmth" />
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-luxury-black">Technical Specifications Grid</h4>
          </div>
          
          <div className="grid grid-cols-5 border border-gray-100 min-w-[1000px]">
            {technicalData.map((brand, bIdx) => (
              <div key={bIdx} className={cn("border-r border-gray-100 last:border-r-0", bIdx === 0 && "bg-zinc-50")}>
                <div className="p-8 border-b border-gray-100 min-h-[140px] flex flex-col justify-center">
                  <h5 className="text-xs tracking-[0.2em] font-bold uppercase text-oak-warmth mb-2">{brand.brand}</h5>
                  <p className="text-[10px] text-gray-400 font-light">{brand.type}</p>
                </div>
                <div className="p-8 space-y-10">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-stone-300 block mb-3">Dimensions</span>
                    <p className="text-sm font-serif text-luxury-black">{brand.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-stone-300 block mb-3">Colors & Texture</span>
                    <p className="text-sm font-sans font-light text-gray-500 leading-relaxed">{brand.colors}</p>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-stone-300 block mb-3">Finish</span>
                    <p className="text-sm font-sans font-light text-gray-500 italic">{brand.finish}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-[10px] tracking-widest uppercase font-bold text-stone-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500/50" />
              Carb 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500/50" />
              TSCA Title VI Certified
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500/50" />
              Standard Thickness: 18mm
            </div>
          </div>
        </div>
      </section>

          </div>
        </div>
      </section>

      {/* Visual Image Gallery Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h4 className="text-luxury-black text-xs tracking-[0.4em] font-bold mb-4 uppercase">Project Visualizer</h4>
            <h3 className="text-3xl md:text-5xl font-serif text-luxury-black tracking-tight italic">Gallery of Inspirations</h3>
            <div className="w-20 h-1 bg-oak-warmth mt-8" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square relative group bg-gray-100 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 flex-col gap-2 p-4 text-center">
                  <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Visual Inspiration</span>
                  <span className="text-white/60 text-[8px] tracking-[0.1em] uppercase">Project 000{i+1 > 9 ? i+1 : `0${i+1}`}</span>
                </div>
                {/* Image Placeholder */}
                <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1556911220-e15024bb8b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')]" />
                <div className="absolute bottom-2 right-2 text-white/20 text-[6px] font-mono z-0 pointer-events-none">
                  {i+1 < 10 ? `000${i+1}` : `00${i+1}`}.jpg
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
