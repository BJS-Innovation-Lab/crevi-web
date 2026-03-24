"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aliados = Array.from({ length: 14 }, (_, i) => ({
  src: `/logos/aliados/aliado-${i + 1}.png`,
  alt: `Aliado estratégico ${i + 1}`,
}));

const clientes = Array.from({ length: 12 }, (_, i) => ({
  src: `/logos/clientes/cliente-${i + 1}.png`,
  alt: `Cliente ${i + 1}`,
}));

function InfiniteMarquee({
  items,
  direction = "left",
  speed = 30,
}: {
  items: { src: string; alt: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const animDir = direction === "left" ? "-50%" : "0%";
  const animStart = direction === "left" ? "0%" : "-50%";

  return (
    <div className="relative overflow-hidden py-6 group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0f1a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0f1a] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: [animStart, animDir] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[140px] h-[80px] flex items-center justify-center
                       bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]
                       hover:bg-white/[0.08] hover:border-crevi-accent/30 hover:shadow-[0_0_20px_rgba(245,130,32,0.15)]
                       transition-all duration-500 group/logo px-4"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={60}
              className="object-contain max-h-[50px] w-auto
                         brightness-[0.7] grayscale opacity-60
                         group-hover/logo:brightness-100 group-hover/logo:grayscale-0 group-hover/logo:opacity-100
                         transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section id="clientes" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-crevi-accent/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-crevi-accent border border-crevi-accent/20 rounded-full bg-crevi-accent/5">
            Aliados & Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quienes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crevi-blue to-crevi-accent">
              Confían en Nosotros
            </span>
          </h2>
          <p className="text-crevi-muted max-w-2xl mx-auto text-lg">
            Colaboramos con los líderes de la industria para ofrecer soluciones
            de clase mundial en seguridad física y misión crítica.
          </p>
        </motion.div>

        {/* Aliados Estratégicos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-crevi-blue/30 to-transparent" />
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-crevi-blue whitespace-nowrap">
              Aliados Estratégicos
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-crevi-blue/30 to-transparent" />
          </div>
          <InfiniteMarquee items={aliados} direction="left" speed={35} />
        </motion.div>

        {/* Nuestros Clientes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-crevi-accent/30 to-transparent" />
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-crevi-accent whitespace-nowrap">
              Nuestros Clientes
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-crevi-accent/30 to-transparent" />
          </div>
          <InfiniteMarquee items={clientes} direction="right" speed={40} />
        </motion.div>

        {/* Bottom stat line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-crevi-blue">14+</div>
              <div className="text-xs text-crevi-muted uppercase tracking-wider">Aliados</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-crevi-accent">12+</div>
              <div className="text-xs text-crevi-muted uppercase tracking-wider">Clientes</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-crevi-muted uppercase tracking-wider">Satisfacción</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
