import { motion } from 'motion/react'
import { BriefcaseBusiness, GraduationCap, BookOpen } from 'lucide-react'
import SectionReveal from '../components/ui/SectionReveal'
import type { ComponentType } from 'react'

const timeline = [
  {
    type: 'experience',
    icon: BriefcaseBusiness,
    period: '2023 — 2024',
    title: 'Soldado de Engenharia',
    organization: 'Exército Brasileiro',
    description:
      'Experiência marcada por disciplina, responsabilidade, trabalho em equipe, cumprimento de procedimentos e adaptação a diferentes situações.'
  },
  {
    type: 'education',
    icon: GraduationCap,
    period: '2023 — 2027',
    title: 'Ciência da Computação',
    organization: 'Graduação',
    description:
      'Formação voltada para desenvolvimento de software, estruturas de dados, bancos de dados, engenharia de software, sistemas e computação.'
  },
  {
    type: 'education',
    icon: GraduationCap,
    period: '2024 — 2025',
    title: 'Técnico em Desenvolvimento de Sistemas',
    organization: 'SENAC',
    description:
      'Formação prática em desenvolvimento de aplicações, lógica de programação, bancos de dados e desenvolvimento de sistemas.'
  },
  {
    type: 'course',
    icon: BookOpen,
    period: '2024 — 2026',
    title: 'Formação complementar',
    organization: 'Cursos & Programas',
    description:
      'Estudos complementares em Java, JavaScript, desenvolvimento Full Stack, cloud e fundamentos de Ciência da Computação.'
  }
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/5 px-6 py-12"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-105 w-105 rounded-full bg-[#a3ff12]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-3xl">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
              04 — Trajetória
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Experiência,
              <br />
              formação e<span className="text-[#a3ff12]"> evolução.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-7">
              Uma trajetória construída entre formação acadêmica,
              desenvolvimento técnico e experiências que contribuíram para a
              forma como trabalho hoje.
            </p>
          </div>
        </SectionReveal>

        <div className="relative mt-10 sm:mt-16">
          <div className="absolute bottom-0 left-4.75 top-0 w-px bg-white/10 sm:left-7.75" />

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <TimelineItem
                key={`${item.title}-${item.period}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  item: {
    type: string
    icon: ComponentType<{
      size?: number
      className?: string
    }>
    period: string
    title: string
    organization: string
    description: string
  }
  index: number
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07
      }}
      className="relative grid gap-4 pl-14 sm:pl-20 lg:grid-cols-[0.25fr_1fr] lg:gap-5"
    >
      <div className="absolute left-0 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#090909] sm:top-5 sm:h-16 sm:w-16">
        <Icon size={20} className="text-zinc-500" />
      </div>

      <div className="pt-1 lg:pt-6">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
          {item.period}
        </span>
      </div>

      <div className="group rounded-xl border border-white/10 bg-[#090909] p-5 transition hover:border-[#a3ff12]/20 sm:p-8">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="min-w-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
              {item.organization}
            </span>

            <span className="shrink-0 font-mono text-xs text-zinc-700">
              0{index + 1}
            </span>
          </div>

          <h3 className="mt-2 text-lg font-bold text-zinc-100 sm:text-2xl">
            {item.title}
          </h3>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}
