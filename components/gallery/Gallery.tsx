"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const galleryImages = [
  { id: 1, height: "h-64", color: "bg-olive-slate/20", caption: "Data Collection" },
  { id: 2, height: "h-96", color: "bg-antique-gold/20", caption: "Policy Summit" },
  { id: 3, height: "h-64", color: "bg-forest-night/40", caption: "Urban Mapping" },
  { id: 4, height: "h-80", color: "bg-olive-slate/30", caption: "Team Briefing" },
  { id: 5, height: "h-64", color: "bg-antique-gold/10", caption: "Field Survey" },
  { id: 6, height: "h-80", color: "bg-forest-night/30", caption: "Port Visit" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Moments in Research</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A visual archive of field visits, stakeholder meetings, and the daily reality of transport research.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer ${img.height} ${img.color}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 opacity-50">
                Image {img.id}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium text-lg block">{img.caption}</span>
                  <div className="mt-2 inline-flex items-center gap-1 text-antique-gold text-sm font-bold uppercase tracking-wider">
                    <Plus className="w-4 h-4" /> View Full
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
