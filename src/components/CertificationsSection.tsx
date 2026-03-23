"use client";

import { FadeIn, SectionHeading } from "./ui";

const badges = [
  "Certificación Integrador",
  "Partner Tecnológico",
  "Cumplimiento Normativo",
  "Especialista en Redes",
  "Seguridad Electrónica",
  "Misión Crítica",
];

export function CertificationsSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certificaciones"
          title="Respaldo técnico para proyectos de alta exigencia"
          description="Este espacio puede albergar insignias oficiales de fabricantes, certificaciones de ingeniería y acreditaciones de industria."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {badges.map((badge, index) => (
            <FadeIn key={badge} delay={index * 0.05}>
              <div className="rounded-[1.75rem] border border-dashed border-crevi-accent/35 bg-gradient-to-br from-white/8 to-transparent p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-crevi-accent/30 bg-crevi-accent/10 text-xl font-semibold text-crevi-accent">
                  {index + 1}
                </div>
                <p className="mt-5 text-lg font-medium text-white">{badge}</p>
                <p className="mt-3 text-sm leading-6 text-crevi-muted">
                  Placeholder para logotipo o badge oficial de certificación.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
