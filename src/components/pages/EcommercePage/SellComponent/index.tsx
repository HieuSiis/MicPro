import Image from 'next/image'
import React from 'react'
import { CheckGradientBlue, CheckGradientOrange, CheckGradientPurple, CheckGradientRed } from 'assets/icons/check-icons'
import { Amazon, Fb, Instag, Legend, Person1, Person2, Shoes, Watch } from 'assets/images/ecommerce-page'

const lists = [
    { icon: CheckGradientPurple, content: 'Build a new online store or connect to any website' },
    { icon: CheckGradientOrange, content: 'Sell across social media platforms like Facebook, Instagram and TikTok' },
    { icon: CheckGradientBlue, content: 'Integrate with online marketplaces like Amazon, eBay, Walmart' },
    { icon: CheckGradientRed, content: 'Connect with Point-of-Sale in your physical store' },
]

const SellComponent = () => {
    return (
        <section className="l-container py-10">
            <div className='flex sm:flex-row flex-col-reverse justify-between sm:px-10'>
                <div className="relative flex flex-col items-center">
                    {/* Profile images */}
                    <div className="flex items-center gap-4 sm:-left-0 -left-[70px] relative -z-10 sm:mt-0 mt-[78px]">
                        <div className='relative'>
                            <Image
                                src={Person1}
                                alt="Person 1"
                                className="bg-sky-400 object-cover sm:w-[324px] sm:h-[263px] w-[204px] h-[166px]"
                            />
                        </div>
                        <div className='absolute sm:-top-10 -top-10 sm:-right-32 -right-20'>
                            <Image
                                src={Person2}
                                alt="Person 2"
                                className=" object-cover sm:w-[150px] sm:h-[245px] w-[95px] h-[154px]"
                            />
                        </div>

                    </div>

                    {/* Product cards */}
                    <div className="flex gap-3 absolute top-56 left-6">
                        {/* Facebook Card */}
                        <div className="bg-white rounded-xl shadow-md p-3 sm:w-[157px] w-[99px] text-center flex flex-col sm:min-h-[208px] min-h-[131px]">
                            <Image src={Fb} alt="Facebook" className='sm:w-[25px] sm:h-[25px] w-5 h-5' />
                            <Image src={Legend} alt="Glasses" className="mx-auto my-auto mb-auto sm:w-[139px] sm:h-[81px] w-[88px] h-[51px]" />

                            <p className="sm:text-sm text-[9px] font-poppins font-normal text-dark1">Legend Brown</p>
                            <p className="sm:text-sm text-[9px] mt-[6px] font-poppins font-semibold">$90.50</p>
                        </div>

                        {/* Instagram Card */}
                        <div className="bg-white rounded-xl shadow-md p-3 sm:w-[157px] w-[99px] text-center flex flex-col sm:min-h-[208px] min-h-[131px]">
                            <Image src={Instag} alt="Instagram" className='sm:w-[25px] sm:h-[25px] w-5 h-5' />
                            <Image src={Watch} alt="Watch" className="mx-auto my-auto mb-auto sm:w-[54px] sm:h-[88px] w-[34px] h-[55px] " />
                            <p className="sm:text-sm text-[9px] font-poppins font-normal text-dark1">Black Watch</p>
                            <p className="sm:text-sm text-[9px] mt-[6px] font-poppins font-semibold">$90.50</p>
                        </div>

                        {/* Amazon Card */}
                        <div className="bg-white rounded-xl shadow-md p-3 sm:w-[157px] w-[99px] text-center flex flex-col sm:min-h-[208px] min-h-[131px]">
                            <Image src={Amazon} alt="Amazon" className='sm:w-[25px] sm:h-[25px] w-5 h-5' />
                            <Image src={Shoes} alt="Shoes" className="mx-auto my-auto mb-auto sm:w-[130px] sm:h-[87px] w-[82px] h-[55px] " />
                            <p className="sm:text-sm text-[9px] font-poppins font-normal text-dark1">Black Shoes</p>
                            <p className="sm:text-sm text-[9px] mt-[6px] font-poppins font-semibold">$90.50</p>
                        </div>
                    </div>
                </div>

                {/* Right side - Text content */}
                <div className="">
                    <h2 className="sm:text-[50px] text-[28px] font-sora text-dark font-bold sm:mb-[30px] mb-5">Sell everywhere</h2>
                    <p className="text-dark1 font-poppins sm:text-xl text-sm font-normal max-w-[463px] sm:mb-10 mb-[30px]">
                        Bring your products and services to the world. Get started with selling on one channel and expand everywhere online and in person.
                    </p>

                    <ul className="space-y-6 sm:text-base text-sm font-medium font-poppins max-w-[438px]">
                        {lists.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <Image src={item.icon} alt='' width={20} height={20}></Image>
                                {item.content}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default SellComponent
