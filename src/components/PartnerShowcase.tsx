"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileDown, ArrowRight, ExternalLink, ShieldCheck, Zap, Sparkles, Award } from "lucide-react";
import { Partner } from "@/types/partners";
import { cn } from "@/lib/utils";

interface PartnerShowcaseProps {
  partner: Partner;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PartnerShowcase({ partner }: PartnerShowcaseProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Brand Hero ── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={partner.heroImage}
            alt={partner.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-luxury-black/40 to-white z-10" />

        <div className="relative z-20 text-center px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggeredContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
               {partner.logo ? (
                 <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
                    <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto object-contain" />
                 </div>
               ) : (
                 <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase">{partner.name}</h1>
               )}
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-serif text-white mb-6 uppercase tracking-tight leading-[0.9]"
            >
              Excellence in <br />
              <span className="italic font-light text-oak-warmth">Surfaces</span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
            >
              {partner.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Highlights ── */}
      {partner.highlights && (
        <section className="py-24 bg-white relative z-20 -mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partner.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-oak-warmth group-hover:bg-luxury-black group-hover:text-white transition-all">
                    {i % 4 === 0 && <ShieldCheck className="w-6 h-6" />}
                    {i % 4 === 1 && <Zap className="w-6 h-6" />}
                    {i % 4 === 2 && <Sparkles className="w-6 h-6" />}
                    {i % 4 === 3 && <Award className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-luxury-black uppercase">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Innovative Construction (Layers) ── */}
      {partner.construction && (
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.5em] text-oak-warmth font-bold uppercase">Engineering</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-luxury-black uppercase tracking-tight leading-none">
                    {partner.construction.title}
                  </h3>
                </div>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  {partner.construction.description}
                </p>
                <div className="pt-8 space-y-6">
                  {partner.construction.layers.map((layer, i) => (
                    <motion.div
                      key={layer.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-6 group"
                    >
                      <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-xs font-bold text-oak-warmth group-hover:bg-luxury-black group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-widest text-luxury-black uppercase mb-1">{layer.name}</h4>
                        <p className="text-xs text-zinc-400 uppercase tracking-tight">{layer.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-50 rounded-[40px] overflow-hidden border border-zinc-100 flex items-center justify-center p-12"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/50 to-transparent" />
                {/* Visual representation of 4 layers */}
                <div className="relative w-full max-w-md space-y-2 transform -rotate-12 group hover:rotate-0 transition-transform duration-1000">
                   {[...Array(4)].map((_, i) => (
                     <div 
                       key={i} 
                       className="h-20 w-full rounded-xl border border-zinc-200 shadow-2xl transition-all duration-500"
                       style={{ 
                         backgroundColor: i === 0 ? '#4A4A4A' : i === 1 ? '#E0E0E0' : i === 2 ? '#B0B0B0' : '#D0D0D0',
                         transform: `translateY(${i * -10}px) translateZ(${i * 20}px)`,
                         opacity: 1 - (i * 0.15)
                       }}
                     >
                       <div className="p-4 flex items-center justify-between">
                          <span className="text-[8px] font-bold tracking-[0.3em] text-white/50 uppercase">Layer {4-i}</span>
                       </div>
                     </div>
                   ))}
                </div>
                <div className="absolute bottom-12 right-12 text-right">
                   <div className="w-12 h-px bg-oak-warmth mb-4 ml-auto" />
                   <p className="text-[10px] font-bold tracking-[0.4em] text-luxury-black uppercase rotate-90 origin-right translate-x-full">Structural integrity</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── Versatile Application ── */}
      {partner.applications && (
        <section className="py-24 bg-zinc-50 border-y border-zinc-200/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20 space-y-4">
               <span className="text-[10px] tracking-[0.5em] text-oak-warmth font-bold uppercase">Versatility</span>
               <h3 className="text-4xl md:text-5xl font-serif text-luxury-black uppercase tracking-tight">{partner.applications.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partner.applications.sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-12 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-oak-warmth">
                        {i === 0 ? <ShieldCheck className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
                     </div>
                     <h4 className="text-2xl font-serif uppercase tracking-tight text-luxury-black">{section.title}</h4>
                  </div>
                  <ul className="space-y-6">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <div className="w-1 h-1 rounded-full bg-oak-warmth mt-2 group-hover:scale-150 transition-transform" />
                        <p className="text-zinc-500 text-sm leading-relaxed font-light">{item}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Collections ── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[10px] tracking-[0.5em] text-oak-warmth font-bold uppercase">The Portfolio</span>
             <h3 className="text-4xl md:text-6xl font-serif text-luxury-black uppercase tracking-tighter">Curated <span className="italic font-light underline decoration-oak-warmth/30 underline-offset-8">Collections</span></h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {partner.collections.map((coll, i) => (
              <motion.div
                key={coll.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-zinc-50 p-12 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:bg-white"
              >
                <h4 className="text-2xl font-serif text-luxury-black mb-6 uppercase tracking-tight group-hover:text-oak-warmth transition-colors">
                  {coll.name}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-light italic">
                  {coll.description}
                </p>
                {coll.features && (
                  <ul className="space-y-4 mb-12 flex-grow">
                    {coll.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.1em] text-luxury-black/60 uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-oak-warmth" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="pt-8 border-t border-zinc-200">
                   <Link href={partner.websiteUrl || "/contacts"} className="flex items-center justify-between text-[10px] tracking-[0.3em] font-bold text-luxury-black uppercase group/link">
                      Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Easy Installation ── */}
      {partner.installation && (
        <section className="py-24 bg-luxury-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(#b89564_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <div className="mb-20 space-y-4">
               <span className="text-[10px] tracking-[0.5em] text-oak-warmth font-bold uppercase">Simplicity</span>
               <h3 className="text-4xl md:text-5xl font-serif uppercase tracking-tight">{partner.installation.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {partner.installation.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="text-6xl font-serif text-white/10 group-hover:text-oak-warmth/20 transition-colors duration-700">0{i+1}</div>
                  <h4 className="text-xl font-serif text-white uppercase tracking-widest -mt-10">{step.title}</h4>
                  <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Digital Library (Brochures) ── */}
      <section className="py-32 bg-luxury-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.6em] text-oak-warmth font-bold uppercase">Digital Library</span>
                <h3 className="text-4xl md:text-7xl font-serif uppercase tracking-tighter leading-none">Brochures & <br /><span className="italic font-light">Technical Docs</span></h3>
              </div>
              <p className="text-stone-400 text-lg font-light leading-relaxed max-w-md">
                Access detailed technical specifications and inspirational catalogs directly from {partner.name}.
              </p>
              <div className="flex items-center gap-8 pt-8">
                 <div className="flex flex-col">
                    <span className="text-2xl font-serif text-oak-warmth">{partner.brochures.length}+</span>
                    <span className="text-[8px] tracking-[0.2em] opacity-40 uppercase">Assets available</span>
                 </div>
                 <div className="w-px h-12 bg-white/10" />
                 <div className="flex flex-col">
                    <span className="text-2xl font-serif text-oak-warmth">PDF</span>
                    <span className="text-[8px] tracking-[0.2em] opacity-40 uppercase">Format Ready</span>
                 </div>
              </div>
            </div>

            <div className="space-y-6">
              {partner.brochures.map((brochure) => (
                <Link
                  key={brochure.filename}
                  href={`/pdf/${partner.slug}/${brochure.filename}`}
                  target="_blank"
                  className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-luxury-black transition-all duration-700"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-luxury-black group-hover:text-white transition-all">
                      <FileDown className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif uppercase tracking-tight">{brochure.name}</h5>
                      <p className="text-[9px] tracking-[0.1em] opacity-40 uppercase mt-1 group-hover:text-luxury-black/60">{brochure.description || "Download PDF Catalog"}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full group-hover:border-luxury-black transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer Link ── */}
      <section className="py-20 bg-white text-center">
         <div className="max-w-[400px] mx-auto space-y-10">
            <div className="w-px h-20 bg-gradient-to-b from-oak-warmth to-transparent mx-auto" />
            <h5 className="text-[10px] tracking-[0.5em] font-bold text-stone-400 uppercase">Ready to Start?</h5>
            <Link 
              href="/contacts"
              className="inline-block px-14 py-6 bg-luxury-black text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-oak-warmth transition-all duration-700 shadow-2xl"
            >
              Request a Quote with {partner.name}
            </Link>
         </div>
      </section>
    </div>
  );
}
