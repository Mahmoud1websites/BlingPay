import FeatureCard from '../ui/FeatureCard'
import TextBlock from '../ui/TextBlock'
import { icons } from '../../assets'
import '../../style/Features.css'

const text = 'Now track all of your transaction easily.'

export default function Features() {
  return (
    <section className="features">
      <div className="container features-box">
        <TextBlock
          size="big"
          shape="shape-white"
          title={<>Make &amp; Share <br className="desktop-break" /></>}
          highlight="Payments"
          after={<> With <br className="desktop-break" />Community</>}
          className="features-text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>

        <div className="features-cards">
          <div className="features-column features-column-left">
            <FeatureCard icon={icons.accessibility} title="Easy Access">{text}</FeatureCard>
            <FeatureCard icon={icons.analytics} title="Use Your Connection">{text}</FeatureCard>
          </div>
          <div className="features-column features-column-right">
            <FeatureCard icon={icons.cash} title="Cashflow Visibility">{text}</FeatureCard>
            <FeatureCard icon={icons.receipt} title="Manage Invoicing">{text}</FeatureCard>
          </div>
        </div>
      </div>

      <svg className="features-curve" viewBox="0 0 1500 300" preserveAspectRatio="none" aria-hidden>
        <path d="M0 256C600 250 1100 90 1500 40V300H0Z" fill="#fff" />
      </svg>
    </section>
  )
}
