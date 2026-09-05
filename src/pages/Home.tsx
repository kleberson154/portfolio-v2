import Navbar from '../components/layout/Navbar'
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

        {/* Temporários para testar a Navbar */}
        <section id="about" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  )
}
