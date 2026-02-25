import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: 20, suffix: '+', label: 'Projects Completed' },
    { value: 1.5, suffix: ' year', label: 'Experience' },
    { value: 90, suffix: '%+', label: 'Automation Success Rate' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          className="space-y-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a creative technologist and{' '}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              AI enthusiast
            </span>{' '}
            fueled by a deep curiosity for building things that matter. From
            architecting full-stack apps and integrating APIs to fine-tuning
            workflows for speed and efficiency, I love the thrill of solving
            puzzles that blend code with real-world impact.
          </p>

          <p>
            My superpowers include a sharp command of{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              Data Structures & Algorithms
            </span>
            , an instinct for debugging the toughest problems, and a knack for
            turning collaboration into innovation. I specialize in{' '}
            <span className="font-bold gradient-text">AI automation</span>,{' '}
            <span className="font-bold gradient-text">web scraping</span>, and{' '}
            <span className="font-bold gradient-text">
              full-stack development
            </span>
            .
          </p>

          <p>
            As a{' '}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              BCA (Bachelor of Computer Applications)
            </span>{' '}
            graduate, I'm always on the hunt for ways to push boundaries,
            automate the tedious, and ship AI-powered solutions that actually
            make a difference. Currently working at{' '}
            <span className="font-bold gradient-text">Ranazonai</span>, developing
            automation tools that scale business operations. If you thrive on
            fresh challenges and boundary-breaking projects, let's connect and
            make something awesome together!
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-16 border-t border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} delay={0.9 + index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const StatCard = ({ stat, isInView, delay }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      const stepDuration = duration / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default About

