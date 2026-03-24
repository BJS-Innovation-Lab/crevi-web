"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  { name: "Avigilon", logo: "/logos/avigilon.svg", url: "https://www.avigilon.com/" },
  { name: "APC", logo: "/logos/apc.svg", url: "https://www.apc.com/" },
  { name: "Notifier", logo: "/logos/honeywell.svg", url: "https://www.notifier.com/" },
  { name: "Schneider Electric", logo: "/logos/schneider.svg", url: "https://www.se.com/" },
  { name: "Cisco", logo: "/logos/cisco.svg", url: "https://www.cisco.com/" },
  { name: "PMI", logo: "/logos/pmi.svg", url: "https://www.pmi.org/" },
  { name: "BICSI", logo: "/logos/bicsi.svg", url: "https://www.bicsi.org/" },
];

export function CertificationsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16 sm:mt-20"
    >
      <div className="flex items-center gap-4 justify-center mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-crevi-muted/50">
          Certificados que nos respaldan
        </p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="group relative"
            title={cert.name}
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="h-8 w-auto object-contain opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 sm:h-9"
              loading="lazy"
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
