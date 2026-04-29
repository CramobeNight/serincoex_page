import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Serincoex — Servicios Integrales en Comercio Exterior",
  description:
    "Socio estratégico en logística para Zonas Francas de Colombia. Custodia, alistamiento, etiquetado, ensamble y administración de inventarios para importadores y exportadores.",
  metadataBase: new URL("https://www.serincoex.com"),
  openGraph: {
    title: "Serincoex — Logística en Zonas Francas de Colombia",
    description:
      "Operaciones logísticas ágiles, seguras y conformes a la normativa aduanera.",
    type: "website",
    locale: "es_CO"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-ink-50 text-ink-950 selection:bg-ocean-800 selection:text-white">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
