"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "./BorderBeam";

const services = [
  {
    title: "SISTEMAS TECNOLÓGICOS DE SEGURIDAD FÍSICA",
    description:
      "Soluciones tecnológicas que garantizan la protección de tus bienes mediante el uso de dispositivos de última generación para la vigilancia y detección temprana de eventos vandálicos o delictivos.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        <rect x="8" y="24" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" className="text-crevi-accent" />
        <path d="M24 24V16a8 8 0 0 1 16 0v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-crevi-blue" />
        <circle cx="32" cy="40" r="4" fill="currentColor" className="text-crevi-accent" />
        <path d="M32 44v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-crevi-accent" />
      </svg>
    ),
  },
  {
    title: "SISTEMAS DE MISIÓN CRÍTICA",
    description:
      "Soluciones confiables de suma criticidad y de alta disponibilidad para no comprometer la continuidad de tu operación por alguna falla inesperada dentro de tu Centro de Datos o Cuarto de Control.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        <rect x="16" y="6" width="32" height="52" rx="3" stroke="currentColor" strokeWidth="2.5" className="text-crevi-blue" />
        <path d="M22 16h20M22 24h20M22 32h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue/50" />
        <path d="M30 38l4-8h-6l4-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
        <circle cx="32" cy="52" r="2" fill="currentColor" className="text-crevi-accent" />
        <path d="M10 14h6M10 22h6M48 14h6M48 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-crevi-accent/60" />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section id="quienes-somos" className="relative py-24 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-light italic text-white/90 sm:text-3xl"
          >
            Más de 20 años de experiencia y servicio nos respaldan
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-light italic text-white/70 sm:text-2xl"
          >
            Integración de las marcas líderes en el mercado
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light italic text-white/70 sm:text-2xl"
          >
            Soluciones que se ajustan a tus necesidades
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-10 backdrop-blur-md transition-all duration-500 hover:shadow-glow"
            >
              <BorderBeam duration={8} delay={i * 2} />
              
              <div className="relative">
                <div className="mb-8 inline-flex rounded-xl border border-white/10 bg-white/5 p-4">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-crevi-accent">
                  {service.title}
                </h3>
                <p className="text-crevi-muted leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
