import { motion } from 'framer-motion'
import { CheckCircle2, Heart, Award, Users, Clock } from 'lucide-react'

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

const benefits = [
  { icon: Users, text: 'Equipe com mais de 15 anos de experiência', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Award, text: 'Estrutura moderna e equipamentos de ponta', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Heart, text: 'Atendimento humanizado e personalizado', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Clock, text: 'Produtos selecionados das melhores marcas', color: 'text-amber-500', bg: 'bg-amber-50' },
]

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-warm to-orange-50/30">
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[5%] text-orange-300/30 hidden md:block"
      >
        <PawPrint className="w-16 h-16" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[8%] text-amber-300/30 hidden md:block"
      >
        <BoneIcon className="w-14 h-14" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full"
          >
            Sobre Nós
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            Uma clínica feita com{' '}
            <span className="gradient-text font-serif italic">amor pelos animais</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600"
          >
            Há mais de uma década cuidando da saúde e felicidade dos pets da região.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Cuidado veterinário que vai além do consultório
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
              Na Pet Club, acreditamos que cada pet é único e merece atenção especial.
              Nossa equipe multidisciplinar combina conhecimento técnico avançado com
              um atendimento acolhedor, criando um ambiente onde seu melhor amigo se
              sente seguro e confortável.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
              Oferecemos desde consultas de rotina e vacinação até cirurgias complexas
              e atendimento emergencial 24 horas. Tudo com transparência, ética e muito carinho.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-3 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 ${b.bg} rounded-xl flex items-center justify-center`}>
                    <b.icon className={`w-4 h-4 md:w-5 md:h-5 ${b.color}`} />
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 font-medium leading-snug">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
            >
              Conhecer Serviços
              <PawPrint className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-none flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] transform rotate-3 blur-xl" />
                
                <div className="relative bg-white p-3 md:p-4 shadow-2xl border-4 border-white rounded-[40%_60%_50%_50%/50%_40%_60%_50%] transform -rotate-2">
                  <div className="relative overflow-hidden rounded-[38%_58%_48%_48%/48%_38%_58%_48%]">
                    <img
                      src="https://img.magnific.com/fotos-gratis/algumas-vitaminas-para-cachorrinhos_329181-14493.jpg?t=st=1785698938~exp=1785702538~hmac=e10b4626c8aa7a77cbdb7a865aa2c97cbf2bc38d70feaf1004e8f4ad0b5b66df&w=2000%202000w"
                      alt="Cachorrinho recebendo cuidados"
                      className="w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] lg:w-[400px] lg:h-[480px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 md:-top-6 right-0 md:right-4 z-20 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-xl border-2 border-white"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center shadow-lg">
                      <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg md:text-2xl font-bold text-gray-900 leading-none">15+</p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-medium">Anos de<br/>experiência</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 md:-bottom-6 left-0 md:left-4 z-20 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-xl border-2 border-white"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                      <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg md:text-2xl font-bold text-gray-900 leading-none">+2.5k</p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-medium">Pets/mês</p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute top-1/2 -right-6 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-orange-300/20 rounded-full blur-xl" />
                <div className="absolute top-1/3 -left-4 md:-left-6 w-8 h-8 md:w-12 md:h-12 bg-amber-300/20 rounded-full blur-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}