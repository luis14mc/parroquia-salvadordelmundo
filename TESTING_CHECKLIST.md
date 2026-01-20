# ✅ CHECKLIST DE TESTING

## 🧪 Testing Rápido - 5 Minutos

### 1. Build y Compilación

```bash
npm run build
```

**✅ Esperado:** Build exitoso sin errores de TypeScript

---

### 2. Servidor de Desarrollo

```bash
npm run dev
```

**✅ Esperado:** Server corriendo en http://localhost:3000

---

### 3. Test Visual - Páginas Públicas

Abre en el navegador:

- [ ] `http://localhost:3000` - Home carga correctamente
- [ ] `http://localhost:3000/#sacerdotes` - Sección sacerdotes visible
- [ ] `http://localhost:3000/#horarios` - Sección horarios visible
- [ ] `http://localhost:3000/admin` - Página de login admin

**✅ Esperado:** Todo carga sin errores 404

---

### 4. Test de Seguridad - API Routes

#### A. Endpoint Público (debe funcionar sin auth)

```bash
curl http://localhost:3000/api/sacerdotes
```

**✅ Esperado:** JSON con lista de sacerdotes

#### B. Endpoint Protegido SIN token (debe fallar)

```bash
curl -X POST http://localhost:3000/api/sacerdotes \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","cargo":"Test","descripcion":"Test test test","imagen":"https://test.com/img.jpg"}'
```

**✅ Esperado:** Error 401 "No autorizado"

#### C. Login Admin

```bash
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"TU_PASSWORD_AQUI"}'
```

**✅ Esperado:** JSON con token

```json
{
  "success": true,
  "token": "eyJhbGc...",
  "message": "Inicio de sesión exitoso"
}
```

#### D. Endpoint Protegido CON token (debe funcionar)

```bash
# Reemplaza TOKEN_AQUI con el token del paso anterior
curl -X POST http://localhost:3000/api/sacerdotes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN_AQUI" \
  -d '{
    "nombre": "P. José García",
    "cargo": "Vicario",
    "descripcion": "Sacerdote dedicado al servicio de la comunidad parroquial",
    "imagen": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "email": "jose@parroquia.com",
    "telefono": "+504 1234-5678"
  }'
```

**✅ Esperado:** 
```json
{
  "success": true,
  "data": { ... },
  "message": "Sacerdote creado exitosamente"
}
```

---

### 5. Test de Validación Zod

#### Intento de crear sacerdote con datos inválidos

```bash
curl -X POST http://localhost:3000/api/sacerdotes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN_AQUI" \
  -d '{
    "nombre": "P",
    "cargo": "X",
    "descripcion": "Corto",
    "imagen": "no-es-url"
  }'
```

**✅ Esperado:** Error 400 con detalles de validación

```json
{
  "success": false,
  "error": "Errores de validación",
  "errors": [
    {"field": "nombre", "message": "El nombre debe tener al menos 3 caracteres"},
    {"field": "cargo", "message": "El cargo debe tener al menos 3 caracteres"},
    {"field": "descripcion", "message": "La descripción debe tener al menos 10 caracteres"},
    {"field": "imagen", "message": "Debe ser una URL válida"}
  ]
}
```

---

### 6. Test de Cache & Revalidación

1. **Crear un sacerdote nuevo** (usando el endpoint POST con token)

2. **Refrescar la home** `http://localhost:3000`

3. **Verificar que el nuevo sacerdote aparece**

**✅ Esperado:** El cache se invalida y muestra el nuevo contenido

---

### 7. Test de Admin Panel

#### En el navegador:

1. [ ] Ir a `http://localhost:3000/admin`
2. [ ] Hacer login con credenciales
3. [ ] Verificar redirección a `/admin/dashboard`
4. [ ] Click en "Sacerdotes"
5. [ ] Click en "Nuevo Sacerdote"
6. [ ] Llenar formulario y guardar
7. [ ] Verificar que aparece en la lista
8. [ ] Editar el sacerdote
9. [ ] Eliminar el sacerdote
10. [ ] Hacer logout

**✅ Esperado:** Todo funciona sin errores de consola

---

### 8. Test de Loading States

1. [ ] Ir a página principal con Network throttling (Chrome DevTools)
2. [ ] Verificar que aparece el loading spinner
3. [ ] Verificar que carga el contenido

**✅ Esperado:** UX fluida con loading states

---

### 9. Test de Error Boundaries

1. [ ] Forzar un error (ej: apagar la BD temporalmente)
2. [ ] Verificar que aparece la página de error elegante
3. [ ] Click en "Intentar de nuevo"

**✅ Esperado:** Error manejado elegantemente

---

### 10. Test de Performance

Abre Chrome DevTools → Lighthouse:

```
Métricas esperadas:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

**✅ Esperado:** Score general > 90

---

## 🐛 Troubleshooting Común

### Error: "prisma.sacerdote is not a function"

**Solución:**
```bash
npx prisma generate
```

### Error: "JWT_SECRET no configurado"

**Solución:** Crear archivo `.env` con:
```
JWT_SECRET="tu-secreto-aqui"
```

### Error: "Cannot connect to database"

**Solución:** Verificar `DATABASE_URL` en `.env`

### Error: "Module not found"

**Solución:**
```bash
npm install
```

---

## 📊 Resultados Esperados

Al completar todos los tests:

✅ Build exitoso  
✅ Servidor corriendo sin errores  
✅ APIs públicas funcionan  
✅ APIs protegidas requieren auth ✅  
✅ Validación Zod funciona  
✅ Cache se invalida correctamente  
✅ Admin panel funcional  
✅ Loading states visibles  
✅ Errors manejados elegantemente  
✅ Lighthouse score > 90  

---

## 🚀 Deploy a Producción

Cuando todos los tests pasen:

```bash
git add .
git commit -m "feat: auditoría completa y optimizaciones"
git push origin main
```

Railway detectará el push y hará deploy automáticamente.

**Verificar en producción:**
- [ ] Health check: `https://tu-app.railway.app/api/sacerdotes`
- [ ] Admin login funciona
- [ ] Images cargan correctamente
- [ ] Lighthouse score en producción

---

**Tiempo estimado total:** 5-10 minutos  
**Última actualización:** 20 Enero 2026
