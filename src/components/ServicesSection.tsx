"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "DISEÑO",
    icon: "📐",
  },
  {
    title: "CONSULTORIA",
    icon: "📋",
  },
  {
    title: "MANTENIMIENTOS",
    icon: "🔧",
  },
  {
    title: "PUESTAS EN MARCHA",
    icon: "🚀",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-crevi-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 bg-gradient-to-r from-gray-700/80 via-gray-600/80 to-gray-700/80 py-4 px-6">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-white sm:text-3xl">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm hover:bg-white/10 hover:border-crevi-accent/30 transition-all"
            >
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-white/10 text-5xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-crevi-accent">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
