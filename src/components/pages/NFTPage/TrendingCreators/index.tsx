import Image from 'next/image'
import React from 'react'

import {
  Avatar1,
  Avatar10,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
} from 'assets/images/nft-page'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Heading from 'components/ui/Heading'

const creators = [
  {
    rank: 1,
    avatar: Avatar1,
    name: '80solita',
    username: '@80solita',
    items: 4,
    owners: 14,
    floor: '5.471 ETH',
    volume: '0 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 2,
    avatar: Avatar2,
    name: 'Duck',
    username: '@80solita',
    items: 5,
    owners: 53,
    floor: '5.471 ETH',
    volume: '10 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 3,
    avatar: Avatar3,
    name: 'JonJizzle_650',
    username: '@80solita',
    items: 3,
    owners: 9,
    floor: '5.471 ETH',
    volume: '4 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 4,
    avatar: Avatar4,
    name: 'Dominicanos',
    username: '@80solita',
    items: 4,
    owners: 312,
    floor: '5.471 ETH',
    volume: '6.9 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 5,
    avatar: Avatar5,
    name: 'balinese5567',
    username: '@80solita',
    items: 9,
    owners: 53,
    floor: '5.471 ETH',
    volume: '5.9 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 6,
    avatar: Avatar6,
    name: 'Millsyballin',
    username: '@80solita',
    items: 5,
    owners: 58,
    floor: '5.471 ETH',
    volume: '1.3 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 7,
    avatar: Avatar7,
    name: 'Mr_Decadent',
    username: '@80solita',
    items: 7,
    owners: 87,
    floor: '5.471 ETH',
    volume: '3.6 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 8,
    avatar: Avatar8,
    name: 'adrian91',
    username: '@80solita',
    items: 8,
    owners: 54,
    floor: '5.471 ETH',
    volume: '2.4 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 9,
    avatar: Avatar9,
    name: 'InMyDuffie',
    username: '@80solita',
    items: 5,
    owners: 89,
    floor: '5.471 ETH',
    volume: '5.5 ETH',
    total: '5.471 ETH',
  },
  {
    rank: 10,
    avatar: Avatar10,
    name: 'sixsisx_eth',
    username: '@80solita',
    items: 4,
    owners: 80,
    floor: '5.471 ETH',
    volume: '0.8 ETH',
    total: '5.471 ETH',
  },
]

const TrendingCreators = () => {
  return (
    <section className='main-container mt-[60px] sm:mt-[100px]'>
      <div className=' rounded-3xl bg-gradientBlue2 px-4 py-[30px] text-white sm:px-[60px] sm:py-[70px]'>
        <Heading className='text-white'>Trending creators</Heading>
        <div className='mt-6 w-full space-y-[15px] overflow-x-auto sm:mt-[60px]'>
          {creators.map((creator, index) => (
            <div
              key={index}
              className='grid grid-cols-[25px_1fr_repeat(6,minmax(10px,2fr))] items-center rounded-lg bg-white/10 px-1 py-2 font-poppins text-[8px] backdrop-blur sm:grid-cols-[40px_1fr_repeat(6,minmax(40px,3fr))] sm:px-4 sm:text-sm'
            >
              <span className='text-xs font-normal sm:text-base'>#{creator.rank}</span>
              <div className='mr-1'>
                <Image src={creator.avatar} alt='' />
              </div>
              <div>
                <p className='text-[7px] font-medium sm:text-lg'>{creator.name}</p>
                <p className='text-[7px] text-white/70 sm:text-xs'>{creator.username}</p>
              </div>
              <span className='text-center'>{creator.items}</span>
              <span className='text-center'>{creator.owners}</span>
              <span className='text-center'>{creator.floor}</span>
              <span className='text-center'>{creator.volume}</span>
              <span className='text-center'>{creator.total}</span>
            </div>
          ))}
        </div>

        <div className='mt-6 flex justify-center sm:mb-5 sm:mt-9'>
          <RadiusButton className='rounded-full bg-white px-[30px] py-3 font-poppins text-sm font-medium text-black shadow-md transition hover:bg-gray-100 sm:px-[50px] sm:py-[18px] sm:text-base'>
            More Creators
          </RadiusButton>
        </div>
      </div>
    </section>
  )
}

export default TrendingCreators
