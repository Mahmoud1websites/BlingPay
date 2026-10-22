import LearnMore from './LearnMore'
import '../../style/TextBlock.css'

export default function TextBlock({ label, title, highlight, after, children, size = 'normal', shape = '', className = '' }) {
  return (
    <div className={`text-block text-block-${size} ${className}`}>
      <span aria-hidden className={`text-block-shape ${shape}`} />
      <div className="text-block-box">
        {label && <p className="text-block-label">{label}</p>}
        <h2 className="text-block-title">
          {title}
          <span>{highlight}</span>
          {after}
        </h2>
        <p className="text-block-text">{children}</p>
        <LearnMore size={size} />
      </div>
    </div>
  )
}
