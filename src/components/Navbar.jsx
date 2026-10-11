import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'games', label: 'Games' },
  { id: 'ai-games', label: 'AI Lab' },
  { id: 'featured', label: 'Featured' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = ['hero', 'games', 'ai-games', 'featured', 'about', 'contact']
      let current = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => go('hero')}>
          <span className="nav__logo">◐</span>
          <span className="nav__name">PORTFOLIO</span>
        </button>

        <nav className="nav__links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="nav__cta" onClick={() => go('contact')}>
          Get in touch
          <span className="nav__cta-arrow">→</span>
        </button>
      </div>
    </header>
  )
}
