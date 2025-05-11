import Image from 'next/image';
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

import Arrow from 'assets/icons/Arrow.svg';

type ButtonProps = {
    children: React.ReactNode
    className?: string;
} & ComponentProps<"button">
const ArrowButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (
        <button className={twMerge("flex items-center text-lg bg-white text-dark p-4 rounded-lg font-semibold", className)} {...rest}>
            {children}
            <span className="ml-3 bg-blue-600 text-white p-1 rounded-full">
                <Image src={Arrow} alt='' width={18} height={18} />
            </span>
        </button>
    )
}

export default ArrowButton
