import { motion } from 'motion/react'
import type { ComponentType } from 'react'
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFlyway,
  SiSwagger,
  SiJunit5
} from 'react-icons/si'

const technologyGroups = [
  {
    title: 'Back-end',
    technologies: [
      {
        name: 'Java',
        icon: FaJava
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot
      },
      {
        name: 'JUnit',
        icon: SiJunit5
      },
      {
        name: 'Flyway',
        icon: SiFlyway
      },
      {
        name: 'Swagger',
        icon: SiSwagger
      }
    ]
  },
  {
    title: 'Front-end',
    technologies: [
      {
        name: 'React',
        icon: FaReact
      },
      {
        name: 'TypeScript',
        icon: SiTypescript
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      },
      {
        name: 'HTML',
        icon: FaHtml5
      },
      {
        name: 'CSS',
        icon: FaCss3Alt
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss
      }
    ]
  },
  {
    title: 'Banco de dados',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql
      },
      {
        name: 'MySQL',
        icon: SiMysql
      },
      {
        name: 'MongoDB',
        icon: SiMongodb
      }
    ]
  },
  {
    title: 'Ferramentas & DevOps',
    technologies: [
      {
        name: 'Docker',
        icon: FaDocker
      },
      {
        name: 'Git',
        icon: FaGitAlt
      },
      {
        name: 'GitHub',
        icon: FaGithub
      }
    ]
  }
]

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden border-t border-white/5 px-6 py-12"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-112.5 w-112.5 rounded-full bg-[#a3ff12]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12"
        >
          <div className="lg:sticky lg:top-6 lg:self-start">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
              02 — Tecnologias
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ferramentas que
              <br />
              fazem parte do
              <span className="text-[#a3ff12]"> processo.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-7">
              Tecnologias que utilizo no desenvolvimento de APIs, aplicações
              web, bancos de dados e ambientes de desenvolvimento.
            </p>

            <div className="mt-8 border-l border-[#a3ff12]/30 pl-5 sm:mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
                Foco principal
              </p>

              <p className="mt-2 text-lg font-semibold text-zinc-200">
                Java + Spring Boot
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {technologyGroups.map((group, groupIndex) => (
              <TechnologyGroup
                key={group.title}
                group={group}
                index={groupIndex}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface TechnologyGroupProps {
  group: {
    title: string
    technologies: {
      name: string
      icon: ComponentType<{
        size?: number
        className?: string
      }>
    }[]
  }
  index: number
}

function TechnologyGroup({ group, index }: TechnologyGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08
      }}
      className="group rounded-xl border border-white/10 bg-[#090909] p-4 transition hover:border-white/15 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400 sm:text-sm">
          {group.title}
        </h3>

        <span className="font-mono text-xs text-zinc-700">0{index + 1}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {group.technologies.map(technology => {
          const Icon = technology.icon

          return (
            <motion.div
              key={technology.name}
              whileHover={{
                y: -3
              }}
              transition={{
                duration: 0.2
              }}
              className="group/tech flex min-h-20 flex-col justify-between rounded-lg border border-white/5 bg-[#050505] p-3 transition hover:border-[#a3ff12]/25 sm:min-h-28 sm:p-4"
            >
              <Icon className="text-[22px] text-zinc-500 transition-colors group-hover/tech:text-[#a3ff12] sm:text-[26px]" />

              <span className="mt-4 text-xs font-medium text-zinc-300 sm:mt-5 sm:text-sm">
                {technology.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
