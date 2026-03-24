"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ParticleNetwork } from "../../components/ParticleNetwork";

const misionCritica = [
  {
    title: "Sistemas de Energía Regulada e Ininterrumpible",
    desc: "Servicios de reparación, mantenimiento, cálculo, suministro, instalación y puesta en marcha de equipos UPS y Plantas de Emergencia, así como toda la distribución de energía en Racks y gabinetes.",
  },
  {
    title: "Aires Acondicionados de Precisión",
    desc: "Servicios de reparación, mantenimiento, cálculo, suministro, instalación y puesta en marcha de equipos de aire acondicionado de precisión para cuartos controlados y Centros de Datos.",
  },
  {
    title: "Sistema de Detección y Extinción de Incendios",
    desc: "Realizamos el servicio de mantenimiento preventivo y correctivo a sistema de Incendios dentro de cuartos controlados o Centros de Datos, también podemos diseñar, suministrar, instalar y poner en marcha un sistema completo si es que así lo requiere.",
  },
  {
    title: "Plantas de Emergencias",
    desc: "Nuestro equipo altamente capacitado ofrece soluciones personalizadas para asegurar un suministro de energía confiable en situaciones críticas. Brindamos servicios completos, desde la evaluación inicial hasta la implementación y el mantenimiento preventivo.",
  },
];

const infraestructura = [
  {
    title: "Sistemas de Telecomunicaciones",
    desc: "Te ofrecemos una amplia gama de servicios relacionados con el suministro, puesta en marcha y mantenimiento de equipos de switching y servidores, así como infraestructura de telecomunicaciones.",
  },
  {
    title: "Monitoreo Ambiental en Cuartos Controlados",
    desc: "Nuestro objetivo es garantizar un entorno óptimo para tus equipos críticos, controlando constantemente factores como temperatura, humedad y calidad del aire con supervisión constante y alertas en tiempo real.",
  },
  {
    title: "Sistemas de Video Vigilancia",
    desc: "Somos expertos en el diseño, propuesta e implementación de soluciones innovadoras de videovigilancia. Ofrecemos soluciones a medida que combinan tecnología de vanguardia, análisis de video inteligente y una infraestructura sólida.",
  },
  {
    title: "Sistemas de Control de Acceso",
    desc: "Nuestro equipo de expertos en control de acceso trabaja en estrecha colaboración contigo para identificar los puntos clave de acceso, implementar protocolos de seguridad y establecer políticas de acceso adecuadas.",
  },
  {
    title: "Building Management System",
    desc: "Diseñamos sistemas BMS personalizados que optimizan el rendimiento, mejoran la eficiencia energética y aumentan la comodidad y seguridad de los ocupantes. Desde climatización hasta control de acceso y seguridad.",
  },
  {
    title: "Centros de Datos",
    desc: "Contamos con un equipo de expertos altamente capacitados que utilizan las mejores prácticas de la industria y tecnologías de vanguardia para crear una infraestructura robusta y confiable.",
  },
];

function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:border-crevi-accent/20 hover:bg-white/[0.06] hover:-translate-y-1"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crevi-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute top-3 right-4 text-4xl font-black text-white/[0.03] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-base font-bold text-white mb-3 pr-8">{title}</h3>
      <p className="text-sm text-crevi-muted/70 leading-relaxed">{desc}</p>
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-8 w-2/3 bg-crevi-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Servicios() {
  return (
    <main className="noise-bg relative min-h-screen bg-crevi-primary">
      <ParticleNetwork />

      {/* Navbar */}
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

      {/* Hero with AI-generated image */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[50vh] sm:h-[60vh]">
          <Image
            src="/datacenter-hero.png"
            alt="Centro de datos CREVI"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-crevi-primary/40 via-transparent to-crevi-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-crevi-primary/60 via-transparent to-crevi-primary/60" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center px-4"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
                Soluciones integrales
              </span>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
                Nuestros Servicios
              </h1>
              <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión Crítica */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-3">
              Alta disponibilidad
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Sistemas de Misión Crítica
            </h2>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-crevi-accent to-transparent" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {misionCritica.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Infraestructura y Seguridad */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-3">
              Protección integral
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Sistemas de Infraestructura y Seguridad Física
            </h2>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-crevi-accent to-transparent" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infraestructura.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
            ¿Necesitas una solución a la medida?
          </h2>
          <Link
            href="/#contacto"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crevi-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_40px_rgba(245,130,32,0.5)]"
          >
            <span className="relative z-10">Solicitar Asesoría</span>
            <div className="absolute inset-0 bg-gradient-to-r from-crevi-accent to-crevi-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
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
