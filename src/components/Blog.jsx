import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        // Using a CORS proxy to fetch RSS feed
        const proxyUrl = 'https://api.allorigins.win/get?url='
        const rssUrl = 'https://blog.filemyrti.com/feed.xml'
        const response = await fetch(proxyUrl + encodeURIComponent(rssUrl))
        const data = await response.json()

        // Parse XML
        const parser = new DOMParser()
        const xml = parser.parseFromString(data.contents, 'text/xml')
        const items = xml.querySelectorAll('item')

        const blogPosts = Array.from(items)
          .slice(0, 3)
          .map((item) => {
            const title = item.querySelector('title')?.textContent || ''
            const link = item.querySelector('link')?.textContent || ''
            const description = item.querySelector('description')?.textContent || ''
            const pubDate = item.querySelector('pubDate')?.textContent || ''

            // Clean HTML from description
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = description
            const cleanDescription = tempDiv.textContent || tempDiv.innerText || ''

            return {
              title,
              link,
              description: cleanDescription.substring(0, 150) + '...',
              pubDate,
            }
          })

        setPosts(blogPosts)
      } catch (error) {
        console.error('Error fetching RSS feed:', error)
        // Fallback posts if RSS fails
        setPosts([
          {
            title: 'AI Automation: The Future of Business',
            link: 'https://blog.filemyrti.com',
            description: 'Exploring how AI automation is transforming business operations and workflows...',
            pubDate: new Date().toISOString(),
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRSS()
  }, [])

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
        </motion.h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} isInView={isInView} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

const BlogCard = ({ post, index, isInView }) => {
  return (
    <motion.div
      className="glass rounded-xl p-6 hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {post.description}
      </p>
      <motion.a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:underline font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
        <ExternalLink className="w-4 h-4" />
      </motion.a>
    </motion.div>
  )
}

export default Blog

