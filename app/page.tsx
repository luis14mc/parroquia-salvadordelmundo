import HeroSection from '@/components/HeroSection'
import HorariosSection from '@/components/HorariosSection'
import SacerdotesSection from '@/components/SacerdotesSection'
import GaleriaSection from '@/components/GaleriaSection'
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
      <GaleriaSection />
      <ComunidadSection />
      <DonacionesSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
