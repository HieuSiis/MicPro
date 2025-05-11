import Image from 'next/image'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import Arrow from 'assets/icons/Arrow.svg'

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<'button'>
const ArrowButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center rounded-lg bg-white p-4 text-lg font-semibold text-dark',
        className
      )}
      {...rest}
    >
      {children}
      <span className='ml-3 rounded-full bg-blue-600 p-1 text-white'>
        <Image src={Arrow} alt='' width={18} height={18} />
      </span>
    </button>
  )
}

export default ArrowButton
