import React from 'react'
import Hero_services  from '../../components/services_comps/Hero_srevices'
import ServiceCard from '../../components/services_comps/ServiceCard'
import FaqSection from '../../components/services_comps/services_i/FaqSection'
function Services() {
  return (
    <div>
        <Hero_services />
        <ServiceCard />
        <FaqSection />
    </div>
  )
}

export default Services