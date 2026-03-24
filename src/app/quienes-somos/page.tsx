"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ParticleNetwork } from "../../components/ParticleNetwork";

export default function QuienesSomos() {
  return (
    <main className="noise-bg relative min-h-screen bg-crevi-primary">
      <ParticleNetwork />

      {/* Navbar simple */}
      <header className="fixed inset-x-0 top-0 z-50 bg-crevi-primary/95 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo-crevi.png" alt="CREVI" width={160} height={50} className="h-10 w-auto object-contain" />
            </Link>
            <Link href="/" className="text-sm font-medium text-crevi-muted hover:text-white transition">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crevi-primary/80 via-crevi-primary/70 to-crevi-primary" />
        <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:80px_80px] opacity-15" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
              Nuestra historia
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Quiénes Somos
            </h1>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10 sm:p-14 backdrop-blur-sm"
          >
            <p className="text-lg leading-relaxed text-crevi-muted sm:text-xl">
              En nuestra empresa, nos enorgullece ser líderes en la realización de ingeniería y la integración tecnológica de equipos y servicios en segmentos de alto valor tecnológico y económico.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-crevi-muted sm:text-xl">
              Nuestro enfoque se centra en atender las necesidades de empresas globales y entidades gubernamentales a nivel federal y estatal. Estamos respaldados por un equipo de profesionales altamente capacitados y alianzas estratégicas confiables, lo que nos permite brindar servicios de la más alta calidad a nuestros clientes.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-crevi-muted sm:text-xl">
              Nuestra experiencia y conocimientos nos permiten realizar entregas eficientes y efectivas, cumpliendo con los estándares más exigentes de la industria. Nos dedicamos a superar las expectativas de nuestros clientes al proporcionar soluciones tecnológicas innovadoras y adaptadas a sus necesidades específicas.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-crevi-muted sm:text-xl">
              Confía en nosotros para obtener resultados excepcionales y un servicio de primera clase en todas nuestras áreas de especialización.
            </p>

            <div className="mt-10 pt-8 border-t border-white/[0.08]">
              <p className="text-sm font-bold uppercase tracking-wider text-crevi-accent">
                CREVI COMUNICACIONES S. DE R. L.
              </p>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Los mejores cuando se trata de{" "}
              <span className="bg-gradient-to-r from-crevi-accent to-crevi-blue bg-clip-text text-transparent">
                Sistemas de Seguridad Física y Misión Crítica
              </span>
            </h2>

            <div className="mt-10">
              <Link
                href="/#contacto"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crevi-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_40px_rgba(245,130,32,0.5)]"
              >
                <span className="relative z-10">Contáctanos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-crevi-accent to-crevi-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-crevi-primary py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs text-crevi-muted/40">
            © {new Date().getFullYear()} CREVI Comunicaciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
