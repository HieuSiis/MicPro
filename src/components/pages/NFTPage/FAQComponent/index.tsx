import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import Heading from 'components/ui/Heading'

const faqs = [
  {
    question: 'How Much is a Micpro NFT?',
    answer:
      'It takes 2–3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.',
  },
  {
    question: 'Where can I view my Micpro NFT?',
    answer:
      'You can view your Micpro NFT directly in your connected wallet or through the Micpro NFT marketplace under your account dashboard.',
  },
  {
    question: 'How to work Micpro NFT marketplace?',
    answer:
      'To use the Micpro NFT marketplace, connect your wallet, browse available NFTs, and purchase or list items for sale. The platform supports seamless transactions and user-friendly navigation.',
  },
  {
    question: 'What can I do with my Micpro NFT account?',
    answer:
      'With your Micpro NFT account, you can buy, sell, trade NFTs, manage your collection, and access exclusive features like community events and creator tools.',
  },
  {
    question: 'What is total support Micpro Account?',
    answer:
      'A Total Support Micpro Account offers premium services including priority customer support, advanced analytics, promotional tools, and early access to new features.',
  },
]

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // open cau dau
  return (
    <section className='main-container mt-[70px] sm:mt-[100px]'>
      <Heading>
        Frequently Asked <span className='text-blue-600'>Questions</span>
      </Heading>
      <div className='mt-10 columns-1 gap-6 space-y-3 sm:mt-20 sm:columns-2 sm:space-y-[30px]'>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className='break-inside-avoid rounded-xl border border-violet-50 bg-white px-4 py-5 shadow-sm transition-all duration-300 sm:px-6 sm:py-8'
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex w-full items-start gap-4 text-left'
              >
                <div className='-mt-1'>
                  {isOpen ? (
                    <MinusOutlined className='text-3xl text-primary' />
                  ) : (
                    <PlusOutlined className='text-3xl text-dark' />
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm font-semibold sm:text-lg ${
                      isOpen ? 'text-black' : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  {isOpen && (
                    <p className='mb-5 mt-[29px] max-w-[382px] font-poppins text-xs font-normal text-dark1 sm:text-sm'>
                      {faq.answer}
                    </p>
                  )}
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQComponent
