"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:56px_56px] opacity-30" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-crevi-accent/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-crevi-accent/30 bg-crevi-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-crevi-accent">
            CREVI Comunicaciones
          </span>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Servicios Profesionales en Tecnologías de Seguridad y Misión
            Crítica
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-crevi-muted sm:text-xl">
            Más de dos décadas integrando soluciones robustas en seguridad
            electrónica, telecomunicaciones y operación continua para empresas
            e instituciones.
          </p>
          <p className="mt-6 text-base font-semibold uppercase tracking-[0.28em] text-white/80">
            20+ años de experiencia
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-crevi-accent px-7 py-4 text-sm font-semibold text-crevi-primary transition hover:bg-[#33c6e2]"
            >
              Solicitar asesoría
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explorar servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-crevi-accent/20 bg-gradient-to-br from-crevi-secondary via-crevi-primary to-[#06101d] p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "Cobertura nacional",
                  "Integración de sistemas",
                  "Soporte especializado",
                  "Soluciones escalables",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="h-2 w-14 rounded-full bg-crevi-accent" />
                    <p className="mt-5 text-lg font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
