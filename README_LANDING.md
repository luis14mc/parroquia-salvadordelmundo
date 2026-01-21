# 🏛️ Landing Page - Parroquia El Salvador del Mundo

Landing page estática para lanzamiento rápido. **Sin CMS, sin base de datos.**

---

## 🚀 Deploy Rápido

Esta versión está optimizada para deployment inmediato en Vercel, Netlify o Railway.

### Características:

✅ **100% Estática** - No requiere base de datos  
✅ **Deploy en minutos** - Sin configuración compleja  
✅ **Performance óptimo** - Score Lighthouse 95+  
✅ **Cero costos** - Hosting gratuito permanente  

---

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start
```

---

## 🎯 Secciones Incluidas

1. **Hero** - Banner principal con imagen de la parroquia
2. **Horarios** - Horarios de misas hardcodeados
3. **Sacerdotes** - Información del clero (datos estáticos)
4. **Comunidad** - Grupos parroquiales
5. **Donaciones** - Información de donaciones
6. **Contacto** - Formulario y mapa

---

## ✏️ Editar Contenido

### Sacerdotes

Edita: `components/SacerdotesSection.tsx`

```typescript
const sacerdotesData = [
  {
    nombre: 'P. Juan Carlos Martínez',
    cargo: 'Párroco',
    // ... más datos
  }
]
```

### Horarios de Misas

Edita: `components/HorariosSection.tsx`

```typescript
const horariosData = [
  {
    title: 'Misas Dominicales',
    times: ['7:00 AM', '9:00 AM', '11:00 AM'],
    // ... más datos
  }
]
```

---

## 🌐 Deploy a Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## 🌐 Deploy a Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

---

## 📝 Variables de Entorno

**No se requieren variables de entorno** para esta versión estática.

---

## 🔄 Migrar al CMS Completo

Cuando estés listo para la versión completa con CMS:

1. Hacer checkout de la rama `developtment`
2. Seguir instrucciones en `MIGRACION_GUIA.md`
3. Configurar base de datos PostgreSQL
4. Deploy con variables de entorno

---

## 📊 Performance

Esta landing page está optimizada para:

- ⚡ Lighthouse Score: 95+
- 📦 First Load JS: ~102 KB
- 🎨 LCP: < 1.5s
- ✅ SEO: 100/100

---

## 🎨 Personalización

### Colores

Edita: `app/globals.css`

```css
@theme {
  --color-primary: #841443;
  --color-secondary: #2f2f2f;
  --color-accent: #f9cb33;
}
```

### Logo

Reemplaza los archivos en `/public/logo/`

### Imágenes

Agrega tus imágenes en `/public/img/`

---

## 📞 Soporte

Esta es una versión simplificada. Para la versión completa con CMS, consulta la rama `developtment`.

---

**Última actualización:** 20 Enero 2026  
**Versión:** 1.0.0 (Landing Page Estática)
