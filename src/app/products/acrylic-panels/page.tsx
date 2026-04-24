"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Heart, Award, ArrowRight, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between py-4 border-b border-gray-100 text-[10px] uppercase tracking-widest">
    <span className="text-stone-400 font-bold">{label}</span>
    <span className="text-luxury-black font-light text-right">{value}</span>
  </div>
);

const SwatchCard = ({ color }: { color: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden bg-white border border-gray-100 p-4 hover:shadow-2xl transition-all duration-700"
  >
    <div className="aspect-square bg-zinc-50 relative overflow-hidden mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-full h-px bg-oak-warmth/10 rotate-45" />
      </div>
    </div>
    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-black text-center group-hover:text-oak-warmth transition-colors">
      {color}
    </p>
  </motion.div>
);

export default function AcrylicPanels() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-luxury-black py-40 px-8 text-center text-white relative flex flex-col items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600585154340-be6199fbfd0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center grayscale scale-110" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-oak-warmth text-[10px] tracking-[1em] font-bold uppercase block mb-4">
              Surface Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 uppercase leading-tight">
              Ultra-Gloss <br />
              <span className="italic font-light text-oak-warmth">Acrylic Panels</span>
            </h1>
            <div className="w-24 h-px bg-oak-warmth mx-auto mb-8" />
            <p className="text-stone-400 text-[10px] tracking-[0.5em] uppercase font-bold">
              The pinnacle of modern surface engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif leading-tight text-luxury-black tracking-tight">
                Brilliance in <br /> <span className="italic font-light text-oak-warmth italic">Every Reflection.</span>
              </h2>
              <div className="w-20 h-px bg-oak-warmth/30" />
            </div>
            
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Acrylic panels represent the zenith of contemporary cabinetry design. Known for their mirror-like reflectivity and exceptional depth, these non-toxic surfaces are engineered for maximum durability and UV resistance, ensuring your kitchen remains as vibrant as the day it was installed.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-luxury-black text-[10px] tracking-widest font-bold uppercase">
                  <Sparkles className="w-4 h-4 text-oak-warmth" /> Ultra-HD Gloss
                </span>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Mirror-like finish with unparalleled refractive depth.</p>
              </div>
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-luxury-black text-[10px] tracking-widest font-bold uppercase">
                   <ShieldCheck className="w-4 h-4 text-oak-warmth" /> Anti-Scratch
                </span>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Advanced hardcoat technology prevents daily wear and chips.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative aspect-square group">
            <div className="absolute inset-0 bg-zinc-50 border border-gray-100 -z-10 translate-x-8 translate-y-8 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-700" />
            <div className="w-full h-full overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1556911220-e15021e87c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Luxury Gloss Kitchen" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Series - Refined Grid */}
      <section className="py-32 px-8 bg-zinc-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Brand 1: SENOSAN */}
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-12 border-b border-gray-200 pb-12">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif text-luxury-black uppercase tracking-tighter italic">Senosan <span className="text-stone-300 font-light">AM1800TopX</span></h3>
                <p className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase">European High-Gloss Hardcoat MDF</p>
              </div>
              <div className="bg-white p-10 md:w-96 shadow-xl border border-gray-50 text-luxury-black relative group">
                <div className="absolute top-0 left-0 w-2 h-full bg-oak-warmth opacity-0 group-hover:opacity-100 transition-opacity" />
                <SpecRow label="Sheet Dimensions" value='110" x 51"' />
                <SpecRow label="Standard Thickness" value="18 mm" />
                <SpecRow label="Finish Type" value="Superior Hardcoat Gloss" />
                <SpecRow label="Sustainability" value="Carb 2 & TSCA VI" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {["Cappuccino", "Black", "Blue", "Dark Grey", "Cashmere", "White"].map((c, i) => (
                <SwatchCard key={i} color={c} />
              ))}
            </div>
          </div>

          {/* Brand 2: CLEAF */}
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-12 border-b border-gray-200 pb-12">
               <div className="space-y-4">
                 <h3 className="text-4xl md:text-5xl font-serif text-luxury-black uppercase tracking-tighter italic">Cleaf <span className="text-stone-300 font-light">Tactile Reality</span></h3>
                 <p className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase">Textured Melamine-Faced Particleboard</p>
               </div>
               <div className="bg-white p-10 md:w-96 shadow-xl border border-gray-50 text-luxury-black relative group">
                 <div className="absolute top-0 left-0 w-2 h-full bg-oak-warmth opacity-0 group-hover:opacity-100 transition-opacity" />
                 <SpecRow label="Panel Size" value='110" x 81"' />
                 <SpecRow label="HPL Optional" value='120" x 51"' />
                 <SpecRow label="Texture Engine" value="TSS-Thermo Structured" />
                 <SpecRow label="Matching Edge" value="23 x 1 mm" />
               </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {["Ares-Beton", "Matrix-Vintage", "Sable-Angelis", "Sherwood-Dartmoor", "Sable-Tarquini", "Esperia-Dublin"].map((c, i) => (
                <SwatchCard key={i} color={c} />
              ))}
            </div>
          </div>

          {/* Brand 3: CRYSTALLO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 group">
               <h3 className="text-3xl md:text-5xl font-serif italic text-luxury-black border-l-4 border-oak-warmth pl-8 tracking-tight">di lusso crystallo</h3>
               <p className="text-lg text-gray-500 font-light leading-relaxed">
                 The absolute peak of reflection. Crystallo panels combine the clarity of glass with the structural integrity of advanced polymers. Perfect for high-end boutique environments and minimal residential designs.
               </p>
               <div className="grid grid-cols-2 gap-x-12 gap-y-4 pt-6 border-t border-gray-100">
                  {["White Marble", "Onyx", "Dark Concrete", "Hebano Macassar"].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold text-luxury-black uppercase group-hover:text-oak-warmth transition-colors">
                       <Layers className="w-3.5 h-3.5 text-stone-200" /> {c}
                    </div>
                  ))}
               </div>
               <button className="flex items-center gap-4 text-[10px] tracking-[0.4em] font-bold text-luxury-black uppercase border-b border-oak-warmth pb-2 mt-12 hover:pl-4 transition-all duration-500">
                 Request Sample Kit <ArrowRight className="w-4 h-4" />
               </button>
            </div>
            <div className="grid grid-cols-2 gap-6 scale-95 group-hover:scale-100 transition-transform duration-1000">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-[4/5] bg-zinc-200 overflow-hidden relative shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                      alt="Crystallo Detail" 
                    />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-24 px-8 bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
            <Award className="w-12 h-12 text-oak-warmth animate-pulse" />
            <h3 className="text-3xl md:text-5xl font-serif italic text-luxury-black tracking-tighter">
              A prominence in <span className="not-italic text-oak-warmth font-bold">Local Distribution.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-16 text-[10px] tracking-[0.6em] font-bold text-stone-400 uppercase">
               <span>Miami / FL</span>
               <span className="text-oak-warmth">Chicago / IL</span>
               <span>New Jersey / NJ</span>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-cream text-center">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-2xl md:text-5xl font-serif text-luxury-black leading-tight uppercase tracking-tight">
             Elevate your design <br /> <span className="italic font-light text-oak-warmth">at factory direct pricing</span>
           </h2>
           <div className="w-20 h-px bg-oak-warmth mx-auto" />
           <p className="text-stone-500 font-light italic leading-loose max-w-2xl mx-auto">
             "Our mission is to bring high-end European surface technology to the American market without the traditional import markups. We are the bridge between craftsmanship and accessibility."
           </p>
           <button className="px-12 py-5 bg-luxury-black text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-oak-warmth transition-all duration-700 shadow-2xl">
             Explore Collections
           </button>
        </div>
      </section>
    </div>
  );
}
