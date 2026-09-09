import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kleberson154',
    icon: FaGithub
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kleberson154',
    icon: FaLinkedinIn
  }
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 px-6 py-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3ff12]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
        >
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
                05 — Contato
              </span>

              <h2 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-white sm:mt-6 sm:text-5xl lg:text-7xl">
                Vamos construir
                <br />
                algo
                <span className="text-[#a3ff12]"> juntos?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500 sm:mt-7 sm:text-lg sm:leading-7">
                Estou em busca de oportunidades de estágio em desenvolvimento de
                software, especialmente em projetos que envolvam back-end, APIs
                e aplicações web.
              </p>

              <a
                href="mailto:kleberson55@hotmail.com"
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-[#a3ff12] px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b6ff3f] sm:mt-10 sm:inline-flex sm:w-auto"
              >
                <Mail size={19} />
                Entrar em contato
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <div className="mt-6 sm:pl-6 flex items-center justify-center sm:justify-start gap-3">
                <Mail size={16} className="text-zinc-600" />

                <a
                  href="mailto:kleberson55@hotmail.com"
                  className="text-sm text-zinc-400 transition hover:text-[#a3ff12]"
                >
                  kleberson55@hotmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                Onde me encontrar
              </p>

              <div className="mt-8 space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        delay: 0.15 + index * 0.1,
                        duration: 0.35
                      }}
                      className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#050505] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3ff12]/25 hover:bg-white/3 sm:px-5"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                        <Icon
                          size={19}
                          className="text-zinc-500 transition group-hover:text-[#a3ff12]"
                        />

                        {social.label}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a3ff12]"
                      />
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Localização
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  Uberlândia — MG, Brasil
                </p>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Interesse
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  Estágio em Desenvolvimento de Software
                </p>

                <div className="mt-8 rounded-lg border border-[#a3ff12]/10 bg-[#050505] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Disponibilidade
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3ff12] opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#a3ff12]" />
                    </span>

                    <span className="text-sm font-medium text-zinc-300">
                      Disponível para estágio e oportunidades remotas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
