import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function SmartStockProject() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">
        <span className="font-mono text-sm text-[#a3ff12]">
          Case Study
        </span>

        <h1 className="mt-4 text-5xl font-black uppercase">
          SmartStock
        </h1>

        <p className="mt-5 text-zinc-500">
          Case study em construção.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-[#a3ff12]"
        >
          <ArrowLeft size={17} />
          Voltar ao portfólio
        </Link>
      </div>
    </main>
  )
}
