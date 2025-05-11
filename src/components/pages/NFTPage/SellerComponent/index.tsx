import Image from 'next/image'
import React from 'react'

import {
  Person1Seller,
  Person2Seller,
  Person3Seller,
  Person4Seller,
  Person5Seller,
  Person6Seller,
  Person7Seller,
  Person8Seller,
} from 'assets/images/nft-page'
import Heading from 'components/ui/Heading'

const users = [
  { id: 1, name: 'Killan James', eth: '3,224', img: Person1Seller, bgImg: 'bg-orange-100' },
  { id: 2, name: 'Killan James', eth: '2,123', img: Person2Seller, bgImg: 'bg-sky-200' },
  { id: 3, name: 'Killan James', eth: '1,254', img: Person3Seller, bgImg: 'bg-pink-100' },
  { id: 4, name: 'Killan James', eth: '2,789', img: Person4Seller, bgImg: 'bg-rose-200' },
  { id: 5, name: 'Killan James', eth: '1,963', img: Person5Seller, bgImg: 'bg-orange-200' },
  { id: 6, name: 'Killan James', eth: '0,285', img: Person6Seller, bgImg: 'bg-pink-100' },
  { id: 7, name: 'Killan James', eth: '0,654', img: Person7Seller, bgImg: 'bg-indigo-50' },
  { id: 8, name: 'Killan James', eth: '1,224', img: Person8Seller, bgImg: 'bg-amber-100' },
]

const SellerComponent = () => {
  return (
    <section className='sm:main-container mobile-container mt-[60px] sm:mt-[120px]'>
      <Heading>
        Top <span className='text-blue-600'>Seller</span>
      </Heading>

      <div className='mt-10 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-[30px] md:grid-cols-3 lg:grid-cols-4'>
        {users.map((user) => (
          <div
            key={user.id}
            className='relative flex w-full items-center gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-md'
          >
            <div
              className={`h-[62px] w-[70px] ${user.bgImg} flex items-center justify-center rounded-lg`}
            >
              <Image src={user.img} alt={user.name} />
            </div>

            <div>
              <h3 className='font-sora text-xl font-semibold'>{user.name}</h3>
              <p className='font-poppins text-sm font-normal text-slate-500'>{user.eth} ETH</p>
            </div>
            <span className='absolute right-0 top-0 rounded-bl-lg bg-blue-600 px-2 py-0.5 font-poppins text-sm font-medium text-white '>
              {String(user.id).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SellerComponent
