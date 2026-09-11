import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import GithubMenu from './GithubMenu'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090909] transition hover:border-[#a3ff12]/20"
    >
      <div className="overflow-hidden border-b border-white/10 bg-[#050505] p-3">
        <img
          src={project.image}
          alt={`Interface do projeto ${project.title}`}
          className="aspect-16/10 w-full rounded-xl object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
              {project.category}
            </span>

            {project.contribution && (
              <span className="ml-3 rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                Contribuição
              </span>
            )}

            <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.035em] text-white">
              {project.title}
            </h3>
          </div>

          <span className="shrink-0 font-mono text-xs text-zinc-700">
            0{index + 2}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map(technology => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-[#050505] px-3 py-1.5 font-mono text-[10px] text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-[#a3ff12]"
            >
              Ver projeto
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}

          <div className="ml-auto">
            <GithubMenu project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
