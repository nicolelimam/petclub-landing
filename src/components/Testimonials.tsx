import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/products'

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-cream to-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Depoimentos"
          title="O que nossos clientes dizem"
          subtitle="A satisfação dos tutores é nossa maior recompensa."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-14 shadow-soft border border-border/30">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-soft" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.pet}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl bg-cream hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === idx ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl bg-cream hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}