"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "Avigilon",
    logo: "https://logo.clearbit.com/avigilon.com",
    url: "https://www.avigilon.com/",
  },
  {
    name: "APC by Schneider Electric",
    logo: "https://logo.clearbit.com/apc.com",
    url: "https://www.apc.com/",
  },
  {
    name: "Notifier by Honeywell",
    logo: "https://logo.clearbit.com/notifier.com",
    url: "https://www.notifier.com/",
  },
  {
    name: "Energy University",
    logo: "https://logo.clearbit.com/schneider-electric.com",
    url: "https://www.se.com/ww/en/work/campaign/energy-university/",
  },
  {
    name: "Cisco CCNA",
    logo: "https://logo.clearbit.com/cisco.com",
    url: "https://www.cisco.com/",
  },
  {
    name: "PMI",
    logo: "https://logo.clearbit.com/pmi.org",
    url: "https://www.pmi.org/",
  },
  {
    name: "BICSI RCDD",
    logo: "https://logo.clearbit.com/bicsi.org",
    url: "https://www.bicsi.org/",
  },
];

export function CertificationsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-20"
    >
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-crevi-muted/40 mb-6">
        Certificados y alianzas estratégicas
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="group relative flex items-center justify-center"
            title={cert.name}
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="h-7 w-auto object-contain brightness-0 invert opacity-30 transition-all duration-500 group-hover:opacity-80 group-hover:scale-110 sm:h-8"
              loading="lazy"
            />
            {/* Tooltip */}
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[10px] text-crevi-muted opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity">
              {cert.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
