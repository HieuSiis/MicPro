import React from 'react'

import BlogComponent from './BlogComponent'
import ClientsComponent from './ClientsComponent'
import CtaComponent from './CtaComponent'
import FeaturesComponent from './FeaturesComponent'
import HeroComponent from './HeroComponent'
import OfferComponent from './OfferComponent'
import OrderedComponent from './OrderedComponent'
import StatsComponent from './StatsComponent'

const RestaurantPage = () => {
  return (
    <main>
      <HeroComponent />

      <FeaturesComponent />

      <StatsComponent />

      <OrderedComponent />

      <OfferComponent />

      <BlogComponent />

      <ClientsComponent />

      <CtaComponent />
    </main>
  )
}

export default RestaurantPage
