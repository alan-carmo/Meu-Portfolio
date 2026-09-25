import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

/**
 * Navbar — sticky responsive navigation with hamburger menu for mobile.
 * Highlights the active section based on scroll position.
 */
const NAV_IDS = ['inicio', 'sobre', 'objetivo', 'competencias', 'projetos', 'experiencia', 'formacao', 'contato']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const { t } = useLanguage()

  // Track scroll for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Find active section
      const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean)
      let current = 'inicio'
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) current = section.id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1c]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center relative">
        {/* Logo */}
        <button
          onClick={() => handleNav('inicio')}
          className="text-xl font-extrabold tracking-tight gradient-text cursor-pointer select-none absolute left-6 z-10"
        >
          {'<Alan />'}
        </button>

        {/* Desktop links container */}
        <div className="hidden md:flex items-center gap-4 lg:gap-7">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`nav-link cursor-pointer bg-transparent border-none text-xs lg:text-sm ${
                activeSection === id ? 'active' : ''
              }`}
            >
              {t.nav[id]}
            </button>
          ))}

          {/* Language toggle — desktop */}
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-cyan-400 transition bg-transparent border-none cursor-pointer absolute right-6 z-10"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`text-left py-2.5 px-3 rounded-lg transition-all cursor-pointer bg-transparent border-none text-sm font-medium ${
                    activeSection === id
                      ? 'text-cyan-400 bg-cyan-400/[0.06]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                  }`}
                >
                  {t.nav[id]}
                </button>
              ))}

              {/* Language toggle — mobile */}
              <div className="pt-2 pl-2">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
