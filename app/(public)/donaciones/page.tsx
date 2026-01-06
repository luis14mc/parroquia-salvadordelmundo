import DonacionesSection from '@/components/DonacionesSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Donaciones | Parroquia El Salvador del Mundo',
  description: 'Apoya la misión de nuestra parroquia. Conoce las diferentes formas de contribuir y los proyectos que puedes ayudar a realizar.',
}

export default function DonacionesPage() {
  return (
    <main className="min-h-screen">
      <DonacionesSection />
      <Footer />
    </main>
  )
}
