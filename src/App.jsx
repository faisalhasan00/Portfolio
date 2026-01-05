import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import LaunchGreeting from './components/LaunchGreeting'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [showGreeting, setShowGreeting] = useState(true)

  const handleGreetingComplete = () => {
    setShowGreeting(false)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {showGreeting && <LaunchGreeting onComplete={handleGreetingComplete} />}
        {!showGreeting && (
          <>
            <ParticleBackground />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App

