import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  Server
} from 'lucide-react'
import SectionReveal from '../components/ui/SectionReveal'

const highlights = [
  {
    icon: Server,
    label: 'Foco',
    value: 'Back-end',
    description: 'Java & Spring Boot'
  },
  {
    icon: Code2,
    label: 'Também construo',
    value: 'Full Stack',
    description: 'React & TypeScript'
  },
  {
    icon: GraduationCap,
    label: 'Formação',
    value: 'Ciência da Computação',
    description: 'Conclusão prevista: 2027'
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Uberlândia — MG',
    description: 'Brasil'
  }
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 px-6 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
            03 — Sobre mim
          </span>
        </SectionReveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <AboutContent />

          <AboutCards />
        </div>
      </div>
    </section>
  )
}

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="max-w-4xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        Gosto de entender
        <br />
        o problema antes de
        <br />
        escrever o<span className="text-[#a3ff12]"> código.</span>
      </h2>

      <div className="mt-7 max-w-2xl space-y-4 text-sm leading-6 text-zinc-400 sm:mt-10 sm:space-y-5 sm:text-lg sm:leading-7">
        <p>
          Sou estudante de Ciência da Computação e desenvolvedor com foco em
          Back-end Java, construindo APIs REST e aplicações com Spring Boot,
          bancos de dados relacionais e autenticação.
        </p>

        <p>
          Também trabalho com React e TypeScript, o que me permite compreender a
          aplicação como um todo e transformar uma API em um produto funcional
          do back-end à interface.
        </p>

        <p>
          Busco uma oportunidade de estágio em desenvolvimento de software onde
          possa contribuir com projetos reais, aprofundar meus conhecimentos e
          evoluir trabalhando em equipe.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://www.linkedin.com/in/kleberson154"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 border-b border-zinc-700 pb-1 text-sm font-medium text-zinc-300 transition hover:border-[#a3ff12] hover:text-[#a3ff12]"
        >
          Conheça minha trajetória no LinkedIn
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.div>
  )
}

function AboutCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {highlights.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}
            whileHover={{
              x: 4
            }}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#090909] p-4 transition hover:border-[#a3ff12]/20 sm:gap-5 sm:p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#050505] sm:h-12 sm:w-12">
              <Icon
                size={19}
                className="text-zinc-500 transition group-hover:text-[#a3ff12]"
              />
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {item.label}
              </span>

              <h3 className="mt-1 font-semibold text-zinc-200">{item.value}</h3>

              <p className="mt-0.5 text-sm text-zinc-600">{item.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
