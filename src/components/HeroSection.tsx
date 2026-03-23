"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-20"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crevi-primary/60 via-crevi-primary/40 to-crevi-primary" />
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />

      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Image
            src="/logo-crevi.png"
            alt="CREVI"
            width={320}
            height={100}
            className="mx-auto mb-12 h-24 w-auto object-contain"
          />

          <div className="mx-auto max-w-4xl bg-gradient-to-r from-gray-700/90 via-gray-600/90 to-gray-700/90 py-6 px-8">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Servicios Profesionales en{" "}
              <br className="hidden sm:block" />
              Tecnologías de Seguridad y Misión Crítica
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
