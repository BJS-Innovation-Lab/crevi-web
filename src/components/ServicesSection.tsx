"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "DISEÑO",
    description: "Ingeniería de proyectos a la medida con estándares internacionales",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-10 w-10">
        <path d="M8 44l12-12 8 8 12-16 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
        <rect x="6" y="6" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-blue/40" />
      </svg>
    ),
  },
  {
    title: "CONSULTORÍA",
    description: "Asesoría especializada para la toma de decisiones estratégicas en seguridad",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-10 w-10">
        <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="2" className="text-crevi-accent" />
        <circle cx="28" cy="28" r="4" fill="currentColor" className="text-crevi-accent/80" />
        <path d="M28 8v8M28 40v8M8 28h8M40 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/40" />
      </svg>
    ),
  },
  {
    title: "MANTENIMIENTOS",
    description: "Servicio preventivo y correctivo con respuesta garantizada 24/7",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-10 w-10">
        <path d="M20 12l-4 16 8 4-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
        <circle cx="36" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" className="text-crevi-blue/40" />
        <path d="M36 16v8l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent/60" />
      </svg>
    ),
  },
  {
    title: "PUESTAS EN MARCHA",
    description: "Implementación, configuración y arranque de sistemas de misión crítica",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-10 w-10">
        <circle cx="28" cy="16" r="8" stroke="currentColor" strokeWidth="2" className="text-crevi-accent" />
        <path d="M28 12v8l3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue" />
        <path d="M28 48V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-crevi-accent/40" />
        <path d="M12 48h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/30" />
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
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-700 hover:border-crevi-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(245,130,32,0.15)]">
                
                {/* Background image - reveals on hover */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Dark overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-crevi-primary via-crevi-primary/90 to-crevi-primary/70 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-crevi-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-y-0 left-0 z-10 w-px bg-gradient-to-b from-transparent via-crevi-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-8">
                  {/* Number watermark */}
                  <span className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-700 select-none">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 transition-all duration-500 group-hover:border-crevi-accent/30 group-hover:bg-crevi-accent/10 group-hover:shadow-[0_0_20px_rgba(245,130,32,0.15)]">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-crevi-muted/70 leading-relaxed group-hover:text-crevi-muted transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* CTA arrow - appears on hover */}
                  <div className="mt-6 flex items-center gap-2 text-crevi-accent text-xs font-semibold uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>Ver más</span>
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute -bottom-px left-1/2 z-10 -translate-x-1/2 h-12 w-3/4 bg-crevi-accent/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
