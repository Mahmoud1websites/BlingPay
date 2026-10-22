import { icons } from '../../assets'
import '../../style/LearnMore.css'

export default function LearnMore({ href = '#', size = 'normal' }) {
  return (
    <a href={href} className={`learn-more learn-more-${size}`}>
      Learn more
      <img src={icons.learnMore} alt="" />
    </a>
  )
}
