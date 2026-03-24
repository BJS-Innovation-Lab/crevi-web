"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-crevi-primary via-crevi-secondary/30 to-crevi-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-crevi-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
            Hablemos
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contáctanos
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-crevi-muted leading-relaxed">
              ¿Tiene alguna pregunta, comentario o simplemente quiere saludar?
              ¡Nos encantaría saber de usted! Nuestro amigable equipo tiene las
              respuestas que necesita y estamos aquí para ayudarlo en todo lo que
              podamos.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="mailto:ingenieria@crevi-mx.com"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-crevi-accent/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-crevi-accent/10 border border-crevi-accent/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-crevi-accent">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-crevi-muted/60 uppercase tracking-wider">Consultas y ventas</p>
                  <p className="text-white font-medium group-hover:text-crevi-accent transition-colors">ingenieria@crevi-mx.com</p>
                </div>
              </a>

              <a
                href="tel:+525578352822"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-crevi-accent/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-crevi-blue/10 border border-crevi-blue/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-crevi-blue">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-crevi-muted/60 uppercase tracking-wider">Teléfono</p>
                  <p className="text-white font-medium group-hover:text-crevi-blue transition-colors">+52 55 7835 2822</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-crevi-muted/60">Nombre</label>
                    <input
                      type="text"
                      value={formState.nombre}
                      onChange={(e) => setFormState(s => ({ ...s, nombre: e.target.value }))}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-crevi-muted/30 outline-none transition-all focus:border-crevi-accent/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-crevi-accent/20"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-crevi-muted/60">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-crevi-muted/30 outline-none transition-all focus:border-crevi-accent/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-crevi-accent/20"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-crevi-muted/60">Teléfono</label>
                  <input
                    type="tel"
                    value={formState.telefono}
                    onChange={(e) => setFormState(s => ({ ...s, telefono: e.target.value }))}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-crevi-muted/30 outline-none transition-all focus:border-crevi-accent/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-crevi-accent/20"
                    placeholder="+52 55 ..."
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-crevi-muted/60">Mensaje</label>
                  <textarea
                    rows={4}
                    value={formState.mensaje}
                    onChange={(e) => setFormState(s => ({ ...s, mensaje: e.target.value }))}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-crevi-muted/30 outline-none transition-all focus:border-crevi-accent/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-crevi-accent/20"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-crevi-accent py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_30px_rgba(245,130,32,0.3)]"
                >
                  <span className="relative z-10">Enviar Mensaje</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-crevi-accent to-crevi-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
