import { createContext, useContext, useState } from 'react'
import translations from './translations'

/**
 * LanguageContext — provides the current language ('pt' | 'en'),
 * a toggle function, and a `t` accessor for the translations object.
 */
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')

  const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
