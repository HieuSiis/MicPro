import React from 'react'

import BidComponent from './BidComponent'
import CollectionsComponent from './CollectionsComponent'
import FAQComponent from './FAQComponent'
import HeroComponent from './HeroComponent'
import MarketPlace from './MarketPlace'
import SellerComponent from './SellerComponent'
import SubscribeComponent from './SubscribeComponent'
import TrendingCreators from './TrendingCreators'

const NFTPage = () => {
  return (
    <main>
      <HeroComponent />

      <CollectionsComponent />

      <BidComponent />

      <MarketPlace />

      <SellerComponent />

      <TrendingCreators />

      <FAQComponent />

      <SubscribeComponent />
    </main>
  )
}

export default NFTPage
