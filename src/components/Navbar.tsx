import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, PawPrint } from 'lucide-react'

const links = [
  { label: 'Início', href: '#home' },
  { label: 'Clínica', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Produtos', href: '#products' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sectionHeights = links
        .map((link) => {
          const section = document.querySelector<HTMLElement>(link.href)
          if (section) {
            return {
              id: link.href.substring(1),
              top: section.offsetTop - 100,
              bottom: section.offsetTop + section.offsetHeight - 100,
            }
          }
          return null
        })
        .filter((item): item is { id: string; top: number; bottom: number } => item !== null)

      const currentPosition = window.scrollY
      const currentSection = sectionHeights.find(
        (section) => currentPosition >= section.top && currentPosition < section.bottom
      )

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 transition-all duration-300 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg border border-border/50' 
              : 'bg-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div
              animate={scrolled ? { scale: 0.9 } : { scale: 1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow"
            >
              <PawPrint className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">
              Pet<span className="text-primary">Club</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 rounded-full p-1 border border-gray-200/50">
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-white/50'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              <Phone className="w-4 h-4 text-primary" /> (11) 99999-9999
            </div>
            <a
              href="#appointment"
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors border border-gray-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-3 mx-4 bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-border/50"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((l) => {
                const isActive = activeSection === l.href.substring(1)
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <PawPrint
                      className={`w-4 h-4 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      } transition-opacity`}
                    />
                    {l.label}
                  </a>
                )
              })}
              <div className="h-px bg-gray-200 my-3" />
              <div className="flex items-center gap-3 px-5 py-3 text-sm font-bold text-gray-800 bg-gray-50 rounded-xl border border-gray-100 mb-2">
                <Phone className="w-4 h-4 text-primary" /> (11) 99999-9999
              </div>
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-center font-bold shadow-md"
              >
                Agendar Consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}