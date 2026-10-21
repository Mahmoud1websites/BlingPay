import TextBlock from '../ui/TextBlock'
import { tablet } from '../../assets'
import './TabletSection.css'

export default function TabletSection() {
  return (
    <section className="tablet">
      <div className="container tablet__inner">
        <img src={tablet} alt="Blinqpay on a tablet" className="tablet__img" />
        <TextBlock
          eyebrow="Credit card"
          title={<>Payment <br className="lg-break" /></>}
          accent="Gets Easier"
          className="tablet__text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>
      </div>
    </section>
  )
}
