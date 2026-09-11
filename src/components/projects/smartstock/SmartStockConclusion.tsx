import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function SmartStockConclusion() {
  const learnings = [
    'Estruturação de uma API REST com regras de negócio reais',
    'Autenticação e autorização com JWT e Spring Security',
    'Integração entre React, Spring Boot e PostgreSQL',
    'Versionamento de banco de dados com Flyway',
    'Testes automatizados com JUnit e Mockito',
    'Deploy de uma aplicação full stack em produção'
  ]

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3ff12]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-10 lg:p-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
                09 — Resultado
              </span>

              <h2 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Do conceito ao
                <span className="text-[#a3ff12]"> deploy.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                O SmartStock reúne em um único projeto conceitos que considero
                importantes no desenvolvimento de aplicações reais: regras de
                negócio, segurança, persistência, testes, documentação,
                responsividade e publicação em produção.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
                O projeto também me permitiu acompanhar todo o ciclo de
                desenvolvimento, desde a modelagem do banco e construção da API
                até a integração com o front-end e o deploy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://smart-stock-front-end-six.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#a3ff12] px-5 py-3.5 font-semibold text-black transition hover:bg-[#b6ff3f]"
                >
                  Ver aplicação
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="https://smartstock-api-4jx3.onrender.com/swagger-ui.html"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3.5 font-semibold text-zinc-300 transition hover:border-[#a3ff12]/25 hover:text-[#a3ff12]"
                >
                  Swagger
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Principais aprendizados
              </span>

              <div className="mt-6 space-y-3">
                {learnings.map((learning, index) => (
                  <motion.div
                    key={learning}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06
                    }}
                    className="flex gap-3 rounded-lg border border-white/5 bg-[#050505] px-4 py-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3ff12]" />

                    <span className="text-sm leading-6 text-zinc-400">
                      {learning}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <ProjectLinks />
        </motion.div>
      </div>
    </section>
  )
}

function ProjectLinks() {
  const links = [
    {
      label: 'Back-end',
      description: 'Java + Spring Boot',
      href: 'https://github.com/kleberson154/SmartStockBackEnd'
    },
    {
      label: 'Front-end',
      description: 'React + TypeScript',
      href: 'https://github.com/kleberson154/SmartStockFrontEnd'
    }
  ]

  return (
    <div className="grid border-t border-white/10 sm:grid-cols-2">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center justify-between gap-6 p-6 transition hover:bg-white/2.5 sm:p-8 ${
            index === 0
              ? 'border-b border-white/10 sm:border-b-0 sm:border-r'
              : ''
          }`}
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              GitHub
            </span>

            <h3 className="mt-2 text-lg font-bold text-zinc-200 transition group-hover:text-[#a3ff12]">
              {link.label}
            </h3>

            <p className="mt-1 text-sm text-zinc-600">{link.description}</p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#050505] transition group-hover:border-[#a3ff12]/25">
            <FaGithub
              size={18}
              className="text-zinc-500 transition group-hover:text-[#a3ff12]"
            />
          </div>
        </a>
      ))}
    </div>
  )
}
