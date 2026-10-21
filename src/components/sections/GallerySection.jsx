import TextBlock from '../ui/TextBlock'
import { collage } from '../../assets'
import './GallerySection.css'

const tiles = [
  { src: collage.collage2, x: -12, y: -6, w: 331, h: 124 },
  { src: collage.collage3, x: 334, y: -6, w: 187, h: 124 },
  { src: collage.collage1, x: 534, y: -6, w: 175, h: 124 },
  { src: collage.collage10, x: -21, y: 134, w: 90, h: 154 },
  { src: collage.collage4, x: 83, y: 134, w: 280, h: 154 },
  { src: collage.collage9, x: 377, y: 134, w: 280, h: 154 },
  { src: collage.collage8, x: 671, y: 134, w: 280, h: 154 },
  { src: collage.collage5, x: -12, y: 304, w: 256, h: 154 },
  { src: collage.collage6, x: 258, y: 304, w: 256, h: 154 },
  { src: collage.collage7, x: 528, y: 304, w: 256, h: 154 },
]

const mobileTiles = [
  { src: collage.collage2, x: -7, y: -4, w: 203, h: 76 },
  { src: collage.collage3, x: 204, y: -4, w: 114, h: 76 },
  { src: collage.collage1, x: 327, y: -4, w: 107, h: 76 },
  { src: collage.collage10, x: -13, y: 82, w: 55, h: 94 },
  { src: collage.collage4, x: 51, y: 82, w: 171, h: 94 },
  { src: collage.collage9, x: 231, y: 82, w: 171, h: 94 },
  { src: collage.collage8, x: 411, y: 82, w: 171, h: 94 },
  { src: collage.collage5, x: -7, y: 186, w: 157, h: 94 },
  { src: collage.collage6, x: 158, y: 186, w: 157, h: 94 },
  { src: collage.collage7, x: 323, y: 186, w: 157, h: 94 },
]

function Tiles({ list }) {
  return list.map((t, i) => (
    <img key={i} src={t.src} alt="" style={{ left: t.x, top: t.y, width: t.w, height: t.h }} />
  ))
}

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="container gallery__inner">
        <div className="gallery__mobile">
          <Tiles list={mobileTiles} />
        </div>

        <div className="gallery__desktop">
          <div className="gallery__frame">
            <Tiles list={tiles} />
          </div>
        </div>

        <TextBlock
          eyebrow="Secure transaction"
          title={<>Save Your <br className="lg-break" /></>}
          accent="Savings"
          className="gallery__text"
        >
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw
        </TextBlock>
      </div>
    </section>
  )
}
