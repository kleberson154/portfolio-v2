import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Server,
  Database,
  ShieldCheck
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function SmartStockHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-[#a3ff12]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 transition hover:text-[#a3ff12]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Voltar ao portfólio
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]"
            >
              Case Study — Full Stack Application
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl lg:text-8xl"
            >
              Smart
              <span className="text-[#a3ff12]">Stock.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-7 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              Sistema completo de gerenciamento de estoque desenvolvido para
              demonstrar uma aplicação full stack real, com autenticação,
              controle de acesso por perfil, movimentações de estoque,
              histórico, alertas de estoque mínimo e deploy em produção.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
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
                href="https://github.com/kleberson154/SmartStockBackEnd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3.5 font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaGithub size={18} />
                Back-end
              </a>

              <a
                href="https://github.com/kleberson154/SmartStockFrontEnd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3.5 font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaGithub size={18} />
                Front-end
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {projectStats.map(stat => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#090909] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#050505]">
                    <Icon size={19} className="text-[#a3ff12]" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                      {stat.label}
                    </span>

                    <p className="mt-1 text-sm font-semibold text-zinc-200">
                      {stat.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-2 sm:mt-16 sm:p-4"
        >
          <img
            src="/projects/smartstock/dashboard.png"
            alt="Dashboard da aplicação SmartStock"
            className="w-full rounded-xl object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  )
}

const projectStats = [
  {
    icon: Server,
    label: 'Back-end',
    value: 'Spring Boot'
  },
  {
    icon: Database,
    label: 'Banco de dados',
    value: 'PostgreSQL'
  },
  {
    icon: ShieldCheck,
    label: 'Segurança',
    value: 'JWT + Roles'
  }
]
