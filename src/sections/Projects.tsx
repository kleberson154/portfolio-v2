import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import SectionReveal from '../components/ui/SectionReveal'

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured)

  if (!featuredProject) {
    return null
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#a3ff12]">
              01 — Projetos
            </span>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Projetos que transformam
              <br />
              ideias em
              <span className="text-[#a3ff12]"> software.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              Aplicações desenvolvidas com foco em arquitetura, regras de
              negócio, segurança e experiência de uso.
            </p>
          </div>
        </SectionReveal>

        <FeaturedProject project={featuredProject} />
      </div>
    </section>
  )
}

interface FeaturedProjectProps {
  project: {
    id: number
    slug: string
    title: string
    category: string
    description: string
    technologies: string[]
    image: string
    githubUrl?: string
    liveUrl?: string
  }
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
            Projeto em destaque
          </span>

          <h3 className="mt-1 text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <span className="font-mono text-4xl font-bold text-white/5 sm:text-6xl">
          0{project.id}
        </span>
      </div>

      <div className="relative overflow-hidden border-b border-white/10 bg-[#050505] p-3 sm:p-6">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3ff12]/5 blur-[120px]" />

        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <motion.img
            src={project.image}
            alt={`Dashboard do projeto ${project.title}`}
            className="w-full object-cover object-top"
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.4,
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>

      <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_0.7fr] lg:p-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
            {project.category}
          </span>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 lg:items-end">
          <Link
            to={`/projects/${project.slug}`}
            className="group/link flex w-full items-center justify-between rounded-lg bg-[#a3ff12] px-5 py-4 font-semibold text-black transition hover:bg-[#b6ff3f] lg:max-w-xs"
          >
            Ver projeto

            <ArrowUpRight
              size={19}
              className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link flex w-full items-center justify-between rounded-lg border border-white/10 px-5 py-4 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.03] hover:text-white lg:max-w-xs"
            >
              Aplicação

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link flex w-full items-center justify-between rounded-lg border border-white/10 px-5 py-4 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.03] hover:text-white lg:max-w-xs"
            >
              <span className="flex items-center gap-2">
                <FaGithub size={18} />
                GitHub
              </span>

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
