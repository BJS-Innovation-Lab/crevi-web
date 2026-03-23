"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 10,
    label: "Alianzas Estratégicas",
    description: "Partners tecnológicos de clase mundial",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent/30" />
        <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent" />
        <circle cx="14" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent" />
        <circle cx="34" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent" />
        <path d="M24 18v4l-7 5M24 22l7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue" />
      </svg>
    ),
  },
  {
    value: 100,
    label: "Proyectos Ejecutados",
    description: "Implementaciones exitosas a nivel nacional",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent/30" />
        <path d="M16 26l5 5 11-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crevi-accent" />
      </svg>
    ),
  },
  {
    value: 20,
    label: "Clientes Satisfechos",
    description: "Empresas e instituciones confían en nosotros",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M16 20a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent/30" />
        <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent" />
        <path d="M10 38c0-6 6-10 14-10s14 4 14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue" />
      </svg>
    ),
  },
  {
    value: 20,
    label: "Años de Experiencia",
    description: "Trayectoria sólida desde 2004",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" className="text-crevi-accent/30" />
        <circle cx="24" cy="24" r="2" fill="currentColor" className="text-crevi-accent" />
        <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-crevi-accent" />
        <path d="M24 6v2M42 24h-2M24 42v-2M6 24h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-crevi-blue" />
      </svg>
    ),
  },
];

export function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-crevi-primary via-crevi-secondary/50 to-crevi-primary" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:64px_64px] opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-64 w-64 rounded-full bg-crevi-accent/5 blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-64 w-64 rounded-full bg-crevi-blue/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-crevi-accent mb-4">
            Impacto comprobado
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            CREVI Comunicaciones en Números
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-crevi-accent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-crevi-accent/20 hover:bg-white/[0.06]">
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crevi-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="mb-6">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-5xl font-bold bg-gradient-to-br from-crevi-accent via-crevi-accent to-crevi-blue bg-clip-text text-transparent sm:text-6xl">
                  <Counter target={stat.value} />
                </div>

                {/* Label */}
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-crevi-muted/70 leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom glow on hover */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-8 w-3/4 bg-crevi-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
