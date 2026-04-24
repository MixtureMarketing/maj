"use client";

import React, { useState } from "react";
import { Phone, X, MessageSquare, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyPhone() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
            className="bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 rounded-3xl w-80 flex flex-col gap-6 mb-4 overflow-hidden relative"
          >
            {/* Decorative Oak Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-oak-warmth/5 rounded-full blur-3xl -z-10" />
            
            <div className="space-y-2">
              <h4 className="text-[10px] tracking-[0.5em] uppercase font-bold text-luxury-black">
                Direct Concierge
              </h4>
              <div className="w-12 h-px bg-oak-warmth/30" />
            </div>

            <div className="space-y-6">
              {[
                { label: "Main Office", tel: "8134286942", num: "813-428-6942" },
                { label: "Sales & Design", tel: "2398214238", num: "239-821-4238" },
                { label: "Naples Showroom", tel: "7288076885", num: "728.807.6885" }
              ].map((contact, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`tel:${contact.tel}`} 
                  className="flex flex-col group relative"
                >
                  <span className="text-[9px] text-stone-300 uppercase tracking-widest font-bold mb-1 transition-colors group-hover:text-oak-warmth">{contact.label}</span>
                  <span className="text-base font-serif text-luxury-black flex items-center justify-between">
                    {contact.num}
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-oak-warmth" />
                  </span>
                </motion.a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-100/50 flex items-center justify-between">
              <p className="text-[9px] text-stone-400 font-medium uppercase tracking-widest">
                Mon - Fri: 9am - 6pm
              </p>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] text-green-600 font-bold uppercase tracking-tighter">Live</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-luxury-black text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-oak-warmth transition-colors duration-700 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-oak-warmth animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
