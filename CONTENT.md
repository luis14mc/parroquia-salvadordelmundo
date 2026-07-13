# Guía de Actualización de Imágenes y Contenidos

## Estructura del Proyecto

```
src/
├── content/
│   ├── data/                    # Datos institucionales (JSON)
│   │   ├── sacerdotes.json      # Fotografía y bio del clero
│   │   ├── horarios.json        # Horarios de misa, confesión, secretaría
│   │   ├── sectores.json        # Sectores parroquiales + fotos
│   │   ├── grupos.json          # Movimientos y asociaciones
│   │   ├── faqs.json            # Preguntas frecuentes
│   │   └── cuentas-bancarias.json  # Datos bancarios
│   └── sacramentos/             # Un JSON por sacramento
│       ├── bautismo.json
│       ├── primera-comunion.json
│       ├── confirmacion.json
│       ├── matrimonio.json
│       └── uncion-enfermos.json
├── config/
│   ├── site.ts                  # Datos institucionales (nombre, dirección, contacto)
│   └── navigation.ts            # Menú de navegación
├── assets/                      # Imágenes importadas por Vite (bundles)
│   └── (imágenes del sitio)
└── pages/                       # Páginas (.astro)
```

```
public/                          # Archivos estáticos servidos en /
├── logo_original.png            # Logo principal (favicon, OG image, navbar)
├── logo_white.png               # Logo blanco (footer)
├── favicon.ico
├── favicon.svg
└── robots.txt
```

---

## 1. Actualizar Imágenes

### Imágenes en `public/` (estáticas, no optimizadas por Vite)

| Archivo | Uso | Requisitos |
|---------|-----|------------|
| `logo_original.png` | Navbar, favicon, OG image, apple-touch-icon | Mínimo 512×512px, fondo transparente |
| `logo_white.png` | Footer (fondo oscuro) | Mínimo 512×512px, versión blanca |

**Para actualizar:**
1. Reemplazar el archivo en `public/` manteniendo el mismo nombre
2. Ejecutar `npm run build` para verificar
3. Las imágenes en `public/` se sirven sin optimización — preferir WebP para mejor rendimiento

### Imágenes externas (Unsplash, Google)

Actualmente el sitio usa URLs externas en:
- **Hero de inicio**: `index.astro` línea 21 (fachada de la iglesia)
- **Foto del párroco**: `index.astro` línea 63
- **Sectores**: `src/content/data/sectores.json` → campo `imagen`
- **Sacerdotes**: `src/content/data/sacerdotes.json` → campo `imagen`

**Para actualizar:**
1. Editar el JSON correspondiente
2. Cambiar la URL en el campo `imagen`
3. Preferir imágenes con `?q=80&w=800` para balance calidad/peso

**Migración recomendada:** Mover imágenes a `src/assets/` para que Vite las optimice automáticamente (requiere cambiar `style="background-image: url(...)"` por `<Image />` de Astro).

---

## 2. Actualizar Contenidos Institucionales

### Datos generales → `src/config/site.ts`

Cambiar cualquier dato institucional (nombre, dirección, teléfono, email, redes sociales, etc.):

```typescript
// Ejemplo: cambiar número de teléfono
contact: {
  telefono: "22240263",         // Sin código de país
  telefonoDisplay: "2224-0263", // Formato legible
  ...
}
```

### Navegación → `src/config/navigation.ts`

Agregar, quitar o reordenar items del menú:

```typescript
export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Sacramentos", href: "/sacramentos" },
  { label: "Oficina Parroquial", href: "/oficina" },
  { label: "Donaciones", href: "/donaciones", isCTA: true },
  // Agregar nueva entrada aquí
];
```

### Sacramentos → `src/content/sacramentos/*.json`

Cada sacramento tiene un JSON con schema definido en `content.config.ts`:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `nombre` | string | Nombre del sacramento |
| `slug` | string | URL amigable |
| `icono` | string | Icono de astro-icon (ej: `lucide:droplets`) |
| `color` | string | Clases Tailwind de gradiente |
| `heroGradient` | string | Gradiente del hero individual |
| `descripcionCorta` | string | Para listado en /sacramentos |
| `descripcionLarga` | string | Párrafos de la página individual |
| `pilares` | array | 3 cards bajo "¿Qué es?" |
| `requisitos` | array | Lista de requisitos |
| `pasos` | array | Proceso paso a paso |
| `ofrenda` | number | Monto en Lempiras |
| `whatsappMessage` | string | Mensaje pre-llenado |

### Horarios → `src/content/data/horarios.json`

```json
[
  {
    "id": "eucaristia",
    "tipo": "eucaristia",
    "items": [
      { "dias": "Lunes - Viernes", "horas": "7:00 PM" }
    ]
  }
]
```

### Sectores → `src/content/data/sectores.json`

```json
{
  "id": "santa-cruz",
  "nombre": "Santa Cruz",
  "descripcion": "Comunidad activa en la evangelización del sector alto.",
  "imagen": "https://URL_DE_LA_IMAGEN",
  "orden": 1
}
```

### Sacerdotes → `src/content/data/sacerdotes.json`

```json
{
  "id": "parroco",
  "nombre": "P. Juan Enrique Martínez",
  "cargo": "Párroco",
  "descripcion": "Liderando nuestra comunidad...",
  "imagen": "https://URL_DE_LA_FOTO",
  "orden": 1
}
```

### FAQs → `src/content/data/faqs.json`

```json
{
  "id": "faq-1",
  "question": "¿Cómo puedo solicitar...?",
  "answer": "Puedes solicitar...",
  "orden": 1,
  "seccion": "general"
}
```

Secciones válidas: `general`, `sacramentos`, `oficina`, `donaciones`

### Cuentas bancarias → `src/content/data/cuentas-bancarias.json`

```json
{
  "banco": "BAC",
  "numero": "Cuenta corriente 123456789",
  "tipo": "Corriente",
  "orden": 1
}
```

---

## 3. Agregar Nueva Página

1. Crear `src/pages/nueva-pagina.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Título de la Página"
  description="Descripción para SEO (150-160 caracteres)."
>
  <!-- Contenido aquí -->
</Layout>
```

2. La página estará disponible en `/nueva-pagina`
3. Si es importante, agregar al menú en `navigation.ts`

---

## 4. Agregar Nuevo Componente UI

1. Crear `src/components/ui/NuevoComponente.astro`
2. Seguir el patrón existente:
   - Usar design tokens CSS (`var(--color-primary)`, etc.)
   - Usar clases Tailwind del proyecto
   - Soporte mobile-first con `@media (max-width: 820px)`
3. Importar en la página que lo necesita

---

## 5. Checklist antes de Desplegar

- [ ] `npm run build` pasa sin errores
- [ ] Imágenes en `public/` mantienen nombres existentes
- [ ] JSONs mantienen el schema válido (ver `content.config.ts`)
- [ ] Meta descriptions tienen 150-160 caracteres
- [ ] URLs internas usan `/` al inicio (no dominio completo)
- [ ] No hay secrets o keys en el código
- [ ] Datos de contacto actualizados en `site.ts`
