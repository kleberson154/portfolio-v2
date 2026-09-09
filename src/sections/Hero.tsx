import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 sm:px-6"
    >
      {/* Grid de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-[#a3ff12]/5 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 xl:gap-16 py-14 sm:py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3ff12] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a3ff12]" />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:text-xs sm:tracking-wider">
              {portfolioData.availability}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-3 font-mono text-sm text-[#a3ff12]"
          >
            Olá, eu sou Kleberson Andrade.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl text-[2.2rem] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Desenvolvedor
            <br />
            Back-end
            <span className="text-[#a3ff12]"> Java.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-7"
          >
            {portfolioData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#a3ff12] px-6 py-3 font-semibold text-black transition hover:bg-[#b6ff3f] sm:w-auto"
            >
              Explorar projetos
              <ArrowDown size={18} />
            </button>

            <a
              href="https://github.com/kleberson154"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil de Kleberson Andrade no GitHub"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 px-6 py-3 font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white sm:w-auto"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600 sm:mt-14 sm:gap-x-6 sm:text-xs"
          >
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
          </motion.div>
        </div>

        <CodeCard />
      </div>
    </section>
  )
}

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        delay: 0.4,
        duration: 0.7
      }}
      className="relative hidden min-[930px]:block"
    >
      <div className="absolute -inset-10 bg-[#a3ff12]/5 blur-3xl" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

          <span className="ml-3 font-mono text-xs text-zinc-600">
            Developer.java
          </span>
        </div>

        <pre className="overflow-x-auto p-7 font-mono text-sm leading-7">
          <code>
            <span className="text-zinc-600">
              {'// building reliable software\n\n'}
            </span>

            <span className="text-[#a3ff12]">public class </span>
            <span className="text-white">Developer </span>
            <span className="text-zinc-400">{'{\n'}</span>

            <span className="text-zinc-400">{'    String name = '}</span>
            <span className="text-[#a3ff12]">{'"Kleberson Andrade";\n'}</span>

            <span className="text-zinc-400">{'    String focus = '}</span>
            <span className="text-[#a3ff12]">{'"Back-end";\n'}</span>

            <span className="text-zinc-400">{'    String stack = '}</span>
            <span className="text-[#a3ff12]">
              {'"Java + Spring Boot";\n\n'}
            </span>

            <span className="text-zinc-400">{'    boolean learning = '}</span>
            <span className="text-white">{'true;\n'}</span>

            <span className="text-zinc-400">{'}'}</span>
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
