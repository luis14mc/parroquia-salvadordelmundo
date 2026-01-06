import ContactoSection from '@/components/ContactoSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contacto | Parroquia El Salvador del Mundo',
  description: 'Contáctanos. Dirección, horarios, teléfono y formulario de contacto de la Parroquia El Salvador del Mundo en Tegucigalpa, Honduras.',
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <ContactoSection />
      <Footer />
    </main>
  )
}
