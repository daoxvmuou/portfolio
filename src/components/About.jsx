import { profile } from '../data/projects.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left reveal">
            <div className="section-label">03 / About</div>
            <h2 className="section-title">
              玩法、引擎与<br />体验的工程师。
            </h2>

            <div className="about__avatar">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&q=80"
                alt="portrait"
              />
              <span className="about__avatar-ring" />
            </div>
          </div>

          <div className="about__right reveal" style={{ transitionDelay: '120ms' }}>
            <p className="about__intro">{profile.intro}</p>

            <div className="about__contacts">
              <a className="about__contact" href={`mailto:${profile.email}`}>
                <span className="about__contact-label">Email</span>
                <span className="about__contact-value">{profile.email}</span>
                <span className="about__contact-arrow">↗</span>
              </a>
              <a className="about__contact" href={profile.github} target="_blank" rel="noreferrer">
                <span className="about__contact-label">GitHub</span>
                <span className="about__contact-value">github.com/yourname</span>
                <span className="about__contact-arrow">↗</span>
              </a>
              <a className="about__contact" href={profile.steam} target="_blank" rel="noreferrer">
                <span className="about__contact-label">Steam</span>
                <span className="about__contact-value">Steam 创意工坊</span>
                <span className="about__contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about__stats reveal">
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
