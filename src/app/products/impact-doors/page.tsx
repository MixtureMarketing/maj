"use client";

import React from "react";
import { ShieldAlert, ShieldCheck, Cpu, Ruler, Palette, FileDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ImpactDoors() {
  const features = [
    {
      title: "Extensive Model Selection",
      desc: "Over 400 models available including Pivot Doors, Double Doors, and Contemporary exported designs.",
      icon: Ruler
    },
    {
      title: "3D Virtual Reality Design",
      desc: "Proprietary 3D virtual reality software to design your ideal bespoke solution before production.",
      icon: Cpu
    },
    {
      title: "Superior 55 Plus Series",
      desc: "55mm leaf thickness, PUR foam filling, Thermo bipartite frame, and heavy-duty 3D hinges.",
      icon: ShieldCheck
    },
    {
      title: "Fast Series Engineering",
      desc: "Alu Thermo Roto threshold, 12 fixing points, and 3 reinforced anti-theft bolts.",
      icon: ShieldCheck
    },
    {
      title: "Smart Technology Ready",
      desc: "Compatible with Yale Entr, fingerprint/code readers, AirKey EVVA, and electromagnetic locks.",
      icon: Cpu
    },
    {
      title: "Glazing & Custom Colors",
      desc: "One-way mirrors, sandblasted glass, Diamond Reflex. Finishes from Golden Oak to RAL colors.",
      icon: Palette
    }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-luxury-black py-32 px-8 text-center text-white relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-8"
          >
            <ShieldAlert className="w-12 h-12 text-oak-warmth animate-pulse" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 uppercase leading-tight"
          >
            Florida Hurricane <br className="hidden md:block" /> Impact Doors Store. <br />
            <span className="italic font-light text-oak-warmth">European Custom Wrought Entry Doors.</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-20 h-[1px] bg-oak-warmth mx-auto mb-6" 
          />
        </div>
      </section>

      {/* Protective Narrative (Two Columns) */}
      <section className="py-24 px-8 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-luxury-black italic mb-4">Ensuring Maximum Safety</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Ensure maximum safety and security with impact entry doors specifically designed to withstand extreme wind loads. 
              Preventing wind-borne objects from penetrating the building envelope is critical to avoid rapid pressure changes 
              that cause catastrophic structural failure.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-luxury-black italic mb-4">Precision Manufacturing</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Manufactured from high-grade stainless steel and heavy aluminum paired with specialized impact-resistant glazing. 
              Insulated frames provide substantial energy efficiency, regulating indoor temperatures and leading to lower utility bills. 
              Benefit from potential insurance incentives for storm-equipped homes.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <h4 className="text-oak-warmth text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Unmatched Customization</h4>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-black tracking-tighter">Superior Engineering & Security</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="p-10 border border-gray-100 bg-white hover:bg-zinc-50 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-luxury-black group-hover:text-white transition-colors duration-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h5 className="text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4 text-luxury-black">{feature.title}</h5>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Breakdown (Specific Series) */}
      <section className="bg-luxury-black py-24 px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif italic border-l-4 border-oak-warmth pl-6">Technical Specifications</h3>
            <div className="space-y-12">
              <div>
                <h4 className="text-oak-warmth text-xs tracking-[0.2em] font-bold uppercase mb-4">Superior 55 Plus Series</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] uppercase tracking-widest text-stone-400">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> 55mm Leaf Thickness</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> Polyurethane Foam</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> Thermo Bipartite Frame</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> Heavy Duty 3D Hinges</span>
                </div>
              </div>
              <div>
                <h4 className="text-oak-warmth text-xs tracking-[0.2em] font-bold uppercase mb-4">Fast Series Alu Thermo</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] uppercase tracking-widest text-stone-400">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> Roto System Threshold</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> 12 Fixing Points</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> 4 Touch Points</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-oak-warmth" /> Anti-theft Bolts</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-[url('https://images.unsplash.com/photo-1513694017730-813a730f0c0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="absolute inset-0 bg-oak-warmth/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 text-center bg-zinc-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto space-y-10">
          <h3 className="text-2xl font-serif text-luxury-black italic capitalize leading-relaxed">Ready to secure your coastal estate with modern European craftsmanship?</h3>
          <button className="inline-flex items-center gap-4 px-12 py-5 bg-oak-warmth text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-luxury-black transition-all duration-500 shadow-xl hover:shadow-oak-warmth/20">
            <FileDown className="w-5 h-5" /> Download External Doors Catalog (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
