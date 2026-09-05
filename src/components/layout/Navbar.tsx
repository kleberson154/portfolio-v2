import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Tecnologias', id: 'technologies' },
  { label: 'Sobre', id: 'about' },
  { label: 'Trajetória', id: 'experience' },
  { label: 'Contato', id: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Detecta a seção atual durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[]

      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Bloqueia o scroll da página quando o menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Fecha o menu mobile ao voltar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavigation = (id: string) => {
    setActiveSection(id)
    setMenuOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => handleNavigation('home')}
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          KA<span className="text-[#a3ff12]">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  active
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-md bg-white/8"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[#a3ff12]/40 px-4 py-2 text-sm text-[#a3ff12] transition hover:bg-[#a3ff12] hover:text-black"
          >
            Currículo ↗
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.22,
              ease: 'easeInOut',
            }}
            className="border-t border-white/5 bg-[#050505] px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`rounded-md px-4 py-3 text-left ${
                    activeSection === item.id
                      ? 'bg-white/5 text-[#a3ff12]'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
