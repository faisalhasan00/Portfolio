import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'intro', 'about', 'projects', 'skills', 'experience', 'services', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#intro', id: 'intro' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav className="w-full py-6 sm:py-8 px-6 sm:px-12 max-w-7xl mx-auto flex items-center justify-between relative z-50">
      {/* Brand Title (Kent C. Dodds style) */}
      <a
        href="#home"
        className="text-xl sm:text-2xl font-medium tracking-tight text-black hover:opacity-80 transition focus:outline-none"
      >
        <h1>Mohammed Faisal Hasan</h1>
      </a>

      {/* Center Nav Links (Kent C. Dodds style) */}
      <div className="hidden lg:flex items-center space-x-8 text-lg font-medium text-gray-600">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <a
              key={item.name}
              href={item.href}
              className={`underlined transition hover:text-black focus:outline-none ${
                isActive ? 'text-black font-semibold' : 'text-gray-600'
              }`}
            >
              {item.name}
            </a>
          )
        })}
      </div>

      {/* Right Side Action Button (Kent C. Dodds style rounded-full) */}
      <div className="hidden lg:flex items-center gap-3">
        <a
          href="https://github.com/faisalhasan00"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black hover:text-black transition"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-faisal-hasan-495a1a220/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black hover:text-black transition"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://docs.google.com/document/d/1pmG3vCOcQB9cckcvHcPhCNI_BNllN-XG/edit?usp=drive_link&ouid=110184927717681443848&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-gray-300 hover:border-black text-black px-5 py-2 text-sm font-medium transition flex items-center gap-1.5 ml-1"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="#contact"
          className="rounded-full bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition shadow-sm ml-1"
        >
          Get in touch
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-6 right-6 mt-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xl space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-black py-1"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="https://docs.google.com/document/d/1pmG3vCOcQB9cckcvHcPhCNI_BNllN-XG/edit?usp=drive_link&ouid=110184927717681443848&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-full border-2 border-gray-300 text-black py-3 text-base font-medium flex items-center justify-center gap-1.5"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-full bg-black text-white py-3 text-base font-medium"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
