import Heading from 'components/ui/Heading'
import React from 'react'
import Img from 'assets/images/sport-page/img-positions.png'
import Image from 'next/image'

const boxesLeft = [
    {
        title: 'Center',
        description: 'The center is the tallest player on each team, playing near the basket.',
        colorTitle: 'text-blue-400',
        bgBox: 'bg-blue-50'
    },
    {
        title: 'Small Forward',
        description: 'The small forward plays against small and large players. They roam all over on the court.',
        colorTitle: 'text-red-400',
        bgBox: 'bg-red-50'
    },
    {
        title: 'Shooting Guard',
        description: 'The shooting guard is usually the team’s best shooter. The shooting guard can make shots from...',
        colorTitle: 'text-blue-600',
        bgBox: 'bg-blue-50'
    },
]

const boxesRight = [
    {
        title: 'Power Forward',
        description: 'The power forward does many of the things a center does',
        colorTitle: 'text-pink-400',
        bgBox: 'bg-pink-50'
    },
    {
        title: 'Point Guard',
        description: 'The point guard runs the offense and usually is the team’s best dribbler and passer.',
        colorTitle: 'text-yellow-500',
        bgBox: 'bg-yellow-50'
    },
]

const PositionsComponent = () => {
    return (
        <section className="sm:py-[120px] py-[60px] main-container">
            <Heading>Basketball <span className='text-primary'>Positions</span></Heading>
            <p className='text-dark1 sm:mb-[100px] mb-10 sm:max-w-[655px] max-w-[303px] sm:text-xl text-sm font-poppins sm:font-normal font-medium mt-6 mx-auto text-center'>A basketball team can have a lot of players, but only five can play in a game at any one time.</p>

            <div className="relative flex sm:flex-row flex-col justify-center sm:gap-6 gap-28 ">
                {/* Left Boxes */}
                <div className="flex justify-end flex-col sm:gap-[30px] gap-5">
                    {boxesLeft.map((item, index) => (
                        <div key={index} className={`${item.bgBox} p-6 rounded-lg text-left shadow-sm max-w-[370px]`}>
                            <h3 className={`${item.colorTitle} text-xl font-sora font-semibold mb-3`}>{item.title}</h3>
                            <p className="text-dark1 sm:text-base text-sm font-poppins font-normal">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Center Player Image */}
                <div className="relative flex items-center justify-center sm:w-[426px] w-[327px] sm:h-[549px] h-[422px] bg-gradient-to-b from-blue-500 to-purple-500 rounded-t-full shadow-md">
                    <Image
                        src={Img}
                        alt="Basketball Player"
                        className="absolute"
                    />
                </div>

                {/* Right Boxes */}
                <div className="flex flex-col gap-6 justify-center">
                    {boxesRight.map((item, index) => (
                        <div className={`${item.bgBox} p-6 rounded-lg text-left shadow-sm max-w-[370px]`}>
                            <h3 className={`${item.colorTitle} text-xl font-sora font-semibold mb-3`}>{item.title}</h3>
                            <p className="text-dark1 sm:text-base text-sm font-poppins font-normal">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PositionsComponent
