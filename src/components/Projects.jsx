import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Layers, FileSpreadsheet, MapPin } from 'lucide-react'
import { GithubIcon } from './Icons'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Projects — showcase of real projects with tech tags and GitHub links.
 */
const PROJECT_META = [
  {
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/alan-carmo/Fomulario-de-Indicacoes',
    icon: Layers,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'cyan',
  },
  {
    tech: ['Python'],
    github: 'https://github.com/alan-carmo/Desbloqueador-de-Planilhas',
    icon: FileSpreadsheet,
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: 'purple',
  },
  {
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'FastAPI', 'Leaflet.js'],
    github: 'https://github.com/alan-carmo/Rio-Bus',
    icon: MapPin,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'emerald',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projetos" className="relative py-24 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            {p.tagline}
          </p>
          <h2 className="section-title gradient-text">{p.title}</h2>
          <p className="section-subtitle mx-auto mt-3">
            {p.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {p.items.map((item, idx) => {
            const meta = PROJECT_META[idx]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="glass-card group overflow-hidden flex flex-col"
              >
                {/* Card header gradient */}
                <div className={`h-2 bg-gradient-to-r ${meta.gradient}`} />

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`skill-icon-wrapper shrink-0 ${
                      meta.accent === 'purple' ? '!bg-gradient-to-br !from-purple-500/15 !to-pink-500/15'
                      : meta.accent === 'emerald' ? '!bg-gradient-to-br !from-emerald-500/15 !to-teal-500/15'
                      : ''
                    }`}>
                      <meta.icon
                        size={22}
                        className={
                          meta.accent === 'purple' ? 'text-purple-400'
                          : meta.accent === 'emerald' ? 'text-emerald-400'
                          : 'text-cyan-400'
                        }
                      />
                    </div>
                    <h3 className="font-bold text-slate-200 text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.features.map((f) => (
                      <span
                        key={f}
                        className="text-[0.68rem] px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {meta.tech.map((techName) => (
                      <span
                        key={techName}
                        className={`text-[0.68rem] font-semibold px-2.5 py-1 rounded-md border ${
                          meta.accent === 'purple'
                            ? 'text-purple-400 bg-purple-400/[0.06] border-purple-400/20'
                            : meta.accent === 'emerald'
                            ? 'text-emerald-400 bg-emerald-400/[0.06] border-emerald-400/20'
                            : 'text-cyan-400 bg-cyan-400/[0.06] border-cyan-400/20'
                        }`}
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* GitHub link */}
                  <a
                    href={meta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      meta.accent === 'purple'
                        ? 'text-purple-400 hover:text-purple-300'
                        : meta.accent === 'emerald'
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    <GithubIcon size={16} />
                    {p.viewCode}
                    <ExternalLink size={13} className="opacity-50" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
