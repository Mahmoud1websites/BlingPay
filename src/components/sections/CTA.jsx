import Button from '../ui/Button'
import '../../style/CTA.css'

export default function CTA() {
  return (
    <section className="try-section">
      <div className="try-card">
        <span aria-hidden className="try-shape" />
        <h2>
          What Are You <span>Waiting For?</span>
        </h2>
        <Button variant="gold">Try Blinqpay</Button>
      </div>
    </section>
  )
}
