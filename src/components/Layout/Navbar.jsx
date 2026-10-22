import { useState } from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { icons } from '../../assets'
import '../../style/Navbar.css'

const links = ['Products', 'Developers', 'Company', 'Pricing']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="container navbar">
      <div className="navbar-row">
        <a href="#" aria-label="Blinqpay home">
          <Logo />
        </a>

        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-buttons">
          <a href="#" className="navbar-support">
            Support
          </a>
          <Button variant="round">Sign in</Button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="menu-button"
        >
          <img src={icons.menu} alt="" />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
            <li>
              <a href="#" className="mobile-menu-bold">
                Support
              </a>
            </li>
          </ul>
          <Button variant="round">Sign in</Button>
        </div>
      )}
    </nav>
  )
}
