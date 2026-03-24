"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "Avigilon", sub: "A Motorola Solutions Company" },
  { name: "APC", sub: "Schneider Electric — Premier Partner" },
  { name: "Notifier", sub: "by Honeywell" },
  { name: "Energy University", sub: "by Schneider Electric" },
  { name: "Cisco CCNA", sub: "Routing & Switching" },
  { name: "PMI", sub: "Project Management Institute" },
  { name: "BICSI RCDD", sub: "Registered Communications Distribution Designer" },
];

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4l4.5 9.5L39 15l-7.5 7 2 10.5L24 28l-9.5 4.5 2-10.5L9 15l10.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-crevi-accent" />
      <path d="M18 32l-2 12 8-4 8 4-2-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-blue/60" />
    </svg>
  );
}

export function CertificationsSection() {
  return (
    <section id="clientes" className="relative py-28 overflow-hidden bg-gradient-to-b from-crevi-primary via-[#0b1e35] to-crevi-primary">
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-80 w-80 rounded-full bg-crevi-blue/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
            Respaldo internacional
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Certificaciones y Alianzas
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-crevi-accent/20 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crevi-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                  <BadgeIcon className="h-12 w-12 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-[11px] text-crevi-muted/60 leading-snug">
                  {cert.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
