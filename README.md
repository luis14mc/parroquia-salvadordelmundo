# Parroquia El Salvador del Mundo

Sitio web oficial de la **Parroquia El Salvador del Mundo** — Tegucigalpa, Honduras.
Una comunidad de fe moderna y organizada, construida con Astro + Tailwind CSS v4.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build) (SSR con `@astrojs/node`) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) (Vite plugin) |
| Tipografía | [Montserrat](https://fonts.google.com/specimen/Montserrat) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |
| Iconos | [`@iconify-json/lucide`](https://icon-sets.iconify.design/lucide/), [`mdi`](https://icon-sets.iconify.design/mdi/), [`simple-icons`](https://icon-sets.iconify.design/simple-icons/) |
| Mapas | [Leaflet 1.9](https://leafletjs.com) + tiles CARTO |
| Contenido | Colecciones en `src/content/` (content collections) |
| DB | PostgreSQL (vía `pg`) — solo para el formulario de Misión hogareña |

---

## Estructura

```
parroquia-salvadordelmundo/
├── public/
│   ├── logo_original.png
│   ├── logo_white.png
│   └── img/institucionales/          # Fotos JPG originales + WebP optimizadas
├── src/
│   ├── components/
│   │   ├── Navbar.astro             # Navegación sticky con menú móvil
│   │   ├── Footer.astro             # Footer oscuro con redes sociales
│   │   ├── SEO.astro
│   │   └── ui/
│   │       ├── Hero.astro           # Hero reutilizable (bg-primary + hero-clip)
│   │       └── MapaInteractivo.astro  # Leaflet con botones Maps/Waze
│   ├── content/
│   │   ├── data/                    # JSON editables: sectores, sacerdotes, horarios, grupos, faqs
│   │   └── sacramentos/             # 5 sacramentos (bautismo, primera-comunion, etc.)
│   ├── layouts/Layout.astro         # Layout global (Navbar + Footer + WhatsApp FAB)
│   ├── pages/
│   │   ├── index.astro              # Home
│   │   ├── nosotros.astro           # Identidad, historia, misión, sectores, grupos
│   │   ├── oficina.astro            # Eucaristía, confesiones, secretaría, mapa
│   │   ├── donaciones.astro         # Cita bíblica, Libra de Amor, transferencia
│   │   ├── sacramentos/             # Índice + 5 páginas detalle
│   │   ├── mision/hogar-visitado.astro  # Formulario pastoral
│   │   └── 404.astro
│   ├── styles/global.css             # Sistema de tokens + utilities custom
│   ├── config/site.ts               # Configuración institucional centralizada
│   └── content.config.ts            # Zod schemas de colecciones
└── scripts/migrate.mjs              # Script de migración de DB
```

Toda la información institucional vive en **`src/config/site.ts`** y en **`src/content/data/*`**.
Cuando llegue el CMS (Fase 2), solo se reemplazan esas fuentes — los componentes no cambian.

---

## Desarrollo

```bash
pnpm install
pnpm dev           # http://localhost:4321
pnpm build         # SSR build → dist/
pnpm start         # corre migraciones + inicia server
pnpm db:migrate    # aplica migraciones de PostgreSQL
```

### Requisitos

- Node.js ≥ 20
- pnpm ≥ 9
- PostgreSQL (solo requerido para `/mision/hogar-visitado`)

### Variables de entorno

Copia `.env.example` → `.env` (si existe). En producción, Railway inyecta:

```
DATABASE_URL=postgres://...
```

---

## Contenido editable

| Archivo | Dato |
|---|---|
| `src/config/site.ts` | Nombre, contacto, dirección, redes sociales, párroco, misión, visión |
| `src/content/data/sectores.json` | 4 sectores: Santa Cruz, Salvador del Mundo, Santa Rosa de Lima, Sagrado Corazón |
| `src/content/data/sacerdotes.json` | Párroco, Vicario, Colaborador |
| `src/content/data/horarios.json` | Eucaristía, confesiones, secretaría |
| `src/content/data/grupos.json` | 6 movimientos pastorales |
| `src/content/data/faqs.json` | Preguntas frecuentes |
| `src/content/sacramentos/*.json` | 5 sacramentos (requisitos, pasos, citas, etc.) |

---

## Despliegue

El proyecto está configurado para **Railway** con adapter `@astrojs/node`:

- `pnpm start` ejecuta migraciones y arranca el server
- Conexión a PostgreSQL gestionada por Railway

---

## Lo que está abierto a mejoras

Ver [FUTURE.md](./FUTURE.md) para la hoja de ruta de mejoras planificadas.

---

## Licencia

Privado — Parroquia El Salvador del Mundo, Tegucigalpa, Honduras. © 2026.
