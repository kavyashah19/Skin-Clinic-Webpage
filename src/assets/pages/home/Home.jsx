import React from 'react'
import Testimonials from '../../components/home_comps/Testimonials'
import Hero_sec from '../../components/home_comps/Hero_sec'
import ServiceSection from '../../components/home_comps/ServicesSection'
import RealCaseSection from '../../components/home_comps/RealCaseSection'
import Consultation from '../../components/home_comps/Consultation'
import AwardsSection  from '../../components/home_comps/AwardsSection '
function Home() {
  return (
    <div>
      <Hero_sec/>
      <Testimonials />
      <ServiceSection />
      <RealCaseSection />
      <Consultation />
      <AwardsSection />
    </div>
  )
}

export default Home