"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Transport Analyst",
      company: "FAOCON Nigeria Limited",
      period: "2022 - Present",
      type: "Freelance / Full-time",
      description: "Leading transport data analysis and supporting policy development for urban mobility projects in Lagos. Spearheading data-driven strategies for resilient freight systems.",
    },
    {
      role: "Public Procurement Intern",
      company: "Federal Airports Authority of Nigeria",
      period: "2019 - 2020",
      type: "Internship",
      description: "Managed procurement processes and supply chain documentation. Assisted in auditing compliance for aviation logistics contracts.",
    },
    {
      role: "Class Teacher & Administrator",
      company: "West Coastland Foundation School",
      period: "2006 - 2015",
      type: "Full-time",
      description: "Developed educational curriculums and managed classroom administration, fostering early analytical skills in students.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-antique-gold font-bold tracking-widest text-sm uppercase">Career Path</span>
          <h2 className="text-4xl font-serif font-bold mt-2">Professional Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {/* Gold Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-antique-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-antique-gold/10 rounded-xl flex items-center justify-center text-antique-gold mb-6 group-hover:bg-antique-gold group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-secondary font-medium mb-4">{exp.company}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-xs font-bold">{exp.type}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
