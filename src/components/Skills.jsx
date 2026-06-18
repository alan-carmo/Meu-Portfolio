import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2, Globe, Database, Wrench, Users,
} from 'lucide-react'

/**
 * Skills — Technical competencies grouped by category with animated cards.
 */
const CATEGORIES = [
  {
    icon: Code2,
    title: 'Linguagens',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'JavaScript (ES6+)', level: 75 },
      { name: 'C# (.NET)', level: 40 },
    ],
  },
  {
    icon: Globe,
    title: 'Front-end',
    skills: [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'React Native (Básico)', level: 30 },
    ],
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    skills: [
      { name: 'MySQL', level: 65 },
      { name: 'SQL Server', level: 60 },
    ],
  },
  {
    icon: Wrench,
    title: 'Ferramentas',
    skills: [
      { name: 'Git', level: 75 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Excel Avançado', level: 95 },
      { name: 'Power BI (Noções)', level: 35 },
    ],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      { name: 'Resolução de Problemas' },
      { name: 'Trabalho em Equipe' },
      { name: 'Comunicação Clara' },
      { name: 'Visão de Dono' },
    ],
  },
]

function SkillBar({ name, level, delay, isInView }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-slate-300 font-medium">{name}</span>
        {level !== undefined && (
          <span className="text-slate-500 font-mono">{level}%</span>
        )}
      </div>
      {level !== undefined && (
        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{ duration: 1, delay, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="competencias" className="relative py-24 px-6">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-purple-500/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Stack técnica
          </p>
          <h2 className="section-title gradient-text">Competências Técnicas</h2>
          <p className="section-subtitle mx-auto mt-3">
            Tecnologias e habilidades que utilizo para criar soluções eficientes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + catIdx * 0.1 }}
              className="glass-card p-6 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="skill-icon-wrapper">
                  <cat.icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-slate-200 text-sm tracking-wide">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((s, sIdx) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={0.3 + sIdx * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
