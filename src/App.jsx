import { LanguageProvider } from './i18n/LanguageContext'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Objective from './components/Objective'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

/**
 * App — root component that assembles all portfolio sections.
 */
export default function App() {
  return (
    <LanguageProvider>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Objective />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  )
}
