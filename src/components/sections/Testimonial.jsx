import { customers } from '../../assets'
import './Testimonial.css'

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
    <section className="testimonial">
      <div className="testimonial__band">
        <div className="container testimonial__inner">
          <div className="testimonial__heading">
            <span aria-hidden className="testimonial__blob" />
            <h2>
              What Our <span>Customers</span>
              <br />
              Are Saying
            </h2>
            <p className="testimonial__intro">
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw
            </p>
          </div>

          <div className="testimonial__main">
            <Photo src={customers.leo} size={132} className="photo--leo" />
            <div className="testimonial__quote">
              <p className="testimonial__text">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw
              </p>
              <p className="testimonial__name">Leo Maynus</p>
              <p className="testimonial__role">CEO at Softpanda</p>
            </div>

            <div className="testimonial__dots" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className={i === 2 ? 'active' : ''} />
              ))}
            </div>
          </div>

          {floating.map((f) => (
            <Photo key={f.x} src={f.src} size={f.size} className="photo--float" style={{ left: f.x, top: f.y }} />
          ))}
        </div>
      </div>

      <span aria-hidden className="testimonial__stripe testimonial__stripe--left" />
      <span aria-hidden className="testimonial__stripe testimonial__stripe--right" />
    </section>
  )
}
