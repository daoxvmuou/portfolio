import { featured } from '../data/projects.js'
import './Featured.css'

export default function Featured() {
  return (
    <section id="featured" className="section featured">
      <div className="container">
        <div className="featured__head reveal">
          <div className="section-label">02 / Featured Work</div>
          <h2 className="section-title">
            精选项目 <span className="featured__dim">— Selected.</span>
          </h2>
          <p className="section-sub">
            参与过的商业游戏项目。
          </p>
        </div>

        <div className="featured__list">
          {featured.map((f, i) => (
            <article
              className={`fcard reveal ${i % 2 ? 'fcard--rev' : ''}`}
              key={f.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="fcard__media">
                <img src={f.image} alt={f.title} loading="lazy" />
                <span className="fcard__index">0{i + 1}</span>
              </div>
              <div className="fcard__body">
                <span className="fcard__cat">{f.category}</span>
                <h3 className="fcard__title">{f.title}</h3>
                <p className="fcard__desc">{f.desc}</p>

                {f.techStack && (
                  <div className="fcard__tech">
                    {f.techStack.map((t) => (
                      <span key={t} className="fcard__chip">{t}</span>
                    ))}
                  </div>
                )}

                {f.link && (
                  <a
                    className="fcard__link"
                    href={f.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    访问项目
                    <span className="fcard__arrow">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
