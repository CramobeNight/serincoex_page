"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ShieldCheck,
  Truck,
  Stack,
  CheckCircle
} from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden"
    >
      <BackgroundGrid />

      <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-12 gap-6 items-end relative">
        <div className="col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex w-fit items-center gap-2 pl-2 pr-4 py-1.5 rounded-full border border-ink-200 bg-white/60 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-mono tracking-wide text-ink-700">
              OPERANDO · ZONA FRANCA CELPA · KM 13
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display font-medium text-[44px] sm:text-[60px] lg:text-[78px] leading-[0.95] tracking-tightest text-ink-950"
          >
            Logística que mueve
            <br />
            su carga
            <span className="inline-block align-middle mx-3 h-[0.6em] w-[0.6em] rounded-full bg-ocean-600 translate-y-[-4px]" />
            sin fricción
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-ink-600 text-[17px] leading-relaxed max-w-[60ch]"
          >
            Servicios integrales en comercio exterior dentro de las Zonas
            Francas de Colombia. Custodia, alistamiento, etiquetado, ensamble y
            administración de inventarios para importadores y exportadores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-ink-950 text-white pl-5 pr-4 py-3.5 rounded-full text-[15px] font-medium hover:bg-ocean-700 transition-all duration-300 ease-out-expo active:translate-y-[1px]"
            >
              Solicitar cotización
              <span className="bg-white text-ink-950 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300 ease-out-expo">
                <ArrowDown size={12} weight="bold" />
              </span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-[15px] text-ink-700 hover:text-ink-950 px-4 py-3.5 rounded-full border border-ink-200 hover:border-ink-300 bg-white/60 backdrop-blur-sm transition-colors"
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2"
          >
            {[
              "Cumplimiento aduanero 100%",
              "Trazabilidad en tiempo real",
              "Operación 24/7"
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm text-ink-600"
              >
                <CheckCircle size={16} weight="fill" className="text-ocean-600" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative">
          <FloatingCards />
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function BackgroundGrid() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(14,18,23,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,18,23,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)"
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(21,100,212,0.45), transparent 60%)"
        }}
      />
    </>
  );
}

function FloatingCards() {
  return (
    <div className="relative h-[460px] lg:h-[560px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 22 }}
        className="absolute top-0 right-0 w-[78%] rounded-[28px] bg-white border border-ink-200/80 p-6 shadow-[0_30px_60px_-25px_rgba(14,18,23,0.2)] float-slow"
      >
        <div className="flex items-center justify-between text-xs font-mono text-ink-500">
          <span>OPERACIÓN · OP-{"4729"}</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            ACTIVA
          </span>
        </div>
        <div className="mt-5 text-ink-950 font-display text-[26px] tracking-tight leading-tight">
          Cont. <span className="font-mono text-[22px]">MSCU-2841073</span>
        </div>
        <div className="mt-1 text-sm text-ink-500">Alistamiento · Cliente Halcón Andino S.A.</div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <Metric label="Bultos" value="184" />
          <Metric label="Avance" value="73%" />
          <Metric label="ETA" value="14:20" />
        </div>

        <div className="mt-5 h-1.5 rounded-full bg-ink-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "73%" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-ink-950 rounded-full"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16, y: 24 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 22 }}
        className="absolute bottom-0 left-0 w-[62%] rounded-[24px] bg-ink-950 text-white p-5 shadow-[0_30px_60px_-25px_rgba(14,18,23,0.35)]"
      >
        <div className="flex items-center gap-2 text-[11px] font-mono text-ink-300 uppercase tracking-wider">
          <Truck size={14} weight="bold" />
          Custodia patio
        </div>
        <div className="mt-3 font-display text-[40px] leading-none tracking-tight tabular">
          2.300<span className="text-ocean-400">·</span>
          <span className="text-[18px] text-ink-300 font-mono">m²</span>
        </div>
        <div className="mt-1 text-xs text-ink-400">Maquinaria + contenedores</div>
        <div className="hairline opacity-30 my-4" />
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink-300">Bodega cubierta</span>
          <span className="font-mono text-ink-100">1.000 m²</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute top-[44%] right-6 w-14 h-14 rounded-2xl bg-white border border-ink-200 flex items-center justify-center shadow-[0_15px_30px_-12px_rgba(14,18,23,0.2)]"
      >
        <ShieldCheck size={22} weight="duotone" className="text-ocean-700" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.65, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute top-[12%] left-[6%] w-14 h-14 rounded-2xl bg-white border border-ink-200 flex items-center justify-center shadow-[0_15px_30px_-12px_rgba(14,18,23,0.2)] float-slow"
      >
        <Stack size={22} weight="duotone" className="text-ocean-700" />
      </motion.div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-ink-50 px-3 py-3">
      <div className="text-[10px] font-mono text-ink-500 uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 text-ink-950 font-display text-[20px] tracking-tight tabular">
        {value}
      </div>
    </div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500"
    >
      <span className="text-[10px] font-mono tracking-wider uppercase">
        Conozca más
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ArrowDown size={14} weight="bold" />
      </motion.div>
    </motion.div>
  );
}
