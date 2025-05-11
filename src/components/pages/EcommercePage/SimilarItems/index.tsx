import Image from 'next/image'
import React from 'react'
import Model from 'assets/images/ecommerce-page/img-model.png'


const SimilarItems = () => {
    return (
        <section className="sm:main-container">
            <div className='flex flex-col sm:flex-row items-center justify-between gap-10 sm:py-16 py-[30px]'>
                {/* Text Content */}
                <div className="">
                    <p className="text-base font-poppins text-dark1 font-normal">Men Fashion</p>
                    <h2 className="sm:text-[50px] text-[28px] font-sora font-bold leading-tight text-dark mt-4 sm:max-w-[457px] max-w-[256px]">
                        Similar Items You Might Enjoy
                    </h2>
                    <p className="text-dark1 font-poppins sm:text-lg text-sm font-normal sm:mt-[30px] mt-5 sm:max-w-[457px] max-w-[327px]">
                        Hello Designers! This is the video calling website landing page design concept.
                        Video calling software is very popular nowadays.
                    </p>

                    {/* Features */}
                    <div className="flex sm:flex-row flex-col sm:gap-[57px] gap-5 sm:mt-12 mt-[30px]">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-dark1 flex items-center justify-center text-2xl text-dark1">+</div>
                            <div>
                                <p className="font-semibold font-poppins text-lg text-dark">Care instructions</p>
                                <p className="text-sm text-gray-500 mt-[10px]">Machine wash at 30.c</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-dark1 flex items-center justify-center text-2xl text-dark1">+</div>
                            <div>
                                <p className="font-semibold font-poppins text-lg text-dark">Fabric material</p>
                                <p className="text-sm font-poppins font-normal text-dark1 mt-[10px]">84% cotton, 16% polyester</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Image src={Model} alt=''></Image>
            </div>

        </section>
    )
}

export default SimilarItems
