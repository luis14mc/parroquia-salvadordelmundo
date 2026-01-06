import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Parroquia El Salvador del Mundo | Tegucigalpa, Honduras',
  description: 'Parroquia Católica en Tegucigalpa, Honduras. Celebraciones eucarísticas, sacramentos, grupos parroquiales y formación en la fe. Unidos en Cristo.',
  keywords: ['parroquia', 'católica', 'Tegucigalpa', 'Honduras', 'misa', 'sacramentos', 'El Salvador del Mundo', 'iglesia católica', 'comunidad cristiana'],
  authors: [{ name: 'Parroquia El Salvador del Mundo' }],
  openGraph: {
    title: 'Parroquia El Salvador del Mundo',
    description: 'Una comunidad de fe, esperanza y amor en el corazón de Tegucigalpa',
    type: 'website',
    locale: 'es_HN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
