"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Transport Analyst",
      company: "FAOCON Nigeria Limited",
      period: "2022 - Present",
      type: "Freelance / Full-time",
      description: "Conducting transport data analysis and supporting policy development for urban mobility projects.",
    },
    {
      role: "Public Procurement Intern",
      company: "Federal Airports Authority of Nigeria",
      period: "2019 - 2020",
      type: "Internship",
      description: "Assisted in procurement processes and supply chain documentation for aviation projects.",
    },
    {
      role: "Class Teacher",
      company: "West Coastland Foundation School",
      period: "2006 - 2015",
      type: "Full-time",
      description: "Developed educational curriculums and managed classroom administration.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="border-b-4 border-antique-gold pb-2">Professional Timeline</span>
        </h2>

        <div className="relative border-l-2 border-olive-slate/20 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-0 p-1 bg-background border-2 border-antique-gold rounded-full text-antique-gold">
                <Briefcase className="w-3 h-3" />
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-olive-slate">{exp.period}</span>
              </div>
              
              <p className="text-md font-medium text-secondary mb-2">{exp.company}</p>
              <span className="inline-block px-2 py-1 text-xs rounded bg-secondary/10 text-secondary mb-3">
                {exp.type}
              </span>
              <p className="text-secondary dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
