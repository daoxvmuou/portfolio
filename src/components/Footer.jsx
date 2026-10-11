import { profile } from '../data/projects.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__grid" />
      <div className="footer__overlay" />

      <div className="footer__inner container">
        <div className="footer__top reveal">
          <div className="footer__label">05 / Let&apos;s build together</div>
          <h2 className="footer__title">
            有项目想法？
            <br />
            <span className="footer__accent">一起把它做出来。</span>
          </h2>
        </div>

        <a className="footer__mail reveal" href={`mailto:${profile.email}`} style={{ transitionDelay: '120ms' }}>
          <span>{profile.email}</span>
          <span className="footer__mail-arrow">→</span>
        </a>

        <div className="footer__links reveal" style={{ transitionDelay: '200ms' }}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.steam} target="_blank" rel="noreferrer">Steam</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name} · Portfolio</span>
          <span className="footer__status">
            <span className="footer__dot" />
            Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  )
}
