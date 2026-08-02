import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Stethoscope, Heart, Package } from 'lucide-react'

const PawPrint = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 10.5c-1.5 0-2.7-1.2-2.7-2.7S10.5 5.1 12 5.1s2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7zM7.8 8.4c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm8.4 0c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zM6 15.6c0-1.8 1.5-3.3 3.3-3.3h5.4c1.8 0 3.3 1.5 3.3 3.3v1.2c0 1.8-1.5 3.3-3.3 3.3H9.3C7.5 20.1 6 18.6 6 16.8v-1.2z"/>
  </svg>
)

const BoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.5 2c-1.7 0-3.2 1.1-3.8 2.7-.3-.1-.5-.1-.7-.1s-.5 0-.7.1C11.7 3.1 10.2 2 8.5 2 6.6 2 5 3.6 5 5.5c0 1.4.8 2.6 2 3.2-.3.6-.5 1.3-.5 2 0 .3 0 .5.1.8C4.2 12.3 2.5 14.2 2.5 16.5c0 2.5 2 4.5 4.5 4.5 2.3 0 4.2-1.7 5-4.1.3.1.5.1.8.1.3 0 .5 0 .8-.1.8 2.4 2.7 4.1 5 4.1 2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-4.1-5 .1-.3.1-.5.1-.8 0-.7-.2-1.4-.5-2 1.2-.6 2-1.8 2-3.2 0-1.9-1.6-3.5-3.5-3.5z"/>
  </svg>
)

const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const stats = [
  { icon: Users, label: 'Clientes Atendidos', value: 12500, suffix: '+', color: 'from-orange-400 to-amber-400', bgDecor: 'bg-orange-50', iconDecor: PawPrint, decorColor: 'text-orange-300' },
  { icon: Stethoscope, label: 'Consultas Realizadas', value: 28000, suffix: '+', color: 'from-amber-400 to-orange-400', bgDecor: 'bg-amber-50', iconDecor: BoneIcon, decorColor: 'text-amber-300' },
  { icon: Heart, label: 'Animais Salvos', value: 450, suffix: '+', color: 'from-orange-400 to-amber-400', bgDecor: 'bg-orange-50', iconDecor: HeartIcon, decorColor: 'text-orange-300' },
  { icon: Package, label: 'Produtos Disponíveis', value: 850, suffix: '+', color: 'from-amber-400 to-orange-400', bgDecor: 'bg-amber-50', iconDecor: PawPrint, decorColor: 'text-amber-300' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count.toLocaleString('pt-BR')}{suffix}</span>
}

export function Stats() {
  return (
    <section className="relative py-16 md:py-20 -mt-8 md:-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => {
            const DecorIcon = s.iconDecor
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-3xl p-5 md:p-8 shadow-soft border border-border/30 hover:shadow-glow transition-all group overflow-hidden"
              >
                <div className={`absolute -top-6 -right-6 w-24 h-24 ${s.bgDecor} rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500`} />
                
                <DecorIcon className={`absolute top-4 right-4 w-8 h-8 ${s.decorColor} opacity-40 group-hover:rotate-12 transition-transform duration-500`} />
                
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <s.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                
                <p className="mt-2 text-xs sm:text-sm text-gray-600 font-medium leading-snug">{s.label}</p>
                
                <div className="absolute bottom-3 left-3 flex gap-1">
                  {[...Array(3)].map((_, j) => (
                    <PawPrint key={j} className={`w-3 h-3 ${s.decorColor} opacity-30`} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}