import { useEffect } from 'react'
import './GameDetail.css'

export default function GameDetail({ game, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleDownload = () => {
    if (game.downloadType === 'file') {
      const a = document.createElement('a')
      a.href = game.download
      a.download = ''
      document.body.appendChild(a)
      a.click()
      a.remove()
    } else {
      window.open(game.download, '_blank', 'noopener')
    }
  }

  return (
    <div className="gd__mask" onClick={onClose}>
      <div className="gd" onClick={(e) => e.stopPropagation()}>
        <button className="gd__close" onClick={onClose} aria-label="关闭">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="gd__media">
          <img src={game.cover} alt={game.title} />
          <div className="gd__media-shade" />
          <div className="gd__media-meta">
            <span className="gd__year">{game.year}</span>
            <div className="gd__tags">
              {game.tags.map((t) => (
                <span key={t} className="gd__tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="gd__body">
          <div className="gd__head">
            <h2 className="gd__title">{game.title}</h2>
            <span className="gd__tagline">{game.tagline}</span>
          </div>

          <p className="gd__desc">{game.description}</p>

          <div className="gd__row">
            <div className="gd__col">
              <div className="gd__label">技术栈 / Tech Stack</div>
              <div className="gd__chips">
                {game.techStack.map((t) => (
                  <span key={t} className="gd__chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="gd__col gd__col--sm">
              <div className="gd__label">职责</div>
              <div className="gd__value">{game.role}</div>
            </div>
          </div>

          <div className="gd__footer">
            <button className="gd__dl" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {game.downloadType === 'file' ? '下载安装包' : '前往下载页面'}
              <span className="gd__dl-arrow">↗</span>
            </button>
            <span className="gd__hint">
              {game.downloadHint || (game.downloadType === 'file' ? '文件将直接下载' : '链接将在新窗口打开')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
