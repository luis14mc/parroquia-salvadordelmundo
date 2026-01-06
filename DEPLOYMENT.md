# Guía de Deployment a Vercel

## Requisitos Previos
- Cuenta en GitHub
- Cuenta en Vercel (puede usar GitHub para login)
- Git instalado localmente

## Pasos para Subir a GitHub

### 1. Inicializar Git (si aún no está inicializado)
```bash
cd /home/luis/parroquia-salvadordelmundo
git init
git add .
git commit -m "Initial commit: Parroquia El Salvador del Mundo"
```

### 2. Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombra el repositorio: `parroquia-salvadordelmundo`
3. Déjalo como privado (recomendado)
4. NO inicialices con README, .gitignore o licencia

### 3. Conectar y Subir
```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/parroquia-salvadordelmundo.git
git push -u origin main
```

## Deployment en Vercel

### 1. Importar Proyecto
1. Ve a https://vercel.com/new
2. Click en "Import Git Repository"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js

### 2. Configurar Variables de Entorno
En la sección "Environment Variables" de Vercel, agrega:

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=TuPasswordSegura2026!
JWT_SECRET=cambia-esto-por-un-secret-muy-largo-y-aleatorio-en-produccion
```

**IMPORTANTE**: 
- Cambia `ADMIN_PASSWORD` por una contraseña segura
- Genera un `JWT_SECRET` único y seguro (mínimo 32 caracteres aleatorios)

### 3. Deploy
1. Click en "Deploy"
2. Vercel construirá y desplegará automáticamente
3. Recibirás una URL como: `parroquia-salvadordelmundo.vercel.app`

## Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará automáticamente los cambios y desplegará la nueva versión.

## Dominio Personalizado

Para usar un dominio propio:
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio (ej: www.parroquiasalvador.hn)
4. Sigue las instrucciones para configurar DNS

## Panel de Administración

Acceso al admin: `https://tu-dominio.vercel.app/admin`
- Usuario: El que configuraste en `ADMIN_USERNAME`
- Contraseña: La que configuraste en `ADMIN_PASSWORD`

## Stack Tecnológico
- **Framework**: Next.js 15.5.9 (App Router)
- **React**: 19 RC
- **Estilos**: Tailwind CSS 4.1.18
- **Animaciones**: Framer Motion 11.11.17
- **Iconos**: Lucide React
- **Fuente**: Montserrat (Google Fonts)
- **Autenticación**: JWT + bcryptjs
- **Base de Datos**: JSON local (temporal - listo para migrar a DB)

## Próximos Pasos Recomendados

1. **Base de Datos**: Migrar de JSON local a PostgreSQL/MongoDB
2. **CMS CRUD**: Completar funcionalidades de crear/editar/eliminar
3. **Upload de Imágenes**: Integrar servicio como Cloudinary o Vercel Blob
4. **Email**: Configurar servicio de email para el formulario de contacto
5. **Analytics**: Agregar Google Analytics o Vercel Analytics
6. **SEO**: Mejorar metadatos y agregar sitemap.xml

## Soporte

Para cualquier problema durante el deployment:
- Documentación de Vercel: https://vercel.com/docs
- Documentación de Next.js: https://nextjs.org/docs
