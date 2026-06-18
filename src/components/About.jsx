import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Briefcase, GraduationCap, Lightbulb } from 'lucide-react'

/**
 * About — professional biography section with highlight cards.
 */
const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Experiência Corporativa',
    text: '+10 anos de vivência em ambientes corporativos, desde faturamento até análise financeira.',
  },
  {
    icon: GraduationCap,
    title: 'Formação em TI',
    text: 'Graduado em Análise e Desenvolvimento de Sistemas, unindo teoria à prática.',
  },
  {
    icon: Lightbulb,
    title: 'Visão de Negócio',
    text: 'Capacidade de traduzir regras de negócio complexas em soluções tecnológicas eficientes.',
  },
  {
    icon: User,
    title: 'Perfil Analítico',
    text: 'Mentalidade orientada a dados, resolução de problemas e melhoria contínua de processos.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Conheça minha trajetória
          </p>
          <h2 className="section-title gradient-text">Sobre Mim</h2>
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
              Minha jornada profissional começou na <span className="text-cyan-400 font-semibold">administração e finanças</span>,
              onde atuei por mais de uma década em funções de análise de crédito, mitigação de riscos e gestão de dados.
              Essa vivência moldou um olhar afiado para processos, métricas e tomada de decisão baseada em dados.
            </p>
            <p className="text-slate-300 leading-relaxed">
              A busca por <span className="text-purple-400 font-semibold">automatizar tarefas repetitivas</span> e eliminar
              ineficiências me levou naturalmente ao mundo da programação. Descobri no código a ferramenta perfeita para
              transformar ideias em soluções concretas — e não parei mais.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Hoje, como <span className="text-cyan-400 font-semibold">Desenvolvedor de Software</span>, graduado
              em Análise e Desenvolvimento de Sistemas, combino a maturidade corporativa com habilidades técnicas em
              <strong className="text-slate-200"> Python</strong> e <strong className="text-slate-200">JavaScript</strong>{' '}
              para construir aplicações web, automações e sistemas que fazem a diferença no dia a dia das empresas.
            </p>
            <p className="text-slate-400 italic text-sm">
              "Minha maior força é entender a dor do negócio e traduzi-la em código eficiente."
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 flex flex-col gap-3"
              >
                <div className="skill-icon-wrapper">
                  <h.icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-slate-200">{h.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
