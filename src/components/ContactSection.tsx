"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-crevi-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')] bg-cover bg-center rounded-2xl" />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contactanos</h2>
            <p className="text-crevi-muted leading-relaxed mb-8 text-lg">
              ¿Tiene alguna pregunta, comentario o simplemente quiere saludar?
              ¡Nos encantaría saber de usted! Nuestro amigable equipo tiene las
              respuestas que necesita y estamos aquí para ayudarlo en todo lo que
              podamos.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-crevi-accent">
                  Consultas y ventas:
                </h3>
                <a
                  href="mailto:ingenieria@crevi-mx.com"
                  className="text-white hover:text-crevi-accent transition text-lg"
                >
                  ingenieria@crevi-mx.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+525578352822"
                  className="text-white hover:text-crevi-accent transition text-lg"
                >
                  +52 55 7835 2822
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
