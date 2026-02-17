"use client";

import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";
import { motion } from "framer-motion";

export default function Header() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-olive-slate/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-antique-gold"
        >
          <Link href="/">B.O.</Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a 
                href={link.href}
                className="text-sm font-medium hover:text-antique-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-antique-gold transition-all group-hover:w-full" />
              </a>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
}
