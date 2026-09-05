import Navbar from '../components/layout/Navbar'
import About from '../sections/About'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Technologies from '../sections/Technologies'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-white">
        <Hero />
        <Projects />
        <Technologies />
        <About />

        {/* Temporários para testar a Navbar */}
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  )
}
