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
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl font-bold text-crevi-accent sm:text-6xl">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 10, label: "ALIANZAS\nESTRATEGICAS" },
  { value: 100, label: "PROYECTOS\nEJECUTADOS" },
  { value: 20, label: "CLIENTES\nSATISFECHOS" },
  { value: 20, label: "AÑOS DE\nEXPERIENCA" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-crevi-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 bg-gradient-to-r from-gray-700/80 via-gray-600/80 to-gray-700/80 py-4 px-6">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-white sm:text-3xl">
            CREVI Comunicaciones en Números
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.value} />
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
