import Image from 'next/image'
import React from 'react'

import Img from 'assets/images/sport-page/img-positions.png'
import Heading from 'components/ui/Heading'

const boxesLeft = [
  {
    title: 'Center',
    description: 'The center is the tallest player on each team, playing near the basket.',
    colorTitle: 'text-blue-400',
    bgBox: 'bg-blue-50',
  },
  {
    title: 'Small Forward',
    description:
      'The small forward plays against small and large players. They roam all over on the court.',
    colorTitle: 'text-red-400',
    bgBox: 'bg-red-50',
  },
  {
    title: 'Shooting Guard',
    description:
      'The shooting guard is usually the team’s best shooter. The shooting guard can make shots from...',
    colorTitle: 'text-blue-600',
    bgBox: 'bg-blue-50',
  },
]

const boxesRight = [
  {
    title: 'Power Forward',
    description: 'The power forward does many of the things a center does',
    colorTitle: 'text-pink-400',
    bgBox: 'bg-pink-50',
  },
  {
    title: 'Point Guard',
    description:
      'The point guard runs the offense and usually is the team’s best dribbler and passer.',
    colorTitle: 'text-yellow-500',
    bgBox: 'bg-yellow-50',
  },
]

const PositionsComponent = () => {
  return (
    <section className='main-container py-[60px] sm:py-[120px]'>
      <Heading>
        Basketball <span className='text-primary'>Positions</span>
      </Heading>
      <p className='mx-auto mb-10 mt-6 max-w-[303px] text-center font-poppins text-sm font-medium text-dark1 sm:mb-[100px] sm:max-w-[655px] sm:text-xl sm:font-normal'>
        A basketball team can have a lot of players, but only five can play in a game at any one
        time.
      </p>

      <div className='relative flex flex-col justify-center gap-28 sm:flex-row sm:gap-6 '>
        {/* Left Boxes */}
        <div className='flex flex-col justify-end gap-5 sm:gap-[30px]'>
          {boxesLeft.map((item, index) => (
            <div
              key={index}
              className={`${item.bgBox} max-w-[370px] rounded-lg p-6 text-left shadow-sm`}
            >
              <h3 className={`${item.colorTitle} mb-3 font-sora text-xl font-semibold`}>
                {item.title}
              </h3>
              <p className='font-poppins text-sm font-normal text-dark1 sm:text-base'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Player Image */}
        <div className='relative flex h-[422px] w-[327px] items-center justify-center rounded-t-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-md sm:h-[549px] sm:w-[426px]'>
          <Image src={Img} alt='Basketball Player' className='absolute' />
        </div>

        {/* Right Boxes */}
        <div className='flex flex-col justify-center gap-6'>
          {boxesRight.map((item, index) => (
            <div
              key={index}
              className={`${item.bgBox} max-w-[370px] rounded-lg p-6 text-left shadow-sm`}>
              <h3 className={`${item.colorTitle} mb-3 font-sora text-xl font-semibold`}>
                {item.title}
              </h3>
              <p className='font-poppins text-sm font-normal text-dark1 sm:text-base'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PositionsComponent
