"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  ArrowUpRight,
  CheckCircle
} from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="py-28 lg:py-36 bg-white border-t border-ink-200/70"
    >
      <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 space-y-8 lg:sticky lg:top-32 self-start">
          <SectionLabel index="07">Contacto</SectionLabel>
          <h2 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightest text-ink-950">
            Hablemos de su próxima
            <br />
            <span className="italic font-light text-ocean-700">operación.</span>
          </h2>
          <p className="text-ink-600 text-[16px] leading-relaxed max-w-[44ch]">
            Cuéntenos los detalles de su carga, los servicios que necesita y
            sus tiempos de operación. Le respondemos con una propuesta clara.
          </p>

          <ul className="space-y-3 pt-4">
            <ContactRow
              icon={Phone}
              label="Teléfono"
              value="+57 311 414 4013"
              href="tel:+573114144013"
            />
            <ContactRow
              icon={WhatsappLogo}
              label="WhatsApp"
              value="+57 311 414 4013"
              href="https://wa.me/573114144013"
            />
            <ContactRow
              icon={EnvelopeSimple}
              label="Correo"
              value="contacto@serincoex.com"
              href="mailto:contacto@serincoex.com"
            />
            <ContactRow
              icon={MapPin}
              label="Sede"
              value="KM 13 Vía Alterna Interna · ZF Celpa"
              href="#"
            />
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 p-4 rounded-2xl border border-ink-200 hover:border-ink-950 hover:bg-ink-50 transition-all duration-300"
      >
        <div className="w-11 h-11 rounded-xl bg-ink-100 group-hover:bg-ocean-700 flex items-center justify-center transition-colors duration-300">
          <Icon
            size={20}
            weight="duotone"
            className="text-ocean-700 group-hover:text-white transition-colors duration-300"
          />
        </div>
        <div className="flex-1">
          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
            {label}
          </div>
          <div className="text-ink-950 font-medium tracking-tight">{value}</div>
        </div>
        <ArrowUpRight
          size={18}
          weight="bold"
          className="text-ink-400 group-hover:text-ink-950 group-hover:rotate-12 transition-all duration-300"
        />
      </a>
    </li>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="rounded-[28px] border border-ink-200 bg-ink-50/50 p-7 lg:p-10 relative overflow-hidden"
    >
      {sent ? (
        <SuccessState />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Nombre completo" name="nombre" placeholder="Camila Restrepo" />
            <Field label="Empresa" name="empresa" placeholder="Andina Trading SAS" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field
              label="Correo corporativo"
              name="correo"
              type="email"
              placeholder="camila@andinatrading.co"
            />
            <Field
              label="Teléfono"
              name="telefono"
              placeholder="+57 318 472 1928"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="servicio"
              className="font-mono text-[11px] uppercase tracking-wider text-ink-600"
            >
              Servicio de interés
            </label>
            <select
              id="servicio"
              name="servicio"
              className="w-full bg-white border border-ink-200 rounded-xl px-4 py-3 text-ink-950 text-sm focus:outline-none focus:border-ink-950 transition-colors"
            >
              <option>Custodia & administración de inventarios</option>
              <option>Empaque, etiquetado y clasificación</option>
              <option>Ensamble de bienes intermedios</option>
              <option>Mantenimiento de equipos / maquinaria</option>
              <option>Servicio integral logístico</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="mensaje"
              className="font-mono text-[11px] uppercase tracking-wider text-ink-600"
            >
              Detalle de la operación
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Tipo de carga, volumen, fechas estimadas, observaciones..."
              className="w-full bg-white border border-ink-200 rounded-xl px-4 py-3 text-ink-950 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
            <p className="text-xs text-ink-500 max-w-[40ch]">
              Al enviar acepta ser contactado por nuestro equipo comercial. No
              compartimos su información.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2 bg-ink-950 text-white pl-5 pr-4 py-3.5 rounded-full text-[15px] font-medium hover:bg-ocean-700 disabled:opacity-60 transition-all duration-300 ease-out-expo active:translate-y-[1px]"
            >
              {loading ? "Enviando..." : "Enviar solicitud"}
              {!loading && (
                <span className="bg-white text-ink-950 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300 ease-out-expo">
                  <ArrowUpRight size={12} weight="bold" />
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider text-ink-600"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-ink-200 rounded-xl px-4 py-3 text-ink-950 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
      />
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 110, damping: 18 }}
      className="flex flex-col items-center text-center py-16 gap-4"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
        <CheckCircle size={32} weight="duotone" className="text-emerald-600" />
      </div>
      <h3 className="font-display text-[28px] tracking-tight text-ink-950">
        Solicitud enviada
      </h3>
      <p className="text-ink-600 max-w-[40ch]">
        Hemos recibido sus datos. Un asesor del equipo comercial le contactará
        en el transcurso del día hábil.
      </p>
    </motion.div>
  );
}
