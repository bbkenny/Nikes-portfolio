"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "PhD Researcher in Sustainable Urbanisation",
      school: "University of Lagos",
      period: "Current",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      degree: "MSc in Transport and Logistics (Distinction)",
      school: "Lagos State University",
      period: "2021 - 2022",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "BSc/Ed in Economics and Education",
      school: "Lagos State University",
      period: "2015 - 2019",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5 dark:bg-forest-night/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-antique-gold pb-2">About & Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-antique-gold mb-4">Biography</h3>
              <p className="text-secondary dark:text-gray-300 leading-relaxed">
                I am a passionate researcher and transport analyst dedicated to solving the complex logistics challenges of metropolitan Lagos. 
                My work bridges the gap between academic theory and practical policy implementation.
              </p>
              <p className="text-secondary dark:text-gray-300 leading-relaxed">
                As a recipient of the <strong className="text-foreground">2024 Lee Schippers Memorial Scholarship Award</strong>, 
                I am committed to driving the institutionalisation of "Smart Freight" systems to enhance urban resilience.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-antique-gold mb-4">Academic Journey</h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-olive-slate/10 rounded-lg text-olive-slate h-fit">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-sm text-secondary">{edu.school}</p>
                      <span className="text-xs font-mono text-antique-gold mt-1 block">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
