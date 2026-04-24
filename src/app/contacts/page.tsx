"use client";

import React, { useState } from "react";
import { MapPin, Phone, Upload, Send, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Title Bar Section */}
      <section className="bg-luxury-black py-32 px-8 text-center text-white border-b border-white/5 relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif tracking-tight uppercase leading-tight mb-8"
          >
            Contact <span className="italic font-light text-oak-warmth">Us.</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-16 h-[1px] bg-oak-warmth mx-auto mb-8" 
          />
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-stone-400">Visit our Showrooms</p>
        </div>
      </section>

      {/* Three Locations Grid Section */}
      <section className="py-24 px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-oak-warmth text-[10px] tracking-[0.5em] uppercase font-bold"
            >
              We invite you to our
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-black tracking-tighter uppercase italic">
              Three <span className="font-light text-stone-300 not-italic">Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Florida European Kitchen Cabinets Company",
                location: "FLORIDA - FT LAUDERDALE",
                address: "5200 N Federal Hwy #2, FT Lauderdale, FL 33308",
                mapLink: "https://www.google.com/maps/dir/?api=1&destination=5200+N+Federal+Hwy+%232,+FT+Lauderdale,+FL+33308",
                image: "https://images.unsplash.com/photo-1600585154340-be6199fbfd0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Chicago European Kitchen Cabinets Company",
                location: "FLORIDA - NAPLES",
                address: "5555 Taylor Rd unit B, Naples, FL 34109",
                mapLink: "https://www.google.com/maps/dir/?api=1&destination=5555+Taylor+Rd+unit+B,+Naples,+FL+34109",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Miami Best European Kitchen Cabinets",
                location: "MIAMI - FACTORY & SHOWROOM",
                address: "Miami, FL (Main Production Hub) - Call for Address",
                mapLink: "tel:8134286942",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((loc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-zinc-50 border border-gray-100 hover:border-oak-warmth transition-all duration-700 hover:shadow-2xl overflow-hidden"
              >
                <div className="h-64 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src={loc.image} alt={loc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-[10px] tracking-[0.3em] font-bold text-oak-warmth uppercase">{loc.location}</h4>
                    <h3 className="text-lg font-serif text-luxury-black group-hover:text-oak-warmth transition-colors leading-snug">{loc.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed h-12">{loc.address}</p>
                  <a 
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 border-t border-gray-200 text-[10px] tracking-[0.4em] font-bold uppercase text-luxury-black hover:text-oak-warmth transition-colors flex items-center justify-between group/link"
                  >
                    Drive to location <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Information */}
        <div className="p-12 lg:p-24 bg-zinc-50 flex flex-col justify-center lg:border-r border-gray-100">
          <div className="space-y-12">
            <div>
              <h2 className="text-xs tracking-[0.4em] uppercase font-bold text-oak-warmth mb-6">Local Presence</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed italic mb-10">
                “Feel free to get in touch with our experts to address whatever types of questions you may have.”
              </p>
            </div>

            <div className="space-y-10">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=5200+N+Federal+Hwy+%232,+FT+Lauderdale,+FL+33308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-6 group hover:cursor-pointer"
              >
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 group-hover:bg-oak-warmth transition-colors">
                  <MapPin className="w-6 h-6 text-luxury-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-oak-warmth transition-colors">FT Lauderdale</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">5200 N Federal Hwy #2, <br /> FT Lauderdale, FL 33308</p>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=5555+Taylor+Rd+unit+B,+Naples,+FL+34109" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-6 group hover:cursor-pointer"
              >
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 group-hover:bg-oak-warmth transition-colors">
                  <MapPin className="w-6 h-6 text-luxury-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-oak-warmth transition-colors">Naples</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">5555 Taylor Rd unit B, <br /> Naples, FL 34109</p>
                </div>
              </a>
            </div>

            <div className="pt-10 border-t border-gray-200 space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 block mb-2">Florida Market Direct</span>
                <a href="tel:8134286942" className="text-3xl md:text-4xl font-serif text-luxury-black hover:text-oak-warmth transition-colors">
                  813-428-6942
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 block mb-2">Naples Local line</span>
                <a href="tel:7288076885" className="text-3xl md:text-4xl font-serif text-luxury-black hover:text-oak-warmth transition-colors">
                  728.807.6885
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Gen Form */}
        <div className="p-12 lg:p-24 bg-white">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-serif italic mb-8">Request a Professional Quote</h3>
            
            {formStatus === "success" ? (
              <div className="py-12 flex flex-col items-center text-center space-y-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h4 className="text-xl font-serif">Message Sent Successfully</h4>
                <p className="text-gray-500 text-sm">Our experts will review your request and project documents shortly.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="text-oak-warmth text-xs font-bold tracking-widest uppercase border-b border-oak-warmth pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full px-6 py-4 bg-zinc-50 border border-gray-100 focus:border-oak-warmth focus:ring-0 transition-all outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    required
                    className="w-full px-6 py-4 bg-zinc-50 border border-gray-100 focus:border-oak-warmth focus:ring-0 transition-all outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    className="w-full px-6 py-4 bg-zinc-50 border border-gray-100 focus:border-oak-warmth focus:ring-0 transition-all outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                
                <div className="group border-2 border-dashed border-gray-100 hover:border-oak-warmth/40 p-8 text-center transition-all bg-zinc-50/50 rounded-sm">
                  <label className="cursor-pointer flex flex-col items-center gap-3">
                    <Upload className="w-6 h-6 text-gray-300 group-hover:text-oak-warmth transition-colors" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-luxury-black transition-colors">
                      Attach file (Upload project documents or specifications for a quote)
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <div>
                  <textarea 
                    placeholder="Message / Project Details" 
                    rows={6}
                    className="w-full px-6 py-4 bg-zinc-50 border border-gray-100 focus:border-oak-warmth focus:ring-0 transition-all outline-none text-sm placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className={cn(
                    "w-full py-6 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-luxury-black transition-all duration-700 flex items-center justify-center gap-3 shadow-xl",
                    formStatus === "submitting" && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {formStatus === "submitting" ? "Processing..." : (
                    <>
                      Send Message & Request Quote
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
