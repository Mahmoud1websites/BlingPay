import Logo from '../ui/Logo'
import { icons } from '../../assets'
import '../../style/Footer.css'

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
      <div className="container footer-box">
        <Logo size="footer" />

        <div className="footer-columns">
          {columns.map((col) => (
            <div key={col.title} className={`footer-column ${col.wide ? 'footer-column-wide' : ''}`}>
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

        <ul className="footer-social">
          {socials.map((s) => (
            <li key={s.label}>
              <a href="#" aria-label={s.label}>
                <img src={s.src} alt="" style={{ width: s.w, height: s.h }} />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer-copyright">
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
