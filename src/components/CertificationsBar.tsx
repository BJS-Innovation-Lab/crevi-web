"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "AVIGILON", sub: "Motorola Solutions", url: "https://www.avigilon.com/" },
  { name: "APC", sub: "Schneider Electric", url: "https://www.apc.com/" },
  { name: "NOTIFIER", sub: "by Honeywell", url: "https://www.notifier.com/" },
  { name: "SCHNEIDER", sub: "Energy University", url: "https://www.se.com/" },
  { name: "CISCO", sub: "CCNA Certified", url: "https://www.cisco.com/" },
  { name: "PMI", sub: "Project Management", url: "https://www.pmi.org/" },
  { name: "BICSI", sub: "RCDD Certified", url: "https://www.bicsi.org/" },
];

export function CertificationsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16 sm:mt-20"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 justify-center mb-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-crevi-accent/40" />
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-crevi-accent">
            <path d="M10 2l2 4.5 5 .5-3.5 3.5 1 5L10 13l-4.5 2.5 1-5L3 7l5-.5z" fill="currentColor" />
          </svg>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-crevi-accent">
            Certificados que nos respaldan
          </p>
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-crevi-accent">
            <path d="M10 2l2 4.5 5 .5-3.5 3.5 1 5L10 13l-4.5 2.5 1-5L3 7l5-.5z" fill="currentColor" />
          </svg>
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-crevi-accent/40" />
      </div>

      {/* Logos grid */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.08 }}
              className="group flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 transition-all duration-400 hover:border-crevi-accent/30 hover:bg-crevi-accent/5 hover:shadow-[0_0_20px_rgba(245,130,32,0.1)]"
            >
              {/* Shield icon */}
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-crevi-blue/40 group-hover:text-crevi-accent transition-colors duration-400">
                <path d="M12 3l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent/60 group-hover:text-crevi-accent" />
              </svg>
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors leading-none">
                  {cert.name}
                </p>
                <p className="text-[9px] text-crevi-muted/40 group-hover:text-crevi-muted/60 transition-colors leading-none mt-0.5">
                  {cert.sub}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
