import { motion } from 'motion/react'
import { gallery, mobileScreens } from '../../../data/smartstock'

export default function SmartStockGallery() {

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
            05 — Aplicação
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Do fluxo de estoque à
            <span className="text-[#a3ff12]"> interface.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            A interface foi construída para consumir a API e apresentar os
            principais fluxos do sistema de forma simples, responsiva e
            consistente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#090909] sm:mt-12"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
                Dashboard
              </span>

              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                Visão geral do estoque
              </h3>
            </div>

            <span className="font-mono text-xs text-zinc-700">01</span>
          </div>

          <div className="bg-[#050505] p-2 sm:p-4">
            <img
              src="/projects/smartstock/dashboard.png"
              alt="Dashboard do SmartStock"
              className="w-full rounded-xl object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08
              }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#090909] transition hover:border-[#a3ff12]/20"
            >
              <div className="overflow-hidden border-b border-white/10 bg-[#050505] p-2">
                <motion.img
                  src={item.image}
                  alt={`${item.title} no SmartStock`}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35 }}
                  className="h-55 w-full rounded-lg object-cover object-top sm:h-65"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-zinc-200">{item.title}</h3>

                  <span className="font-mono text-[10px] text-zinc-700">
                    0{index + 2}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <MobileGallery />
      </div>
    </section>
  )
}

function MobileGallery() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mt-12 rounded-2xl border border-white/10 bg-[#090909] p-5 sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-center">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
            Responsividade
          </span>

          <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white sm:text-3xl">
            Experiência também no
            <span className="text-[#a3ff12]"> mobile.</span>
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            A aplicação foi adaptada para diferentes tamanhos de tela, mantendo
            navegação, visualização dos dados e principais ações acessíveis em
            dispositivos móveis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {mobileScreens.map(screen => (
            <div
              key={screen.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#050505] p-2"
            >
              <img
                src={screen.image}
                alt={screen.title}
                className="w-full rounded-lg object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
