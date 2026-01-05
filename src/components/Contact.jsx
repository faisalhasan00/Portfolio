import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/faisalhasan00',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohammed-faisal-hasan-495a1a220/',
      color: 'hover:text-cyan-500 dark:hover:text-cyan-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:mohammedfaisalhasan@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+918106342858',
      color: 'hover:text-green-600 dark:hover:text-green-400',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Let's Connect
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-12 text-center">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center gap-4 p-4 glass rounded-lg transition-colors ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

