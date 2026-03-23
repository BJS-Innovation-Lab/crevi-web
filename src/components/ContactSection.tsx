"use client";

import { MailIcon, PhoneIcon } from "./Icons";
import { FadeIn, SectionHeading } from "./ui";

export function ContactSection() {
  return (
    <section id="contacto" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Conversemos sobre su siguiente proyecto"
          description="Comparta los requerimientos de su operación y nuestro equipo preparará una propuesta alineada con sus prioridades técnicas y de seguridad."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">
                    Nombre
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Su nombre"
                    className="w-full rounded-2xl border border-white/10 bg-crevi-primary/70 px-4 py-3 text-white outline-none transition placeholder:text-crevi-muted focus:border-crevi-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="correo@empresa.com"
                    className="w-full rounded-2xl border border-white/10 bg-crevi-primary/70 px-4 py-3 text-white outline-none transition placeholder:text-crevi-muted focus:border-crevi-accent"
                  />
                </label>
              </div>

              <div className="mt-6">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">
                    Teléfono
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+52 55 0000 0000"
                    className="w-full rounded-2xl border border-white/10 bg-crevi-primary/70 px-4 py-3 text-white outline-none transition placeholder:text-crevi-muted focus:border-crevi-accent"
                  />
                </label>
              </div>

              <div className="mt-6">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">
                    Mensaje
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Describa su proyecto, sitio, alcance o requerimientos."
                    className="w-full rounded-2xl border border-white/10 bg-crevi-primary/70 px-4 py-3 text-white outline-none transition placeholder:text-crevi-muted focus:border-crevi-accent"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex rounded-full bg-crevi-accent px-7 py-4 text-sm font-semibold text-crevi-primary transition hover:bg-[#33c6e2]"
              >
                Enviar mensaje
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.12}>
            <aside className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-crevi-secondary/90 to-crevi-primary p-8 shadow-glow">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-crevi-accent">
                  Atención
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  Ingeniería y soporte comercial
                </h3>
                <p className="mt-4 text-base leading-7 text-crevi-muted">
                  Estamos disponibles para evaluar necesidades de seguridad
                  electrónica, comunicaciones críticas y despliegues de
                  infraestructura tecnológica.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:ingenieria@crevi-mx.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crevi-accent/10 text-crevi-accent">
                    <MailIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-crevi-muted">Email</span>
                    <span className="text-base font-medium text-white">
                      ingenieria@crevi-mx.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+525578352822"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crevi-accent/10 text-crevi-accent">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-crevi-muted">
                      Teléfono
                    </span>
                    <span className="text-base font-medium text-white">
                      +52 55 7835 2822
                    </span>
                  </span>
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
