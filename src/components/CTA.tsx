import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden p-10 md:p-20 text-center"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 backdrop-blur mb-8"
            >
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-white leading-tight mb-6">
              Seu melhor amigo merece <br />
              <span className="gradient-text">o melhor cuidado.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Agende agora uma consulta e descubra por que somos a escolha de milhares de tutores.
            </p>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-glow transition-all"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}