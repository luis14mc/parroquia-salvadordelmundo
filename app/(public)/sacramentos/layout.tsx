import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sacramentos | Parroquia El Salvador del Mundo',
  description: 'Información sobre los sacramentos: Bautismo, Primera Comunión, Confirmación, Matrimonio, Reconciliación y Unción de Enfermos.',
}

export default function SacramentosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
