import { motion } from 'motion/react'
import { itemsArquitecture, layers } from '../../../data/smartstock'

export default function SmartStockArchitecture() {
  return (
    <section className="border-b border-white/5 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
              02 — Arquitetura
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Separação clara entre
              <span className="text-[#a3ff12]"> front e back.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              O SmartStock utiliza uma arquitetura desacoplada, com front-end e
              back-end independentes, comunicando-se através de uma API REST.
            </p>
          </div>

          <ArchitectureFlow />
        </motion.div>

        <ArchitectureDetails />
      </div>
    </section>
  )
}

function ArchitectureFlow() {

  return (
    <div className="relative">
      <div className="space-y-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="relative rounded-xl border border-white/10 bg-[#090909] p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
                  {layer.label}
                </span>

                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  {layer.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {layer.description}
                </p>
              </div>

              <span className="font-mono text-xs text-zinc-700">
                0{index + 1}
              </span>
            </div>

            {index < layers.length - 1 && (
              <div className="absolute -bottom-5 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-[#a3ff12]">
                ↓
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ArchitectureDetails() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
    >
      {itemsArquitecture.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: index * 0.06
          }}
          className="group rounded-xl border border-white/10 bg-[#090909] p-5 transition hover:border-[#a3ff12]/20"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-200">
              {item.title}
            </h3>

            <span className="font-mono text-[10px] text-zinc-700">
              0{index + 1}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {item.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  )
}
