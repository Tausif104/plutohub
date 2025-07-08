// sections
import HeroSection from '@/components/sections/hero'
import CounterSection from '@/components/sections/counter-section'
import AboutSection from '@/components/sections/about'
import BrandsSection from '@/components/sections/brands'
import ServiceSection from '@/components/sections/service'
import FaqSection from '@/components/sections/faq'
import TestimonialsSection from '@/components/sections/testimonials'
import ContactSection from '@/components/sections/contact'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <BrandsSection />
      <ServiceSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
    </>
  )
}

export default HomePage
