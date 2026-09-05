import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kleberson154',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kleberson154',
    icon: FaLinkedinIn,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 px-6 py-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3ff12]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
        >
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
                05 — Contato
              </span>

              <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                Vamos construir
                <br />
                algo
                <span className="text-[#a3ff12]"> juntos?</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
                Estou em busca de oportunidades de estágio em desenvolvimento
                de software, especialmente em projetos que envolvam back-end,
                APIs e aplicações web.
              </p>

              <a
                href="mailto:kleberson55@hotmail.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#a3ff12] px-6 py-4 font-semibold text-black transition hover:bg-[#b6ff3f]"
              >
                <Mail size={19} />
                Entrar em contato

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                Onde me encontrar
              </p>

              <div className="mt-8 space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#050505] px-5 py-4 transition hover:border-[#a3ff12]/25"
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
                    </a>
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
