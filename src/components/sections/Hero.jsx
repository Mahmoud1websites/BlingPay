import Navbar from '../Layout/Navbar'
import Button from '../ui/Button'
import { hero, brandsLight } from '../../assets'
import '../../style/Hero.css'

function MobileWave() {
  return (
    <svg className="hero-wave hero-wave-mobile" viewBox="0 0 414 400" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="heroMobile" x1="0" y1="0.15" x2="1" y2="0.85">
          <stop offset="0.25" stopColor="#5c0e62" />
          <stop offset="0.9223" stopColor="#00b5d0" />
        </linearGradient>
        <linearGradient id="heroMobileTop" x1="0" y1="0.45" x2="1" y2="0.55">
          <stop offset="0.0322" stopColor="#5c0e62" />
          <stop offset="0.8676" stopColor="#00b5d0" />
        </linearGradient>
      </defs>
      <path d="M0 0H414V400H0Z" fill="url(#heroMobile)" />
      <path d="M0 0H414V265C350 236 280 196 205 146C140 104 70 70 0 56Z" fill="url(#heroMobileTop)" opacity="0.45" />
    </svg>
  )
}

function DesktopWave() {
  return (
    <svg className="hero-wave hero-wave-desktop" viewBox="0 0 1500 790" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="heroMain" x1="0" y1="0.42" x2="1" y2="0.58">
          <stop offset="0.0127" stopColor="#5c0e62" />
          <stop offset="0.9223" stopColor="#00b5d0" />
        </linearGradient>
        <linearGradient id="heroTop" x1="1" y1="0.43" x2="0" y2="0.57">
          <stop offset="0.1348" stopColor="#00b5d0" />
          <stop offset="0.8298" stopColor="#5c0e62" />
        </linearGradient>
      </defs>
      <path d="M0 0H1500V272C1250 330 1000 600 640 612C400 620 180 520 0 432Z" fill="url(#heroMain)" />
      <path d="M560 0H1500V210C1240 190 880 110 560 0Z" fill="url(#heroTop)" opacity="0.55" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero">
      <MobileWave />
      <DesktopWave />

      <Navbar />

      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Get Your <br /> Payment Faster
          </h1>
          <p>Blinqpay helps businesses in Africa get paid by anyone, anywhere in the world</p>
          <Button variant="hero">Start Now</Button>
        </div>

        <ul className="hero-brands">
          {brandsLight.map((b) => (
            <li key={b.name}>
              <img src={b.src} alt={b.name} style={{ width: b.width, opacity: b.opacity }} />
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-devices">
        <img src={hero.monitor} alt="" className="hero-monitor" />
        <img src={hero.laptop} alt="Blinqpay dashboard" className="hero-laptop" />
      </div>
    </header>
  )
}
