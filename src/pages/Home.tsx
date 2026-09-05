import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-white">
        <Hero />
        <Projects />

        {/* Temporários para testar a Navbar */}
        <section id="technologies" className="min-h-screen" />
        <section id="about" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  )
}
