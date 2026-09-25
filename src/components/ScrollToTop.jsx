import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * ScrollToTop — floating button that appears after scrolling down.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow cursor-pointer border-none"
          aria-label={t.scrollToTop}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
