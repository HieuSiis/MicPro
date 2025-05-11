import React from 'react'

import BreatheComponent from './BreatheComponent'
import CampaignsComponent from './CampaignsComponent'
import CompaniesComponent from './CompaniesComponent'
import CtaComponent from './CtaComponent'
import DonorsComponent from './DonorsComponent'
import HelpingComponent from './HelpingComponent'
import HeroComponent from './HeroComponent'
import Testimonial from './Testimonial'
import VideoComponent from './VideoComponent'

const CharityPage = () => {
  return (
    <main>
      <HeroComponent />

      <CompaniesComponent />

      <HelpingComponent />

      <VideoComponent />

      <DonorsComponent />

      <BreatheComponent />

      <Testimonial />

      <CampaignsComponent />

      <CtaComponent />
    </main>
  )
}

export default CharityPage
