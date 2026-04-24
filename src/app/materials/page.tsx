"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PARTNERS } from "@/data/partners";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function MaterialsHub() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      {/* ── Hero Section ── */}
      <section className="max-w-[1400px] mx-auto px-8 mb-24 text-center">
        <motion.div
           initial="hidden"
           animate="show"
           variants={fadeInUp}
           className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 text-oak-warmth mb-4">
             <Sparkles className="w-5 h-5" />
             <span className="text-[10px] tracking-[0.6em] font-bold uppercase">The Materials Hub</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-luxury-black tracking-tighter leading-none mb-8 uppercase">
            Surfaces of <br />
            <span className="italic font-light text-oak-warmth">Distinction</span>
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 font-light text-lg md:text-xl leading-relaxed">
            We partner with the world&apos;s most innovative surface manufacturers to bring you unparalleled durability and aesthetic excellence.
          </p>
        </motion.div>
      </section>

      {/* ── Grid of Brands ── */}
      <section className="max-w-[1400px] mx-auto px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.slug}
              variants={fadeInUp}
              className="group relative flex flex-col bg-zinc-50 rounded-3xl border border-zinc-100 overflow-hidden hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-1000 p-12"
            >
              {/* Background Accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:scale-150 transition-transform duration-1000"
                style={{ backgroundColor: partner.brandColors?.primary || '#000' }}
              />

              <div className="mb-12 h-16 flex items-center">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="h-10 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <h3 className="text-3xl font-serif text-luxury-black uppercase">{partner.name}</h3>
                )}
              </div>

              <div className="space-y-6 flex-grow">
                <h4 className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase">{partner.name}</h4>
                <p className="text-sm text-stone-400 font-light leading-relaxed line-clamp-3 group-hover:text-luxury-black transition-colors duration-500 italic">
                  {partner.description}
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-100/50">
                <Link
                  href={`/materials/${partner.slug}`}
                  className="flex items-center justify-between group/link"
                >
                  <span className="text-[10px] tracking-[0.4em] font-bold text-luxury-black uppercase">Explore Collection</span>
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm group-hover/link:bg-luxury-black group-hover/link:text-white transition-all duration-700">
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Footer-like Callout ── */}
      <section className="max-w-[1400px] mx-auto px-8 mt-32">
        <div className="bg-luxury-black rounded-[3rem] p-16 md:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-3xl md:text-6xl font-serif text-white uppercase tracking-tighter">Looking for something <span className="italic font-light text-oak-warmth">bespoke?</span></h2>
            <p className="text-stone-400 max-w-xl mx-auto font-light">Contact our design team for a personalized consultation on the best materials for your project.</p>
            <Link 
              href="/contacts"
              className="inline-block px-14 py-6 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-700 shadow-2xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
