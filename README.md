# Serincoex — Sitio Web

Sitio corporativo de **SERINCOEX SAS** (NIT 902.015.387-2), empresa de servicios integrales en comercio exterior dentro de las Zonas Francas de Colombia.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion 11** — animaciones e interacciones
- **Phosphor Icons** — iconografía
- **Outfit + JetBrains Mono** — tipografías

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Netlify

El proyecto incluye `netlify.toml` con la configuración necesaria. Solo conecta el repositorio en Netlify y hará el deploy automáticamente.

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs` (instalado automáticamente)

## Estructura

```
app/                 — App Router (layout, página, estilos globales)
components/          — Componentes UI (Hero, Servicios, etc.)
public/              — Assets estáticos
.claude/skills/      — Skills internas para Claude Code
```

## Contacto

- **Web:** www.serincoex.com
- **Email:** contacto@serincoex.com
- **Tel/WhatsApp:** +57 311 414 4013
- **Sede:** KM 13 Vía Alterna Interna · Zona Franca CELPA
