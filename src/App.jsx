import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
