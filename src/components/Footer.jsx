import { Github, Linkedin, ArrowUp, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-6 sm:px-12 border-t border-gray-200 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <a
              href="#home"
              className="text-2xl font-medium tracking-tight text-black hover:opacity-80 transition"
            >
              Mohammed Faisal Hasan
            </a>
            <p className="text-base text-gray-600">
              Software Developer & AI Automation Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/faisalhasan00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-faisal-hasan-495a1a220/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mohammedfaisalhasan@gmail.com"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mohammed Faisal Hasan. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
