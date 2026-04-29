"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Truck,
  Package,
  Tag,
  ShieldCheck,
  Wrench,
  Database,
  Certificate
} from "@phosphor-icons/react";

const items = [
  { icon: Globe, text: "Comercio Exterior" },
  { icon: Truck, text: "Logística Integral" },
  { icon: Package, text: "Empaque & Reempaque" },
  { icon: Tag, text: "Etiquetado" },
  { icon: ShieldCheck, text: "Custodia" },
  { icon: Wrench, text: "Mantenimiento" },
  { icon: Database, text: "Gestión de Datos" },
  { icon: Certificate, text: "Cumplimiento Aduanero" }
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-ink-200/70 bg-white/40 backdrop-blur-sm py-5 overflow-hidden scroll-marquee">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 38, repeat: Infinity }}
      >
        {loop.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 text-ink-600 text-sm font-medium"
            >
              <Icon size={18} weight="duotone" className="text-ocean-700" />
              <span className="tracking-tight">{it.text}</span>
              <span className="text-ink-300">·</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
