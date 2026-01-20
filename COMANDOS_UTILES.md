# 🛠️ COMANDOS ÚTILES

## Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo (hot reload)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## Base de Datos

```bash
# Generar cliente Prisma
npx prisma generate

# Crear migración
npm run db:migrate
# o
npx prisma migrate dev --name nombre_migracion

# Deploy migraciones (producción)
npx prisma migrate deploy

# Abrir Prisma Studio (GUI para la BD)
npm run db:studio

# Seed (datos de prueba)
npm run db:seed

# Reset BD (¡CUIDADO! Borra todo)
npx prisma migrate reset
```

---

## Testing de APIs

### Login Admin
```bash
# Obtener token
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"TU_PASSWORD"}'

# Guardar token en variable (Linux/Mac)
export TOKEN="token_aqui"

# Windows PowerShell
$TOKEN = "token_aqui"
```

### Sacerdotes

```bash
# GET - Listar (público)
curl http://localhost:3000/api/sacerdotes

# POST - Crear (admin)
curl -X POST http://localhost:3000/api/sacerdotes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "nombre": "P. Juan Pérez",
    "cargo": "Párroco",
    "descripcion": "Sacerdote dedicado al servicio",
    "imagen": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }'

# PUT - Actualizar (admin)
curl -X PUT http://localhost:3000/api/sacerdotes/ID_AQUI \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"nombre": "P. Juan Pérez Actualizado"}'

# DELETE - Eliminar (admin)
curl -X DELETE http://localhost:3000/api/sacerdotes/ID_AQUI \
  -H "Authorization: Bearer $TOKEN"
```

### Horarios

```bash
# GET - Listar (público)
curl http://localhost:3000/api/horarios

# GET - Filtrar por tipo
curl http://localhost:3000/api/horarios?tipo=misa

# POST - Crear (admin)
curl -X POST http://localhost:3000/api/horarios \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "tipo": "misa",
    "dia": "Domingos",
    "hora": "10:00 AM",
    "lugar": "Templo Principal",
    "descripcion": "Misa dominical"
  }'

# PUT - Actualizar (admin)
curl -X PUT http://localhost:3000/api/horarios/ID_AQUI \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"hora": "11:00 AM"}'

# DELETE - Eliminar (admin)
curl -X DELETE http://localhost:3000/api/horarios/ID_AQUI \
  -H "Authorization: Bearer $TOKEN"
```

---

## Docker (Opcional)

Si tienes Docker Compose:

```bash
# Levantar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Rebuild
docker-compose up -d --build
```

---

## Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "descripción del cambio"

# Push
git push origin main

# Ver diferencias
git diff

# Ver historial
git log --oneline
```

---

## Generar Secretos

```bash
# JWT Secret (Linux/Mac)
openssl rand -base64 32

# Windows PowerShell
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))

# Node.js (cualquier OS)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## Verificar Rendimiento

```bash
# Lighthouse CLI (instalar primero)
npm install -g lighthouse

# Análisis completo
lighthouse http://localhost:3000 --view

# Solo performance
lighthouse http://localhost:3000 --only-categories=performance --view

# Bundle analyzer
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

---

## Limpieza

```bash
# Limpiar cache de Next.js
rm -rf .next

# Limpiar node_modules
rm -rf node_modules
npm install

# Limpiar todo y reinstalar
rm -rf .next node_modules
npm install
npx prisma generate
```

---

## Logs en Producción (Railway)

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Ver logs en tiempo real
railway logs

# Ver logs de build
railway logs --deployment
```

---

## Variables de Entorno

### Desarrollo (.env)
```bash
DATABASE_URL="postgresql://..."
JWT_SECRET="dev-secret-change-in-production"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin123"
NODE_ENV="development"
```

### Producción (Railway)
```bash
# Railway auto-configura DATABASE_URL

# Configurar manualmente:
railway variables set JWT_SECRET=tu-secret-production
railway variables set ADMIN_USERNAME=admin
railway variables set ADMIN_PASSWORD=password-segura-aqui
railway variables set NODE_ENV=production
```

---

## Troubleshooting Rápido

```bash
# Error: Module not found
npm install

# Error: Prisma client out of sync
npx prisma generate

# Error: Port already in use
# Linux/Mac:
lsof -ti:3000 | xargs kill
# Windows:
netstat -ano | findstr :3000
taskkill /PID [número] /F

# Error: Database connection
# Verificar .env y que PostgreSQL esté corriendo

# Rebuild completo
rm -rf .next node_modules
npm install
npx prisma generate
npm run build
```

---

## Scripts Personalizados

Puedes agregar estos a `package.json`:

```json
{
  "scripts": {
    "test:api": "node scripts/test-api.js",
    "check:types": "tsc --noEmit",
    "analyze": "ANALYZE=true npm run build",
    "clean": "rm -rf .next node_modules",
    "reset": "npm run clean && npm install && npx prisma generate"
  }
}
```

---

## Atajos Útiles

```bash
# Desarrollo rápido
npm run dev

# Testing completo
npm run build && npm start

# DB Studio + Dev Server (2 terminales)
# Terminal 1:
npm run db:studio
# Terminal 2:
npm run dev

# Ver todas las dependencias
npm list --depth=0

# Actualizar dependencias
npm update

# Auditar seguridad
npm audit
npm audit fix
```

---

**Tips:**
- Usa `Ctrl+C` para detener servidores
- Mantén `.env` en `.gitignore`
- Haz commits frecuentes
- Testea antes de push

**Última actualización:** 20 Enero 2026
