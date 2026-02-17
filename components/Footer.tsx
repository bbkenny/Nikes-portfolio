"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/olanikebabalola", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Email", href: "mailto:olanikebabalola@gmail.com", icon: <Mail className="w-5 h-5" /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-forest-night text-ivory-mist py-12 border-t border-olive-slate/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-antique-gold mb-2">Babalola Olanike</h3>
            <p className="text-sm text-gray-400 max-w-md">
              PhD Researcher & Transport Analyst. Driving sustainable urbanisation and smart freight systems in Africa.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-olive-slate/20 rounded-full hover:bg-antique-gold hover:text-white transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-olive-slate/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Babalola Olanike. All rights reserved.</p>
          <p>Designed with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
