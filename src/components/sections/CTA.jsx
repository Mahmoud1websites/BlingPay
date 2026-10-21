import Button from '../ui/Button'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__card">
        <span aria-hidden className="cta__blob" />
        <h2>
          What Are You <span>Waiting For?</span>
        </h2>
        <Button variant="gold">Try Blinqpay</Button>
      </div>
    </section>
  )
}
