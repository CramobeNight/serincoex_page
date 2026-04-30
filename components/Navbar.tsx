"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#infraestructura", label: "Infraestructura" },
  { href: "#vision", label: "Visión & Misión" },
  { href: "#valores", label: "Valores" },
  { href: "#contacto", label: "Contacto" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 pt-4">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`mx-auto max-w-[1320px] flex items-center justify-between gap-6 rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-out-expo ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_-12px_rgba(14,18,23,0.18)]"
            : "bg-white/30 backdrop-blur-md border border-white/20"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-3 group pl-1"
          aria-label="Serincoex — Inicio"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Serincoex"
            className="h-9 w-auto select-none"
            draggable={false}
          />
          <span className="hidden xl:inline font-mono text-[10px] text-ink-500 tracking-wide tabular border-l border-ink-200 pl-3">
            NIT 902.015.387-2
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-ink-700 hover:text-ink-950 px-3 py-2 rounded-full transition-colors group"
              >
                <span>{l.label}</span>
                <span className="absolute inset-0 rounded-full bg-ink-100 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 bg-ink-950 text-white text-sm font-medium pl-4 pr-3 py-2 rounded-full hover:bg-ocean-700 transition-all duration-300 ease-out-expo active:scale-[0.98]"
        >
          Cotizar servicio
          <ArrowUpRight size={14} weight="bold" />
        </a>

        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden bg-ink-950 text-white p-2.5 rounded-full active:scale-95 transition-transform"
        >
          {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className="lg:hidden mx-auto max-w-[1320px] mt-2 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(14,18,23,0.18)] p-3"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-4 py-3 text-ink-800 hover:bg-ink-100 rounded-2xl transition-colors text-base"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  onClick={() => setOpen(false)}
                  href="#contacto"
                  className="flex items-center justify-between bg-ink-950 text-white px-4 py-3 rounded-2xl"
                >
                  Cotizar servicio <ArrowUpRight size={16} weight="bold" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

