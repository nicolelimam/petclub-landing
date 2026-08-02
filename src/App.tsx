import { Toaster } from 'sonner'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { PromoBanner } from './components/PromoBanner'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { AppointmentForm } from './components/AppointmentForm'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <div className="min-h-screen bg-warm text-gray-900 overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <PromoBanner />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <AppointmentForm />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}