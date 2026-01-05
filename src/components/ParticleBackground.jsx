import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../context/ThemeContext'

const ParticleBackground = () => {
  const { theme } = useTheme()

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme === 'dark' ? '#14b8a6' : '#06b6d4',
          },
          links: {
            color: theme === 'dark' ? '#14b8a6' : '#06b6d4',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticleBackground

