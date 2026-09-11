import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import GithubMenu from './GithubMenu'
import type { Project } from '../../data/projects'

interface FeaturedProjectCardProps {
  project: Project
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 p-6 sm:p-8 lg:order-1 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
              Projeto em destaque
            </span>

            {project.caseStudy && (
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                Case Study
              </span>
            )}
          </div>

          <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-[#050505] px-3 py-1.5 font-mono text-[10px] text-zinc-500"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.caseStudy && (
              <Link
                to={`/projects/${project.slug}`}
                className="group/button inline-flex items-center justify-center gap-2 rounded-lg bg-[#a3ff12] px-5 py-3 font-semibold text-black transition hover:bg-[#b6ff3f]"
              >
                Ver estudo de caso

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </Link>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-semibold text-zinc-300 transition hover:border-[#a3ff12]/25 hover:text-[#a3ff12]"
              >
                Ver aplicação
                <ArrowUpRight size={17} />
              </a>
            )}

            <GithubMenu project={project} variant="large"/>
          </div>
        </div>

        <div className="order-1 overflow-hidden border-b border-white/10 bg-[#050505] p-3 lg:order-2 lg:border-b-0 lg:border-l">
          <img
            src={project.image}
            alt={`Interface do projeto ${project.title}`}
            className="h-full min-h-65 w-full rounded-xl object-cover object-top transition duration-500 group-hover:scale-[1.015] sm:min-h-90"
          />
        </div>
      </div>
    </motion.article>
  )
}
