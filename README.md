# Parroquia El Salvador del Mundo - Sitio Web

Una página web premium y moderna para la Parroquia El Salvador del Mundo en Tegucigalpa, Honduras.

## 🎨 Diseño

- **Estilo**: Premium Religious Experience - Elegante, minimalista y robusto
- **Paleta de colores**:
  - Primario: `#841443` (Borgoña profundo)
  - Secundario: `#2f2f2f` (Gris carbón)
  - Acento: `#f9cb33` (Oro litúrgico)

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Estilizado**: Tailwind CSS 4.x (CSS-first configuration)
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tipografía**: 
  - Poppins (encabezados - moderna y juvenil)
  - Inter (cuerpo de texto)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🏗️ Estructura del Proyecto

```
parroquia-salvadordelmundo/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página de inicio con todas las secciones
│   └── globals.css         # Estilos globales + Tailwind v4
├── components/
│   ├── Navbar.tsx          # Navegación con glassmorphism
│   ├── HeroSection.tsx     # Hero con live status de misas
│   ├── BentoGrid.tsx       # Grid de información parroquial
│   ├── AgendaDinamica.tsx  # Calendario semanal filtrable
│   ├── GaleriaSection.tsx  # Galería con lightbox
│   ├── ComunidadSection.tsx # Grupos y noticias
│   ├── ContactoSection.tsx # Formulario y mapa
│   └── Footer.tsx          # Footer completo
└── package.json
```

## ✨ Características

### 1. Hero Section
- Imagen de fondo con overlay degradado profesional
- **Live Status** inteligente que detecta misas en curso
- Contador dinámico hasta la próxima celebración
- Botones CTA funcionales con animaciones
- Scroll indicator animado

### 2. Bento Grid - Información Parroquial
- **Horarios de Misa**: Lunes a Domingo con detalles completos
- **Confesiones**: Horarios de sacramento de reconciliación
- **Despacho Parroquial**: Horario de atención administrativa
- **Requisitos de Sacramentos**: Bautismo, Comunión, Confirmación, Matrimonio
- Cards interactivas con hover effects premium

### 3. Navbar con Glassmorphism
- Efecto de vidrio esmerilado que aparece al hacer scroll
- Navegación funcional con anchor links
- Menú móvil completamente responsive
- Micro-interacciones en cada elemento
- Logo parroquial integrado

### 4. Agenda Dinámica
- Sistema de filtrado por día de la semana
- 8+ eventos semanales categorizados
- Animaciones fluidas con Framer Motion
- Cards con información detallada (horario, ubicación, asistentes)
- Diseño adaptativo mobile-first

### 5. Galería Fotográfica
- Sistema de categorías (Instalaciones, Liturgia, Comunidad, Sacramentos)
- Lightbox profesional con navegación
- Filtrado dinámico de imágenes
- Grid responsive adaptativo
- Transiciones suaves

### 6. Sección de Comunidad
- **6 Grupos Parroquiales** con detalles completos:
  - Coro Parroquial
  - Grupo Juvenil  
  - Caritas Parroquial
  - Catequistas
  - Matrimonios
  - Lectores y Acólitos
- **Sistema de Noticias** con últimas 3 publicaciones
- Cards con imágenes y categorización
- CTA para unirse a la comunidad

### 7. Sección de Contacto
- **Formulario funcional** con validación
- Información de contacto completa
- Mapa integrado de Google Maps
- Enlaces a redes sociales
- Diseño en 2 columnas responsive

### 8. Footer Profesional
- Enlaces rápidos organizados
- Información de sacramentos
- Datos de contacto
- Redes sociales
- Copyright dinámico

## 🎯 Características de Accesibilidad

- Cumple con WCAG 2.1
- Navegación por teclado
- Contraste de colores óptimo
- Texto alternativo en imágenes
- Animaciones respetan prefers-reduced-motion

## 📱 Responsive Design

- Mobile First
- Breakpoints optimizados
- Touch-friendly en dispositivos móviles
- Performance optimizada

## 🔧 Configuración

### Tailwind CSS 4.x (CSS-first)

La configuración ahora se hace directamente en `app/globals.css` usando la directiva `@theme`:

```css
@theme {
  --color-primary: #841443;
  --color-secondary: #2f2f2f;
  --color-accent: #f9cb33;
}
```

No se necesitan archivos `tailwind.config.ts` ni `postcss.config.js`.

### Fuentes

Las fuentes se cargan desde Google Fonts automáticamente:
- Playfair Display (serif)
- Inter (sans-serif)

## 📄 Licencia

Proyecto desarrollado para la Parroquia El Salvador del Mundo, Tegucigalpa, Honduras.

## 📊 Estadísticas del Proyecto

- **8 Componentes** React profesionales
- **100% Responsive** - Mobile, Tablet, Desktop
- **SEO Optimizado** - Metadata completa
- **Accesibilidad WCAG 2.1**
- **Performance** - Lazy loading y optimizaciones
- **Animaciones** - Framer Motion en todos los componentes

## 🎯 Funcionalidades Clave

✅ Sistema de detección de misas en vivo  
✅ Calendario semanal con filtros dinámicos  
✅ Galería con 8+ imágenes categorizadas  
✅ Formulario de contacto funcional  
✅ Integración con Google Maps  
✅ Navegación suave con anchor links  
✅ Micro-interacciones en toda la UI  
✅ Footer profesional con enlaces organizados  

## 🤝 Contribuir

Para contribuir al proyecto, por favor contacta con el equipo de desarrollo parroquial.

---

Desarrollado con ❤️ para la comunidad de El Salvador del Mundo
