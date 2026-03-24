"use client";

import { motion } from "framer-motion";

export function BorderBeam({ duration = 6, delay = 0 }: { duration?: number; delay?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        className="absolute -inset-[100%]"
        style={{
          background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(245,130,32,0.4) 80%, rgba(42,143,213,0.3) 90%, transparent 100%)",
        }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-crevi-primary" />
    </div>
  );
}
