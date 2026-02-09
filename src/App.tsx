import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <main className="snap-y snap-mandatory overflow-y-scroll h-screen min-w-screen overscroll-none">
          <Hero />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </>
  )
}

export default App


