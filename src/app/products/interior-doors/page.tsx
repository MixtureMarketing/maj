"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Heart, Award, ArrowRight, Home, Layers, Settings } from "lucide-react";

const FeatureBlock = ({ title, desc }: { title: string; desc: string }) => (
  <div className="space-y-4">
    <h4 className="text-xs tracking-widest font-bold uppercase text-luxury-black border-b border-oak-warmth/30 pb-4 inline-block">
      {title}
    </h4>
    <p className="text-xs text-gray-400 leading-relaxed font-light italic">
      {desc}
    </p>
  </div>
);

const CollectionCard = ({ title, subtitle, desc, image, tag }: { title: string; subtitle: string; desc: string; image: string; tag: string }) => (
  <div className="group relative overflow-hidden bg-white border border-gray-100 p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
    <div className="aspect-[3/4] overflow-hidden mb-8 relative">
      <div className="absolute top-4 left-4 z-20 bg-luxury-black text-white text-[9px] tracking-[0.3em] font-bold px-4 py-2 uppercase">
        {tag}
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
      <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors duration-700" />
    </div>
    <div className="space-y-4">
      <span className="text-oak-warmth text-[9px] tracking-[0.4em] font-bold uppercase">{subtitle}</span>
      <h3 className="text-2xl font-serif text-luxury-black uppercase tracking-tighter italic">{title}</h3>
      <p className="text-xs text-stone-400 leading-relaxed font-light">{desc}</p>
      <div className="pt-4 flex items-center gap-3 text-luxury-black text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        Explore Features <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

export default function InteriorDoors() {
  const collections = [
    {
      title: "Porta Hide",
      subtitle: "Invisible Aesthetics",
      tag: "Minimalist",
      desc: "Concealed frame technology for a seamless, architectural hidden-door look. Perfect for monochromatic modern interiors.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "4 Elements (Earth)",
      subtitle: "Natural Harmony",
      tag: "Oak Selections",
      desc: "Horizontal and vertical wood grain patterns in natural oak tones. Reflecting the warmth of Sherman Oak and Golden Craft.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Natura Loft",
      subtitle: "Industrial Luxury",
      tag: "Bold Design",
      desc: "Matte finishes paired with bold black accents and hardware. A contemporary statement for high-end urban spaces.",
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hydro Protect",
      subtitle: "Engineering Excellence",
      tag: "Technical",
      desc: "100% waterproof door frame technology. Precision-engineered for bathrooms and moisture-prone luxury areas.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-luxury-black py-40 px-8 text-center text-white relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/products/interior-doors/interior-hero.jpg')] lg:bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-oak-warmth text-[10px] tracking-[0.8em] font-bold uppercase">
              EUROPEAN DOOR SYSTEMS
            </span>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tight mb-8 uppercase leading-tight">
              Interior <span className="italic font-light text-oak-warmth">Luxury</span><br/>Collections
            </h1>
            <div className="w-24 h-px bg-oak-warmth/50 mx-auto" />
            <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase font-bold mt-8">
              Porta 2022 Catalog / 4 Elements / Bespoke Engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <div className="space-y-10">
          <Award className="w-8 h-8 text-oak-warmth mx-auto" />
          <h2 className="text-3xl md:text-5xl font-serif italic text-luxury-black tracking-tighter uppercase"> Modern Majestic + PORTA</h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed font-sans mt-8 italic">
            "Your doors are the threshold to your lifestyle. Through our partnership with PORTA, Europe's leading door manufacturer, we bring you the ultimate collection of interior solutions—from invisible concealed frames to waterproof technical systems."
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 px-8 bg-zinc-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((col, i) => (
              <CollectionCard key={i} {...col} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-oak-warmth text-[10px] tracking-[0.4em] font-bold uppercase">Engineering Superiority</span>
                <h2 className="text-5xl font-serif text-luxury-black tracking-tighter italic uppercase">Technical <span className="text-stone-300">Precision</span></h2>
              </div>
              <div className="space-y-8">
                {[
                  { title: "PORTA SYSTEM ELEGANCE", desc: "Non-rebated door system with concealed hinges and a choice of magnetic or standard locks for a perfectly flush finish." },
                  { title: "HYDRO PROTECT™", desc: "Advanced waterproof technology applied to frames and leaves, preventing swelling and ensuring longevity in moisture-prone zones." },
                  { title: "MAGNETIC LOCKING", desc: "Silent and invisible locking mechanisms that offer a sleek profile without compromising on security and privacy." },
                  { title: "REBATED & NON-REBATED", desc: "Full flexibility in frame integration, allowing for both traditional aesthetics and contemporary flush-to-wall designs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group pb-8 border-b border-gray-100 last:border-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 border border-gray-100 shrink-0 group-hover:bg-luxury-black group-hover:text-white transition-all duration-500">
                      <Settings className="w-4 h-4 text-oak-warmth" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-sm font-serif italic text-luxury-black uppercase tracking-widest">{item.title}</h4>
                       <p className="text-xs text-stone-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[700px]">
              <div className="absolute inset-0 border border-oak-warmth/20 translate-x-8 -translate-y-8" />
              <img 
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Door Engineering" 
                className="w-full h-full object-cover relative z-10 grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-24 px-8 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureBlock 
              title="Made in USA" 
              desc="Our factory and showroom is based in Miami Florida, where we build and ship all of our products." 
            />
            <FeatureBlock 
              title="Quality for Less" 
              desc="Our modern kitchen cabinets & entry doors run about 40% less, without sacrificing quality." 
            />
            <FeatureBlock 
              title="3 Week Lead Time" 
              desc="Our investment in technology allows us to deliver precision cut custom cabinets in game changing speeds." 
            />
            <FeatureBlock 
              title="Delivered" 
              desc="In the Miami, Chicago and New Jersey Area. Shippable vanities and floating shelves coming soon." 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
