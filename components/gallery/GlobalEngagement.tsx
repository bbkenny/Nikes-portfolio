"use client";

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: "/images/travel1.jpg", alt: "Fieldwork in Lagos", caption: "Urban Freight Analysis, Lagos" },
  { src: "/images/travel2.jpg", alt: "Conference in Europe", caption: "SLOCAT-VREF Summit, Berlin" },
  { src: "/images/travel3.jpg", alt: "Research Presentation", caption: "Stakeholder Engagement Session" },
  { src: "/images/travel4.jpg", alt: "Site Visit", caption: "Port Logistics Assessment" },
]

export default function GlobalEngagement() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section id="global-engagement" className="py-24 bg-ivory-mist dark:bg-forest-night transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Global Engagement & <br />
              <span className="text-antique-gold">Field Experience</span>
            </h2>
            <p className="text-lg text-secondary dark:text-gray-300 leading-relaxed">
              My work extends beyond academic theory into the vibrant, chaotic, and dynamic reality of urban transport systems. 
              From the bustling ports of Lagos to international policy summits in Europe, I engage directly with the environments I study.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olive-slate/10 flex items-center justify-center text-olive-slate">
                  🌍
                </div>
                <div>
                  <h4 className="font-bold">International Discourse</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Contributing to global conversations on zero-emission transport.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  📊
                </div>
                <div>
                  <h4 className="font-bold">On-Ground Analysis</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Direct data collection and stakeholder engagement in African cities.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl" ref={emblaRef}>
              <div className="flex">
                {images.map((img, index) => (
                  <div className="flex-[0_0_100%] min-w-0 relative h-[400px] bg-gray-200 dark:bg-gray-800" key={index}>
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono">
                      [Image: {img.alt}]
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={scrollPrev} 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-antique-gold backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext} 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-antique-gold backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === selectedIndex ? "bg-antique-gold w-8" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
