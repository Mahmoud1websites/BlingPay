import LearnMore from './LearnMore'
import './TextBlock.css'

export default function TextBlock({ eyebrow, title, accent, after, children, size = 'md', blob = '', className = '' }) {
  return (
    <div className={`text-block text-block--${size} ${className}`}>
      <span aria-hidden className={`text-block__blob ${blob}`} />
      <div className="text-block__inner">
        {eyebrow && <p className="text-block__eyebrow">{eyebrow}</p>}
        <h2 className="text-block__title">
          {title}
          <span>{accent}</span>
          {after}
        </h2>
        <p className="text-block__body">{children}</p>
        <LearnMore size={size} />
      </div>
    </div>
  )
}
