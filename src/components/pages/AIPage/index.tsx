import React from 'react'
import HeroComponent from './HeroComponent'
import ClientLogos from './ClientLogos'
import AIToolsGrid from './AIToolsGrid'
import FormComponent from './FormComponent'
import FeedbackComponent from './FeedbackComponent'
import FAQComponent from './FAQComponent'
import CategoryComponent from './CategoryComponent'

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
