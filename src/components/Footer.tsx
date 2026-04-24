"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Plus, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-industrial-gray text-white py-16 px-8 mt-auto border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Our Ethos */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif tracking-widest uppercase border-b border-white/10 pb-4">Our Ethos</h4>
          <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
            Uniqueness, craftsmanship, passion, and perfection. Exclusive European design kitchens and luxury doors shop near Miami.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif tracking-widest uppercase border-b border-white/10 pb-4">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {[
              { name: "About Us", href: "/about" },
              { name: "Catalogs", href: "/catalogs" },
              { name: "FAQ", href: "/faq" },
              { name: "Contacts", href: "/contacts" }
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-sans tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Showrooms & Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif tracking-widest uppercase border-b border-white/10 pb-4">Locations & Direct Contact</h4>
          <div className="flex flex-col gap-4 text-sm font-sans text-gray-400 leading-relaxed font-light">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=5200+N+Federal+Hwy+%232,+FT+Lauderdale,+FL+33308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-2 group hover:cursor-pointer"
            >
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-steel-accent group-hover:text-white transition-colors" />
              <div>
                <p className="text-white font-medium mb-1 group-hover:text-oak-warmth transition-colors">FT Lauderdale:</p>
                <p className="group-hover:text-gray-300 transition-colors">5200 N Federal Hwy #2, FT Lauderdale, FL 33308</p>
              </div>
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=5555+Taylor+Rd+unit+B,+Naples,+FL+34109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-2 group hover:cursor-pointer"
            >
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-steel-accent group-hover:text-white transition-colors" />
              <div>
                <p className="text-white font-medium mb-1 group-hover:text-oak-warmth transition-colors">Naples:</p>
                <p className="group-hover:text-gray-300 transition-colors">5555 Taylor Rd unit B, Naples, FL 34109</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/5 mt-2">
            <Link href="mailto:contact@modernmajestic.net" className="flex items-center gap-2 hover:text-white transition-colors text-sm text-gray-400">
              <Mail className="w-4 h-4" /> contact@modernmajestic.net
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone className="w-4 h-4" /> 
              <span>813-428-6942 | 239-821-4238</span>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif tracking-widest uppercase border-b border-white/10 pb-4">Social Media</h4>
          <div className="flex flex-col gap-4">
            {[
              { name: "Instagram", icon: Instagram },
              { name: "Facebook", icon: Facebook },
              { name: "Youtube", icon: Youtube },
              { name: "Google+", icon: Plus }
            ].map((social) => (
              <Link 
                key={social.name} 
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-sans tracking-widest uppercase font-medium">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex justify-center">
        <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-sans text-center">
          &copy; 2026 Modern Majestic. Made in USA.
        </p>
      </div>
    </footer>
  );
}
