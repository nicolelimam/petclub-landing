import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './ui/SectionTitle'
import { Calendar as Clock, Send, ChevronDown, Check, Dog, Cat, Bird, PawPrint, Stethoscope, Syringe, TestTube, Scissors, AlertTriangle, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '../utils/cn'

const schema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  petName: z.string().min(2, 'Nome do pet é obrigatório'),
  species: z.enum(['Cachorro', 'Gato', 'Ave', 'Outro'], { message: 'Selecione uma espécie' }),
  breed: z.string().min(2, 'Raça é obrigatória'),
  age: z.string().min(1, 'Idade é obrigatória'),
  date: z.string().min(1, 'Data é obrigatória'),
  time: z.string().min(1, 'Horário é obrigatório'),
  type: z.enum(['Consulta', 'Vacinação', 'Exames', 'Banho e Tosa', 'Emergência', 'Outro'], { message: 'Selecione o tipo de atendimento' }),
  notes: z.string().optional(),
})

type Form = z.infer<typeof schema>

const speciesOptions = [
  { label: 'Cachorro', icon: Dog },
  { label: 'Gato', icon: Cat },
  { label: 'Ave', icon: Bird },
  { label: 'Outro', icon: PawPrint },
]

const serviceTypes = [
  { label: 'Consulta', icon: Stethoscope },
  { label: 'Vacinação', icon: Syringe },
  { label: 'Exames', icon: TestTube },
  { label: 'Banho e Tosa', icon: Scissors },
  { label: 'Emergência', icon: AlertTriangle },
  { label: 'Outro', icon: Sparkles },
]

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00',
  '13:30', '14:30', '15:30', '16:30', '17:30'
]

const inputClass = "w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 placeholder:text-gray-400"
const labelClass = "block text-sm font-semibold text-gray-700 mb-2"

export function AppointmentForm() {
  const [isSpeciesOpen, setIsSpeciesOpen] = useState(false)
  const [isTypeOpen, setIsTypeOpen] = useState(false)
  const [isTimeOpen, setIsTimeOpen] = useState(false)

  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm<Form>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: Form) => {
    await new Promise(r => setTimeout(r, 800))
    toast.success('Agendamento solicitado!', {
      description: `Entraremos em contato com ${data.name} em breve.`,
    })
    reset()
  }

  return (
    <section id="appointment" className="py-20 md:py-32 bg-gradient-to-b from-warm via-cream to-warm bg-paws relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="Agendamento"
          title="Agende sua consulta"
          subtitle="Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 md:p-12 shadow-soft border border-border/50"
        >
          <div className="grid md:grid-cols-2 gap-5">
            {/* Nome */}
            <div>
              <label className={labelClass}>Nome completo *</label>
              <input {...register('name')} className={cn(inputClass, errors.name && 'border-red-400 focus:ring-red-200')} placeholder="Seu nome" />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Telefone */}
            <div>
              <label className={labelClass}>Telefone *</label>
              <input {...register('phone')} className={cn(inputClass, errors.phone && 'border-red-400 focus:ring-red-200')} placeholder="(11) 99999-9999" />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>E-mail *</label>
              <input {...register('email')} type="email" className={cn(inputClass, errors.email && 'border-red-400 focus:ring-red-200')} placeholder="seu@email.com" />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Nome do Pet */}
            <div>
              <label className={labelClass}>Nome do Pet *</label>
              <input {...register('petName')} className={cn(inputClass, errors.petName && 'border-red-400 focus:ring-red-200')} placeholder="Nome do seu pet" />
              {errors.petName && <p className="mt-1 text-xs text-red-500">{errors.petName.message}</p>}
            </div>

            {/* Select Customizado: Espécie */}
            <div className="relative">
              <label className={labelClass}>Espécie *</label>
              <Controller
                name="species"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSpeciesOpen(!isSpeciesOpen)}
                      className={cn(inputClass, "flex items-center justify-between text-left", errors.species && 'border-red-400')}
                    >
                      <span className={field.value ? "text-gray-900 font-medium" : "text-gray-400"}>
                        {field.value || "Selecione a espécie"}
                      </span>
                      <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-200", isSpeciesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isSpeciesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 bg-white border border-border rounded-xl shadow-xl overflow-hidden py-1"
                        >
                          {speciesOptions.map((item) => {
                            const Icon = item.icon
                            const isSelected = field.value === item.label
                            return (
                              <li key={item.label}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    field.onChange(item.label)
                                    setIsSpeciesOpen(false)
                                  }}
                                  className={cn(
                                    "w-full px-4 py-3 flex items-center justify-between hover:bg-cream/60 transition-colors text-left",
                                    isSelected && "bg-cream text-primary font-semibold"
                                  )}
                                >
                                  <span className="flex items-center gap-3">
                                    <Icon className={cn("w-5 h-5", isSelected ? "text-primary" : "text-gray-400")} />
                                    {item.label}
                                  </span>
                                  {isSelected && <Check className="w-4 h-4 text-primary" />}
                                </button>
                              </li>
                            )
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              />
              {errors.species && <p className="mt-1 text-xs text-red-500">{errors.species.message}</p>}
            </div>

            {/* Raça */}
            <div>
              <label className={labelClass}>Raça *</label>
              <input {...register('breed')} className={cn(inputClass, errors.breed && 'border-red-400 focus:ring-red-200')} placeholder="Ex: Golden Retriever" />
              {errors.breed && <p className="mt-1 text-xs text-red-500">{errors.breed.message}</p>}
            </div>

            {/* Idade */}
            <div>
              <label className={labelClass}>Idade *</label>
              <input {...register('age')} className={cn(inputClass, errors.age && 'border-red-400 focus:ring-red-200')} placeholder="Ex: 2 anos" />
              {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>}
            </div>

            {/* Select Customizado: Tipo de Atendimento */}
            <div className="relative">
              <label className={labelClass}>Tipo de Atendimento *</label>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsTypeOpen(!isTypeOpen)}
                      className={cn(inputClass, "flex items-center justify-between text-left", errors.type && 'border-red-400')}
                    >
                      <span className={field.value ? "text-gray-900 font-medium" : "text-gray-400"}>
                        {field.value || "Selecione o serviço"}
                      </span>
                      <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-200", isTypeOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isTypeOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 bg-white border border-border rounded-xl shadow-xl overflow-hidden py-1 max-h-60 overflow-y-auto"
                        >
                          {serviceTypes.map((item) => {
                            const Icon = item.icon
                            const isSelected = field.value === item.label
                            return (
                              <li key={item.label}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    field.onChange(item.label)
                                    setIsTypeOpen(false)
                                  }}
                                  className={cn(
                                    "w-full px-4 py-3 flex items-center justify-between hover:bg-cream/60 transition-colors text-left",
                                    isSelected && "bg-cream text-primary font-semibold"
                                  )}
                                >
                                  <span className="flex items-center gap-3">
                                    <Icon className={cn("w-5 h-5", isSelected ? "text-primary" : "text-gray-400")} />
                                    {item.label}
                                  </span>
                                  {isSelected && <Check className="w-4 h-4 text-primary" />}
                                </button>
                              </li>
                            )
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              />
              {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type.message}</p>}
            </div>

            {/* Input Data Customizado com tema */}
            <div>
              <label className={labelClass}>Data Preferencial *</label>
              <div className="relative">
                <input
                  {...register('date')}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className={cn(inputClass, "cursor-pointer", errors.date && 'border-red-400')}
                />
              </div>
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
            </div>

            {/* Input de Horário Customizado com Dropdown de Horários */}
            <div className="relative">
              <label className={labelClass}>Horário Preferencial *</label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsTimeOpen(!isTimeOpen)}
                      className={cn(inputClass, "flex items-center justify-between text-left", errors.time && 'border-red-400')}
                    >
                      <span className={field.value ? "text-gray-900 font-medium" : "text-gray-400"}>
                        {field.value || "Selecione um horário"}
                      </span>
                      <Clock className="w-5 h-5 text-primary" />
                    </button>

                    <AnimatePresence>
                      {isTimeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 bg-white border border-border rounded-xl shadow-xl p-4"
                        >
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Horários disponíveis</p>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((slot) => {
                              const isSelected = field.value === slot
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => {
                                    field.onChange(slot)
                                    setIsTimeOpen(false)
                                  }}
                                  className={cn(
                                    "py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center",
                                    isSelected
                                      ? "bg-primary text-white border-primary shadow-sm"
                                      : "border-border/60 hover:border-primary hover:text-primary text-gray-700 bg-warm/50"
                                  )}
                                >
                                  {slot}
                                </button>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              />
              {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>}
            </div>

            {/* Observações */}
            <div className="md:col-span-2">
              <label className={labelClass}>Observações (opcional)</label>
              <textarea {...register('notes')} rows={4} className={cn(inputClass, 'resize-none')} placeholder="Conte-nos mais sobre o atendimento desejado..." />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando...' : (
                <>
                  <Send className="w-4 h-4" />
                  Solicitar Agendamento
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}