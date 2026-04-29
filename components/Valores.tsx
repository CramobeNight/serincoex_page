"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  HeartStraight,
  Medal,
  Lightbulb,
  Leaf
} from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";

const valores = [
  {
    icon: Handshake,
    title: "Integridad & Transparencia",
    desc: "Honestidad en cada operación logística, dentro y fuera del país."
  },
  {
    icon: HeartStraight,
    title: "Compromiso con el Cliente",
    desc: "Enfoque prioritario en la satisfacción y el éxito del cliente."
  },
  {
    icon: Medal,
    title: "Excelencia & Calidad",
    desc: "Altos estándares en la prestación de cada servicio prestado."
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Búsqueda continua de mejoras y soluciones tecnológicas."
  },
  {
    icon: Leaf,
    title: "Responsabilidad Social & Ambiental",
    desc: "Prácticas sostenibles y éticas en toda la cadena logística."
  }
];

export default function Valores() {
  return (
    <section id="valores" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 lg:col-span-7 space-y-5">
            <SectionLabel index="06">Valores</SectionLabel>
            <h2 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightest text-ink-950">
              Cinco principios que <br />
              <span className="italic font-light text-ocean-700">
                guían nuestra operación.
              </span>
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-ink-200 border-y border-ink-200">
          {valores.map((v, i) => (
            <ValorRow key={v.title} {...v} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ValorRow({
  icon: Icon,
  title,
  desc,
  index
}: {
  icon: typeof Handshake;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group grid grid-cols-12 gap-6 py-7 lg:py-9 hover:bg-white/60 transition-colors duration-300 px-2 -mx-2 rounded-2xl"
    >
      <div className="col-span-2 lg:col-span-1 flex items-start">
        <span className="font-mono text-[11px] tracking-wider text-ink-400 tabular pt-2">
          0{index + 1}
        </span>
      </div>
      <div className="col-span-10 lg:col-span-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center group-hover:bg-ocean-700 transition-colors duration-300">
            <Icon
              size={18}
              weight="duotone"
              className="text-ocean-700 group-hover:text-white transition-colors duration-300"
            />
          </div>
          <h3 className="font-display text-[24px] lg:text-[28px] tracking-tight text-ink-950 leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <p className="col-span-12 lg:col-span-6 text-ink-600 text-[16px] leading-relaxed self-center">
        {desc}
      </p>
    </motion.li>
  );
}
