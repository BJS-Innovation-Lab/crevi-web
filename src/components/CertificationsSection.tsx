"use client";

import { motion } from "framer-motion";

const certifications = [
  "Avigilon — A Motorola Solutions Company",
  "APC by Schneider Electric — Premier Partner",
  "Notifier by Honeywell",
  "Energy University by Schneider Electric",
  "Cisco Certified CCNA — Routing & Switching",
  "PMI — Project Management Institute",
  "BICSI Certified RCDD — Registered Communications Distribution Designer",
];

export function CertificationsSection() {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 bg-gradient-to-r from-gray-700/80 via-gray-600/80 to-gray-700/80 py-4 px-6">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-white sm:text-3xl">
            CREVI Comunicaciones Certificados
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-center rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow min-h-[120px]"
            >
              <p className="text-center text-sm font-semibold text-gray-700 leading-snug">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
