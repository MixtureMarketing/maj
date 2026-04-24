"use client";

import React from "react";
import { motion } from "framer-motion";
import { DoorOpen, ShieldCheck, Palette, Ruler, Home, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const DoorFeature = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-12 bg-white border border-gray-100 hover:border-oak-warmth transition-all duration-700 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-1000" />
    <div className="relative z-10">
      <div className="w-14 h-14 bg-luxury-black text-white flex items-center justify-center mb-10 rounded-xl group-hover:bg-oak-warmth transition-all duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-serif font-bold tracking-widest uppercase mb-4 text-luxury-black">{title}</h4>
      <p className="text-xs text-gray-400 font-light leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default function EntryDoors() {
  const specs = [
    { label: "Insulation", value: "U-Value up to 0.73 W/m²K" },
    { label: "Construction", value: "Stainless Steel & Heavy Aluminum" },
    { label: "Security", value: "Multi-point RC2/RC3 Certification" },
    { label: "Finishes", value: "RAL Colors & Natural Wood Veneers" },
    { label: "Warranty", value: "10-Year Structural Guarantee" }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-luxury-black overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1509147231448-690226c6d02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center scale-110 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/40 to-transparent" />
        
        <div className="relative z-10 px-8 w-full max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] tracking-[0.8em] text-oak-warmth uppercase font-bold mb-8 block">First Impressions Matter</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-tight uppercase mb-10">
              The <span className="italic font-light text-oak-warmth text-4xl md:text-7xl block">Threshold of Elegance</span>
            </h1>
            <p className="text-stone-300 text-sm md:text-base font-light tracking-wide max-w-xl leading-relaxed mb-12">
              European Entry Doors designed for the most prestigious estates in Miami, Chicago, and New Jersey. Where structural integrity meets bespoke artistry.
            </p>
            <div className="flex flex-wrap gap-8">
               <button className="px-12 py-5 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-700">
                 Explore Designs
               </button>
               <button className="px-12 py-5 border border-white/20 text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 transition-all duration-700">
                 Download Spec Sheet
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square md:aspect-[4/3] group">
            <div className="absolute inset-0 border-[10px] border-zinc-50 -z-10 translate-x-12 translate-y-12 transition-transform group-hover:translate-x-16 group-hover:translate-y-16 duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Entry Door" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase block">Design Ethos</span>
              <h2 className="text-3xl md:text-6xl font-serif text-luxury-black tracking-tight leading-tight uppercase">
                European <br />
                <span className="italic font-light text-oak-warmth italic">Performance.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Our entry doors are more than a barrier; they are a statement of heritage and high-performance engineering. With over 400 models available, each door is a custom work of art, featuring proprietary insulation technology and heavy-duty 3D adjustable hinges.
            </p>
            <div className="space-y-4 pt-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-[10px] tracking-widest text-luxury-black font-bold uppercase">{spec.label}</span>
                  <span className="text-[11px] text-gray-500 font-light italic">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-24 px-8 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <DoorFeature 
            title="Intelligent Access" 
            icon={ShieldCheck}
            desc="Optional fingerprint biometrics, keypad entry, and smartphone integration for seamless, secure access."
          />
          <DoorFeature 
            title="Thermal Integrity" 
            icon={Home}
            desc="Thermo bipartite frames and PUR foam filling exceed energy efficiency standards for both heat and cold."
          />
          <DoorFeature 
            title="Infinite Finishes" 
            icon={Palette}
            desc="From Golden Oak to brushed anthracite, our finishes are UV resistant and designed for harsh coastal climates."
          />
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
             <div className="max-w-2xl space-y-6">
                <h3 className="text-4xl md:text-6xl font-serif text-luxury-black tracking-tighter leading-tight uppercase">
                  Models of <br /> <span className="italic font-light text-oak-warmth">Distinction</span>
                </h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Browse our core collections of Pivot, Double, and Single entry systems. Each model can be customized with sandblasted glazing, sand-finished side-lights, and bespoke pull handles up to 1800mm.
                </p>
             </div>
             <button className="text-[10px] tracking-[0.3em] uppercase font-bold text-luxury-black border-b border-oak-warmth pb-2 hover:text-oak-warmth transition-colors">
               View Full Collection
             </button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Superior 55", url: "https://images.unsplash.com/photo-1509147231448-690226c6d02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Fast Alu Thermo", url: "https://images.unsplash.com/photo-1544984243-ec3199859f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Pivot Elite", url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Double Grandeur", url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
              ].map((door, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <img src={door.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={door.name} />
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-luxury-black to-transparent">
                     <h4 className="text-white text-lg font-serif italic mb-2">{door.name}</h4>
                     <span className="text-[9px] tracking-widest text-oak-warmth font-bold uppercase">Series 00{i+1}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-24 bg-zinc-50 border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
            <h3 className="text-2xl font-serif italic text-luxury-black leading-relaxed">
              Residing in a coastal region? <br />
              <span className="text-luxury-black not-italic font-bold uppercase tracking-widest text-sm">Our Entry Doors are available in Hurricane-Impact Configurations.</span>
            </h3>
            <div className="flex justify-center gap-8">
               <button className="px-12 py-5 bg-luxury-black text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-oak-warmth transition-all duration-700">
                 Impact Doors Specs
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
