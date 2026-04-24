"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Youtube,
  Plus,
  ChevronDown,
  Menu,
  X,
  Phone,
  ChefHat,
  DoorClosed,
  Shield,
  Layers,
  Archive,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRODUCT_COLUMNS = [
  {
    name: "Kitchen Cabinets",
    href: "/products/kitchen-cabinets",
    icon: ChefHat,
    desc: "Luxury European Style & Custom Designs",
  },
  {
    name: "Acrylic Panels",
    href: "/products/acrylic-panels",
    icon: Layers,
    desc: "High-Gloss & Modern Decorative Surfaces",
  },
  {
    name: "Interior Doors",
    href: "/products/interior-doors",
    icon: DoorClosed,
    desc: "Porta Collections & Bespoke Finishes",
  },
  {
    name: "Impact Doors",
    href: "/products/impact-doors",
    icon: Shield,
    desc: "Hurricane-Grade Security Entry Doors",
  },
  {
    name: "Custom Closets",
    href: "/products/custom-closets",
    icon: Archive,
    desc: "Bespoke Storage & Walk-in Solutions",
  },
  {
    name: "Real Stone Veneer",
    href: "/materials/real-stone-veneer",
    icon: Layers,
    desc: "Transform Your Home with Flexible Natural Stone",
  },
];

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "CATALOGS", href: "/catalogs" },
  { name: "PRODUCTS", href: "/products/kitchen-cabinets", isMega: true },
  { name: "MATERIALS", href: "/materials" },
  { name: "FAQ", href: "/faq" },
  { name: "CONTACTS", href: "/contacts" },
];

// Animation Variants for Mega Menu
const megaMenuVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for luxury feel
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Top Utility Bar */}
      <div
        className={cn(
          "w-full text-stone-400 py-2 px-8 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.2em] font-sans border-b transition-all duration-500",
          isScrolled
            ? "h-0 py-0 opacity-0 overflow-hidden border-transparent"
            : "bg-luxury-black border-white/5 opacity-100"
        )}
      >
        <div className="flex items-center gap-4">
          <span className="uppercase font-bold text-stone-500">
            LOCALLY MADE CABINETS WITH FAST LEAD TIMES
          </span>
        </div>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <div className="flex items-center gap-4 md:mr-6 md:border-r md:border-white/20 md:pr-6">
            <Link
              href="tel:8134286942"
              className="hover:text-steel-accent transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> 813-428-6942
            </Link>
            <span className="hidden md:inline opacity-30">|</span>
            <Link
              href="tel:2398214238"
              className="hover:text-steel-accent transition-colors"
            >
              239-821-4238
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Instagram" className="hover:text-steel-accent transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-steel-accent transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-steel-accent transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </Link>
            <Link href="#" aria-label="Google Plus" className="hover:text-steel-accent transition-colors">
              <Plus className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation — transparent on top, glass on scroll */}
      <nav
        className={cn(
          "w-full transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.08)] border-b border-gray-100 py-4"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1800px] mx-auto px-12 grid grid-cols-3 items-center">

          {/* ── Column 1: Logo ── */}
          <div className="flex justify-start">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-[180px] h-[50px]">
                <Image
                  src="/images/logo.png"
                  alt="Modern Majestic logo"
                  fill
                  className="object-contain object-left"
                  priority
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const fallback = document.getElementById("logo-text-fallback");
                    if (fallback) fallback.style.display = "block";
                  }}
                />
                {/* Fallback Text with higher contrast */}
                <span
                  id="logo-text-fallback"
                  className={cn(
                    "text-xl md:text-2xl font-serif tracking-[0.15em] transition-colors duration-500",
                    isScrolled ? "text-luxury-black font-bold" : "text-white drop-shadow-md font-semibold"
                  )}
                  style={{ display: "none" }}
                >
                  MODERN <span className="font-light italic text-oak-warmth">MAJESTIC</span>
                </span>
              </div>
            </Link>
          </div>

          {/* ── Column 2: Centered Navigation ── */}
          <div className="hidden lg:flex justify-center items-center gap-14">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.isMega && setActiveDropdown(link.name)}
                onMouseLeave={() => link.isMega && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[10px] font-sans font-bold tracking-[0.4em] transition-all duration-500 uppercase flex items-center gap-1.5",
                    isScrolled
                      ? "text-luxury-black/70 hover:text-luxury-black"
                      : "text-white/80 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
                    activeDropdown === link.name && (isScrolled ? "text-luxury-black" : "text-white")
                  )}
                >
                  {link.name}
                  {link.isMega && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-300",
                        activeDropdown === link.name && "rotate-180 text-oak-warmth"
                      )}
                    />
                  )}
                </Link>

                {/* Underline indicator */}
                <motion.span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-px bg-oak-warmth",
                  )}
                  initial={{ width: 0, x: "-50%" }}
                  animate={{ width: activeDropdown === link.name ? "60%" : 0 }}
                  transition={{ duration: 0.4, ease: "circOut" as const }}
                />

                {/* Mega Menu Dropdown — Redesigned for Premium Look */}
                <AnimatePresence>
                  {activeDropdown === link.name && link.isMega && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="fixed left-0 right-0 w-[100vw] bg-white/98 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] border-y border-gray-100/50 py-20 z-[100]"
                      style={{ top: isScrolled ? "73px" : "105px" }}
                    >
                      <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-6 gap-8">
                        {PRODUCT_COLUMNS.map((col) => (
                          <motion.div key={col.name} variants={menuItemVariants}>
                            <Link
                              href={col.href}
                              className="group/product flex flex-col gap-8 p-10 hover:bg-zinc-50/80 transition-all duration-700 rounded-2xl border border-transparent hover:border-zinc-100 hover:shadow-xl group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-16 h-16 flex items-center justify-center bg-white shadow-sm border border-zinc-50 group-hover/product:bg-luxury-black group-hover/product:text-white transition-all duration-700 rounded-xl">
                                <col.icon className="w-7 h-7 text-oak-warmth group-hover/product:text-white transition-colors duration-700" />
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-[16px] font-serif font-bold tracking-tight text-luxury-black group-hover/product:text-oak-warmth transition-colors duration-500 uppercase">
                                  {col.name}
                                </h4>
                                <p className="text-[12px] text-gray-400 leading-relaxed font-light line-clamp-3">
                                  {col.desc}
                                </p>
                              </div>
                              <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-luxury-black/30 group-hover/product:text-luxury-black transition-all uppercase pt-2">
                                Explorer{" "}
                                <ArrowRight className="w-3.5 h-3.5 group-hover/product:translate-x-3 transition-transform duration-700" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="max-w-[1400px] mx-auto px-12 mt-20 pt-12 border-t border-zinc-100/80 flex justify-between items-center">
                        <div className="flex gap-12 text-[10px] tracking-[0.4em] font-bold text-stone-300 uppercase">
                           <span className="hover:text-luxury-black transition-colors cursor-default">Miami Showroom</span>
                           <span className="hover:text-luxury-black transition-colors cursor-default">Chicago Center</span>
                           <span className="hover:text-luxury-black transition-colors cursor-default">NJ Logistics</span>
                        </div>
                        <Link
                          href="/catalogs"
                          className="group/link text-[10px] font-bold tracking-[0.4em] text-oak-warmth uppercase flex items-center gap-3 hover:text-luxury-black transition-colors"
                        >
                          Discover All Collections 
                          <div className="relative overflow-hidden w-8 h-px bg-oak-warmth group-hover/link:bg-luxury-black transition-colors">
                             <motion.div 
                                className="absolute inset-0 bg-white"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" as const }}
                             />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── Column 3: CTA & Mobile Trigger ── */}
          <div className="flex justify-end items-center gap-8">
            {/* CTA Button — matches inspiration */}
            <Link 
              href="/contacts"
              className={cn(
                "hidden md:block px-10 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-700 border",
                isScrolled
                  ? "bg-luxury-black text-white border-luxury-black hover:bg-oak-warmth hover:border-oak-warmth hover:shadow-xl"
                  : "bg-white/5 text-white border-white/20 hover:bg-white hover:text-luxury-black backdrop-blur-sm"
              )}
            >
              Book Online
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "p-2 transition-colors rounded-md lg:hidden",
                isScrolled
                  ? "text-luxury-black hover:bg-zinc-100"
                  : "text-white hover:bg-white/10 drop-shadow-md"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Slide from Right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-[90] lg:hidden backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[380px] bg-white z-[110] lg:hidden shadow-2xl flex flex-col pt-28 pb-12 px-14"
            >
              <div className="flex flex-col gap-10">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <Link
                      href={link.href}
                      onClick={() => !link.isMega && setIsMobileMenuOpen(false)}
                      className="text-3xl font-serif tracking-tight border-b border-gray-100 pb-3 flex justify-between items-center group decoration-oak-warmth underline-offset-8 hover:underline"
                    >
                      {link.name}
                      {link.isMega && (
                        <ChevronDown className="w-6 h-6 text-gray-300" />
                      )}
                    </Link>
                    {link.isMega && (
                      <div className="flex flex-col gap-6 pl-6 border-l border-oak-warmth/20">
                        {PRODUCT_COLUMNS.map((col) => (
                          <Link
                            key={col.name}
                            href={col.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex flex-col gap-1 py-1 group"
                          >
                            <span className="text-sm font-sans font-bold text-luxury-black uppercase tracking-[0.1em] group-hover:text-oak-warmth transition-colors">
                              {col.name}
                            </span>
                            <span className="text-[10px] text-gray-400 font-light italic">
                              {col.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto space-y-8">
                 <Link 
                    href="/contacts" 
                    className="flex items-center justify-center w-full py-6 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-luxury-black transition-all duration-500 shadow-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote
                 </Link>
                 <div className="flex justify-center gap-10 text-stone-400">
                    <Instagram className="w-6 h-6 hover:text-luxury-black transition-colors" />
                    <Facebook className="w-6 h-6 hover:text-luxury-black transition-colors" />
                    <Youtube className="w-6 h-6 hover:text-luxury-black transition-colors" />
                 </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-10 right-10 p-3 text-luxury-black hover:bg-zinc-100 rounded-full transition-all"
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
