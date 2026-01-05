import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LaunchGreeting = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const firstMessage = "Hi, I'm Faisal — welcome to my portfolio!"

  useEffect(() => {
    if (currentIndex < firstMessage.length) {
      const timeout = setTimeout(() => {
        setCurrentText(firstMessage.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else if (currentIndex === firstMessage.length) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(() => {
          onComplete()
        }, 1200)
      }, 1800)
    }
  }, [currentIndex, firstMessage, onComplete])

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-teal-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key="first"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex items-center justify-center"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 md:gap-2"
                  style={{ lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.2)' }}
                >
                  {currentText.split('').map((char, index) => {
                    const isSpace = char === ' '
                    const isEmoji = /[\u{1F300}-\u{1F9FF}]/u.test(char)
                    return (
                      <motion.span
                        key={`first-${index}`}
                        initial={{ opacity: 0, y: 20, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.03,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className={`inline-block ${isEmoji ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : ''}`}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {isSpace ? '\u00A0' : char}
                      </motion.span>
                    )
                  })}
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block w-0.5 sm:w-1 md:w-1.5 h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 bg-gradient-to-b from-cyan-400 to-emerald-400 ml-2 sm:ml-2.5 md:ml-3 rounded-full shadow-lg shadow-cyan-500/50"
                    style={{ verticalAlign: 'middle' }}
                  />
                </motion.h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative particles */}
          {[...Array(6)].map((_, i) => {
            const getRandomPosition = () => {
              if (typeof window !== 'undefined') {
                return {
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }
              }
              return { x: Math.random() * 1000, y: Math.random() * 800 }
            }
            const pos = getRandomPosition()
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"
                initial={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 0,
                }}
                animate={{
                  y: [null, pos.y + (Math.random() * 200 - 100)],
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LaunchGreeting

