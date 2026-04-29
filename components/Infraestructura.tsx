"use client";

import { motion } from "framer-motion";
import { MapPin, Buildings, Truck } from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";

export default function Infraestructura() {
  return (
    <section id="infraestructura" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-12 gap-6 items-end mb-14">
          <div className="col-span-12 lg:col-span-7 space-y-5">
            <SectionLabel index="03">Infraestructura</SectionLabel>
            <h2 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightest text-ink-950">
              <span className="text-ink-500">3.300 m²</span> dedicados a su
              operación, dentro de Zona Franca.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <FacilityCard
            icon={Truck}
            label="Patio operativo"
            value={2300}
            unit="m²"
            desc="Espacio para servicios logísticos sobre maquinaria pesada y contenedores, con capacidad de maniobra continua."
            tone="dark"
            colSpan="lg:col-span-7"
          />
          <FacilityCard
            icon={Buildings}
            label="Bodega cubierta"
            value={1000}
            unit="m²"
            desc="Área techada para alistamiento, ensamble, etiquetado y resguardo controlado de mercancía."
            tone="light"
            colSpan="lg:col-span-5"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 rounded-[28px] border border-ink-200 bg-white p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ink-100 flex items-center justify-center">
                <MapPin size={22} weight="duotone" className="text-ocean-700" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                  Ubicación estratégica
                </div>
                <div className="mt-1 font-display text-[24px] lg:text-[28px] tracking-tight text-ink-950 leading-tight">
                  KM 13 Vía Alterna Interna · Zona Franca CELPA
                </div>
              </div>
            </div>
            <a
              href="#contacto"
              className="self-start lg:self-auto inline-flex items-center gap-2 bg-ink-950 text-white text-sm font-medium pl-4 pr-3 py-2.5 rounded-full hover:bg-ocean-700 transition-colors active:scale-[0.98]"
            >
              Coordinar visita
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FacilityCard({
  icon: Icon,
  label,
  value,
  unit,
  desc,
  tone,
  colSpan
}: {
  icon: typeof Truck;
  label: string;
  value: number;
  unit: string;
  desc: string;
  tone: "dark" | "light";
  colSpan: string;
}) {
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`col-span-12 ${colSpan} rounded-[28px] p-8 lg:p-10 relative overflow-hidden ${
        dark
          ? "bg-ink-950 text-white border border-ink-900"
          : "bg-white border border-ink-200 text-ink-950"
      }`}
    >
      {dark && (
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(38,130,245,0.55), transparent 60%)"
          }}
        />
      )}

      <div className="relative flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            dark ? "bg-white/10" : "bg-ink-100"
          }`}
        >
          <Icon
            size={22}
            weight="duotone"
            className={dark ? "text-ocean-300" : "text-ocean-700"}
          />
        </div>
        <span
          className={`font-mono text-[11px] uppercase tracking-wider ${
            dark ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {label}
        </span>
      </div>

      <div className="relative mt-10 flex items-baseline gap-3">
        <Counter target={value} dark={dark} />
        <span
          className={`font-mono text-2xl ${
            dark ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {unit}
        </span>
      </div>

      <p
        className={`relative mt-6 max-w-[44ch] text-[15px] leading-relaxed ${
          dark ? "text-ink-300" : "text-ink-600"
        }`}
      >
        {desc}
      </p>
    </motion.div>
  );
}

function Counter({ target, dark }: { target: number; dark: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`font-display text-[88px] lg:text-[120px] leading-none tracking-tightest tabular ${
        dark ? "text-white" : "text-ink-950"
      }`}
    >
      {target.toLocaleString("es-CO")}
    </motion.span>
  );
}
