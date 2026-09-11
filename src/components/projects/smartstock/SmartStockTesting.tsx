import { motion } from 'motion/react'
import { qualityItems } from '../../../data/smartstock'

export default function SmartStockTesting() {

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
              07 — Testes & Qualidade
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Código pensado para
              <span className="text-[#a3ff12]"> evoluir.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              Além das funcionalidades principais, o projeto utiliza testes,
              validações e tratamento centralizado de erros para aumentar a
              confiabilidade da API.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07
                }}
                className="group rounded-xl border border-white/10 bg-[#090909] p-5 transition hover:border-[#a3ff12]/20 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-zinc-200">
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
          </div>
        </motion.div>

        <TestingHighlight />
      </div>
    </section>
  )
}

function TestingHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#090909] sm:mt-12"
    >
      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
            Testes automatizados
          </span>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-5xl font-black tracking-tighter text-white sm:text-6xl">
              10
            </span>

            <span className="pb-1 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
              testes passando
            </span>
          </div>

          <p className="mt-5 text-sm leading-6 text-zinc-500">
            A suíte cobre comportamentos importantes da camada de serviço e
            ajuda a evitar regressões durante alterações no projeto.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            Alguns cenários validados
          </span>

          <div className="mt-5 space-y-3">
            {[
              'Criação de produtos',
              'Busca de produto por ID',
              'Validação de regras de negócio',
              'Movimentações de entrada e saída',
              'Tratamento de estoque insuficiente'
            ].map(scenario => (
              <div
                key={scenario}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#050505] px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3ff12]" />

                <span className="text-sm text-zinc-400">{scenario}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
