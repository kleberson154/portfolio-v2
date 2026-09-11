import { motion } from 'motion/react'
import { decisions } from '../../../data/smartstock'

export default function SmartStockTechnicalDecisions() {

  return (
    <section className="border-b border-white/5 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
            03 — Decisões Técnicas
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Mais do que
            <br />
            apenas um
            <span className="text-[#a3ff12]"> CRUD.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            Algumas decisões foram tomadas para aproximar o projeto de situações
            encontradas em aplicações reais, priorizando segurança, consistência
            dos dados e manutenção.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
          {decisions.map((decision, index) => (
            <TechnicalDecisionCard
              key={decision.number}
              decision={decision}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TechnicalDecisionCardProps {
  decision: {
    number: string
    title: string
    description: string
    tag: string
    featured?: boolean
  }
  index: number
}

function TechnicalDecisionCard({
  decision,
  index
}: TechnicalDecisionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      className={`group relative overflow-hidden rounded-xl border p-5 transition sm:p-6 ${
        decision.featured
          ? 'border-[#a3ff12]/25 bg-[#a3ff12]/[0.035]'
          : 'border-white/10 bg-[#090909] hover:border-[#a3ff12]/20'
      }`}
    >
      {decision.featured && (
        <div className="absolute right-0 top-0 rounded-bl-lg border-b border-l border-[#a3ff12]/20 bg-[#a3ff12]/10 px-3 py-1.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#a3ff12]">
            Regra principal
          </span>
        </div>
      )}

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-zinc-700">
          {decision.number}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#a3ff12]">
          {decision.tag}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-zinc-100 sm:text-xl">
        {decision.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500 sm:leading-7">
        {decision.description}
      </p>
    </motion.article>
  )
}
