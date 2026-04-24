"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "I want to remodel my kitchen. What next?",
    answer: "The first critical step is to create a wish list. Gather pictures highlighting the styles, colors, and designs you prefer. Next, take basic physical measurements of the area you want remodeled, carefully noting the specific placement of current sinks, appliances, and permanent fixtures. Finally, visit our showroom to consult deeply with our design specialists."
  },
  {
    question: "How do I choose the right cabinets for my new kitchen?",
    answer: "Identify your specific functional needs and your overarching style goals. Consult with a dedicated Modern Majestic design specialist and use our comprehensive cabinet guide to narrow down the myriad of available selections."
  },
  {
    question: "How long does it take for my cabinets to arrive once I’ve made my choice?",
    answer: "Thanks to our investments in local production technology and fast lead times, cabinets are typically expected to be completed within a very brief three to six-week timeframe."
  },
  {
    question: "What is your core design philosophy?",
    answer: "Our process focuses on 'The Dream', 'Minute Details', and 'Infinite Customization'. Our engineering teams work tirelessly to ensure all pieces fit your vision perfectly, utilizing an infinite array of custom-built materials, colors, and European styles crafted by skilled artisans."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="bg-luxury-black py-32 px-8 text-center text-white relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/faq/faq-hero.jpg')] lg:bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-oak-warmth text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block"
          >
            Exclusive Design
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif tracking-tight mb-8 uppercase leading-tight"
          >
            European Kitchen Cabinets <br/> & <span className="italic font-light text-oak-warmth">Luxury Doors Shop</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-16 h-[1px] bg-oak-warmth mx-auto mb-8" 
          />
          <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase font-bold max-w-xl mx-auto leading-relaxed">
            Miami / Fort Lauderdale / Chicago / New Jersey
          </p>
        </div>
      </section>

      {/* Showroom & Founders Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-luxury-black uppercase tracking-tighter italic">
                Visit Our <span className="text-stone-300">Showroom</span>
              </h2>
              <div className="w-12 h-px bg-oak-warmth" />
            </div>
            <div className="space-y-8 text-gray-500 font-light leading-relaxed text-md">
              <p className="text-lg text-luxury-black font-serif italic">
                "As best European Kitchen Cabinets distributor, hurricane impact entry doors company we offer free professional design, estimates and no-obligation consultations."
              </p>
              <p>
                Visit our three showrooms in Fort Lauderdale, FL, Miami Florida, Chicago and New Jersey. Some products are available for shipping, but there’s nothing like an in-person visit.
              </p>
              <p>
                Come to us to get your doors! We will meet with you one on one to ensure your vision is realized. Your satisfaction is guaranteed.
              </p>
              <div className="p-10 bg-zinc-50 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-oak-warmth/5 -translate-x-8 translate-y-8 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                <h4 className="text-luxury-black font-serif italic text-xl mb-4">A Legacy of Craftsmanship</h4>
                <p className="text-sm">
                  Karolina and Sebastian are European-born and raised and established themselves as dedicated and professional business owners in Chicago. They bring 20 plus years of experience and are experts in European design and craftsmanship.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative h-[400px] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Showroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-luxury-black text-white p-12 space-y-8">
               <h3 className="text-xl font-serif italic text-oak-warmth">Call Us</h3>
               <div className="space-y-6">
                 {[
                   "Miami best European Kitchen Cabinets Companies",
                   "European Kitchen Cabinets Shop in Miami Florida",
                   "Miami European Entry and Interior Doors companies",
                   "European Acrylic Panels Company in Miami, Chicago and New Jersey"
                 ].map((text, i) => (
                   <div key={i} className="flex items-start gap-4 group">
                     <div className="w-2 h-2 rounded-full bg-oak-warmth mt-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                     <p className="text-[11px] uppercase tracking-widest font-bold group-hover:text-oak-warmth transition-colors">{text}</p>
                   </div>
                 ))}
               </div>
               <div className="pt-6 border-t border-white/10">
                 <a href="tel:8134286942" className="text-3xl font-serif text-white hover:text-oak-warmth transition-colors">813-428-6942</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-serif italic text-luxury-black">Frequently Asked Questions</h2>
          <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase font-bold">General Information</p>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors group"
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center gap-6">
                  <span className="text-oak-warmth font-serif italic text-lg opacity-40">0{idx + 1}</span>
                  <h3 className="text-lg md:text-xl font-serif text-luxury-black tracking-tight group-hover:text-oak-warmth transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-gray-300 transition-transform duration-500",
                  openIndex === idx && "rotate-180 text-oak-warmth"
                )} />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-10 mt-[-10px]">
                      <div className="pl-14 border-l border-oak-warmth/20">
                        <p className="text-gray-500 leading-relaxed text-md font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Blocks: The Dream, Details, Infinite */}
      <section className="py-24 px-8 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <span className="text-oak-warmth text-[10px] tracking-[0.4em] font-bold uppercase">The Dream</span>
            <h3 className="text-3xl font-serif italic text-luxury-black">It all begins with your dream.</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Creating an environment that you and your family can enjoy is paramount. Through collaboration with your Plain & Fancy designer, your dream - brought to life.
            </p>
            <p className="text-[10px] tracking-widest font-bold text-luxury-black pt-4 border-t border-oak-warmth/20 inline-block uppercase">
              Custom Kitchen Cabinets Distributor in Miami
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-oak-warmth text-[10px] tracking-[0.4em] font-bold uppercase">Details</span>
            <h3 className="text-3xl font-serif italic text-luxury-black">Minute details and measurements.</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Building the perfect space requires absolute precision. Your designer works with our customer service and engineering team to ensure all the pieces fit, leaving you worry-free.
            </p>
            <p className="text-[10px] tracking-widest font-bold text-luxury-black pt-4 border-t border-oak-warmth/20 inline-block uppercase">
              Top Hurricane Impact Doors Store
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-oak-warmth text-[10px] tracking-[0.4em] font-bold uppercase">Infinite</span>
            <h3 className="text-3xl font-serif italic text-luxury-black">From contemporary to traditional.</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We have a door to fit your style. Start to finish, every cabinet and door is custom built by our skilled craftsmen. There are an infinite number of materials, colors, and styles.
            </p>
            <p className="text-[10px] tracking-widest font-bold text-luxury-black pt-4 border-t border-oak-warmth/20 inline-block uppercase italic">
              Hurricane Impact Distributor: Miami, Fort Lauderdale, Fort Myers areas.
            </p>
          </div>
        </div>
      </section>

      {/* Global Brand Presence */}
      <section className="bg-luxury-black py-24 px-8 text-center text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="text-3xl font-serif italic tracking-tighter uppercase">Miami European Kitchen Cabinets Companies</h3>
          <div className="w-12 h-px bg-oak-warmth mx-auto" />
          <p className="text-stone-400 text-sm font-light tracking-wide max-w-2xl mx-auto italic">
            "Your journey to a refined living space begins with a single consultation. We are here to ensure every detail of your European design vision is captured with absolute fidelity."
          </p>
          <div className="pt-8 flex flex-col items-center gap-6">
            <a href="/contact" className="px-12 py-4 bg-oak-warmth text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-500">
              Start Your Journey
            </a>
            <p className="text-[9px] tracking-[0.5em] text-white/40 uppercase">Fort Lauderdale / Miami / Chicago / New Jersey</p>
          </div>
        </div>
      </section>
    </div>
  );
}
