import { motion } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Calendar, PawPrint, Stethoscope, ArrowDown } from 'lucide-react'

const steps = [
  { 
    icon: Calendar, 
    title: 'Agende', 
    desc: 'Escolha o melhor horário pelo nosso formulário online ou diretamente pelo WhatsApp.' 
  },
  { 
    icon: PawPrint, 
    title: 'Traga seu Pet', 
    desc: 'Venha até nossa clínica. Temos um ambiente super acolhedor e fácil acesso.' 
  },
  { 
    icon: Stethoscope, 
    title: 'Receba Atendimento', 
    desc: 'Cuidado completo e humanizado com nossos veterinários altamente especializados.' 
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-warm to-orange-50/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Como Funciona"
          title="Em 3 passos simples"
          subtitle="Agendar uma consulta na Pet Club é rápido, fácil e descomplicado."
        />

        <div className="relative mt-12 md:mt-16">
          {/* Linha conectora horizontal*/}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Ícone e Badge */}
                <div className="relative z-10 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-24 h-24 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center shadow-lg group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300"
                  >
                    <s.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {i + 1}
                  </div>
                </div>

                {/* Card de Texto */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full shadow-sm border border-white/50 group-hover:shadow-lg group-hover:border-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{s.desc}</p>
                </div>

                {/* Seta conectora (Mobile only) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4 text-primary/40">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}