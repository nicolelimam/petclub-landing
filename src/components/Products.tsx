import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Star, MessageCircle, ArrowRight } from 'lucide-react'
import { products } from '../data/products'
import type { Product } from '../types'
import { cn } from '../utils/cn'

const categories = ['Todos', 'Rações', 'Medicamentos', 'Brinquedos'] as const

const PawPrint = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" fillRule="evenodd" d="M9 8c1.38 0 2.5-1.343 2.5-3S10.38 2 9 2S6.5 3.343 6.5 5S7.62 8 9 8m-4.5 5C5.88 13 7 11.657 7 10S5.88 7 4.5 7S2 8.343 2 10s1.12 3 2.5 3m13-8c0 1.657-1.12 3-2.5 3s-2.5-1.343-2.5-3s1.12-3 2.5-3s2.5 1.343 2.5 3m2 8c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3S17 8.343 17 10s1.12 3 2.5 3m-1.963.933l.003.002l.011.009C18.644 14.807 20 15.878 20 18.25c0 2.07-1.68 3.75-3.75 3.75c-.94 0-1.76-.445-2.485-.84c-.62-.34-1.205-.66-1.765-.66s-1.145.32-1.765.66c-.725.395-1.545.84-2.485.84C5.68 22 4 20.32 4 18.25c0-2.383 1.363-3.453 2.457-4.313l.003-.002l.037-.03c.451-.358.875-.695 1.128-1.075c.182-.268.343-.558.514-.864l.051-.091c.71-1.285 1.6-2.88 3.81-2.88c2.207 0 3.093 1.591 3.808 2.876l.002.004c.19.34.37.66.565.955c.26.394.698.739 1.162 1.103" clipRule="evenodd" />
  </svg>
)

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: i * 0.05, duration: 0.4 }}
      className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border/30 hover:shadow-glow transition-all relative z-10"
    >
      <div className="relative aspect-square overflow-hidden bg-cream">
        <motion.img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        {p.badge && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full shadow-soft">
            {p.badge}
          </span>
        )}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 px-1.5 py-0.5 md:px-2 md:py-1 bg-white/90 backdrop-blur rounded md:rounded-lg text-[10px] md:text-xs font-semibold text-gray-700">
          {p.category}
        </div>
      </div>

      <div className="p-3 md:p-6 relative z-10 bg-white">
        <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-0.5 md:mb-1 line-clamp-1">{p.name}</h3>
        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">{p.description}</p>

        <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-4">
          {[...Array(5)].map((_, j) => (
            <Star
              key={j}
              className={cn('w-3 h-3 md:w-4 md:h-4', j < Math.floor(p.rating) ? 'fill-primary text-primary' : 'text-gray-300')}
            />
          ))}
          <span className="ml-1 md:ml-2 text-[10px] md:text-xs text-gray-500">({p.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div>
            <p className="text-[10px] md:text-xs text-gray-500">A partir de</p>
            <p className="text-lg md:text-2xl font-extrabold text-gray-900">
              R$ {p.price.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20o%20produto:%20${encodeURIComponent(p.name)}"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-3 bg-primary hover:bg-primary-dark text-white text-xs md:text-base font-semibold rounded-lg md:rounded-xl shadow-soft hover:shadow-glow transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span className="line-clamp-1">Solicitar no WhatsApp</span>
        </a>
      </div>
    </motion.div>
  )
}

export function Products() {
  const [active, setActive] = useState<(typeof categories)[number]>('Todos')
  const filtered = active === 'Todos' ? products : products.filter(p => p.category === active)

  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden bg-warm">
      {/* Fundo Decorativo */}
      <div className="absolute inset-0 opacity-[0.1] text-primary/30 pointer-events-none">
        <PawPrint className="absolute w-40 h-40 top-10 left-10 rotate-[15deg]" />
        <PawPrint className="absolute w-32 h-32 top-1/4 right-20 rotate-[-10deg]" />
        <PawPrint className="absolute w-48 h-48 bottom-1/4 left-1/3 rotate-[5deg]" />
        <PawPrint className="absolute w-36 h-36 bottom-10 right-1/4 rotate-[-20deg]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="Nosso Catálogo"
          title="Produtos selecionados para seu pet"
          subtitle="Uma pequena amostra do que a PetClub oferece. Rações premium, medicamentos e brinquedos das melhores marcas."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 relative z-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                'px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all',
                active === c
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-white text-gray-700 border border-border hover:border-primary'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid para 2 colunas em mobile (< 640px) */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 relative z-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Botão CTA Final */}
        <motion.div
          className="mt-16 md:mt-20 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-lg text-gray-600 mb-6 max-w-xl mx-auto font-medium px-4">
            Temos muitos outros itens em nossa loja física e no catálogo virtual.
            Entre em contato para conferir todas as opções disponíveis para seu melhor amigo!
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary-dark text-white text-sm md:text-base font-semibold rounded-full shadow-soft hover:shadow-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            Ver catálogo completo no WhatsApp
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}