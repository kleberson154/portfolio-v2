import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
}

export default function SectionReveal({
  children,
  className = ''
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
