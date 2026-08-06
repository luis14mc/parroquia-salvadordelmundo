# CHANGELOG

Historial de cambios significativos del sitio. Las versiones siguen [SemVer](https://semver.org/).

---

## [1.0.0] — 2026 — Entrega de primer nivel

### Lanzamiento inicial rediseñado

Sitio web institucional de la Parroquia El Salvador del Mundo completamente rediseñado con un sistema de diseño editorial coherente.

### Highlights

- **Sistema de diseño editorial** unificado en todas las páginas (header asimétrico 7/5, bento grid con `gap-px`, íconos Lucide en círculos outlined)
- **Imágenes optimizadas**: conversión JPEG → WebP (reducción ~70% en peso), conservando los originales
- **Responsive**: correcciones mobile en Home (Horarios, Mapa), Nosotros (banner Comunitad Presbiteral), Footer, MapaInteractivo
- **SEO**: Schema.org `Church` con datos estructurados completos

### Contenido

- **Parroquia**: P. Juan Martínez (Párroco), P. Samuel Salgado (Vicario), P. Lenin Cruz (Colaborador)
- **Sectores**: 4 reales — Santa Cruz, Salvador del Mundo (sede), Santa Rosa de Lima, Sagrado Corazón
- **Sacramentos**: 5 — Bautismo, Primera Comunión, Confirmación, Matrimonio, Unción de los Enfermos
- **Movimientos**: 6 — Camino Neocatecumenal, Jóvenes Emproistas, Renovación Carismática, Pastoral Juvenil, Infancia Misionera, Delegados de la Palabra
- **Horarios**: Bento 7/5 con misas entre semana + fin de semana
- **Donaciones**: Cita bíblica destacada, sección "Libra de Amor" para alimentos no perecederos, datos de transferencia Banpais

### Técnico

- Stack: Astro 5 (SSR) + Tailwind CSS v4 + Lucide/MDI/Simple-Icons
- Mapa interactivo (Leaflet) con botones flotantes Maps/Waze
- Formulario "Misión hogareña" conectado a PostgreSQL
- Limpieza de código: eliminados componentes UI no usados (FAQ, Horarios, InfoContacto, SacerdoteCard, SacramentoCard)
- Carpeta `src/config/site.ts` limpia de campos redundantes

### Documentación

- `README.md` completo con setup, estructura, contenido editable
- `FUTURE.md` con roadmap de mejoras
- `CHANGELOG.md` (este archivo)

### Páginas

- **Home**: Hero, Mensaje del Párroco, Horarios, Sacramentos, Sectores, Sacerdotes
- **Nosotros**: Identidad, Historia, Comunidad Presbiteral, Misión/Visón, Sectores, Grupos
- **Oficina**: Eucaristía, Confesiones, Secretaría, Mapa
- **Donaciones**: Cita, Libra de Amor, Puntos de acopio, Transferencia Banpais
- **Sacramentos**: Hub editorial + 5 páginas detalle con padrinos/requisitos/pasos
- **Misión**: Formulario multi-paso de hogar visitado
- **Footer**: Redes sociales (Facebook, Instagram, TikTok, WhatsApp)

---

## Pre-1.0 — cambios legacy

El sitio previo usaba un sistema de Material Symbols genérico sin un sistema de diseño editorial. La refactorización a 1.0 sustituyó:

- **Heroes**: de imagen Unsplash aleatoria a `templo-sede.webp` local
- **Botón "Unirse a la Comunidad"**: apunta ahora al canal oficial de WhatsApp (`whatsapp.com/channel/0029Vb7CGfTC6Zvs7BBYE51P`)
- **Footer**: rediseñado con fondo gris consistente (`bg-stone-900`), iconos oficiales de redes sociales
- **Imágenes**: de Unsplash a fotos locales propias (donde se disponía)
