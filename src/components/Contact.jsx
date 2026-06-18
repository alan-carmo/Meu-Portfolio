import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons'

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'alan-carmo@hotmail.com', href: 'mailto:alan-carmo@hotmail.com', color: 'text-cyan-400', bg: 'bg-cyan-400/[0.08]', border: 'border-cyan-400/15' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: '/in/alancarmo', href: 'https://www.linkedin.com/in/alancarmo', color: 'text-blue-400', bg: 'bg-blue-400/[0.08]', border: 'border-blue-400/15' },
  { icon: GithubIcon, label: 'GitHub', value: '/maiornerd', href: 'https://github.com/maiornerd/Alan-do-Carmo', color: 'text-purple-400', bg: 'bg-purple-400/[0.08]', border: 'border-purple-400/15' },
  { icon: MapPin, label: 'Localização', value: 'Rio de Janeiro – RJ', href: null, color: 'text-pink-400', bg: 'bg-pink-400/[0.08]', border: 'border-pink-400/15' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">Vamos conversar?</p>
          <h2 className="section-title gradient-text">Contato</h2>
          <p className="section-subtitle mx-auto mt-3">Estou aberto a oportunidades, colaborações e novas conexões profissionais.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {CONTACTS.map((c, idx) => {
            const Tag = c.href ? 'a' : 'div'
            const props = c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}>
                <Tag {...props} className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${c.bg} ${c.border} ${c.href ? 'cursor-pointer hover:scale-[1.02]' : ''}`} style={{ textDecoration: 'none' }}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.bg}`}>
                    <c.icon size={20} className={c.color} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{c.label}</p>
                    <p className="text-sm text-slate-300 font-semibold">{c.value}</p>
                  </div>
                </Tag>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:alan-carmo@hotmail.com" className="glow-btn glow-btn-primary text-base">
            <Send size={18} /> Enviar Email
          </a>
          <a href="https://wa.me/5521995230815" target="_blank" rel="noopener noreferrer" className="glow-btn glow-btn-primary text-base">
            <WhatsappIcon size={18} className="shrink-0" /> Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
