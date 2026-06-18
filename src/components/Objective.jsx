import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Rocket } from 'lucide-react'

/**
 * Objective — Professional goals section.
 */
export default function Objective() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Onde quero chegar
          </p>
          <h2 className="section-title gradient-text">Objetivo Profissional</h2>
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
                Desenvolvedor Back-end & Automações
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Busco uma oportunidade como <span className="text-cyan-400 font-semibold">Desenvolvedor de Software</span> em
              equipes que valorizem aprendizado contínuo, boas práticas de engenharia de software e impacto real nos
              resultados do negócio.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Meu foco está em <span className="text-purple-400 font-semibold">desenvolvimento back-end</span>,{' '}
              <span className="text-cyan-400 font-semibold">automações com Python</span> e{' '}
              <span className="text-purple-400 font-semibold">aplicações web com JavaScript</span> — áreas onde posso
              combinar minha experiência analítica com a capacidade técnica de criar soluções escaláveis e bem estruturadas.
            </p>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-cyan-400/[0.04] border border-cyan-400/10">
              <Rocket size={18} className="text-cyan-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-400 leading-relaxed">
                Estou comprometido em evoluir rapidamente, contribuir com entregas de qualidade desde o primeiro dia e
                agregar valor com a minha visão híbrida de negócios e tecnologia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
