import { defineMiddleware } from 'astro:middleware';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? '';

function isProtected(pathname: string) {
  return pathname.startsWith('/api/admin');
}

function unauthorized() {
  return new Response('Autenticación requerida.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Panel Administrativo", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export const onRequest = defineMiddleware(async ({ request }, next) => {
  const url = new URL(request.url);

  if (!isProtected(url.pathname)) {
    return next();
  }

  if (!ADMIN_PASSWORD) {
    console.warn('[admin] ADMIN_PASSWORD no está configurado. Acceso abierto en modo desarrollo.');
    return next();
  }

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) {
    return unauthorized();
  }

  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return unauthorized();
  }

  const colonIndex = decoded.indexOf(':');
  if (colonIndex === -1) {
    return unauthorized();
  }

  const user = decoded.slice(0, colonIndex);
  const pass = decoded.slice(colonIndex + 1);

  if (!timingSafeEqual(user, ADMIN_USERNAME) || !timingSafeEqual(pass, ADMIN_PASSWORD)) {
    return unauthorized();
  }

  return next();
});