"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="text-antique-gold font-medium tracking-wider mb-4 block">
            TRANSPORT ANALYST & RESEARCHER
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Babalola <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-antique-gold to-olive-slate">
              Olanike
            </span>
          </h1>
          <p className="text-lg text-secondary dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
            Driving smart and resilient freight systems in metropolitan Lagos. 
            Bridging the gap between sustainable urbanisation and logistics efficiency through data-driven policy research.
          </p>
          <div className="flex gap-4">
            <a 
              href="#research" 
              className="px-8 py-3 bg-antique-gold text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-antique-gold/20"
            >
              View Research
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-olive-slate text-foreground font-medium rounded-full hover:bg-olive-slate/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-antique-gold/30 p-4">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-olive-slate/30 animate-spin-slow"></div>
            <div className="w-full h-full rounded-full overflow-hidden bg-forest-night relative">
               {/* Placeholder for actual image */}
               <div className="absolute inset-0 flex items-center justify-center text-ivory-mist text-4xl font-serif italic opacity-20">
                 B.O.
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-olive-slate"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
