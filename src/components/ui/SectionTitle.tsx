import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface Props {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({ tag, title, subtitle, align = 'center', className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}
    >
      {tag && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}