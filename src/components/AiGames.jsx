import { aiGames } from '../data/projects.js'
import './AiGames.css'

export default function AiGames() {
  return (
    <section id="ai-games" className="section aig">
      <div className="container">
        <div className="aig__head reveal">
          <div className="aig__head-main">
            <div className="section-label">02 / AI Lab</div>
            <h2 className="section-title">
              AI 小游戏，
              <br />
              <span className="aig__accent">打开网页就能玩。</span>
            </h2>
          </div>
          <p className="section-sub aig__sub">
            与大模型能力结合的轻量互动小游戏，点击卡片即可进入游玩。
          </p>
        </div>

        <div className="aig__list">
          {aiGames.map((g, i) => {
            const hasLink = Boolean(g.link)
            const Card = hasLink ? 'a' : 'div'
            const linkProps = hasLink
              ? { href: g.link, target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <Card
                key={g.id}
                className={`aig__card reveal${hasLink ? '' : ' aig__card--locked'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                {...linkProps}
              >
                <div className="aig__media">
                  {g.cover ? (
                    <img src={g.cover} alt={g.title} loading="lazy" />
                  ) : (
                    <div className="aig__visual">
                      <span className="aig__visual-grid" />
                      <span className="aig__visual-orb" />
                      <span className="aig__visual-badge">AI</span>
                    </div>
                  )}
                </div>

                <div className="aig__body">
                  <span className="aig__cat">{g.category}</span>
                  <h3 className="aig__title">{g.title}</h3>
                  <p className="aig__desc">{g.desc}</p>

                  <div className="aig__tech">
                    {g.techStack.map((t) => (
                      <span key={t} className="aig__chip">{t}</span>
                    ))}
                  </div>

                  <span className="aig__cta">
                    {hasLink ? (g.cta || '立即游玩') : (g.cta || '即将开放')}
                    <span className="aig__arrow">→</span>
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
