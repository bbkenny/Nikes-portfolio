"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

export default function Awards() {
  return (
    <section className="py-16 bg-antique-gold text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <Award className="w-12 h-12 text-white" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 block mb-1">
                Prestigious Recognition
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">
                2024 Lee Schippers Memorial Scholar
              </h2>
            </div>
          </div>

          <div className="h-px w-full lg:w-32 bg-white/30 hidden lg:block" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Star className="w-5 h-5 fill-white text-white" />
              <span className="font-bold text-lg">Africa Scholar Awardee</span>
            </div>
            <p className="text-white/80 text-sm max-w-md">
              Recognized for outstanding contribution to sustainable transport research and policy development in the African context.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
