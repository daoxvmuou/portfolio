import './GameCard.css'

export default function GameCard({ game, onOpen }) {
  const handleDownload = (e) => {
    e.stopPropagation()
    window.open(game.download, '_blank', 'noopener')
  }

  return (
    <article className="gcard" onClick={onOpen}>
      <div className="gcard__media">
        <img src={game.cover} alt={game.title} loading="lazy" />
        <div className="gcard__shade" />
        <div className="gcard__top">
          <span className="gcard__year">{game.year}</span>
          <span className="gcard__type">{game.tags[0]}</span>
        </div>
        <div className="gcard__play">
          <span>查看详情</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="gcard__body">
        <div className="gcard__head">
          <h3 className="gcard__title">{game.title}</h3>
          <span className="gcard__tagline">{game.tagline}</span>
        </div>

        <div className="gcard__tech">
          {game.techStack.slice(0, 3).map((t) => (
            <span key={t} className="gcard__chip">{t}</span>
          ))}
          {game.techStack.length > 3 && (
            <span className="gcard__chip gcard__chip--more">+{game.techStack.length - 3}</span>
          )}
        </div>

        <button className="gcard__dl" onClick={handleDownload}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          下载 / 跳转
        </button>
      </div>
    </article>
  )
}
