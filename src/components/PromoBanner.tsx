import { motion } from 'framer-motion'
import { ArrowRight, Syringe } from 'lucide-react'

const PawPrint = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" fillRule="evenodd" d="M9 8c1.38 0 2.5-1.343 2.5-3S10.38 2 9 2S6.5 3.343 6.5 5S7.62 8 9 8m-4.5 5C5.88 13 7 11.657 7 10S5.88 7 4.5 7S2 8.343 2 10s1.12 3 2.5 3m13-8c0 1.657-1.12 3-2.5 3s-2.5-1.343-2.5-3s1.12-3 2.5-3s2.5 1.343 2.5 3m2 8c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3S17 8.343 17 10s1.12 3 2.5 3m-1.963.933l.003.002l.011.009C18.644 14.807 20 15.878 20 18.25c0 2.07-1.68 3.75-3.75 3.75c-.94 0-1.76-.445-2.485-.84c-.62-.34-1.205-.66-1.765-.66s-1.145.32-1.765.66c-.725.395-1.545.84-2.485.84C5.68 22 4 20.32 4 18.25c0-2.383 1.363-3.453 2.457-4.313l.003-.002l.037-.03c.451-.358.875-.695 1.128-1.075c.182-.268.343-.558.514-.864l.051-.091c.71-1.285 1.6-2.88 3.81-2.88c2.207 0 3.093 1.591 3.808 2.876l.002.004c.19.34.37.66.565.955c.26.394.698.739 1.162 1.103" clipRule="evenodd" />
  </svg>
)

export function PromoBanner() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary via-primary-dark to-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-glow"
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden">
            <PawPrint className="absolute top-10 right-10 w-40 h-40 md:w-64 md:h-64 text-white rotate-12" />
            <PawPrint className="absolute bottom-10 left-10 w-32 h-32 md:w-56 md:h-56 text-white -rotate-12" />
            <PawPrint className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[30rem] md:h-[30rem] text-white" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-6 sm:p-10 md:p-16">
            <div className="text-white text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm font-semibold">Campanha Especial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Vacinação com <br />
                <span className="text-cream">30% de desconto</span>
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Proteja seu pet com as vacinas essenciais. Campanha válida por tempo limitado.
              </p>
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-primary font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                Agendar Vacina
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1770836037275-38b44e4b101f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cachorro sendo vacinado"
                  className="rounded-2xl md:rounded-3xl shadow-2xl aspect-[4/3] object-cover border-4 border-white/20"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}