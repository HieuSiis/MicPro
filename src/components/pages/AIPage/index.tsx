import React from 'react'

import AIToolsGrid from './AIToolsGrid'
import CategoryComponent from './CategoryComponent'
import ClientLogos from './ClientLogos'
import FAQComponent from './FAQComponent'
import FeedbackComponent from './FeedbackComponent'
import FormComponent from './FormComponent'
import HeroComponent from './HeroComponent'

const AIPage = () => {
  return (
    <main>
      <HeroComponent />

      <CategoryComponent />

      <ClientLogos />

      <AIToolsGrid />

      <FormComponent />

      <FeedbackComponent />

      <FAQComponent />
    </main>
  )
}

export default AIPage
