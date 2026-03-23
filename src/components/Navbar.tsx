"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quienes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes", label: "Clientes y Aliados" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-crevi-primary/95 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/logo-crevi.png"
              alt="CREVI Comunicaciones"
              width={180}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-crevi-muted transition hover:text-crevi-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-4 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-crevi-muted transition hover:text-crevi-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
