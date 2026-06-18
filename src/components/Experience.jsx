import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, CalendarDays, ChevronRight } from 'lucide-react'

/**
 * Experience — professional timeline with animated entries.
 */
const TIMELINE = [
  {
    company: 'DeMillus S.A. Indústria e Comércio',
    role: 'Assistente de Administração (Foco em Análise de Dados)',
    period: 'Mai/2024 – Atual',
    current: true,
    responsibilities: [
      'Manutenção lógica de tabelas salariais e estruturas de cargos',
      'Análise de dados estratégicos para gestão de pessoas',
      'Criação de dashboards e indicadores de desempenho',
      'Apoio direto à tomada de decisão gerencial',
    ],
  },
  {
    company: 'DeMillus S.A. Indústria e Comércio',
    role: 'Auxiliar de Administração II (Crédito e Risco)',
    period: 'Mai/2018 – Mai/2024',
    current: false,
    responsibilities: [
      'Análise financeira de clientes e portfólio de crédito',
      'Mitigação de riscos e monitoramento de inadimplência',
      'Elaboração de relatórios analíticos para diretoria',
      'Negociação e renegociação de contratos comerciais',
    ],
  },
  {
    company: 'Mastercasa Móveis e Decorações Ltda.',
    role: 'Auxiliar de Faturamento',
    period: 'Out/2013 – Jan/2017',
    current: false,
    responsibilities: [
      'Emissão de notas fiscais e controle de faturamento',
      'Gestão de documentação fiscal e contábil',
      'Suporte às operações administrativas e financeiras',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experiencia" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Trajetória profissional
          </p>
          <h2 className="section-title gradient-text">Experiência Profissional</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          {TIMELINE.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="timeline-dot" />

              <div className="glass-card p-6">
                {/* Period badge */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <CalendarDays size={13} />
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase tracking-wider">
                      Atual
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className="flex items-center gap-2 mb-1">
                  <Building2 size={15} className="text-cyan-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-300">{item.company}</span>
                </div>

                {/* Role */}
                <h3 className="text-base font-bold text-slate-100 mb-4">{item.role}</h3>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                      <ChevronRight size={14} className="text-cyan-400/60 mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
