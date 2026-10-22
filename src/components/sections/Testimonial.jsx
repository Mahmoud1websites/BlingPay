import { customers } from '../../assets'
import '../../style/Testimonial.css'

const floating = [
  { src: customers.customer3, x: 1095, y: 183, size: 106 },
  { src: customers.customer4, x: 1079, y: 434, size: 80 },
  { src: customers.customer2, x: 875, y: 647, size: 95 },
  { src: customers.customer5, x: 1199, y: 656, size: 70 },
]

function Photo({ src, size, className = '', style }) {
  const ring = Math.round(size * 0.0227 * 100) / 100
  return (
    <span className={`photo ${className}`} style={{ width: size, height: size, padding: ring, ...style }}>
      <img src={src} alt="" />
    </span>
  )
}

export default function Testimonial() {
  return (
    <section className="reviews">
      <div className="reviews-background">
        <div className="container reviews-box">
          <div className="reviews-heading">
            <span aria-hidden className="reviews-shape" />
            <h2>
              What Our <span>Customers</span>
              <br />
              Are Saying
            </h2>
            <p className="reviews-intro">
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw
            </p>
          </div>

          <div className="reviews-main">
            <Photo src={customers.leo} size={132} className="photo-main" />
            <div className="reviews-quote">
              <p className="reviews-text">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw
              </p>
              <p className="reviews-name">Leo Maynus</p>
              <p className="reviews-job">CEO at Softpanda</p>
            </div>

            <div className="reviews-dots" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className={i === 2 ? 'active' : ''} />
              ))}
            </div>
          </div>

          {floating.map((f) => (
            <Photo key={f.x} src={f.src} size={f.size} className="photo-floating" style={{ left: f.x, top: f.y }} />
          ))}
        </div>
      </div>

      <span aria-hidden className="reviews-stripe reviews-stripe-left" />
      <span aria-hidden className="reviews-stripe reviews-stripe-right" />
    </section>
  )
}
