import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/App.tsx'
import Navbar  from './components/navbar.tsx'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import About from './components/about.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </StrictMode>,
)
