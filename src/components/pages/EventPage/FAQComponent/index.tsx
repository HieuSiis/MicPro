import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import Heading from 'components/ui/Heading'

const faqs = [
  {
    question: 'What is all-in-one event management software?',
    answer: `All-in-one event management software is a technology solution that helps event planners to organize all types of events (conference, workshop, trade show) in any format (onsite, online, hybrid) from beginning to end.
        
        This includes all aspects of the event planning process like building an event website, setting up event ticketing, and handling event day operations like check-in and badging, session management, and event analytics.`,
  },
  {
    question: 'How can I get a proposal for my project?',
    answer: '',
  },
  {
    question: 'What process should I expect from your UX agency?',
    answer: '',
  },
  {
    question: 'Can you help us redesign our legacy enterprise/B2B software?',
    answer: '',
  },
  {
    question: 'How much does it cost to hire you for a UI/UX design project?',
    answer: '',
  },
]
const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='bg-slate-100 py-10 sm:py-[100px]'>
      <div className='main-container'>
        <Heading className='mb-10 sm:mb-20'>
          Frequently Asked <span className='text-primary'>Questions</span>
        </Heading>
        <div className='space-y-[14px] sm:space-y-[30px]'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-[10px] border transition ${
                openIndex === index
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-dark1 bg-white'
              }`}
            >
              <button
                type='button'
                className={`flex w-full justify-between px-6 py-6  font-poppins text-lg transition-all duration-300 sm:px-10 sm:py-[26px] sm:font-sora sm:text-[28px] ${
                  openIndex === index ? 'text-white' : 'text-dark'
                }`}
                onClick={() => toggle(index)}
              >
                <span className='text-left font-bold'>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <MinusOutlined />
                  ) : (
                    <div className='text-dark1'>
                      <PlusOutlined />
                    </div>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className='max-w-[327px] whitespace-pre-line px-6 pb-5 font-poppins text-sm font-medium leading-relaxed text-violet-200 sm:max-w-[1070px] sm:px-10 sm:pb-6 sm:text-base '>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQComponent
