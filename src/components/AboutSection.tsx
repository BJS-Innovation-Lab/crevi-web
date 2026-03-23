"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: "SISTEMAS TECNOLÓGICOS DE SEGURIDAD FÍSICA",
    description:
      "Soluciones tecnológicas que garantizan la protección de tus bienes mediante el uso de dispositivos de última generación para la vigilancia y detección temprana de eventos vandálicos o delictivos.",
    icon: "🔒",
  },
  {
    title: "SISTEMAS DE MISIÓN CRÍTICA",
    description:
      "Soluciones confiables de suma criticidad y de alta disponibilidad para no comprometer la continuidad de tu operación por alguna falla inesperada dentro de tu Centro de Datos o Cuarto de Control.",
    icon: "⚡",
  },
];

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-crevi-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            {...fadeUp}
            className="text-2xl font-light italic text-white sm:text-3xl"
          >
            Más de 20 años de experiencia y servicio nos respaldan
          </motion.h2>
          <motion.h3
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-light italic text-white sm:text-2xl"
          >
            Integración de las marcas líderes en el mercado
          </motion.h3>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-light italic text-white sm:text-2xl"
          >
            Soluciones que se ajustan a tus necesidades
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-glow transition-shadow"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-crevi-accent/10 text-4xl">
                {service.icon}
              </div>
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-crevi-accent">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
