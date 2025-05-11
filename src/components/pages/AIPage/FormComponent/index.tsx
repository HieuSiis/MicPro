import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'
import { DescribeProject, FinishProject, ProjectName } from 'assets/images/ai-page'

const items = [
    {
        title: 'Enter your project Name',
        description: 'Describe your topic (minimum 5 words):My topic is the nutritional benefits of flaxseed. I have chosen to rank for "flaxseed" on Google.',
        image: ProjectName,
        bgCard: 'bg-fuchsia-50',
        bgGradientImg: 'bg-gradientBlue2'
    },
    {
        title: 'Describe your product',
        description: 'Get a variety of high-converting copy every time you hit "Generate" thanks to snippets, forms, and designs that fit seamlessly into your content.',
        image: DescribeProject,
        bgCard: 'bg-violet-50',
        bgGradientImg: 'bg-gradientSky'
    },
    {
        title: 'Finish Your Project',
        description: 'Add AI-powered editing tools to your content and publish it in one click to WordPress, Wix, Shopify and more.',
        image: FinishProject,
        bgCard: 'bg-sky-50',
        bgGradientImg: 'bg-gradientRose'
    }
]
const InputForm = () => {
    return (
        <section className='main-container sm:mt-[100px] mt-[70px]'>
            <Heading className='sm:mb-[70px] mb-10'>How it work with <span className='text-blue-600'>Micpro</span></Heading>
            <div className='flex flex-col sm:gap-[50px] gap-5'>
                {items.map((item, index) => (
                    <div className={`flex sm:flex-row flex-col-reverse items-center ${item.bgCard} rounded-xl py-8 px-10 sm:odd:gap-12 odd:gap-[30px] sm:even:gap-[72px] even:gap-[30px] sm:even:flex-row-reverse`}>
                        <div className="flex">
                            <div className={`relative sm:w-[524px] w-[299px] sm:h-[524px] h-[327px] ${item.bgGradientImg} rounded-xl sm:mb-[43px] mb-6`}></div>

                            <div className=' absolute sm:translate-y-10 translate-y-[30px] sm:translate-x-[30px] translate-x-6 sm:w-[468px] w-[250px] sm:h-[504px] h-[315px] flex flex-col bg-white rounded-lg'>
                                {/* <h5 className='font-manrope text-xs font-extrabold mb-1'>Product Descriptions 👋</h5>
                                <p className='font-manrope text-[10px] text-gray-400 font-medium'>Product descriptions that will inspire, and influence.</p>
                                <form action="" className='py-6 space-y-4'>
                                    <div>
                                        <label htmlFor="" className='font-manrope text-[10px] font-semibold text-gray-500 mb-2'>Project Name *</label>
                                        <input className='w-full px-3 py-[10px] border border-gray-200 text-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px] font-semibold font-manrope ' type="text" placeholder='Write your project name' />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='font-manrope text-[10px] font-semibold text-gray-500 mb-2'>Language</label>
                                        <div className='flex justify-between items-center w-full px-3 py-2 border border-gray-200 text-neutral-700 rounded-md'>
                                            <div className='text-[10px] font-semibold font-manrope ml-5'>
                                                English
                                            </div>
                                            <div className='flex items-center pl-2 ml-2 border-l border-gray-400'>
                                                <DownOutlined className='w-[15px] h-[15px] text-gray-400' />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='flex mb-2 justify-between'>
                                            <label htmlFor="" className='font-manrope text-[10px] font-semibold text-gray-500 '>Product Name/Brand</label>
                                            <div className="text-xs text-gray-400">10 / 100</div>
                                        </div>
                                        <input className='w-full px-2 py-[10px] border border-gray-200 text-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px] font-semibold font-manrope ' type="text" placeholder='Ex: adidas' />
                                    </div>
                                    <div>
                                        <div className='flex mb-2 justify-between'>
                                            <label htmlFor="" className='font-manrope text-[10px] font-semibold text-gray-500 '>Describe your product *</label>
                                            <div className="text-xs text-gray-400">0 / 400</div>
                                        </div>
                                        <textarea
                                            placeholder="Write your brand or product description"
                                            maxLength={400}
                                            rows={4}
                                            className="mt-1 w-full px-4 py-2 border text-[10px] text-gray-700 font-manrope border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-[7px] bg-blue-600 font-manrope text-xs text-white font-bold rounded-sm hover:bg-blue-700 transition"
                                    >
                                        Generate
                                    </button>
                                </form> */}
                                <Image src={item.image} alt='' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h2 className='font-sora sm:text-[50px] text-[28px] font-bold sm:mb-7 mb-4 leading-tight'>{item.title}</h2>
                            <p className='sm:text-xl text-sm font-poppins font-normal text-dark1 sm:max-w-[494px] max-w-[280px]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default InputForm
