"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "DISEÑO",
    description: "Ingeniería de proyectos a la medida con estándares internacionales",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-12 w-12">
        <path d="M8 44l12-12 8 8 12-16 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
        <rect x="6" y="6" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-blue/40" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent/60" />
        <path d="M6 38h44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-white/20" />
        <path d="M38 6v44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-white/20" />
      </svg>
    ),
  },
  {
    title: "CONSULTORÍA",
    description: "Asesoría especializada para la toma de decisiones estratégicas en seguridad",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-12 w-12">
        <path d="M28 8v8M28 40v8M8 28h8M40 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/40" />
        <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="2" className="text-crevi-accent" />
        <circle cx="28" cy="28" r="4" fill="currentColor" className="text-crevi-accent/80" />
        <path d="M14 14l5 5M37 37l5 5M14 42l5-5M37 19l5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-crevi-blue/30" />
      </svg>
    ),
  },
  {
    title: "MANTENIMIENTOS",
    description: "Servicio preventivo y correctivo con respuesta garantizada 24/7",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-12 w-12">
        <path d="M20 12l-4 16 8 4-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
        <circle cx="36" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" className="text-crevi-blue/40" />
        <path d="M36 16v8l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent/60" />
        <path d="M32 36h16M32 42h12M32 48h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/30" />
      </svg>
    ),
  },
  {
    title: "PUESTAS EN MARCHA",
    description: "Implementación, configuración y arranque de sistemas de misión crítica",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-12 w-12">
        <path d="M28 48V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-crevi-accent/40" />
        <path d="M28 24l-8 8M28 24l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent/40" />
        <circle cx="28" cy="16" r="8" stroke="currentColor" strokeWidth="2" className="text-crevi-accent" />
        <path d="M28 12v8l3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue" />
        <path d="M12 48h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/30" />
        <circle cx="28" cy="16" r="12" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-crevi-accent/20" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-10" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-crevi-blue/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
            Soluciones integrales
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Nuestros Servicios
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-crevi-accent/20 hover:bg-white/[0.06]">
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crevi-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number watermark */}
                <span className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] select-none">
                  0{i + 1}
                </span>

                <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-crevi-muted/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom glow */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-8 w-2/3 bg-crevi-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
