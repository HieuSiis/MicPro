import Heading from 'components/ui/Heading'
import React from 'react'
import ButtonIcon from 'assets/images/nft-page/button-arrow-topright.svg'
import Image from 'next/image'

const SubscribeComponent = () => {
    return (
        <section className='main-container sm:mt-[120px] mt-[60px]'>
            <Heading className='max-w-[766px]'>Subscribe to join our <span className='text-blue-600'>community</span></Heading>

            <p className="text-dark1 max-w-[682px] mx-auto sm:mt-[34px] mt-5 sm:text-xl text-sm font-poppins font-normal text-center">
                Stay Up To Date On New Releases, Interviews, Events, And Updates From Foundation's Community.
            </p>

            <form
                // onSubmit={(e) => e.preventDefault()}
                className="sm:mt-11 mt-[30px] sm:max-w-xl max-w-[327px] sm:h-20 h-[60px] mx-auto flex items-center rounded-full border border-dark1 sm:px-2 px-1 sm:py-2 py-1 shadow-sm"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow outline-none ml-5 bg-transparent text-sm sm:text-[22px] placeholder-gray-400"
                />
                <button
                    type="submit"
                >
                    <Image src={ButtonIcon} alt="" width={64} height={64} className=" hover:bg-blue-700 transition sm:w-auto sm:h-auto w-[50px] h-[50px] " />
                </button>
            </form>
        </section>
    )
}

export default SubscribeComponent
