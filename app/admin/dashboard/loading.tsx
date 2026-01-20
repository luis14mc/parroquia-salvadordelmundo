/**
 * Loading UI para dashboard admin
 */

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
        <p className="text-lg font-semibold text-secondary">
          Cargando panel de administración...
        </p>
      </div>
    </div>
  )
}
