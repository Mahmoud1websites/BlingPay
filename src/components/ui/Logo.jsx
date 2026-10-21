import { icons } from '../../assets'
import './Logo.css'

export default function Logo({ size = 'nav' }) {
  return (
    <span className={`logo logo--${size}`}>
      <img src={icons.logoMark} alt="" />
      <span>blinqpay</span>
    </span>
  )
}
