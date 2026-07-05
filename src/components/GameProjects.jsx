import { useState } from 'react'
import { games } from '../data/projects.js'
import GameCard from './GameCard.jsx'
import GameDetail from './GameDetail.jsx'
import './GameProjects.css'

export default function GameProjects() {
  const [active, setActive] = useState(null)

  return (
    <section id="games" className="section gp">
      <div className="container">
        <div className="gp__head reveal">
          <div>
            <div className="section-label">01 / Games</div>
            <h2 className="section-title">
              可玩的项目，
              <br />
              <span className="gp__accent">每一个都可下载。</span>
            </h2>
          </div>
          <p className="section-sub gp__sub">
            点击卡片查看技术栈与简介，并可跳转下载地址或直接下载体验。
          </p>
        </div>

        <div className="gp__grid">
          {games.map((g, i) => (
            <div
              className="reveal"
              key={g.id}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <GameCard game={g} onOpen={() => setActive(g)} />
            </div>
          ))}
        </div>
      </div>

      {active && <GameDetail game={active} onClose={() => setActive(null)} />}
    </section>
  )
}
