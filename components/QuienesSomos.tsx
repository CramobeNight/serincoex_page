"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start space-y-5">
          <SectionLabel index="01">Quiénes somos</SectionLabel>
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightest text-ink-950">
            Servicios Integrales <br />
            en{" "}
            <span className="italic font-light text-ocean-700">
              Comercio Exterior
            </span>
          </h2>
          <p className="text-sm font-mono text-ink-500 tabular">
            SERINCOEX SAS · NIT 902.015.387-2
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[20px] lg:text-[22px] leading-snug text-ink-800 max-w-[58ch]"
          >
            Operamos como socio estratégico para empresas exportadoras e
            importadoras dentro de las Zonas Francas de Colombia, ofreciendo
            soluciones logísticas{" "}
            <span className="text-ink-950 font-medium">
              ágiles, seguras y conformes
            </span>{" "}
            a la normativa aduanera nacional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] leading-relaxed text-ink-600 max-w-[65ch]"
          >
            Acompañamos cada eslabón de la cadena: desde la custodia de
            mercancía y la administración de inventarios, hasta el ensamble de
            bienes intermedios y la asistencia técnica a maquinaria y equipos.
            Cada operación se ejecuta bajo protocolos de trazabilidad y
            cumplimiento que elevan la competitividad de nuestros clientes en
            mercados internacionales.
          </motion.p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 pt-4 border-t border-ink-200">
            <Stat label="Área operativa" value="3.300" unit="m²" />
            <Stat label="Cobertura" value="24/7" unit="opera." />
            <Stat label="Cumplimiento" value="100" unit="%" />
            <Stat label="Sede" value="ZF" unit="Celpa" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  unit
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-1"
    >
      <div className="text-[11px] font-mono uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[40px] tracking-tight text-ink-950 tabular">
          {value}
        </span>
        <span className="font-mono text-sm text-ink-500">{unit}</span>
      </div>
    </motion.div>
  );
}
