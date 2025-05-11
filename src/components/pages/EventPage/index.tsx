import React from 'react'
import HeroComponent from './HeroComponent'
import PartnerStats from './PartnerStats'
import EventCard from './EventCard'
import TicketingComponent from './TicketingComponent'
import ChannelMarketing from './ChannelMarketing'
import Audience from './Audience'
import SliderComponent from './SliderComponent'
import FAQComponent from './FAQComponent'
import CtaComponent from './CtaComponent'

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
