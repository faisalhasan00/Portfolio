import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto text-center">
        <motion.blockquote
          className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          "Automation isn't just about saving time — it's about unlocking
          creativity."
        </motion.blockquote>
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © 2025 Mohammed Faisal Hasan. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer

