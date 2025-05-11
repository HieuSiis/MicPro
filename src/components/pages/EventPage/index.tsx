import React from 'react'

import Audience from './Audience'
import ChannelMarketing from './ChannelMarketing'
import CtaComponent from './CtaComponent'
import EventCard from './EventCard'
import FAQComponent from './FAQComponent'
import HeroComponent from './HeroComponent'
import PartnerStats from './PartnerStats'
import SliderComponent from './SliderComponent'
import TicketingComponent from './TicketingComponent'

const EventPage = () => {
  return (
    <main>
      <HeroComponent />

      <PartnerStats />

      <EventCard />

      <TicketingComponent />

      <ChannelMarketing />

      <Audience />

      <SliderComponent />

      <FAQComponent />

      <CtaComponent />
    </main>
  )
}

export default EventPage
