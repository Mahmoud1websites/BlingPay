import { useState } from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { icons } from '../../assets'
import './Navbar.css'

const links = ['Products', 'Developers', 'Company', 'Pricing']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="container nav">
      <div className="nav__bar">
        <a href="#" aria-label="Blinqpay home">
          <Logo />
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <a href="#" className="nav__support">
            Support
          </a>
          <Button variant="pill">Sign in</Button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="nav__toggle"
        >
          <img src={icons.menu} alt="" />
        </button>
      </div>

      {open && (
        <div className="nav__menu">
          <ul>
            {links.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
            <li>
              <a href="#" className="nav__menu-bold">
                Support
              </a>
            </li>
          </ul>
          <Button variant="pill">Sign in</Button>
        </div>
      )}
    </nav>
  )
}
