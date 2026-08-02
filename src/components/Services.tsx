import { motion } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Stethoscope, Syringe, FlaskConical, Scissors, HeartPulse, Siren } from 'lucide-react'

const services = [
  { icon: Stethoscope, title: 'Consulta Veterinária', desc: 'Avaliação completa com profissionais especializados.' },
  { icon: Syringe, title: 'Vacinação', desc: 'Calendário vacinal atualizado e seguro para seu pet.' },
  { icon: FlaskConical, title: 'Exames Laboratoriais', desc: 'Diagnósticos precisos com tecnologia de ponta.' },
  { icon: Scissors, title: 'Banho e Tosa', desc: 'Estética e higiene com produtos premium.' },
  { icon: HeartPulse, title: 'Cirurgias', desc: 'Centro cirúrgico equipado e equipe especializada.' },
  { icon: Siren, title: 'Atendimento Emergencial', desc: 'Plantão 24h para urgências e emergências.' },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-cream to-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Nossos Serviços"
          title="Tudo que seu pet precisa em um só lugar"
          subtitle="Oferecemos uma gama completa de serviços veterinários e de estética animal."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 shadow-soft border border-border/30 hover:border-primary/30 hover:shadow-glow transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}