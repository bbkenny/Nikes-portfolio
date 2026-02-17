"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-antique-gold/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-olive-slate/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 pt-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "fit-content" }} 
            className="overflow-hidden mb-6"
          >
            <span className="text-antique-gold font-bold tracking-[0.2em] text-sm uppercase px-4 py-2 border border-antique-gold/30 rounded-full bg-antique-gold/5 backdrop-blur-sm">
              Transport Analyst & Researcher
            </span>
          </motion.div>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-6 leading-[1.1] tracking-tight">
            Babalola <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-antique-gold to-olive-slate">
              Olanike
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-secondary dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
            Architecting <span className="font-semibold text-foreground">smart, resilient freight systems</span> for the future of Lagos. Bridging policy and practice through data-driven urban research.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#research" 
              className="group px-8 py-4 bg-antique-gold text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-antique-gold/30 flex items-center gap-2"
            >
              View Research
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-olive-slate text-foreground font-medium rounded-full hover:bg-olive-slate/10 transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border border-antique-gold/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-olive-slate/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-antique-gold/50 shadow-2xl bg-forest-night grayscale hover:grayscale-0 transition-all duration-700">
               {/* Replace with actual Image component */}
               <div className="w-full h-full bg-forest-night flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-forest-night to-transparent opacity-60 z-10" />
                 <span className="text-9xl font-serif text-ivory-mist/10 group-hover:text-ivory-mist/20 transition-colors z-0">B.O.</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-olive-slate/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-olive-slate/0 via-olive-slate/50 to-olive-slate/0 overflow-hidden">
          <div className="w-full h-1/2 bg-antique-gold animate-shimmer-down" />
        </div>
      </motion.div>
    </section>
  );
}
