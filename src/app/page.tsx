"use client";

import Link from "next/link";
import { Factory, Banknote, Clock, Map, Award, ChevronRight, Sparkles, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function Home() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Banner Section */}
      <section className="relative h-[95vh] flex items-center justify-center bg-luxury-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" as const }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black/90" />
        
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggeredContainer}
            className="space-y-8"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-stone-400 text-[10px] tracking-[0.6em] uppercase font-bold block mb-4"
            >
              Miami / Chicago / New Jersey
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-[0.9] uppercase"
            >
              European <br />
              <span className="italic font-light text-oak-warmth">Custom Kitchens</span> <br />
              & Luxury Doors
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-10">
              <div className="w-16 h-px bg-oak-warmth/50" />
              <button className="group relative px-14 py-6 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-700 shadow-2xl overflow-hidden">
                <span className="relative z-10">Book a private consultation</span>
                <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-white transition-all duration-700 -z-0" />
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] tracking-[0.4em] text-stone-500 uppercase font-bold">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-oak-warmth to-transparent" />
        </motion.div>
      </section>

      {/* Partners / Materials Slider */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 mb-10 flex justify-between items-end">
           <div className="space-y-2">
              <span className="text-[10px] tracking-[0.4em] font-bold text-oak-warmth uppercase block">Our Partners</span>
              <h3 className="text-2xl font-serif text-luxury-black uppercase tracking-tight">World-Class <span className="italic font-light">Materials</span></h3>
           </div>
           <p className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase hidden md:block">Precision Engineered Performance</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
            className="flex whitespace-nowrap gap-20 items-center py-4"
          >
            {/* First Set of Logos */}
            {[
              { name: "Alvic", src: "/images/partners/alvic.svg" },
              { name: "Finsa", src: "/images/partners/finsa.png" },
              { name: "Egger", src: "/images/partners/egger.svg" },
              { name: "Tafisa", src: "/images/partners/tafisa.png" },
              { name: "Blum", src: null },
              { name: "Hettich", src: null },
              { name: "Senosan", src: null },
              { name: "Cleaf", src: null }
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-center min-w-[200px] grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100 group/logo">
                <div className="h-16 w-32 flex items-center justify-center bg-zinc-100/50 rounded-lg px-4 border border-transparent shadow-sm group-hover/logo:bg-white group-hover/logo:border-gray-100 group-hover/logo:shadow-lg transition-all duration-500">
                  {p.src ? (
                    <img src={p.src} alt={p.name} className="max-h-8 md:max-h-10 w-auto object-contain" />
                  ) : (
                    <span className="text-xl md:text-2xl font-serif font-bold text-stone-300 tracking-tighter">{p.name}</span>
                  )}
                </div>
              </div>
            ))}
            {/* Second Set (for seamless loop) */}
            {[
              { name: "Alvic", src: "/images/partners/alvic.svg" },
              { name: "Finsa", src: "/images/partners/finsa.png" },
              { name: "Egger", src: "/images/partners/egger.svg" },
              { name: "Tafisa", src: "/images/partners/tafisa.png" },
              { name: "Blum", src: null },
              { name: "Hettich", src: null },
              { name: "Senosan", src: null },
              { name: "Cleaf", src: null }
            ].map((p, i) => (
              <div key={`loop-${i}`} className="flex items-center justify-center min-w-[200px] grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100 group/logo">
                 <div className="h-16 w-32 flex items-center justify-center bg-zinc-100/50 rounded-lg px-4 border border-transparent shadow-sm group-hover/logo:bg-white group-hover/logo:border-gray-100 group-hover/logo:shadow-lg transition-all duration-500">
                  {p.src ? (
                    <img src={p.src} alt={p.name} className="max-h-8 md:max-h-10 w-auto object-contain" />
                  ) : (
                    <span className="text-xl md:text-2xl font-serif font-bold text-stone-300 tracking-tighter">{p.name}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dreams Section: Interior Doors */}
      <section className="relative h-[70vh] flex items-center bg-zinc-50 overflow-hidden group">
        <motion.div 
          initial={{ x: 50, opacity: 0.6 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" as const }}
          className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50 to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-8"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-oak-warmth block">#1 Porta Collections</span>
            <h2 className="text-4xl md:text-7xl font-serif text-luxury-black leading-[1.1] tracking-tighter uppercase">It all begins <br /> with your <span className="italic font-light">dreams</span></h2>
            <button className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase font-bold text-luxury-black border-b border-oak-warmth pb-2">
              Explore Interior <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dreams Section: Exterior Doors */}
      <section className="relative h-[70vh] flex items-center bg-luxury-black overflow-hidden group">
        <motion.div 
          initial={{ x: -50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" as const }}
          className="absolute left-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-black via-luxury-black to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-right space-y-8"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-oak-warmth block">Impact Series Entry</span>
            <h2 className="text-4xl md:text-7xl font-serif text-white leading-[1.1] tracking-tighter uppercase">It all begins <br /> with your <span className="italic font-light">dreams</span></h2>
            <button className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase font-bold text-white ml-auto border-b border-oak-warmth pb-2">
              Explore Entry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence / Material Narrative */}
      <section className="py-40 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-stone-300 block">Design Philosophy</span>
              <h3 className="text-3xl md:text-6xl font-serif text-luxury-black leading-[1.1] uppercase tracking-tighter">
                From Traditional <br /> to <span className="italic font-light text-oak-warmth">Modern</span>
              </h3>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg">
              We discuss every detail with our clients to deliver them exactly what they want. At the same time we offer and perform creative and elegant ideas for the most beautiful interior performing. Our responsibility is to create your dream interior and exterior.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <ShieldCheck className="w-6 h-6 text-oak-warmth" />
                  <h5 className="text-[11px] font-bold tracking-[0.2em] text-luxury-black uppercase">Durability</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">Factory-applied multi-stage finishes that last a lifetime.</p>
               </div>
               <div className="space-y-4">
                  <Zap className="w-6 h-6 text-oak-warmth" />
                  <h5 className="text-[11px] font-bold tracking-[0.2em] text-luxury-black uppercase">Efficiency</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">Virtual reality modeling before we make the first cut.</p>
               </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.02] text-[200px] font-serif select-none">M</div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="aspect-[3/4] bg-zinc-100 mt-12 overflow-hidden shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1620626011761-9963d7b69763?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Texture 1" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="aspect-[3/4] bg-zinc-50 overflow-hidden shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1556911220-e15021e87c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Texture 2" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Real Stone Veneer (New 2025 Feature) */}
      <section className="py-40 bg-luxury-black relative overflow-hidden group">
        <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620626011761-9963d7b69763?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] font-bold text-oak-warmth uppercase block">Material Innovation</span>
                <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tighter uppercase leading-none">
                  Real Stone <br />
                  <span className="italic font-light text-oak-warmth">Veneer</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-xl text-stone-400 font-light leading-relaxed max-w-xl">
                  Transform your space with the timeless beauty of natural slate. Our flexible, lightweight stone veneer combines 100% real stone with modern engineering for indoor and outdoor distinction.
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8 py-4">
                   <div className="space-y-2">
                      <span className="text-white font-serif text-2xl">4-Layer</span>
                      <p className="text-[9px] tracking-[0.2em] text-stone-500 uppercase font-bold">Patented Construction</p>
                   </div>
                   <div className="space-y-2">
                      <span className="text-white font-serif text-2xl">100% Real</span>
                      <p className="text-[9px] tracking-[0.2em] text-stone-500 uppercase font-bold">Natural Slate Surface</p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <Link 
                  href="/materials/real-stone-veneer"
                  className="px-12 py-5 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-luxury-black transition-all duration-700 shadow-2xl"
                >
                  Explore Collection
                </Link>
                <Link 
                  href="/pdf/real-stone-veneer/catalog.pdf"
                  target="_blank"
                  className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white uppercase"
                >
                  Download Info <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-10 bg-oak-warmth ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                alt="Luxury Stone Veneer Interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                 <div className="space-y-1">
                    <p className="text-white text-xs font-serif italic">Bespoke Living Spaces</p>
                    <p className="text-[8px] tracking-[0.2em] text-stone-400 uppercase font-bold">Real Stone Veneer Implementation</p>
                 </div>
                 <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Sparkles className="w-4 h-4 text-oak-warmth" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Refined) */}
      <section className="py-24 px-8 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { label: "Years Experience", value: "22" },
            { label: "Physical Showrooms", value: "03" },
            { label: "Bespoke Models", value: "400+" },
            { label: "Lead Time (Weeks)", value: "03" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2 group"
            >
              <span className="text-4xl md:text-6xl font-serif text-luxury-black group-hover:text-oak-warmth transition-colors duration-500">{stat.value}</span>
              <p className="text-[10px] tracking-[0.3em] font-bold text-stone-400 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Identity: Made in Miami */}
      <section className="py-40 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-7xl font-serif text-luxury-black text-center tracking-tighter uppercase leading-[1.1]">
              A prominence in <br />
              <span className="italic font-light text-oak-warmth drop-shadow-sm">Local Manufacturing.</span>
            </h2>
            <div className="w-16 h-px bg-oak-warmth mx-auto my-12" />
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We are a leading manufacturer where European craftsmanship meets Miami's bold innovation. 3D virtual reality technology ensures every detail of your vision is captured with absolute fidelity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[
              { icon: Factory, title: "Miami Factory", desc: "Expertly crafted in our local factory & showroom." },
              { icon: Banknote, title: "Direct Pricing", desc: "Save up to 40% with factory direct manufacturing." },
              { icon: Clock, title: "Precision Speed", desc: "3-week lead times using automated tech." },
              { icon: Map, title: "Regional Service", desc: "White-glove delivery in FL, IL, and NJ." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-zinc-50 border border-gray-100 hover:border-oak-warmth hover:bg-white transition-all duration-700 hover:shadow-2xl text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-luxury-black text-white flex items-center justify-center rounded-lg mb-8 shadow-lg">
                   <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[11px] font-bold tracking-[0.2em] text-luxury-black uppercase mb-4">{item.title}</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware / Material Excellence Row */}
      <section className="bg-luxury-black text-white py-32 px-8 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-oak-warmth/5 -skew-x-12 translate-x-1/2" />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
            >
               <h3 className="text-3xl md:text-5xl font-serif uppercase tracking-tight leading-tight">
                  World-Class <br /> <span className="italic font-light text-oak-warmth">Precision Partners</span>
               </h3>
               <p className="text-lg text-stone-400 font-light leading-relaxed">
                  We exclusively use hardware from global leaders like **Blum** and **Hettich**. Our precision-engineered hinges, slides, and lift systems are designed for a lifetime of effortless, silent movement.
               </p>
               <div className="flex flex-wrap gap-12">
                  {['Blum', 'Hettich', 'Senosan', 'Cleaf'].map((b, i) => (
                    <span key={i} className="text-[10px] tracking-[0.4em] font-bold text-stone-600 uppercase hover:text-oak-warmth transition-colors">
                       {b}
                    </span>
                  ))}
               </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="aspect-video bg-zinc-900 overflow-hidden relative"
            >
               <img src="https://images.unsplash.com/photo-1556911220-e15021e87c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" alt="Partners" />
            </motion.div>
         </div>
      </section>

      {/* Final CTA / Brand Story Footer */}
      <section className="py-40 px-8 bg-zinc-50 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <Award className="w-12 h-12 text-oak-warmth mx-auto mb-4" />
           <h2 className="text-3xl md:text-6xl font-serif text-luxury-black uppercase tracking-tighter italic">Experience Majestic</h2>
           <p className="text-xl text-gray-400 font-light leading-relaxed">
             From curated wood surfaces to structural security, we transform houses into sanctuaries. Join the hundreds of homeowners who have chosen Modern Majestic quality.
           </p>
           <button className="px-12 py-6 bg-oak-warmth text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-luxury-black transition-all duration-700 shadow-2xl">
              Visit our Showroom
           </button>
        </div>
      </section>
    </div>
  );
}
