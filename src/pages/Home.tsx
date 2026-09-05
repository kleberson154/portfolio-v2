import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
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
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
