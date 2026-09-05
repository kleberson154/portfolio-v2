import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-white">
        <Hero />

        {/* Temporários para testar a Navbar */}
        <section id="projects" className="min-h-screen" />
        <section id="technologies" className="min-h-screen" />
        <section id="about" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  )
}
