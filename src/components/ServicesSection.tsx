"use client";

import {
  AccessIcon,
  CameraIcon,
  FireIcon,
  NetworkIcon,
  RadioIcon,
  ShieldIcon,
} from "./Icons";
import { FadeIn, SectionHeading } from "./ui";

const services = [
  {
    title: "Videovigilancia",
    description:
      "Diseño e integración de plataformas CCTV para monitoreo inteligente, analítica y gestión centralizada.",
    icon: CameraIcon,
  },
  {
    title: "Control de Acceso",
    description:
      "Soluciones de autenticación, administración de credenciales y trazabilidad para entornos corporativos e industriales.",
    icon: AccessIcon,
  },
  {
    title: "Detección de Incendios",
    description:
      "Sistemas de detección, alarma y respuesta temprana conforme a las necesidades operativas del sitio.",
    icon: FireIcon,
  },
  {
    title: "Comunicaciones de Misión Crítica",
    description:
      "Infraestructura de voz y datos confiable para operación continua, coordinación táctica y contingencias.",
    icon: RadioIcon,
  },
  {
    title: "Redes y Telecomunicaciones",
    description:
      "Arquitecturas de conectividad, enlaces y redes empresariales orientadas a desempeño y resiliencia.",
    icon: NetworkIcon,
  },
  {
    title: "Consultoría en Seguridad",
    description:
      "Acompañamiento técnico para diagnóstico, planeación, ingeniería y ejecución de proyectos especializados.",
    icon: ShieldIcon,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Capacidades que fortalecen la continuidad operativa"
          description="Integramos tecnología, ingeniería y experiencia de campo para construir soluciones confiables en seguridad y comunicaciones."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <article className="group h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-crevi-accent/40 hover:bg-white/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-crevi-accent/10 text-crevi-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-crevi-muted">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
