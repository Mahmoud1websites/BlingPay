import Logo from '../ui/Logo'
import { icons } from '../../assets'
import './Footer.css'

const columns = [
  {
    title: 'Services',
    links: ['Design', 'Coding', 'Development', 'Marketing', 'Digital Marketing', 'Product Design'],
  },
  {
    title: 'Product',
    links: ['Hotel Management', 'Rent Management', 'Micro-Finance', 'Industry', 'Dhoko'],
  },
  { title: 'Company', links: ['Las Vegas', 'New York', 'Tokyo', 'Paris'], wide: true },
]

const socials = [
  { label: 'Instagram', src: icons.instagram, w: 30, h: 30 },
  { label: 'Twitter', src: icons.twitter, w: 30, h: 25 },
  { label: 'LinkedIn', src: icons.linkedin, w: 30, h: 30 },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size="footer" />

        <div className="footer__cols">
          {columns.map((col) => (
            <div key={col.title} className={`footer__col ${col.wide ? 'footer__col--wide' : ''}`}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href="#" aria-label={s.label}>
                <img src={s.src} alt="" style={{ width: s.w, height: s.h }} />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__copyright">
          <img src={icons.copyright} alt="" />
          <span>
            Copy Right {new Date().getFullYear()}.
            <br /> All rights reserved
          </span>
        </p>
      </div>
    </footer>
  )
}
