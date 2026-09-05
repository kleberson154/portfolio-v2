export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <span className="text-lg font-bold text-white">
          KA.
        </span>

        <div className="hidden gap-8 md:flex text-sm text-zinc-400">
          <a href="#home">Home</a>
          <a href="#projects">Projetos</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  )
}
