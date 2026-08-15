import { useState, useRef } from 'react'
import { Mail, Phone, Github, Linkedin, Send, Copy, Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohammedfaisalhasan@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold">
            <span>📫 Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black break-words">
            Let's build something together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
            Have a project in mind, an opportunity, or need help building custom AI automations, web, or mobile apps? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-5 sm:p-7 lg:p-8 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black">Direct Contact</h3>

              {/* Email Pill Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-gray-200 text-sm">
                <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:mohammedfaisalhasan@gmail.com"
                    className="truncate text-xs sm:text-sm text-black font-medium hover:underline"
                    title="mohammedfaisalhasan@gmail.com"
                  >
                    mohammedfaisalhasan@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-black transition flex items-center justify-center gap-1.5 text-xs font-medium self-start sm:self-auto flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Box */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 text-sm">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Direct Call / WhatsApp</p>
                  <a href="tel:+918106342858" className="text-sm font-semibold text-black hover:underline">
                    +91 81063 42858
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="https://github.com/faisalhasan00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-2xl bg-black text-white flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-800 transition"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-faisal-hasan-495a1a220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-2xl border border-gray-300 text-black flex items-center justify-center gap-2 text-sm font-medium hover:border-black bg-white transition"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-7 lg:p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center text-black space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <p className="text-2xl font-bold">Thank you for reaching out!</p>
                  <p className="text-base text-gray-600">I will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">Send a Message</h3>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-black mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faisal Hasan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-sm sm:text-base font-normal transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-black mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-sm sm:text-base font-normal transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-black mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-sm sm:text-base font-normal resize-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm sm:text-base transition shadow-sm hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
