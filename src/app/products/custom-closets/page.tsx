"use client";

import React from "react";
import { motion } from "framer-motion";
import { Archive, Sparkles, Lightbulb, Ruler, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ClosetFeature = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 bg-white border border-gray-100 hover:border-oak-warmth transition-all duration-700 group shadow-sm hover:shadow-2xl"
  >
    <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center mb-8 group-hover:bg-luxury-black group-hover:text-white transition-all duration-500 rounded-lg">
      <Icon className="w-6 h-6 text-oak-warmth group-hover:text-white transition-colors" />
    </div>
    <h4 className="text-sm font-serif font-bold tracking-widest uppercase mb-4 text-luxury-black">{title}</h4>
    <p className="text-xs text-gray-400 font-light leading-relaxed">{desc}</p>
  </motion.div>
);

export default function CustomClosets() {
  const closetSpecs = [
    { label: "Hardware", value: "Blum & Hettich Soft-Close" },
    { label: "Lighting", value: "Integrated LED with Motion Sensors" },
    { label: "Finishes", value: "Senosan High Gloss / Cleaf Textured" },
    { label: "Customization", value: "Fully Bespoke 3D Designed" },
    { label: "Lead Time", value: "3-4 Weeks Factory Direct" }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-luxury-black overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/luxury_closet_wide.png')] bg-cover bg-center scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black" />
        
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] text-oak-warmth uppercase font-bold mb-6 block"
          >
            Bespoke Storage Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif text-white tracking-tighter leading-tight uppercase mb-8"
          >
            Custom Aluminum & <br />
            <span className="italic font-light text-oak-warmth">Wood Closets</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-400 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Transform your dressing room into a curated sanctuary. Our custom closet systems blend European aesthetics with intelligent functionality.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase block">Precision Craftsmanship</span>
              <h2 className="text-3xl md:text-5xl font-serif text-luxury-black tracking-tight leading-tight uppercase">
                Designed for <br />
                <span className="italic font-light text-oak-warmth italic">Absolute Order.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              At Modern Majestic, we believe a closet should be more than storage; it's a reflection of your lifestyle. We specialize in sophisticated <strong className="text-luxury-black font-semibold">custom aluminum</strong> and premium <strong className="text-luxury-black font-semibold">custom wood</strong> structures. From velvet-lined jewelry drawers to sleek, architectural aluminum frames, every element is precision-engineered in our Miami factory.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {closetSpecs.map((spec, i) => (
                <div key={i} className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-[9px] tracking-widest text-stone-300 font-bold uppercase mb-1">{spec.label}</span>
                  <span className="text-sm font-serif text-luxury-black">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative aspect-[4/5] bg-zinc-50 overflow-hidden">
             <div className="absolute inset-0 bg-oak-warmth/5 z-10" />
             <img 
               src="/images/modern_closet_detail.png" 
               alt="Luxury Walk-in Custom Closet" 
               className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
             />
             <div className="absolute bottom-12 left-12 p-8 bg-white/90 backdrop-blur-md shadow-2xl max-w-xs hidden md:block z-20">
               <span className="text-[9px] tracking-[0.3em] font-bold text-oak-warmth uppercase block mb-2">Featured Series</span>
               <p className="text-xs italic text-luxury-black/70 leading-relaxed font-serif">
                 "Our signature Island Collection features integrated glass-top displays and soft-touch drawers."
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-8 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
             <h3 className="text-[10px] tracking-[0.5em] font-bold text-luxury-black uppercase mb-6">Innovative Features</h3>
             <h2 className="text-3xl md:text-5xl font-serif text-luxury-black tracking-tight italic">Luxury in every detail</h2>
             <div className="w-20 h-px bg-oak-warmth mt-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ClosetFeature 
              title="Intelligent Lighting" 
              icon={Lightbulb}
              desc="Automatic LED sensors that illuminate exactly where you stand, highlighting colors with high CRI fidelity."
            />
            <ClosetFeature 
              title="Soft-Close Motion" 
              icon={Sparkles}
              desc="Silent European hardware ensures every drawer and door closes with a gentle, premium whisper."
            />
            <ClosetFeature 
              title="Bespoke Layouts" 
              icon={Ruler}
              desc="3D modeled to fit your specific collection, from floor-to-ceiling shoe racks to hidden safes."
            />
            <ClosetFeature 
              title="Aluminum & Wood Finishes" 
              icon={Archive}
              desc="Choose from our modern architectural aluminum frames or premium wood textures for a bespoke aesthetic."
            />
          </div>
        </div>
      </section>

      {/* Material Showcase (Reuse component logic or pattern) */}
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-12">
           <h2 className="text-3xl md:text-6xl font-serif text-luxury-black uppercase tracking-tighter leading-tight">
             MATERIALS THAT <br /> <span className="italic font-light text-oak-warmth">INSPIRE</span>
           </h2>
           <p className="text-lg text-gray-500 font-light leading-relaxed">
             We utilize the same world-class materials as our kitchen cabinetry to ensure consistency and durability throughout your home. Integrating high-grade architectural aluminum with premium acrylic and textured wood panels, our custom closets offer unmatched structural strength and modern elegance that will last for decades.
           </p>
           <div className="flex justify-center gap-12 pt-8">
              {['Senosan', 'Cleaf', 'Oneskin', 'Blum'].map((brand, i) => (
                <div key={i} className="text-[10px] tracking-[0.4em] font-bold text-stone-300 uppercase hover:text-oak-warmth transition-colors cursor-default">
                  {brand}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 bg-luxury-black text-white text-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h3 className="text-2xl md:text-5xl font-serif tracking-tight leading-tight uppercase">
            Begin Your <span className="italic font-light text-oak-warmth">Transformation</span>
          </h3>
          <p className="text-stone-400 font-light tracking-wide italic">
             Schedule a free 1:1 design consultation with our experts in Miami.
          </p>
          <button className="px-12 py-5 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-700 shadow-2xl">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
