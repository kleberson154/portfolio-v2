import { motion } from 'motion/react'
import { technologies } from '../../../data/smartstock'

export default function SmartStockTechnologies() {

  return (
    <section className="border-b border-white/5 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
              04 — Tecnologias
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Stack utilizada no
              <span className="text-[#a3ff12]"> projeto.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              O SmartStock foi construído com tecnologias modernas para cobrir
              todo o fluxo da aplicação, do banco de dados ao deploy.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03
                }}
                className="rounded-full border border-white/10 bg-[#090909] px-4 py-2 font-mono text-xs text-zinc-400 transition hover:border-[#a3ff12]/25 hover:text-[#a3ff12]"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
