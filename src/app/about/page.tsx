"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-luxury-black overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/about/about-hero.jpg')] lg:bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 to-luxury-black" />
        <div className="relative z-10 text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] text-oak-warmth uppercase font-bold mb-4 block"
          >
            Since 2002
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-tight"
          >
            Our <span className="italic font-light text-oak-warmth">Ethos</span>
          </motion.h1>
        </div>
      </section>

      {/* Explore Collections Header (From Screenshot) */}
      <section className="py-24 px-8 bg-white border-b border-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif text-luxury-black uppercase tracking-tighter leading-tight"
          >
            EXPLORE OUR COLLECTIONS AND <br /> <span className="italic font-light text-oak-warmth">PRODUCTS</span>
          </motion.h2>
          <div className="w-20 h-px bg-oak-warmth mx-auto" />
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-4xl mx-auto">
            Are you looking for European Modern Kitchen Appliances? Majestic Kitchen Cabinets & Doors designers from Miami utilize Luxury Kitchen Appliances with a stylish European class in mind. Get one-on-one service with your personal designer backed by the convenience and inventory of an established national European Entry Doors chain. Your designer is your point of contact throughout the entire kitchen remodeling project or entry & interior doors replacement, ensuring you are 100% satisfied with local Miami European & Custom Acrylic Kitchen Cabinets & European Doors distributor Modern Majestic Company.
          </p>
        </div>
      </section>

      {/* 01 / 02 Story Blocks */}
      <section className="py-24 px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              num: "01",
              title: "A new design destination",
              subtitle: "European Entry & Interior Doors in Miami",
              subtext: "According to Modern Majestic Customers",
              desc: "Our door systems pick up the surface design of our floors or are exactly matched to them. Our company give individual and flexible coordination with your interior design. Our real wood surfaces are worked by hand and treated exclusively with natural oils and waxes."
            },
            {
              num: "02",
              title: "A new design destination",
              subtitle: "Miami European Custom Kitchen Cabinets",
              subtext: "According to Modern Majestic Customers",
              desc: "At The Majestic Custom Kitchen Cabinets Company from Miami, we specialise in the Europeaqn Kichen Cabinets. At European Custom Kitchen Cabinets Company located in Miami, FL we design and build a kitchen for your needs. We are focused on providing you with the European kitchen of your dreams."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 md:p-20 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-oak-warmth transition-all duration-700 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-[180px] font-serif text-luxury-black/[0.03] leading-none translate-x-12 -translate-y-8 group-hover:text-oak-warmth/5 transition-colors duration-700">
                {item.num}
              </div>
              <div className="relative z-10 space-y-6">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-stone-400 block">{item.title}</span>
                <h4 className="text-2xl md:text-3xl font-serif text-luxury-black leading-tight group-hover:text-oak-warmth transition-colors">
                  {item.subtitle}
                </h4>
                <p className="text-[11px] tracking-widest text-oak-warmth font-bold uppercase">{item.subtext}</p>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founders & Story */}
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px]">
            <div className="absolute inset-0 border border-oak-warmth/20 translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Interior Design" 
              className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-serif text-luxury-black leading-tight uppercase tracking-tighter">
              Craftsmanship <br /> <span className="italic font-light text-oak-warmth text-5xl md:text-7xl">Born in Europe</span>
            </h3>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Established in 2002, Modern Majestic is the culmination of Karolina and Sebastian's vision to bring genuine European manufacturing standards to Florida. With over 20 years of expertise, every cabinet and door we produce is a testament to the belief that your home should be a masterpiece of both form and function.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100 mt-12">
              <div className="space-y-4">
                <p className="text-luxury-black font-serif italic text-lg leading-tight uppercase tracking-tighter">PORTA European Door Systems</p>
                <div className="w-8 h-px bg-oak-warmth" />
                <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-relaxed">Strategic European Partner for Interior & Technical Systems</p>
              </div>
              <div className="space-y-4 text-right flex flex-col items-end">
                <p className="text-luxury-black font-serif italic text-lg leading-tight uppercase tracking-tighter">20+ Years</p>
                <div className="w-8 h-px bg-oak-warmth" />
                <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-relaxed">Combined European Craftsmanship & Design Expertise</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-10">
              <div className="space-y-4">
                <Heart className="w-8 h-8 text-oak-warmth" />
                <h5 className="font-bold text-[10px] tracking-widest uppercase text-luxury-black">Passion</h5>
                <p className="text-xs text-stone-400">Designing with soul.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="w-8 h-8 text-oak-warmth" />
                <h5 className="font-bold text-[10px] tracking-widest uppercase text-luxury-black">Safety</h5>
                <p className="text-xs text-stone-400">Hurricane-grade security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
