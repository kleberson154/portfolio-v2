import { motion } from 'motion/react'

export default function SmartStockOverview() {
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
              01 — Visão Geral
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Um sistema de estoque
              <span className="text-[#a3ff12]"> completo.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              O SmartStock foi desenvolvido para representar uma aplicação
              próxima de um cenário real, indo além de um CRUD simples.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <OverviewCard
              number="01"
              title="Problema"
              description="Gerenciar produtos e estoque de forma organizada, mantendo controle sobre entradas, saídas e níveis mínimos de estoque."
            />

            <OverviewCard
              number="02"
              title="Objetivo"
              description="Construir uma aplicação full stack com autenticação, autorização, regras de negócio, histórico e deploy em produção."
            />

            <OverviewCard
              number="03"
              title="Solução"
              description="Uma API REST em Spring Boot integrada a uma interface React, com PostgreSQL, JWT, controle de perfis e movimentações de estoque."
            />

            <OverviewCard
              number="04"
              title="Resultado"
              description="Uma aplicação funcional em produção, com back-end e front-end separados, documentação da API e fluxo completo de gerenciamento de estoque."
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-[#a3ff12]/15 bg-[#a3ff12]/3 p-6 sm:mt-10 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-start">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
                Decisão de negócio
              </span>

              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                Estoque controlado por movimentações
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                Após a criação de um produto, sua quantidade não pode ser
                alterada diretamente. Toda mudança de estoque precisa acontecer
                através de uma movimentação de entrada ou saída.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
                Dessa forma, o sistema mantém um histórico consistente das
                alterações e evita mudanças de quantidade sem rastreabilidade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface OverviewCardProps {
  number: string
  title: string
  description: string
}

function OverviewCard({ number, title, description }: OverviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl border border-white/10 bg-[#090909] p-5 transition hover:border-[#a3ff12]/20 sm:p-6"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
          {title}
        </span>

        <span className="font-mono text-xs text-zinc-700">{number}</span>
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
        {description}
      </p>
    </motion.article>
  )
}
