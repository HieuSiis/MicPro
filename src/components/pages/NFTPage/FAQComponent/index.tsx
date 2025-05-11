import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Heading from 'components/ui/Heading';
import React, { useState } from 'react'

const faqs = [
    {
        question: 'How Much is a Micpro NFT?',
        answer: 'It takes 2–3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.',
    },
    {
        question: 'Where can I view my Micpro NFT?',
        answer: 'You can view your Micpro NFT directly in your connected wallet or through the Micpro NFT marketplace under your account dashboard.',
    },
    {
        question: 'How to work Micpro NFT marketplace?',
        answer: 'To use the Micpro NFT marketplace, connect your wallet, browse available NFTs, and purchase or list items for sale. The platform supports seamless transactions and user-friendly navigation.',
    },
    {
        question: 'What can I do with my Micpro NFT account?',
        answer: 'With your Micpro NFT account, you can buy, sell, trade NFTs, manage your collection, and access exclusive features like community events and creator tools.',
    },
    {
        question: 'What is total support Micpro Account?',
        answer: 'A Total Support Micpro Account offers premium services including priority customer support, advanced analytics, promotional tools, and early access to new features.',
    },
];

const FAQComponent = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0); // open cau dau
    return (
        <section className='main-container sm:mt-[100px] mt-[70px]'>
            <Heading>Frequently Asked <span className='text-blue-600'>Questions</span></Heading>
            <div className="columns-1 sm:columns-2 gap-6 sm:mt-20 mt-10 sm:space-y-[30px] space-y-3">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-violet-50 shadow-sm sm:px-6 px-4 sm:py-8 py-5 transition-all duration-300 break-inside-avoid"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex items-start w-full text-left gap-4"
                            >
                                <div className="-mt-1">
                                    {isOpen ? (
                                        <MinusOutlined className="text-primary text-3xl" />
                                    ) : (
                                        <PlusOutlined className="text-dark text-3xl" />
                                    )}
                                </div>
                                <div>
                                    <h3 className={`sm:text-lg text-sm font-semibold ${isOpen ? 'text-black' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </h3>
                                    {isOpen && (
                                        <p className="sm:text-sm text-xs text-dark1 font-poppins font-normal mt-[29px] mb-5 max-w-[382px]">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>

        </section>
    )
}

export default FAQComponent
