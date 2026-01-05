import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Software Developer & AI Automation',
      company: 'Ranazonai Technologies (FileMyRTI)',
      location: 'Hyderabad',
      type: 'Full-time',
      summary: 'Building AI-powered applications, automations, and robust web systems with a modern stack.',
      achievements: [
        'Developed AI apps using Cursor, GPT, LangChain, Next.js, TypeScript, Tailwind',
        'Integrated Supabase auth and data layer to improve scalability and reliability',
        'Implemented CI/CD with GitHub Actions for automated tests and deployments',
        'Built modular Node.js systems to improve extensibility and reduce build errors by 30%',
        'Ensured reliable releases by proactively fixing critical production issues',
      ],
      date: 'Aug 2025 – Present',
      icon: Briefcase,
    },
    {
      title: 'Founder',
      company: 'QuickPrepp',
      location: 'Remote',
      type: 'Founder',
      summary: 'Founded and developed an AI-powered learning platform that curates YouTube videos into structured courses with micro-projects, quizzes, and real-time mock test feedback.',
      achievements: [
        'Built full-stack platform using Next.js, Node.js, MySQL, OpenAI API, and YouTube API',
        'Designed and implemented AI-powered content curation system',
        'Created real-time feedback system for mock tests and quizzes',
        'Launched and maintained production platform at quickprepp.in',
      ],
      date: 'Jan 2024 – Jul 2025',
      icon: Briefcase,
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Osmania University',
      year: '2024',
      icon: GraduationCap,
      details: [
        'Relevant coursework in AI/ML',
        'Active in technical projects',
        'Strong academic performance',
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            My professional journey and academic background in software
            development and AI/ML.
          </p>
        </motion.div>

        {/* Combined Timeline */}
        <div className="relative">
          <div className="space-y-8 sm:space-y-12 relative">
            {/* Vertical Timeline Line - continuous for both Experience and Education */}
            <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-8 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isInView={isInView}
              />
            ))}

            {/* Education Section Header */}
            <motion.div
              className="pl-0 sm:pl-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Education
              </h3>
            </motion.div>

            {/* Education Items */}
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                education={edu}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ experience, index, isInView }) => {
  const Icon = experience.icon

  return (
    <motion.div
      className="relative pl-0 sm:pl-20"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 sm:left-0 top-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-500 dark:bg-cyan-600 flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>

      {/* Card */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 ml-14 sm:ml-0">
        {/* Date Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-cyan-500 dark:bg-cyan-600 text-white px-2 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium">
          {experience.date}
        </div>

        {/* Content */}
        <div className="pr-16 sm:pr-24">
          <div className="flex items-start gap-2 sm:gap-3 mb-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-500 dark:bg-cyan-600 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                {experience.company} • {experience.location}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 mt-3">
            {experience.summary}
          </p>

          {/* Achievements */}
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 mr-3 flex-shrink-0"></span>
                <span className="break-words">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const EducationCard = ({ education, index, isInView }) => {
  const Icon = education.icon

  return (
    <motion.div
      className="relative pl-0 sm:pl-20"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 sm:left-0 top-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>

      {/* Card */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 ml-14 sm:ml-0">
        <div className="flex items-start gap-2 sm:gap-3 mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 break-words">
              {education.degree}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
              {education.institution} • {education.year}
            </p>
          </div>
        </div>

        {/* Education Details */}
        {education.details && (
          <ul className="space-y-2">
            {education.details.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 mr-3 flex-shrink-0"></span>
                <span className="break-words">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default Experience

