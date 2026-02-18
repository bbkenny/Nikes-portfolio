"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "Lagos, Nigeria", coordinates: [3.3792, 6.5244] },
  { markerOffset: -15, name: "Berlin, Germany", coordinates: [13.4050, 52.5200] },
  { markerOffset: 25, name: "Stockholm, Sweden", coordinates: [18.0686, 59.3293] },
];

export default function MapSection() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section className="py-24 bg-forest-night relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-antique-gold font-bold tracking-widest text-sm uppercase">Global Impact</span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mt-2 text-ivory-mist">
            Research Across Borders
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4">
            From field studies in Lagos to policy dialogues in Europe, my work spans continents to drive sustainable urban solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl relative"
        >
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
            <ZoomableGroup center={[10, 20]} zoom={2}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#2D3748"
                      stroke="#192420"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#3D495C", outline: "none" },
                        pressed: { fill: "#C79340", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  <circle r={6} fill="#C79340" stroke="#F6F3E8" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#F6F3E8", fontSize: "10px", fontWeight: "bold" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
          
          <div className="absolute bottom-6 left-6 text-xs text-white/30 font-mono">
            Interactive Visualization • 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
