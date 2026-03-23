"use client";

import { Counter, FadeIn } from "./ui";

const stats = [
  { value: 10, label: "Alianzas" },
  { value: 100, label: "Proyectos" },
  { value: 20, label: "Clientes" },
  { value: 20, label: "Años" },
];

export function StatsSection() {
  return (
    <section id="nosotros" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
