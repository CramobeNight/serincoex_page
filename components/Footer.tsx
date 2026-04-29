"use client";

import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple
} from "@phosphor-icons/react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-white pt-20 pb-10 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)"
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-12 gap-6 pb-16">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <Mark />
              <div>
                <div className="font-display text-[22px] tracking-tight">
                  Serincoex
                </div>
                <div className="font-mono text-[11px] text-ink-400 tabular">
                  SAS · NIT 902.015.387-2
                </div>
              </div>
            </div>
            <h3 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightest text-white max-w-[14ch]">
              Logística que mueve su carga sin fricción.
            </h3>
          </div>

          <div className="col-span-6 lg:col-span-2 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
              Navegación
            </div>
            <ul className="space-y-2 text-ink-200">
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#infraestructura" className="hover:text-white transition-colors">Infraestructura</a></li>
              <li><a href="#valores" className="hover:text-white transition-colors">Valores</a></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-4 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
              Contacto directo
            </div>
            <ul className="space-y-3 text-ink-200">
              <li>
                <a href="tel:+573114144013" className="hover:text-white transition-colors">
                  +57 311 414 4013
                </a>
              </li>
              <li>
                <a href="mailto:contacto@serincoex.com" className="hover:text-white transition-colors">
                  contacto@serincoex.com
                </a>
              </li>
              <li className="text-ink-300 text-sm leading-relaxed">
                KM 13 Vía Alterna Interna<br />
                Zona Franca CELPA · Colombia
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-2">
              <SocialLink href="https://wa.me/573114144013" label="WhatsApp">
                <WhatsappLogo size={16} weight="bold" />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/serincoex"
                label="Instagram"
              >
                <InstagramLogo size={16} weight="bold" />
              </SocialLink>
              <SocialLink
                href="https://facebook.com/sericonex"
                label="Facebook"
              >
                <FacebookLogo size={16} weight="bold" />
              </SocialLink>
              <SocialLink
                href="mailto:contacto@serincoex.com"
                label="Correo"
              >
                <EnvelopeSimple size={16} weight="bold" />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="hairline opacity-30" />

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ink-400 font-mono tabular">
          <div>© {year} SERINCOEX SAS · Todos los derechos reservados</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Operación activa · Zona Franca Celpa
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-ink-200 hover:bg-white hover:text-ink-950 transition-all duration-300 active:scale-95"
    >
      {children}
    </a>
  );
}

function Mark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className="rounded-xl" aria-hidden>
      <defs>
        <linearGradient id="mf" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4fa6ff" />
          <stop offset="100%" stopColor="#1450ab" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="10" fill="url(#mf)" />
      <path
        d="M9 23 L18 9 L27 23 M13 19 H23"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
