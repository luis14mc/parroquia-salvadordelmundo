/**
 * Cliente API con autenticación automática
 * Centraliza las llamadas a la API con manejo de tokens
 */

interface RequestOptions extends RequestInit {
  requireAuth?: boolean
}

/**
 * Wrapper de fetch con autenticación automática
 */
export async function apiClient<T = any>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { requireAuth = false, headers = {}, ...restOptions } = options

  // Agregar token si es requerido
  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (requireAuth) {
    const token = localStorage.getItem('admin_token')
    if (token) {
      finalHeaders['Authorization'] = `Bearer ${token}`
    }
  }

  const response = await fetch(url, {
    ...restOptions,
    headers: finalHeaders,
  })

  // Manejar respuestas no-ok
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Error desconocido' }))
    throw new Error(error.error || `HTTP ${response.status}`)
  }

  return response.json()
}

/**
 * GET request
 */
export function apiGet<T>(url: string, requireAuth = false): Promise<T> {
  return apiClient<T>(url, { method: 'GET', requireAuth })
}

/**
 * POST request
 */
export function apiPost<T>(url: string, data: any, requireAuth = true): Promise<T> {
  return apiClient<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    requireAuth,
  })
}

/**
 * PUT request
 */
export function apiPut<T>(url: string, data: any, requireAuth = true): Promise<T> {
  return apiClient<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    requireAuth,
  })
}

/**
 * DELETE request
 */
export function apiDelete<T>(url: string, requireAuth = true): Promise<T> {
  return apiClient<T>(url, {
    method: 'DELETE',
    requireAuth,
  })
}
