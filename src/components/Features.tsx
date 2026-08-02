import { motion } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Heart, UserCheck, Building2, Siren, Sparkles, Shield } from 'lucide-react'

const features = [
  { icon: Heart, title: 'Atendimento Humanizado', desc: 'Tratamos cada pet como membro da família.' },
  { icon: UserCheck, title: 'Veterinários Especializados', desc: 'Equipe com diversas especialidades.' },
  { icon: Building2, title: 'Estrutura Moderna', desc: 'Instalações equipadas com tecnologia de ponta.' },
  { icon: Siren, title: 'Atendimento Emergencial', desc: 'Plantão 24h para urgências.' },
  { icon: Sparkles, title: 'Produtos Premium', desc: 'Apenas as melhores marcas do mercado.' },
  { icon: Shield, title: 'Ambiente Seguro', desc: 'Espaço pensado para o bem-estar do seu pet.' },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-warm to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Diferenciais"
          title="Por que escolher a Pet Club?"
          subtitle="Mais do que uma clínica, somos parceiros no cuidado com seu melhor amigo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 bg-white rounded-2xl p-6 border border-border/30 hover:border-primary/40 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}