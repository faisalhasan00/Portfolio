import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'AI Automation Developer',
    'Full Stack Engineer',
    'Web Scraping Specialist',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg md:text-xl text-cyan-500 dark:text-cyan-400 font-medium mb-3"
              variants={itemVariants}
            >
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text block">Mohammed Faisal</span>
              <span className="gradient-text block">Hasan</span>
            </motion.h1>

            <motion.div
              className="h-14 md:h-16 mb-6 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <AnimatedRole roles={roles} currentRole={currentRole} />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Transforming ideas into intelligent solutions through code. I build
              scalable applications that bridge the gap between cutting-edge AI
              and real-world impact.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Rocket className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-cyan-500/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Gradient border */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-500 p-1.5 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src="/1.png"
                    alt="Mohammed Faisal Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

const AnimatedRole = ({ roles, currentRole }) => {
  return (
    <div className="relative h-full w-full">
      {roles.map((role, index) => (
        <motion.h2
          key={role}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 absolute inset-0 flex items-center justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: index === currentRole ? 1 : 0,
            y: index === currentRole ? 0 : -20,
            scale: index === currentRole ? 1 : 0.9,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {role}
        </motion.h2>
      ))}
    </div>
  )
}

export default Hero

