import Image from 'next/image'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { CheckGradientBlue, CheckGradientOrange, CheckGradientPurple, CheckGradientRed } from 'assets/icons/check-icons'
import { Amazon, Fb, GG, Legend, Shoes, Watch } from 'assets/images/ecommerce-page'

const features = [
    { text: 'Automated Google and Facebook ads', icon: CheckGradientPurple, },
    { text: 'TikTok, Pinterest and Snapchat Pixel integrations', icon: CheckGradientOrange, },
    { text: 'Automated abandoned cart emails and other customizable Marketing emails', icon: CheckGradientBlue, },
    { text: 'Discount coupons and gift cards', icon: CheckGradientRed, },
]

const GrowFaster = () => {
    return (
        <section className="main-container mt-[120px] relative overflow-hidden p-5">
            <div className="max-w-7xl mx-auto sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="sm:text-[50px] text-[28px] font-sora text-dark font-bold sm:mb-[30px] mb-5">Grow faster</h2>
                    <p className="text-dark1 font-poppins sm:text-xl text-sm font-normal max-w-[463px] sm:mb-10 mb-[30px]">
                        Take your business to the next level with our easy-to-use marketing tools to attract and retain more customers.
                    </p>
                    <ul className="space-y-6 sm:text-base text-sm font-medium font-poppins max-w-[438px]">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <Image src={item.icon} alt='' width={20} height={20}></Image>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side - Flex Layout */}
                <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-4">
                        {/* Google */}
                        <div className="sm:max-w-[206px] max-w-[157px] bg-white rounded-xl shadow-md sm:p-4 p-3 sm:min-h-[338px] min-h-[257px]">
                            <div className="flex items-center justify-between mb-auto">
                                <Image src={GG} alt="Google" className='sm:w-[60px] sm:h-5 w-[45px] h-[15px] ' />
                                <SearchOutlined className='text-dark1 sm:w-4 sm:h-4 w-3 h-3' />
                            </div>
                            <Image src={Legend} alt="Sunglasses" className="mx-auto sm:mt-[97px] mt-[74px] mb-5" />
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col'>
                                    <div className="h-[3px] bg-gray-200 rounded sm:w-[75px] w-[57px] mb-[6px]" />
                                    <div className="h-[3px] bg-gray-200 rounded sm:w-[49px] w-[37px]" />
                                </div>
                                <button className="bg-blue-600 text-white sm:text-xs text-[9px] px-[5px] py-[2px] rounded-sm ">Buy now</button>
                            </div>

                            <div className='space-y-[10px] mt-8'>
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[166px] w-[126px]" />
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[131px] w-[100px]" />
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[86px] w-[65px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {/* Facebook */}
                        <div className="sm:max-w-[206px] max-w-[157px] bg-white rounded-xl shadow-md sm:p-4 p-3 flex flex-col sm:min-h-[242px] min-h-[184px]">
                            <Image src={Fb} alt="Facebook" width={25} height={25} className="" />
                            <Image src={Watch} alt="Watch" className="mx-auto my-auto" />
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col'>
                                    <div className="h-[3px] bg-gray-200 rounded sm:w-[75px] w-[57px] mb-[6px]" />
                                    <div className="h-[3px] bg-gray-200 rounded sm:w-[49px] w-[37px]" />
                                </div>
                                <button className="bg-blue-600 text-white sm:text-xs text-[9px] px-[5px] py-[2px] rounded-sm ml-7">Buy now</button>
                            </div>
                        </div>
                        {/* Amazon */}
                        <div className="sm:max-w-[206px] max-w-[157px] bg-white rounded-xl shadow-md sm:p-4 p-3 flex flex-col sm:min-h-[242px] min-h-[184px]">
                            <Image src={Amazon} alt="Amazon" width={25} height={25} />
                            <Image src={Shoes} alt="Shoes" className="mx-auto my-auto" />
                            <div className='space-y-[10px]'>
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[166px] w-[135px]" />
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[131px] w-[100px]" />
                                <div className="h-[3px] bg-gray-200 rounded sm:w-[86px] w-[65px]" />
                            </div>
                            <button className="bg-blue-600 text-white sm:text-xs text-[9px] px-4 py-1 rounded-sm mx-auto mt-4 w-full">Special Offer</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GrowFaster
