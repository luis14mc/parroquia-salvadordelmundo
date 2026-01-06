import HeroSection from '@/components/HeroSection'
import HorariosSection from '@/components/HorariosSection'
import SacerdotesSection from '@/components/SacerdotesSection'
import ComunidadSection from '@/components/ComunidadSection'
import DonacionesSection from '@/components/DonacionesSection'
import ContactoSection from '@/components/ContactoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HorariosSection />
      <SacerdotesSection />
      <ComunidadSection />
      <DonacionesSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
