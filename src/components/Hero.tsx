import { motion } from 'framer-motion'
import { ArrowRight, Users, Stethoscope, Heart, Package } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const PawPrint = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" fill-rule="evenodd" d="M9 8c1.38 0 2.5-1.343 2.5-3S10.38 2 9 2S6.5 3.343 6.5 5S7.62 8 9 8m-4.5 5C5.88 13 7 11.657 7 10S5.88 7 4.5 7S2 8.343 2 10s1.12 3 2.5 3m13-8c0 1.657-1.12 3-2.5 3s-2.5-1.343-2.5-3s1.12-3 2.5-3s2.5 1.343 2.5 3m2 8c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3S17 8.343 17 10s1.12 3 2.5 3m-1.963.933l.003.002l.011.009C18.644 14.807 20 15.878 20 18.25c0 2.07-1.68 3.75-3.75 3.75c-.94 0-1.76-.445-2.485-.84c-.62-.34-1.205-.66-1.765-.66s-1.145.32-1.765.66c-.725.395-1.545.84-2.485.84C5.68 22 4 20.32 4 18.25c0-2.383 1.363-3.453 2.457-4.313l.003-.002l.037-.03c.451-.358.875-.695 1.128-1.075c.182-.268.343-.558.514-.864l.051-.091c.71-1.285 1.6-2.88 3.81-2.88c2.207 0 3.093 1.591 3.808 2.876l.002.004c.19.34.37.66.565.955c.26.394.698.739 1.162 1.103" clip-rule="evenodd" />
  </svg>
)

const BoneIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M9.5 22q-1.475 0-2.488-1.012T6 18.5q0-.225.063-.35t-.013-.2t-.2-.012T5.5 18q-1.475 0-2.488-1.012T2 14.5t1.013-2.488T5.5 11q.575 0 1.05.15t.9.45l4.15-4.15q-.3-.425-.45-.9T11 5.5q0-1.475 1.013-2.488T14.5 2t2.488 1.013T18 5.5q0 .225-.062.35t.012.2t.2.013T18.5 6q1.475 0 2.488 1.013T22 9.5t-1.012 2.488T18.5 13q-.575 0-1.05-.15t-.9-.45l-4.15 4.15q.3.425.45.9T13 18.5q0 1.475-1.012 2.488T9.5 22" />
  </svg>
)

const CatIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" className={className}>
    <path d="M0 0h512v512H0z" fill="none" />
    <path fill="currentColor" d="m463.46 37.008l-30.694 50.738l-7.043-2.28c-27.146-8.797-71.525-7.15-97.6.11L321.22 87.5l-28.68-48.543c-33.63 69.254-32.264 117.56-14.79 148.574c18.71 33.208 57.378 49.09 99.117 48.574c48.743-.606 88.968-19.665 107.035-54.194c16.918-32.332 15.684-80.456-20.443-144.902zM323.935 137.594c18.45.1 29.36 15.338 31.462 36.644c-37.11 17.91-53.963 3.398-61.173-26.545c11.382-7.063 21.324-10.144 29.71-10.1zm109.26 0c8.385-.045 18.328 3.036 29.71 10.1c-7.21 29.942-24.064 44.454-61.174 26.544c2.104-21.306 13.014-36.545 31.463-36.644zm-293.553 50.96q-1.839-.014-3.66.018c-30.175.536-56.142 10.59-75.743 26.574c-43.444 35.43-57.27 100.752-12.824 166.192c20.293 33.995 44.432 54.24 70.797 64.187c32.85 12.395 66.655 8.823 99.94 4.114s65.854-10.63 96.896-8.42c31.04 2.212 62.09 10.18 90.505 41.165c19.374 21.125 46.887-1.627 23.82-24.156c-35.024-34.207-72.527-47.42-109.377-50.04s-72.2 4.698-104.207 9.228s-60.272 6.552-84.558-2.61c-14.39-5.43-28.308-14.802-41.55-31.142h351.744c13.673-52.293 14.867-106.368 1.873-142.072c-19.765 8.49-42.412 12.9-66.2 13.197h-.002c-29.85.37-59.458-6.925-82.907-22.823a426 426 0 0 0-14.292 9.685l-5.734 4.057l-5.49-4.382c-46.63-37.2-91.028-52.48-129.03-52.773z" />
  </svg>
)

const MouseIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M21.33 17.39c1.4 1.27.47 3.61-1.41 3.61h-8.86A5.04 5.04 0 0 1 6 15.94v-.05c-2.3-.47-4-2.48-4-4.89c0-2.75 2.22-5 5-5h2.5c.3 0 .5-.23.5-.5S9.8 5 9.5 5H7V3h2.5C10.88 3 12 4.13 12 5.5C12 6.89 10.88 8 9.5 8H7c-1.66 0-3 1.33-3 3c0 1.37.92 2.5 2.14 2.87c.56-2.2 2.53-3.87 4.92-3.87c.8 0 1.6.22 2.3.55c-1.41.79-2.36 2.25-2.36 3.95c0 1.25.5 2.37 1.33 3.17l.7-.7c-.65-.61-1.03-1.5-1.03-2.47c0-2.59 2.34-3.5 3.5-3.5c2.08 0 3.95 1.89 3.44 4.23zM18 19c.56 0 1-.44 1-1s-.44-1-1-1s-1 .44-1 1s.44 1 1 1" />
  </svg>
)

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

function useInView(ref: React.RefObject<HTMLElement | null>, options?: { once?: boolean }) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options?.once) observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options?.once])

  return isInView
}

export function Hero() {
  const stats = [
    { icon: Users, label: 'Clientes Atendidos', value: 12500, suffix: '+', color: 'from-orange-400 to-amber-400', iconDecor: PawPrint },
    { icon: Stethoscope, label: 'Consultas Realizadas', value: 28000, suffix: '+', color: 'from-amber-400 to-orange-400', iconDecor: BoneIcon },
    { icon: Heart, label: 'Animais Salvos', value: 450, suffix: '+', color: 'from-orange-400 to-amber-400', iconDecor: CatIcon },
    { icon: Package, label: 'Produtos Disponíveis', value: 850, suffix: '+', color: 'from-amber-400 to-orange-400', iconDecor: MouseIcon },
  ]

  return (
    <section id="home" className="relative bg-warm text-gray-800 pt-24 pb-16 md:pt-28 md:pb-0 lg:pt-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-[60vw] md:w-[45vw] max-w-[600px] h-[300px] md:h-[450px] bg-[#A8C8C0]/30 rounded-bl-[100px] md:rounded-bl-[140px] rounded-tl-[60px] md:rounded-tl-[80px] -z-0 pointer-events-none blur-[2px]" />
      <div className="absolute bottom-[-50px] md:bottom-4 left-[10%] md:left-[35%] w-[250px] md:w-[320px] h-[150px] md:h-[220px] bg-[#E88D72]/15 md:bg-[#E88D72]/20 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-1/2 bg-radial-gradient from-white/40 to-transparent blur-2xl z-0 pointer-events-none md:hidden" />
      <div className="absolute top-16 left-8 hidden md:grid grid-cols-4 gap-2 opacity-30 text-[#2C4A47]">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
        ))}
      </div>
      <div className="absolute top-12 right-[12%] hidden lg:grid grid-cols-5 gap-2.5 opacity-40 text-[#5B9A8B]">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-current" />
        ))}
      </div>
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 md:top-28 left-[5%] md:left-[8%] text-primary-accent/30 md:text-primary-accent/40 z-0"
      >
        <PawPrint className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 5, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-[15%] right-[10%] text-primary/20 md:hidden z-0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 6C4.9 6 4 6.9 4 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7 12c-1.66 0-3 1.34-3 3 0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5 0-1.66-1.34-3-3-3H7z"/>
        </svg>
      </motion.div>
      <div className="absolute bottom-12 left-10 text-[#E88D72]/40 hidden lg:block">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M5 25 Q 30 5, 60 25 T 115 25" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-6 space-y-6 md:space-y-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-2xl lg:max-w-none">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.2] md:leading-[1.12] tracking-tight">
                Cuidado que o seu{' '}
                <span className="relative inline-block gradient-text font-serif italic">
                  melhor amigo
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-primary" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 14C50 4 150 18 197 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                merece.
              </h1>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl md:max-w-2xl lg:max-w-xl font-normal leading-relaxed md:leading-relaxed">
              Equipe apaixonada, medicina veterinária preventiva e diagnósticos precisos. Do check-up à alta complexidade, garantindo uma vida longa e abanando o rabo.
            </p>
            <div className="pt-1 md:pt-2 flex flex-wrap gap-2.5 md:gap-3 justify-center lg:justify-start max-w-xl lg:max-w-none mx-auto lg:mx-0">
                {[
                    { text: 'Consultórios Cat Friendly', icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path d="M0 0h16v16H0z" fill="none" />
                        <path fill="currentColor" d="M12.293 1.707c.63-.63 1.707-.184 1.707.707V9l-.007.257A5 5 0 0 1 13.9 10h.6a.5.5 0 0 1 0 1h-.918A5 5 0 0 1 13 12h1.5a.5.5 0 0 1 0 1H12c-.835.628-1.874 1-3 1H7a4.98 4.98 0 0 1-3-1H1.5a.5.5 0 0 1 0-1H3a5 5 0 0 1-.583-1H1.5a.5.5 0 0 1 0-1h.6a5 5 0 0 1-.094-.743L2 9V2.414c0-.89 1.077-1.337 1.707-.707l2.378 2.378Q6.531 4.001 7 4h2q.47.001.914.085zM7.707 11a.707.707 0 0 0-.5 1.207l.44.44a.5.5 0 0 0 .707 0l.44-.44a.708.708 0 0 0-.5-1.207zM5.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m5 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5" />
                      </svg>
                    )},
                    { text: 'UTI e Cirurgia Alta Tecnologia', icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M18 4c-1.71 0-2.75.33-3.35.61C13.88 4.23 13 4 12 4s-1.88.23-2.65.61C8.75 4.33 7.71 4 6 4c-3 0-5 8-5 10c0 .83 1.32 1.59 3.14 1.9c.64 2.24 3.66 3.95 7.36 4.1v-4.28c-.59-.37-1.5-1.04-1.5-1.72c0-1 2-1 2-1s2 0 2 1c0 .68-.91 1.35-1.5 1.72V20c3.7-.15 6.72-1.86 7.36-4.1C21.68 15.59 23 14.83 23 14c0-2-2-10-5-10M4.15 13.87c-.5-.12-.89-.26-1.15-.37c.25-2.77 2.2-7.1 3.05-7.5c.54 0 .95.06 1.32.11c-2.1 2.31-2.93 5.93-3.22 7.76M9 12a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m6 0a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m4.85 1.87c-.29-1.83-1.12-5.45-3.22-7.76c.37-.05.78-.11 1.32-.11c.85.4 2.8 4.73 3.05 7.5c-.25.11-.64.25-1.15.37" />
                      </svg>
                    )},
                    { text: 'Laudos e Histórico Digital', icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                        <path d="M0 0h32v32H0z" fill="none" />
                        <path fill="currentColor" d="M7.781 5.46c.66 0 1.844.204 1.844 1.829s-1.172 2.25-1.844 2.25s-1.703-.638-1.703-2.25s1.133-1.828 1.703-1.828M4.156 7.5C4.816 7.5 6 7.703 6 9.328s-1.172 2.25-1.844 2.25s-1.703-.637-1.703-2.25S3.586 7.5 4.156 7.5M14 7.289c0-1.625-1.184-1.828-1.844-1.828c-.57 0-1.703.215-1.703 1.828s1.031 2.25 1.703 2.25S14 8.914 14 7.289m1.703.211c.66 0 1.844.203 1.844 1.828s-1.172 2.25-1.844 2.25S14 10.941 14 9.328S15.133 7.5 15.703 7.5m-.719 7.969c0-2.922-1.89-5.453-4.984-5.453s-4.953 2.468-4.953 5.453c0 2.484 2.961 2.484 4.946 2.484H10c2.203 0 4.984-.078 4.984-2.484m1.172 4.078c.66 0 1.844.203 1.844 1.828s-1.172 2.25-1.844 2.25s-1.703-.638-1.703-2.25s1.133-1.828 1.703-1.828m5.469-.211c0-1.625-1.184-1.828-1.844-1.828c-.57 0-1.703.215-1.703 1.828s1.031 2.25 1.703 2.25s1.844-.625 1.844-2.25m2.531-1.828c.66 0 1.844.203 1.844 1.828s-1.172 2.25-1.844 2.25s-1.703-.638-1.703-2.25s1.133-1.828 1.703-1.828m5.391 3.867c0-1.625-1.184-1.828-1.844-1.828c-.57 0-1.703.215-1.703 1.828s1.031 2.25 1.703 2.25s1.844-.625 1.844-2.25M22 22.063c3.094 0 4.984 2.53 4.984 5.453C26.984 29.922 24.204 30 22 30h-.008c-1.984 0-4.945 0-4.945-2.484c0-2.985 1.86-5.453 4.953-5.453" />
                      </svg>
                    )}
                ].map((item, index) => (
                    <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="inline-flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full border border-border shadow-sm text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap"
                    >
                        <div className="text-primary flex-shrink-0 w-4 h-4 md:w-5 md:h-5">
                            {item.icon}
                        </div>
                        {item.text}
                    </motion.span>
                ))}
            </div>
            <div className="pt-3 md:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="group px-7 md:px-8 py-3.5 md:py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3.5 md:gap-4"
              >
                <span className="text-sm md:text-base">Explore nossos serviços</span>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-accent flex items-center justify-center text-gray-900 group-hover:translate-x-1 transition-transform flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[3]" />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative mt-4 md:mt-6 lg:mt-0 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-none">
              <div className="relative z-10 overflow-hidden rounded-t-[120px] sm:rounded-t-[160px] rounded-b-[40px] sm:rounded-b-[60px] bg-white p-2.5 md:p-3 shadow-2xl shadow-slate-900/10 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000&q=80"
                  alt="Cão e gato felizes juntos na clínica"
                  className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover rounded-t-[110px] sm:rounded-t-[150px] rounded-b-[35px] sm:rounded-b-[50px] transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none rounded-b-[35px] sm:rounded-b-[50px]" />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-full h-full bg-[#E88D72]/25 md:bg-[#E88D72]/30 rounded-t-[130px] sm:rounded-t-[170px] rounded-b-[50px] sm:rounded-b-[70px] -z-0 transform -rotate-2 md:-rotate-3" />
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-full h-full bg-[#A8C8C0]/30 md:bg-[#A8C8C0]/40 rounded-t-[130px] sm:rounded-t-[170px] rounded-b-[50px] sm:rounded-b-[70px] -z-10 transform rotate-2 md:rotate-3" />
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -left-5 sm:-left-8 md:-left-10 transform -translate-y-1/2 z-20 bg-primary flex flex-col items-center justify-center text-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full shadow-xl border-4 border-white text-gray-950 p-4 sm:p-5 md:p-6"
              >
                <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider opacity-90 leading-tight">Confiança de</span>
                <span className="text-base sm:text-xl md:text-2xl font-black leading-none my-0.5 md:my-1">+10K</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold leading-tight">Tutores</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0], rotate: [5, -5, 5], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-4 md:-bottom-6 right-3 sm:right-6 md:right-10 z-20 text-[#E88D72]"
              >
                <div className="relative p-2 md:p-2.5 bg-white rounded-full shadow-2xl border-2 md:border-4 border-white grid place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <g fill="currentColor">
                        <path d="M12 10c-1.32 0-1.983.421-2.931 1.924l-.244.398l-.395.688l-.141.254c-.24.434-.571.753-1.139 1.142l-.55.365c-.94.627-1.432 1.118-1.707 1.955c-.124.338-.196.853-.193 1.28C4.7 19.693 5.898 21 7.5 21l.242-.006c.119-.006.234-.017.354-.034l.248-.043l.132-.028l.291-.073l.162-.045l.57-.17l.763-.243l.455-.136c.53-.15.94-.222 1.283-.222c.344 0 .753.073 1.283.222l.455.136l.764.242l.569.171l.312.084q.145.036.273.062l.248.043c.12.017.235.028.354.034L16.5 21c1.602 0 2.8-1.307 2.8-3c0-.427-.073-.939-.207-1.306c-.236-.724-.677-1.223-1.48-1.83l-.257-.19l-.528-.38c-.642-.47-1.003-.826-1.253-1.278l-.27-.485l-.252-.432C14.042 10.403 13.435 10 12 10m7.78-3h-.03c-1.219.02-2.35 1.066-2.908 2.504c-.69 1.775-.348 3.72 1.075 4.333c.256.109.527.163.801.163c1.231 0 2.38-1.053 2.943-2.504c.686-1.774.34-3.72-1.076-4.332A2.05 2.05 0 0 0 19.781 7zM9.025 3c-.112 0-.185.002-.27.016l-.093.016C7.13 3.237 6.265 5.02 6.554 6.886C6.826 8.611 8.016 10 9.474 10l.187-.005l.084-.01l.092-.016c1.533-.206 2.397-1.989 2.108-3.855C11.675 4.387 10.485 3 9.025 3" />
                        <path d="M14.972 3c-1.459 0-2.647 1.388-2.916 3.113c-.29 1.867.574 3.65 2.174 3.867q.153.02.296.02c1.39 0 2.543-1.265 2.877-2.883l.041-.23c.29-1.867-.574-3.65-2.174-3.867a2 2 0 0 0-.298-.02M4.217 7c-.274 0-.544.054-.797.161c-1.426.615-1.767 2.562-1.078 4.335C2.905 12.947 4.052 14 5.283 14c.274 0 .544-.054.797-.161c1.426-.615 1.767-2.562 1.078-4.335C6.595 8.053 5.448 7 4.217 7" />
                      </g>
                    </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24 pb-12 md:pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {stats.map((s, i) => {
              const DecorIcon = s.iconDecor
              const statRef = useRef<HTMLDivElement>(null)
              const isInView = useInView(statRef, { once: true })
              
              return (
                <motion.div
                  ref={statRef}
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all group overflow-hidden"
                >
                  <DecorIcon className={`absolute -top-3 -right-3 w-16 h-16 md:w-20 md:h-20 text-primary/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`} />
                  
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <s.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 font-medium leading-snug">{s.label}</p>
                  
                  <div className="absolute bottom-2 left-2 flex gap-0.5">
                    {[...Array(3)].map((_, j) => (
                      <PawPrint key={j} className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary/20" />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}