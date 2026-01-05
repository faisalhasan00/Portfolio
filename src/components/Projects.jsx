import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'QuickPrep',
      description:
        'MERN stack build with AI integration, real-time feedback, and scalable learning platform.',
      features: [
        'Full-stack MERN',
        'AI-powered curation',
        'Real-time feedback',
      ],
      tech: ['Next.js', 'Node.js', 'MySQL', 'OpenAI API', 'YouTube API'],
      links: {
        live: 'https://quickprepp.in',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://quickprepp.in',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Chat.FileMyRTI',
      description:
        'MERN stack build with AI integration, natural language processing, and real-time chat capabilities.',
      features: [
        'Full-stack MERN',
        'AI chatbot',
        'Real-time chat',
      ],
      tech: ['React', 'Node.js', 'Firebase', 'OpenAI API'],
      links: {
        live: 'https://chat.filemyrti.com',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://chat.filemyrti.com',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Blog.FileMyRTI',
      description:
        'MERN stack build with SEO optimization, markdown support, and responsive design.',
      features: [
        'Full-stack MERN',
        'SEO optimized',
        'Markdown CMS',
      ],
      tech: ['React', 'Node.js', 'Markdown CMS'],
      links: {
        live: 'https://blog.filemyrti.com',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://blog.filemyrti.com',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'rtionlinedelhi.filemyrti/',
      description:
        'Full-stack platform with payment integration, secure transactions, and comprehensive database management for RTI services.',
      features: [
        'Full-stack architecture',
        'Payment gateway integration',
        'Secure transactions',
        'Database management',
      ],
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Payment Gateway'],
      links: {
        live: 'https://rtionlinedelhi.filemyrti.com/',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://delhi.filemyrti.com',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'WhatsApp Business Automation System',
      description:
        'MERN stack build with automation integration, real-time notifications, and a scalable backend.',
      features: [
        'Full-stack MERN',
        'Real-time notifications',
        'Automated workflows',
      ],
      tech: ['React', 'Node.js', 'Puppeteer', 'n8n', 'Firebase'],
      links: {
        github: 'https://github.com/filemyrtiofficial-stack/whatsapp-message-tigger-automatically',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://github.com/filemyrtiofficial-stack/whatsapp-message-tigger-automatically',
      gradient: 'from-cyan-500 to-emerald-500',
    },
    {
      title: 'College Website (Demo)',
      description:
        'Modern responsive website with clean design and smooth UI/UX.',
      features: [
        'Responsive design',
        'Modern UI/UX',
        'Clean architecture',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://faisalhasan00.github.io/Colloge/',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://faisalhasan00.github.io/Colloge/',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Shreyans',
      description:
        'A modern ecommerce clothing website for women built with vibe coding approach - featuring elegant design, smooth shopping experience, and intuitive product browsing.',
      features: [
        'Ecommerce platform',
        'Product catalog',
        'Modern UI/UX',
        'Responsive design',
      ],
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Ecommerce'],
      links: {
        live: 'https://shreyansse.netlify.app/',
      },
      image: 'https://image.thum.io/get/width/800/crop/600/https://shreyansse.netlify.app/',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
  title: 'TapMenu',
  description:
    'A smart digital menu platform for restaurants and cafés that replaces paper menus with QR-based, mobile-friendly menus — helping businesses manage items, prices, and categories in real time.',
  features: [
    'QR-based digital menu',
    'Live menu & price updates',
    'Category & item management',
    'Mobile-first experience',
  ],
  tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  links: {
    live: 'https://tapmenu.in',
  },
  image: 'https://image.thum.io/get/width/1200/crop/675/https://tapmenu.in',
  gradient: 'from-emerald-500 to-teal-500',
  gradient: 'from-emerald-500 to-teal-500',
},
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Website Preview Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Background gradient - always visible */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="relative w-full h-full object-cover transition-opacity duration-300 z-10"
            loading="lazy"
            onError={(e) => {
              // Hide image if it fails to load, gradient will show through
              e.target.style.display = 'none'
            }}
          />
        ) : null}
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity z-20`}></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features List */}
        {project.features && (
          <ul className="mb-4 space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.links.live && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

