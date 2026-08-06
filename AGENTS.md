# AGENTS — Guía para agentes de IA

Convenciones y patrones clave que cualquier agente que trabaje en este proyecto debe respetar.

---

## Stack

- **Astro 5** SSR con `@astrojs/node`
- **Tailwind CSS v4** con Vite plugin (NO archivo `tailwind.config.js`)
- **TypeScript** con modo `astro check`
- **pnpm** (no npm ni yarn)

## Comandos principales

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # build de producción
```

---

## Sistema de diseño

### Patrón editorial reusable

**Header editorial** (todas las secciones grandes):
```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20 items-end reveal">
  <div class="lg:col-span-7">
    <div class="flex items-center gap-3 mb-6">
      <span class="h-px w-10 bg-secondary"></span>
      <span class="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">Eyebrow</span>
    </div>
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] tracking-tight">
      Titulo<br/>
      <span class="italic font-medium text-secondary">última palabra</span>
    </h2>
  </div>
  <div class="lg:col-span-5 lg:pb-3">
    <p class="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
      Descripción.
    </p>
  </div>
</div>
```

**Bento grid con separadores finos**:
```html
<div class="grid grid-cols-1 md:grid-cols-N gap-px bg-outline-variant/30 border border-outline-variant/30 rounded-xl overflow-hidden">
  <article class="bg-surface-container-lowest p-8 lg:p-10 ...">...</article>
</div>
```

### Tipografía

- **Display** (`font-display` = Playfair Display): títulos, números destacados
- **Body** (`font-body` = Montserrat): párrafos
- **Label** (`font-label` = Montserrat): eyebrows, captions, mayúsculas tracking-wider

### Colores

- **`text-primary`**: títulos, números grandes
- **`text-secondary`**: acentos dorados, números en hover
- **`text-on-surface-variant`**: texto secundario
- **`text-secondary-fixed`**: dorado en fondos oscuros
- **`bg-stone-900`** Footer: gris fijo independiente del tema

### Iconos

- **Lucide** (`lucide:*`): iconografía general (preferido)
- **MDI** (`mdi:whatsapp`): sólo para WhatsApp
- **Simple-Icons** (`simple-icons:*`): logos oficiales de redes sociales

Verificar siempre con `node -e "const i = require('./node_modules/@iconify-json/lucide/icons.json'); console.log('icono:', !!i.icons['icono'])"`.

### Reveal animation

Cualquier elemento con `.reveal` se anima al entrar al viewport (configurado en `Layout.astro`).

Para staggering: `stagger-1`, `stagger-2`, ..., `stagger-6`.

---

## Reglas importantes

### ❌ NO uses

- `grid-cols-7` fijos en mobile (requieren scroll horizontal)
- Imágenes Unsplash aleatorias (usar fotos locales cuando sea posible)
- Componentes UI no documentados (`sacerdote-card`, `sacramento-card`, etc. fueron eliminados)
- Material Symbols (todo debe ser Lucide)
- Textos overflow sin envoltura (`break-words`, `break-all`)

### ✅ SÍ usa

- `icon: "lucide:heart"` — siempre con namespace
- `aspect-[4/3]` o `aspect-[4/5]` para imágenes
- `bg-surface-container-lowest` para cards light, `bg-primary` para cards dark
- `gap-px bg-outline-variant/30` para bento con separadores
- Texto responsive: `text-base md:text-lg lg:text-xl`

### Contenido editable

Toda la información institucional vive en:

- `src/config/site.ts` — configuración central
- `src/content/data/*.json` — contenido dinámico

**NO hardcodear** nombre del párroco, teléfono, dirección, etc. en componentes.

### Responsive

Mobile-first, breakpoints estándar:
- `sm:` 640px (móvil grande)
- `md:` 768px (tablet)
- `lg:` 1024px (desktop)

Para mapas: `h-[420px]` en desktop, reducir a `h-[360px]` en mobile.

---

## Estructura de archivos

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── SEO.astro
│   └── ui/
│       ├── Hero.astro
│       └── MapaInteractivo.astro
├── content/
│   ├── data/
│   └── sacramentos/
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── nosotros.astro
│   ├── oficina.astro
│   ├── donaciones.astro
│   ├── sacramentos/
│   ├── mision/
│   └── 404.astro
├── styles/
│   └── global.css
├── config/
│   └── site.ts
└── content.config.ts
```

---

## Workflow

1. **Lee primero**: `README.md`, `FUTURE.md`, `CHANGELOG.md`
2. **Audita**: usa `grep`/`grep -rn` para encontrar usos existentes
3. **Edita**: usa `Edit` para cambios quirúrgicos, `Write` solo para archivos nuevos
4. **Verifica**: `npx astro build` debe pasar sin errores
5. **Commit**: mensajes claros en español, una cosa por commit
6. **Push**: `developtment` es la rama de trabajo

---

## Convenciones de commits

```
<tipo>: <descripción corta>

<cuerpo opcional con detalles>
```

Tipos:
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `refactor:` cambio de código sin nueva funcionalidad
- `style:` cambios visuales/UI
- `docs:` documentación
- `chore:` tareas de mantenimiento

Ejemplo:
```
feat: agregar sección de donaciones con transferencia

- Bloque de cita bíblica como primera sección
- Sección "Libra de Amor" para alimentos no perecederos
- Datos de transferencia Banpais
```

---

## Comandos útiles

```bash
# Buscar archivos no usados
grep -rn "NombreComponente" src/

# Verificar iconos disponibles
node -e "const i = require('./node_modules/@iconify-json/lucide/icons.json'); console.log('name:', !!i.icons.name)"

# Encontrar todos los usos de una clase
grep -rn "bg-primary" src/pages/

# Verificar build
npx astro build
```

---

## Última actualización

Documento vivo. Si encuentras un patrón nuevo que debería documentarse, agrégalo.
