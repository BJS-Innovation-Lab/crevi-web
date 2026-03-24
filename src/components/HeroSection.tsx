"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const glowX = useTransform(mouseX, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(mouseY, [0, 1], ["20%", "80%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={ref}
      id="inicio"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crevi-primary/80 via-crevi-primary/60 to-crevi-primary" />

      {/* Animated grid */}
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:80px_80px] opacity-20" />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-scanline absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-crevi-accent/20 to-transparent" />
      </div>

      {/* Mouse-tracking glow */}
      <motion.div
        className="pointer-events-none absolute -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-[150px]"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(245,130,32,0.15), rgba(42,143,213,0.08), transparent 70%)",
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[10%] h-32 w-32 rounded-full border border-crevi-accent/10 opacity-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-[8%] h-48 w-48 rounded-full border border-crevi-blue/10 opacity-30"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[15%] h-2 w-2 rounded-full bg-crevi-accent/30"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[20%] h-3 w-3 rounded-full bg-crevi-blue/20"
      />

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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crevi-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_40px_rgba(245,130,32,0.5)]"
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
