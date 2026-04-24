"use client";

import React from "react";
import { FileDown, BookOpen, Layers, DoorOpen, Home as HomeIcon, Download, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Catalogs() {
  const catalogs = [
    {
      title: "EUROPEAN KITCHEN CABINETS",
      subtitle: "MODERN - CONTEMPORARY",
      desc: "The Modern Majestic Distributor Kitchen Designers have combined decades of knowledge in luxury spaces. With Us as Miami best kitchen cabinets company near you can be enjoying your custom-designed sustainable cabinets.",
      icon: Layers,
      color: "bg-luxury-black",
      link: "/products/kitchen-cabinets"
    },
    {
      title: "DECORATIVE ACRYLIC PANELS",
      subtitle: "LUXURY SURFACES",
      desc: "Modern Majestic European Kitchen acrylic panels company from Florida have combined decades of knowledge in luxury spaces. With Us, you can be enjoying your custom-designed sustainable European acrylic panels.",
      icon: BookOpen,
      color: "bg-oak-warmth",
      link: "/products/acrylic-panels"
    },
    {
      title: "EUROPEAN FRONT DOORS",
      subtitle: "HURRICANE IMPACT RATED",
      desc: "Your Modern Majestic Distributor Hurricane Impact Rated Exterior / Front Doors company have combined decades of knowledge in entry doors. We are top Miami front doors companies near Florida, you can be enjoying your custom-designed European entry doors.",
      icon: DoorOpen,
      color: "bg-zinc-800",
      link: "/products/hurricane-doors"
    },
    {
      title: "INTERIOR DOORS",
      subtitle: "MIAMI LOCAL SHOP",
      desc: "Miami local Interior European Doors company Modern Majestic, have combined decades of knowledge in interior doors. We are best Florida interior doors shop near, you can be enjoying your custom-designed European front doors.",
      icon: HomeIcon,
      color: "bg-stone-500",
      link: "/products/interior-doors"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="bg-luxury-black py-32 px-8 text-center text-white relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/catalogs/catalog-hero.jpg')] lg:bg-[url('https://images.unsplash.com/photo-1600585154340-be6199fbfd0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-oak-warmth text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block"
          >
            EUROPEAN / LUXURY / MODERN
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif tracking-tight mb-8 uppercase leading-tight"
          >
            Our Style <span className="italic font-light text-oak-warmth">Collections</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-16 h-[1px] bg-oak-warmth mx-auto mb-10" 
          />
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-white text-lg font-serif italic text-balance">
              "MODERN MAJESTIC - the ecological kitchen cabinetry of choice"
            </p>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              With the Modern Majestic furniture & doors distributor principle of the best European style can be designed precisely, and in detail to your individual feelings about life, beyond rigid program structures.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogs.map((catalog, idx) => (
            <div key={idx} className="group border border-gray-100 bg-zinc-50 hover:bg-white transition-all duration-500 p-10 flex flex-col items-center text-center shadow-sm hover:shadow-2xl">
              <div className={cn("w-16 h-16 flex items-center justify-center text-white mb-8 rounded-sm group-hover:scale-110 transition-transform", catalog.color)}>
                <catalog.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-stone-400 mb-2">{catalog.subtitle}</h3>
              <h2 className="text-xl font-serif text-luxury-black mb-6">{catalog.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-10 h-32 overflow-hidden">
                {catalog.desc}
              </p>
              <div className="w-full space-y-3">
                <a href={catalog.link} className="w-full py-4 bg-luxury-black text-white text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:bg-oak-warmth transition-all duration-500">
                  <Eye className="w-4 h-4" /> OPEN
                </a>
                <button className="w-full py-4 border border-luxury-black text-luxury-black text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:bg-luxury-black hover:text-white transition-all duration-500">
                  <FileDown className="w-4 h-4" /> PDF Documents
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Features & Call to Action */}
      <section className="py-24 px-8 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {[
              {
                title: "Made in USA",
                desc: "Our factory and showroom is based in Miami Florida, where we build and ship all of our products."
              },
              {
                title: "Quality for Less",
                desc: "Our modern kitchen cabinets & entry doors run about 40% less, without sacrificing quality."
              },
              {
                title: "3 Week Lead Time",
                desc: "Our investment in technology allows us to deliver precision cut custom cabinets in game changing speeds."
              },
              {
                title: "Delivered",
                desc: "In the Miami, Chicago and New Jersey Area. Shippable vanities and floating shelves coming soon."
              }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs tracking-widest font-bold uppercase text-luxury-black border-b border-oak-warmth/30 pb-4 inline-block">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light italic">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-luxury-black text-white p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-oak-warmth/10 rounded-full blur-3xl translate-x-16 -translate-y-16" />
            <h3 className="text-3xl font-serif mb-6 uppercase tracking-tighter italic">If you have any further questions</h3>
            <p className="text-stone-400 mb-8 font-light tracking-wide">Please do not hesitate to Call us directly</p>
            <a href="tel:8134286942" className="text-4xl md:text-5xl font-serif text-oak-warmth hover:text-white transition-colors duration-500">
              813-428-6942
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
