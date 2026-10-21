import { icons } from '../../assets'
import './LearnMore.css'

export default function LearnMore({ href = '#', size = 'md' }) {
  return (
    <a href={href} className={`learn-more learn-more--${size}`}>
      Learn more
      <img src={icons.learnMore} alt="" />
    </a>
  )
}
