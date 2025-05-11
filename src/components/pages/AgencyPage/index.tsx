import React from 'react'

import BlogComponent from './BlogComponent'
import BudgetComponent from './BudgetComponent'
import CompaniesComponent from './CompaniesComponent'
import CtaComponent from './CtaComponent'
import ExpertiseComponent from './ExpertiseComponent'
import HeroComponent from './HeroComponent'
import SliderComponent from './SliderComponent'
import TeamComponent from './TeamComponent'
import WorkComponent from './WorkComponent'

const AgencyPage = () => {
  return (
    <main>
      <HeroComponent />

      <CompaniesComponent />

      <WorkComponent />

      <ExpertiseComponent />

      <BudgetComponent />

      <SliderComponent />

      <TeamComponent />

      <BlogComponent />

      <CtaComponent />
    </main>
  )
}

export default AgencyPage
