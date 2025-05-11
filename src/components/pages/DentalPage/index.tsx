import React from 'react'

import CtaComponent from './CtaComponent'
import DecareComponent from './DecareComponent'
import DentalOverview from './DentalOverview'
import HeroComponent from './HeroComponent'
import PatientsComponent from './PatientsComponent'
import ServicesComponent from './ServicesComponent'
import SpecialistComponent from './SpecialistComponent'

const DentalPage = () => {
  return (
    <main>
      <HeroComponent />

      <DecareComponent />

      <DentalOverview />

      <ServicesComponent />

      <SpecialistComponent />

      <PatientsComponent />

      <CtaComponent />
    </main>
  )
}

export default DentalPage
