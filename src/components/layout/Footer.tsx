import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-white/5 bg-[#050505] px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-2xl font-bold tracking-tight text-white">
            KA<span className="text-[#a3ff12]">.</span>
          </span>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
            Desenvolvedor Back-end Java construindo aplicações do código ao
            deploy.
          </p>
        </div>

        <div className="flex items-center justify-between gap-8 sm:justify-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-700">
            © {currentYear} Kleberson Andrade
          </p>

          <button
            type="button"
            onClick={backToTop}
            aria-label="Voltar ao topo"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition hover:border-[#a3ff12]/30 hover:text-[#a3ff12]"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/5 py-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-800">
          Java • Spring Boot • React • TypeScript
        </p>
      </div>
    </footer>
  )
}
