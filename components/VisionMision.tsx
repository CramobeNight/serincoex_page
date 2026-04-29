"use client";

import { motion } from "framer-motion";
import {
  ChartLineUp,
  Certificate,
  ShieldCheck,
  Cpu
} from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";

const objetivos = [
  {
    icon: ChartLineUp,
    title: "Eficiencia Operativa",
    desc: "Reducir tiempos y costos en los procesos dentro de Zonas Francas."
  },
  {
    icon: Certificate,
    title: "Cumplimiento Normativo",
    desc: "100% de adherencia a las regulaciones aduaneras vigentes."
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    desc: "Cadena logística blindada contra riesgos y actividades ilícitas."
  },
  {
    icon: Cpu,
    title: "Tecnología",
    desc: "Herramientas digitales avanzadas para trazabilidad en tiempo real."
  }
];

export default function VisionMision() {
  return (
    <section
      id="vision"
      className="py-28 lg:py-36 bg-ink-950 text-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)"
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(38,130,245,0.6), transparent 60%)"
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 space-y-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 space-y-5">
            <SectionLabelDark index="04">Hacia dónde vamos</SectionLabelDark>
            <h2 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightest text-white">
              Visión & <br />
              <span className="italic font-light text-ocean-300">Misión</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-4 rounded-[28px] bg-white/[0.04] border border-white/10 p-8 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-ocean-300 mb-4">
              Visión
            </div>
            <p className="text-[18px] leading-snug text-white">
              Ser el principal socio estratégico en servicios logísticos en las
              Zonas Francas de Colombia, reconocido por la excelencia
              operativa, la innovación tecnológica y la confiabilidad de los
              procesos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-4 rounded-[28px] bg-white/[0.04] border border-white/10 p-8 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-ocean-300 mb-4">
              Misión
            </div>
            <p className="text-[18px] leading-snug text-white">
              Facilitar las operaciones en las Zonas Francas de Colombia con
              soluciones integrales, ágiles y seguras, optimizando la cadena de
              suministro y garantizando el cumplimiento normativo aduanero.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabelDark index="05">Objetivos</SectionLabelDark>
            <h3 className="mt-5 font-display text-[32px] lg:text-[42px] leading-tight tracking-tight text-white">
              Cuatro frentes estratégicos
              <br />
              <span className="text-ink-400">que orientan cada decisión.</span>
            </h3>
          </div>

          <ul className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[24px] overflow-hidden border border-white/10">
            {objetivos.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.li
                  key={o.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-ink-950 p-7 group hover:bg-ink-900/60 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-ocean-700 transition-colors">
                      <Icon
                        size={18}
                        weight="duotone"
                        className="text-ocean-300 group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-ink-400 tabular">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-6 font-display text-[22px] tracking-tight text-white leading-tight">
                    {o.title}
                  </div>
                  <div className="mt-2 text-[14px] text-ink-300 leading-relaxed">
                    {o.desc}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionLabelDark({
  index,
  children
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="font-mono text-[11px] tracking-wider text-ocean-300 tabular">
        {index}
      </span>
      <span className="h-px w-10 bg-white/30" />
      <span className="font-mono text-[11px] tracking-wider uppercase text-ink-300">
        {children}
      </span>
    </motion.div>
  );
}
