import { motion } from 'motion/react'
import { projects } from '../data/projects'
import FeaturedProjectCard from '../components/projects/FeaturedProjectCard'
import ProjectCard from '../components/projects/ProjectCard'

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  )

  const otherProjects = projects.filter(
    (project) => !project.featured
  )

  return (
    <section
      id="projects"
      className="border-b border-white/5 px-6 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
            01 — Projetos
          </span>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Projetos que transformaram
              <span className="text-[#a3ff12]"> código em produto.</span>
            </h2>

            <p className="max-w-lg text-sm leading-6 text-zinc-500 lg:justify-self-end sm:text-base sm:leading-7">
              Uma seleção de aplicações que desenvolvi e projetos open source
              dos quais participei, envolvendo back-end, front-end, banco de
              dados, testes e deploy.
            </p>
          </div>
        </motion.div>

        {featuredProject && (
          <FeaturedProjectCard project={featuredProject} />
        )}

        {otherProjects.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
