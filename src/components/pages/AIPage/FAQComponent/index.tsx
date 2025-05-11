import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import Heading from 'components/ui/Heading'

const faqs = [
  {
    question: 'What is MicPro?',
    answer:
      "MicPro is an advanced voice recognition and transcription platform that helps you convert spoken content into written text with high accuracy. It's designed for content creators, professionals, and teams who need fast, reliable voice-to-text solutions.",
  },
  {
    question: 'Is MicPro free?',
    answer:
      'MicPro offers a free plan with basic features, allowing users to test the platform and use core functionalities. For more advanced features and higher usage limits, paid plans are available.',
  },
  {
    question: 'Which languages does MicPro support?',
    answer:
      'We support 24 languages other than English at the moment. Our platform makes it easy for you to add a new language, update existing languages and translate from any language into any other.',
  },
  {
    question: 'Who owns the MicPro copy?',
    answer:
      'You retain full ownership of all content generated using MicPro. We do not claim any rights over your transcriptions, and your data is securely stored and managed according to our privacy policy.',
  },
  {
    question: 'What integrations does MicPro offer?',
    answer:
      'MicPro integrates seamlessly with popular tools like Zoom, Google Meet, Microsoft Teams, Slack, and various CRM and content management platforms to streamline your workflow.',
  },
]

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2) // position no 3

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className='mx-auto mt-[70px] max-w-5xl px-4 sm:mb-[100px] sm:mt-[120px]'>
      <Heading className='mb-10 sm:mb-20'>
        Frequently Asked <span className='text-blue-600'>Questions</span>
      </Heading>
      <div className='space-y-6'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border ${
              openIndex === index ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <button
              type='button'
              className='flex w-full items-center justify-between px-5 py-4 text-left font-sora text-lg font-semibold text-dark sm:px-[33px] sm:text-xl  '
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <div className='ml-10'>{openIndex === index ? <UpOutlined /> : <DownOutlined />}</div>
            </button>
            {openIndex === index && faq.answer && (
              <div className='max-w-[827px] px-5 pb-4 font-poppins text-sm text-dark1 sm:px-[33px] sm:text-lg'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQComponent
