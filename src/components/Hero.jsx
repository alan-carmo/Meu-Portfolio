import { motion } from 'framer-motion'
import { ArrowDown, FileDown, Mail } from 'lucide-react'

/**
 * Hero — full-screen opening section with name, title, intro, and CTAs.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 text-xs font-semibold tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponível para oportunidades
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4"
        >
          Alan da Silva{' '}
          <span className="gradient-text">do Carmo</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-lg sm:text-xl text-slate-400 font-medium mb-6"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Desenvolvedor de Software | Python &amp; JavaScript
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-slate-400/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Profissional em transição de carreira — da área administrativa e financeira para o desenvolvimento de software.
          Combinando visão de negócio com código, crio{' '}
          <span className="text-cyan-400 font-semibold">automações inteligentes</span>,{' '}
          <span className="text-purple-400 font-semibold">soluções web</span> e sistemas que resolvem problemas reais,
          com foco em eficiência e impacto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projetos" className="glow-btn glow-btn-primary">
            <ArrowDown size={16} />
            Ver Projetos
          </a>
          <a
            href="/Alan_da_Silva_do_Carmo_CV.pdf"
            download
            className="glow-btn glow-btn-outline"
          >
            <FileDown size={16} />
            Baixar Currículo
          </a>
          <a href="#contato" className="glow-btn glow-btn-outline">
            <Mail size={16} />
            Contato
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mx-auto w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
          >
            <div className="w-1 h-2.5 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
