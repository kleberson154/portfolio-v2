import Navbar from '../components/layout/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-white">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold text-green-400">
            Kleberson Andrade
          </h1>
        </section>
      </main>
    </>
  )
}
