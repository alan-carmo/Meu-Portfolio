import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Briefcase, GraduationCap, Lightbulb } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * About — professional biography section with highlight cards.
 */
const ICONS = [Briefcase, GraduationCap, Lightbulb, User]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="sobre" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            {a.tagline}
          </p>
          <h2 className="section-title gradient-text">{a.title}</h2>
        </motion.div>

        {/* Bio + highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed">
              {a.bio[0].before}
              <span className="text-cyan-400 font-semibold">{a.bio[0].highlight}</span>
              {a.bio[0].after}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {a.bio[1].before}
              <span className="text-purple-400 font-semibold">{a.bio[1].highlight}</span>
              {a.bio[1].after}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {a.bio[2].before}
              <span className="text-cyan-400 font-semibold">{a.bio[2].highlight}</span>
              {a.bio[2].after}
              <strong className="text-slate-200"> Python</strong> e <strong className="text-slate-200">JavaScript</strong>{' '}
              {a.bioSuffix}
            </p>
            <p className="text-slate-400 italic text-sm">
              {a.quote}
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {a.highlights.map((h, i) => {
              const Icon = ICONS[i]
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card p-5 flex flex-col gap-3"
                >
                  <div className="skill-icon-wrapper">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">{h.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{h.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
