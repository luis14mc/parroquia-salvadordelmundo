# FUTURE — Hoja de ruta de mejoras

Documento vivo. Cada mejora tiene un checkbox que marca si está completada.
Cuando un ítem se implemente, moverlo a `CHANGELOG.md` con la fecha.

---

## Contenido

### Sectores
- [ ] Agregar las **comunidades** que pertenecen a cada sector (cada sector tiene varias comunidades)
- [ ] Agregar fotos locales de los sectores Santa Cruz, Santa Rosa de Lima y Sagrado Corazón

### Sacerdotes
- [ ] Agregar detalle de la **biografía** de cada sacerdote (formación, años de servicio, especializaciones)
- [ ] Vincular cada sacerdote a sus **publicaciones /homilías** (cuando exista esa sección)

### Sacramentos
- [ ] Agregar **formulario web** de pre-inscripción para cada sacramento (hoy soloWhatsApp)
- [ ] Calendario público de próximas celebraciones disponibles
- [ ] Sección de **charlas pre-bautismales** con horario y material descargable

### Oficina
- [ ] Sistema de **reservas de intenciones de misa** online
- [ ] Descarga de **constancias** parroquiales (PDF firmados)

### Donaciones
- [ ] Agregar más cuentas bancarias (BAC, Banpaís, etc.)
- [ ] **Reportes trimestrales** de uso de los donativos (transparencia)
- [ ] Donación recurrente / mensual por tarjeta de crédito

### Movimientos
- [ ] Calendario de actividades por cada movimiento
- [ ] Formulario de inscripción para unirse a cada grupo

---

## Técnico

### Performance
- [ ] Auditar **Core Web Vitals** con Lighthouse y PageSpeed Insights
- [ ] Implementar **lazy loading** para imágenes fuera del viewport (nativo o `astro:assets`)
- [ ] Agregar **service worker** para cache offline de páginas estáticas
- [ ] Comprimir y convertir videos (si se agregan) a WebM/AV1

### SEO
- [ ] Sitemap.xml — ya generado, falta revisar que cubra todas las rutas dinámicas
- [ ] Open Graph images dinámicas por página (actualmente se usa el logo global)
- [ ] Schema.org — agregar `ReligiousOrganization`, `Event` para misas, `Person` para sacerdotes
- [ ] Agregar `hreflang` para futuras traducciones al inglés

### Internacionalización
- [ ] Preparar infraestructura para **inglés** (`/en/`) — los textos en JSON deberían convertirse a `i18n/es.json` + `i18n/en.json`

### Accesibilidad
- [ ] Auditoría WCAG 2.2 AA completa con axe-core
- [ ] Mejorar foco visible en todos los componentes interactivos
- [ ] Agregar `prefers-reduced-motion` para usuarios con sensibilidad al movimiento
- [ ] Verificar contraste de colores en todos los pares texto/fondo

### CMS (Fase 2)
- [ ] Reemplazar `src/content/data/*.json` por endpoints de API
- [ ] Adapter pattern en `src/config/site.ts` para no romper componentes
- [ ] Panel de administración para párroco / secretaría
- [ ] Autenticación de editores (probable: Auth.js + Postgres)

### Integraciones
- [ ] **Live streaming** de misas (YouTube Live, Restream, etc.)
- [ ] Calendario parroquial sincronizado con Google Calendar
- [ ] Notificaciones push para eventos importantes
- [ ] Bot de WhatsApp Business para preguntas frecuentes

### Seguridad
- [ ] Headers CSP, HSTS, X-Frame-Options
- [ ] Rate limiting en `/mision/hogar-visitado` y futuros formularios
- [ ] Sanitización de HTML en cualquier campo que el usuario pueda inyectar

### DevOps
- [ ] CI/CD con GitHub Actions (lint + typecheck + build en cada PR)
- [ ] Pre-commit hooks con Husky + lint-staged
- [ ] Tests E2E con Playwright en las páginas críticas (home, sacramentos, donación)
- [ ] Monitoring de uptime (UptimeRobot o BetterStack)

### Imágenes
- [ ] Reemplazar placeholders Unsplash con fotos reales de cada sector
- [ ] Optimizar aún más con AVIF cuando el soporte sea masivo
- [ ] Pipeline automático de optimización en commit (Lighthouse CI)

---

## Ideas en discusión

- [ ] **Blog / sección de noticias** — para anuncios pastorales, homilías, eventos
- [ ] **Galería multimedia** — fotos de eventos, retiros, actividades
- [ ] **Calendario litúrgico** — integrado con los datos del Vaticano
- [ ] **Directorio de la comunidad** — feligreses pueden crear perfil
- [ ] **App móvil** — PWA primero, nativa después si se justifica
- [ ] **Sistema de oración** — feligreses piden oraciones y la comunidad ora por ellos

---

## Cómo contribuir

1. Abrir un issue describiendo la mejora
2. Crear branch desde `developtment`
3. Hacer PR con cambios + pruebas si aplica
4. Esperar review

---

**Última actualización:** 2026
