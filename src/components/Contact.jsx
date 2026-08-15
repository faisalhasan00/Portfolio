import { useState, useRef } from 'react'
import { Mail, Phone, Github, Linkedin, Send, Copy, Check, ArrowUpRight } from 'lucide-react'

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
    <section id="contact" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-12">
        <div className="text-left space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
            Let's build something together
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind, an opportunity, or need help building custom AI automations? Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Direct Details Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 space-y-6">
              <h3 className="text-2xl font-medium text-black">Direct Contact</h3>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200 text-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-gray-700 flex-shrink-0" />
                  <span className="truncate text-black font-medium">mohammedfaisalhasan@gmail.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-black transition flex-shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 text-sm">
                <Phone className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <a href="tel:+918106342858" className="text-black font-medium hover:underline">+91 81063 42858</a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/faisalhasan00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-black text-white flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-800 transition"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-faisal-hasan-495a1a220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full border border-gray-300 text-black flex items-center justify-center gap-2 text-sm font-medium hover:border-black transition"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200 p-8">
              {submitted ? (
                <div className="py-12 text-center text-black space-y-2">
                  <p className="text-2xl font-medium">Thank you for your message!</p>
                  <p className="text-base text-gray-600">I will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faisal Hasan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-base font-normal transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-base font-normal transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-black text-base font-normal resize-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-gray-800 text-white font-medium rounded-full flex items-center justify-center gap-2 text-base transition shadow-sm"
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
