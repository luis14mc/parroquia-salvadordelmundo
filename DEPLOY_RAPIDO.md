# 🚀 Deploy Rápido - Landing Page

## Opción 1: Vercel (Recomendado) ⚡

**Más fácil y rápido:**

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Selecciona la rama `landing-page`
5. Click en "Deploy"

**¡Listo en 2 minutos!** 🎉

URL: `https://tu-proyecto.vercel.app`

---

## Opción 2: Netlify 🌐

1. Ve a [netlify.com](https://netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Conecta GitHub y selecciona el repositorio
4. Branch: `landing-page`
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy

---

## Opción 3: Railway 🚂

Si ya tienes Railway configurado:

1. Ve a tu proyecto en Railway
2. Settings → Deployment
3. Cambia branch a `landing-page`
4. Deploy automático

⚠️ **Nota:** No necesitas variables de entorno para esta versión

---

## ✅ Checklist Pre-Deploy

- [ ] Push de la rama `landing-page` a GitHub
- [ ] Verificar que el build local funciona: `npm run build`
- [ ] Actualizar datos de sacerdotes en `components/SacerdotesSection.tsx`
- [ ] Actualizar horarios en `components/HorariosSection.tsx`
- [ ] Cambiar logo en `/public/logo/`

---

## 📝 Después del Deploy

1. **Verificar que todo funciona:**
   - Todas las secciones cargan
   - Enlaces funcionan
   - Formulario de contacto (solo frontend por ahora)

2. **Compartir URL:**
   - Redes sociales de la parroquia
   - Boletín parroquial
   - Grupos de WhatsApp

3. **Monitorear:**
   - Google Search Console
   - Analytics (opcional)

---

## 🔄 Actualizar Contenido

Para cambiar información:

1. Edita los archivos en `components/`
2. Commit: `git commit -m "actualizar información"`
3. Push: `git push origin landing-page`
4. Vercel/Netlify re-deployan automáticamente

---

## 💡 Tips

- **Dominio propio:** Configúralo en Vercel/Netlify (Settings → Domains)
- **HTTPS:** Automático en Vercel/Netlify
- **Performance:** Esta versión es ultra rápida (Score 95+)

---

**Tiempo estimado de deploy:** 2-5 minutos  
**Costo:** $0/mes (gratis para siempre)

¡Listo para lanzar! 🚀
