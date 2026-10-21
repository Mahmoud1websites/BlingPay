import FeatureCard from '../ui/FeatureCard'
import TextBlock from '../ui/TextBlock'
import { icons } from '../../assets'
import './Features.css'

const text = 'Now track all of your transaction easily.'

export default function Features() {
  return (
    <section className="features">
      <div className="container features__inner">
        <TextBlock
          size="lg"
          blob="blob-white-md"
          title={<>Make &amp; Share <br className="lg-break" /></>}
          accent="Payments"
          after={<> With <br className="lg-break" />Community</>}
          className="features__text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>

        <div className="features__cards">
          <div className="features__col features__col--left">
            <FeatureCard icon={icons.accessibility} title="Easy Access">{text}</FeatureCard>
            <FeatureCard icon={icons.analytics} title="Use Your Connection">{text}</FeatureCard>
          </div>
          <div className="features__col features__col--right">
            <FeatureCard icon={icons.cash} title="Cashflow Visibility">{text}</FeatureCard>
            <FeatureCard icon={icons.receipt} title="Manage Invoicing">{text}</FeatureCard>
          </div>
        </div>
      </div>

      <svg className="features__curve" viewBox="0 0 1500 300" preserveAspectRatio="none" aria-hidden>
        <path d="M0 256C600 250 1100 90 1500 40V300H0Z" fill="#fff" />
      </svg>
    </section>
  )
}
