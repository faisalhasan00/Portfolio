import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Bot } from 'lucide-react'

const FaisalBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hey! I'm FaisalBot 🤖 — want to know about my projects?",
      sender: 'bot',
    },
    {
      text: "I can tell you about my AI work and automation tools!",
      sender: 'bot',
    },
  ])
  const [userMessage, setUserMessage] = useState('')

  const handleSend = () => {
    if (!userMessage.trim()) return

    setMessages([
      ...messages,
      { text: userMessage, sender: 'user' },
      {
        text: "Thanks for your message! For detailed information, please check out my projects section or contact me directly. I'm always excited to discuss AI automation! 🚀",
        sender: 'bot',
      },
    ])
    setUserMessage('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 2 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-96 glass rounded-xl shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  FaisalBot
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg glass border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FaisalBot

