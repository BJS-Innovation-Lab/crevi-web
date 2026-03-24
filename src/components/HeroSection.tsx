"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crevi-primary/80 via-crevi-primary/60 to-crevi-primary" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:80px_80px] opacity-20" />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-crevi-accent/8 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/logo-crevi.png"
            alt="CREVI"
            width={360}
            height={110}
            className="mx-auto mb-10 h-28 w-auto object-contain drop-shadow-2xl"
          />

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
            Servicios Profesionales en{" "}
            <span className="bg-gradient-to-r from-crevi-accent via-crevi-accent to-crevi-blue bg-clip-text text-transparent">
              Tecnologías de Seguridad
            </span>{" "}
            y Misión Crítica
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-crevi-muted/90 sm:text-xl"
          >
            Más de 20 años de experiencia y servicio nos respaldan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crevi-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_30px_rgba(245,130,32,0.4)]"
            >
              <span className="relative z-10">Solicitar Asesoría</span>
              <div className="absolute inset-0 bg-gradient-to-r from-crevi-accent to-crevi-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40"
            >
              Explorar Servicios
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-white/20 p-1"
          >
            <div className="h-2 w-full rounded-full bg-crevi-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
