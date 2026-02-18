"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Research() {
  const projects = [
    {
      title: "Multimodal Freight Modelling",
      category: "PhD Research",
      description: "Driving smart and resilient freight systems in Metropolitan Lagos through comparative policy review and simulation of multimodal freight policies.",
      tags: ["Urban Logistics", "Simulation", "Policy Analysis"],
      link: "#"
    },
    {
      title: "e-Procurement Adoption",
      category: "MSc Thesis",
      description: "Investigation of e-Procurement adoption and user experience in Lagos State MDAs, providing a framework for digital public sector transformation.",
      tags: ["Public Sector", "Digital Transformation", "Supply Chain"],
      link: "#"
    },
    {
      title: "Bridging Generations",
      category: "Publication",
      description: "Co-authored SLOCAT-VREF report on zero-emission futures, focusing on decentralized solar power and transit-oriented development.",
      tags: ["Sustainability", "Zero-Emission", "Global Policy"],
      link: "https://slocat.net/young-leaders-2025/"
    }
  ];

  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-antique-gold font-bold tracking-widest text-sm uppercase">Academic Focus</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Research & Projects</h2>
          </div>
          <a href="#" className="text-sm font-bold border-b-2 border-antique-gold pb-1 hover:text-antique-gold transition-colors">
            View All Publications
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <span className="text-xs font-bold text-antique-gold uppercase tracking-wider mb-2 block">
                {project.category}
              </span>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
