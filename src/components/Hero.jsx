import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* 视频背景 - 后续可替换为自有视频文件 */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1538481199705-c710c9e32129?w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-flying-through-space-1574/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero__overlay" />
      <div className="hero__grid" />

      <div className="hero__inner container">
        <div className="hero__meta">
          <span className="hero__dot" />
          <span>AVAILABLE FOR HIRE · 2026</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">Building</span>
          <span className="hero__line hero__line--accent">
            interactive worlds<span className="hero__dot2">.</span>
          </span>
        </h1>

        <p className="hero__desc">
          游戏开发工程师 / Gameplay &amp; Engine Programmer.
          <br />
          专注于玩法程序、引擎工具与实时图形，跨 Unity · Unreal · Godot 全栈。
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
          >
            浏览游戏项目
            <span>→</span>
          </button>
          <button
            className="hero__btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            联系合作
          </button>
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
