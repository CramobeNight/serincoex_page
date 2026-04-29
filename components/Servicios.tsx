"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stack,
  Package,
  Tag,
  Funnel,
  Wrench,
  PuzzlePiece,
  Database,
  ArrowUpRight
} from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";

const servicios = [
  {
    icon: ShieldCheck,
    title: "Custodia & Seguridad",
    desc: "Protección de la mercancía bajo protocolos de control, vigilancia y cadena de custodia documentada.",
    span: "lg:col-span-5"
  },
  {
    icon: Stack,
    title: "Administración de Inventarios",
    desc: "Optimización y trazabilidad para clientes nacionales y extranjeros, con reporte continuo.",
    span: "lg:col-span-7"
  },
  {
    icon: Package,
    title: "Empaque & Reempaque",
    desc: "Envase, reempaque y unitarización de cargas listas para distribución internacional.",
    span: "lg:col-span-4"
  },
  {
    icon: Tag,
    title: "Etiquetado & Clasificación",
    desc: "Reclasificación, marcado y rotulado conforme a normativas del país de destino.",
    span: "lg:col-span-4"
  },
  {
    icon: PuzzlePiece,
    title: "Ensamble de Bienes",
    desc: "Procesamiento, transformación y ensamble de bienes intermedios para exportación.",
    span: "lg:col-span-4"
  },
  {
    icon: Wrench,
    title: "Mantenimiento Técnico",
    desc: "Soporte, asistencia técnica, mantenimiento preventivo y correctivo de equipos y maquinaria.",
    span: "lg:col-span-6"
  },
  {
    icon: Database,
    title: "Datos & Auditoría",
    desc: "Transmisión de datos, gestión de bases, auditoría administrativa y consultoría especializada.",
    span: "lg:col-span-6"
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-28 lg:py-36 bg-white border-y border-ink-200/70">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-7 space-y-5">
            <SectionLabel index="02">Servicios</SectionLabel>
            <h2 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightest text-ink-950">
              Una operación logística completa,
              <br />
              <span className="text-ink-500">bajo un mismo techo.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-ink-600 text-[15px] leading-relaxed max-w-[40ch]">
              Cubrimos cada etapa de la operación intra-zona franca: desde el
              ingreso de la carga hasta su despacho, con capacidad para
              consolidar servicios técnicos sobre la mercancía.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {servicios.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  span,
  index
}: {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
  span: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`group relative col-span-1 ${span} rounded-[28px] border border-ink-200/70 bg-ink-50/40 p-7 lg:p-8 hover:bg-white transition-all duration-500 ease-out-expo overflow-hidden`}
    >
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-ocean-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      <div className="relative flex items-start justify-between">
        <div className="w-11 h-11 rounded-2xl bg-ink-950 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <Icon size={20} weight="duotone" className="text-white" />
        </div>
        <ArrowUpRight
          size={18}
          weight="bold"
          className="text-ink-400 group-hover:text-ink-950 group-hover:rotate-12 transition-all duration-300"
        />
      </div>

      <div className="relative mt-8 space-y-2">
        <h3 className="font-display text-[22px] tracking-tight text-ink-950 leading-tight">
          {title}
        </h3>
        <p className="text-ink-600 text-[14.5px] leading-relaxed max-w-[42ch]">
          {desc}
        </p>
      </div>

      <div className="relative mt-6 pt-4 border-t border-ink-200/70 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400 tabular">
          {String(index + 1).padStart(2, "0")} / 07
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-ocean-700">
          ZF · CELPA
        </span>
      </div>
    </motion.article>
  );
}
