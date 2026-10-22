import TextBlock from '../ui/TextBlock'
import { tablet } from '../../assets'
import '../../style/TabletSection.css'

export default function TabletSection() {
  return (
    <section className="tablet">
      <div className="container tablet-box">
        <img src={tablet} alt="Blinqpay on a tablet" className="tablet-image" />
        <TextBlock
          label="Credit card"
          title={<>Payment <br className="desktop-break" /></>}
          highlight="Gets Easier"
          className="tablet-text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>
      </div>
    </section>
  )
}
