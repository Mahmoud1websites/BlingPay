import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Brands from './components/sections/Brands'
import TabletSection from './components/sections/TabletSection'
import PeopleSection from './components/sections/PeopleSection'
import GallerySection from './components/sections/GallerySection'
import Testimonial from './components/sections/Testimonial'
import CTA from './components/sections/CTA'
import Footer from './components/Layout/Footer'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Features />
      <Brands />
      <TabletSection />
      <PeopleSection />
      <GallerySection />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}
