import TextBlock from '../ui/TextBlock'
import { people } from '../../assets'
import './PeopleSection.css'

const faces = [
  { src: people[3], x: 255, y: 143, rotate: -76, focus: '50% 20%', zoom: 1.15 },
  { src: people[2], x: 402, y: 135, rotate: 10, focus: '50% 25%', zoom: 1.6 },
  { src: people[4], x: 147, y: 224, rotate: -141, focus: '50% 30%', zoom: 1.7 },
  { src: people[0], x: 260, y: 277, rotate: -198, focus: '50% 20%', zoom: 1.5 },
  { src: people[1], x: 410, y: 269, rotate: -288, focus: '50% 30%', zoom: 2.4 },
]

const size = 146

function Face({ src, x, y, rotate, focus, zoom }) {
  return (
    <span
      className="people__face"
      style={{ left: x - size / 2, top: y - size / 2, transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={src}
        alt=""
        style={{ objectPosition: focus, transform: `rotate(${-rotate}deg) scale(${zoom})` }}
      />
    </span>
  )
}

export default function PeopleSection() {
  return (
    <section className="people">
      <div className="container people__inner">
        <div className="people__wrap">
          <div className="people__cluster">
            {faces.map((f, i) => (
              <Face key={i} {...f} />
            ))}
          </div>
        </div>
        <TextBlock
          eyebrow="Mobile transaction"
          title={<>Smart Mobile <br className="lg-break" /></>}
          accent="Banking"
          className="people__text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>
      </div>
    </section>
  )
}
