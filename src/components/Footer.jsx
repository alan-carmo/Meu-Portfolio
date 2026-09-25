import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { useLanguage } from '../i18n/LanguageContext'

const SOCIAL = [
  { icon: GithubIcon, href: 'https://github.com/maiornerd/Alan-do-Carmo', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/alancarmo', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alan-carmo@hotmail.com', label: 'Email' },
]

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/[0.04] bg-[#070b16]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-extrabold gradient-text mb-2">{'<Alan />'}</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              {f.brand}
            </p>
          </div>
          {/* Quick links */}
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{f.quickLinks}</p>
            <ul className="space-y-2">
              {f.links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-slate-500 hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{f.socialTitle}</p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-800/50 border border-slate-700/40 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Alan da Silva do Carmo. {f.copyright}
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            {f.madeBy} <span className="text-cyan-400 font-semibold ml-1">Alan da Silva do Carmo</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
