import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'

interface GithubMenuProps {
  project: Project
  variant?: 'default' | 'large'
}

export default function GithubMenu({
  project,
  variant = 'default'
}: GithubMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const repositories = [
    project.frontendUrl && {
      label: 'Front-end',
      description: 'Interface da aplicação',
      url: project.frontendUrl
    },

    project.backendUrl && {
      label: 'Back-end',
      description: 'API e regras de negócio',
      url: project.backendUrl
    },

    project.githubUrl && {
      label: 'Repositório',
      description: 'Código-fonte do projeto',
      url: project.githubUrl
    }
  ].filter(Boolean) as {
    label: string
    description: string
    url: string
  }[]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  if (repositories.length === 0) {
    return null
  }

  const buttonClasses = variant === 'large' ? 'h-12 w-12' : 'h-10 w-10'

  const iconSize = variant === 'large' ? 18 : 17

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(current => !current)}
        aria-label={`Repositórios GitHub do projeto ${project.title}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`inline-flex items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition hover:border-[#a3ff12]/25 hover:text-[#a3ff12] ${buttonClasses}`}
      >
        <FaGithub size={iconSize} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.96
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.96
            }}
            transition={{
              duration: 0.18
            }}
            className="absolute bottom-full right-0 z-30 mb-3 w-[min(250px,calc(100vw-3rem))] overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/40"
          >
            <div className="border-b border-white/10 px-4 py-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                GitHub
              </span>

              <p className="mt-1 text-sm font-semibold text-zinc-200">
                {project.title}
              </p>
            </div>

            <div className="p-1.5">
              {repositories.map(repository => (
                <a
                  key={`${repository.label}-${repository.url}`}
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition hover:bg-white/4"
                >
                  <div>
                    <span className="text-sm font-medium text-zinc-300 transition group-hover:text-[#a3ff12]">
                      {repository.label}
                    </span>

                    <p className="mt-0.5 text-[11px] text-zinc-600">
                      {repository.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a3ff12]"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
