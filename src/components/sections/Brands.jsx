import { brands } from '../../assets'
import './Brands.css'

export default function Brands() {
  return (
    <section className="brands">
      <ul>
        {brands.map((b) => (
          <li key={b.name}>
            <img src={b.src} alt={b.name} style={{ width: b.width }} className={b.faded ? 'brands__faded' : ''} />
          </li>
        ))}
      </ul>
    </section>
  )
}
