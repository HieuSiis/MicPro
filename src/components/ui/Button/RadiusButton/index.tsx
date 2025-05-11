import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<'button'>
const RadiusButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      type='button'
      className={twMerge(
        'flex items-center justify-center gap-2.5 rounded-full px-[50px] py-[18px] font-poppins text-base font-medium',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default RadiusButton
