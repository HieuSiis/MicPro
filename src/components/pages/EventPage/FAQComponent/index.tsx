import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import Heading from 'components/ui/Heading'
import React from 'react'
import { useState } from 'react'

const faqs = [
    {
        question: "What is all-in-one event management software?",
        answer: `All-in-one event management software is a technology solution that helps event planners to organize all types of events (conference, workshop, trade show) in any format (onsite, online, hybrid) from beginning to end.
        
        This includes all aspects of the event planning process like building an event website, setting up event ticketing, and handling event day operations like check-in and badging, session management, and event analytics.`,
    },
    {
        question: "How can I get a proposal for my project?",
        answer: "",
    },
    {
        question: "What process should I expect from your UX agency?",
        answer: "",
    },
    {
        question: "Can you help us redesign our legacy enterprise/B2B software?",
        answer: "",
    },
    {
        question: "How much does it cost to hire you for a UI/UX design project?",
        answer: "",
    },
]
const FAQComponent = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='sm:py-[100px] py-10 bg-slate-100'>
            <div className='main-container'>
                <Heading className='sm:mb-20 mb-10'>Frequently Asked <span className='text-primary'>Questions</span></Heading>
                <div className="sm:space-y-[30px] space-y-[14px]">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`rounded-[10px] overflow-hidden border transition ${openIndex === index ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-dark1'}`}
                        >
                            <button className={`w-full sm:px-10 px-6 sm:py-[26px] py-6  sm:font-sora font-poppins sm:text-[28px] text-lg flex justify-between transition-all duration-300 ${openIndex === index ? 'text-white' : 'text-dark'}`}
                                onClick={() => toggle(index)}
                            >
                                <span className='font-bold text-left'>{faq.question}</span>
                                <span>
                                    {openIndex === index ? <MinusOutlined /> : <div className='text-dark1'><PlusOutlined /></div>}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="sm:px-10 px-6 sm:pb-6 pb-5 sm:text-base text-sm font-poppins font-medium text-violet-200 leading-relaxed whitespace-pre-line sm:max-w-[1070px] max-w-[327px] ">
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
