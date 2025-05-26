import "./Styles/navbar.css"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1>Luis Gomez</h1>
          </div>

          <div className="navbar-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  const targetId = item.href.substring(1)
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const headerOffset = 80
                    const elementPosition = targetElement.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar