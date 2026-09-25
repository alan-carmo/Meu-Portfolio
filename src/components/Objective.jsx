import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Rocket } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Objective — Professional goals section.
 */
export default function Objective() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()
  const o = t.objective

  return (
    <section id="objetivo" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            {o.tagline}
          </p>
          <h2 className="section-title gradient-text">{o.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Decorative gradient corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="skill-icon-wrapper">
                <Target size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">
                {o.roleTitle}
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed">
              {o.p1.before}
              <span className="text-cyan-400 font-semibold">{o.p1.highlight}</span>
              {o.p1.after}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {o.p2.before}
              <span className="text-purple-400 font-semibold">{o.p2.h1}</span>
              {o.p2.m1}
              <span className="text-cyan-400 font-semibold">{o.p2.h2}</span>
              {o.p2.m2}
              <span className="text-purple-400 font-semibold">{o.p2.h3}</span>
              {o.p2.after}
            </p>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-cyan-400/[0.04] border border-cyan-400/10">
              <Rocket size={18} className="text-cyan-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-400 leading-relaxed">
                {o.commitment}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
