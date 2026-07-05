import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import GameProjects from './components/GameProjects.jsx'
import Featured from './components/Featured.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <Navbar />
      <main>
        <Hero />
        <GameProjects />
        <Featured />
        <About />
      </main>
      <Footer />
    </div>
  )
}
