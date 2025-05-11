import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h2
      className={twMerge(
        'mx-auto text-center font-sora text-[28px] font-bold leading-tight text-dark sm:text-[50px]',
        className
      )}
    >
      {children}
    </h2>
  )
}

export default Heading
