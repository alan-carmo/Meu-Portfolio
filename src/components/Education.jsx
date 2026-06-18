import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Languages } from 'lucide-react'

/**
 * Education — academic background and language skills.
 */
const EDUCATION = [
  {
    degree: 'Análise e Desenvolvimento de Sistemas',
    type: 'Graduação – Tecnólogo',
    status: 'Concluído',
    icon: GraduationCap,
  },
  {
    degree: 'Técnico em Edificações',
    type: 'Curso Técnico',
    status: 'Concluído',
    icon: Award,
  },
]

const LANGUAGES = [
  { name: 'Português', level: 'Nativo', percent: 100 },
  { name: 'Inglês', level: 'Básico (Leitura Técnica)', percent: 30 },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formacao" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Base acadêmica
          </p>
          <h2 className="section-title gradient-text">Formação &amp; Idiomas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education cards */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <GraduationCap size={16} className="text-cyan-400" />
              Formação Acadêmica
            </h3>
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="skill-icon-wrapper shrink-0">
                    <edu.icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm mb-1">{edu.degree}</h4>
                    <p className="text-xs text-slate-500 mb-2">{edu.type}</p>
                    <span className="inline-block text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase tracking-wider">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Languages size={16} className="text-purple-400" />
              Idiomas
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 space-y-6"
            >
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300 font-medium">{lang.name}</span>
                    <span className="text-slate-500 text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
