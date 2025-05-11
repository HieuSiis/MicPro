import React from 'react'
import { twMerge } from 'tailwind-merge';

const Heading = ({ children, className = "", }: {
    children: React.ReactNode;
    className?: string
}) => {
    return (
        <h2 className={twMerge("sm:text-[50px] text-[28px] text-dark font-bold leading-tight mx-auto text-center font-sora", className)}>
            {children}
        </h2>
    )
}

export default Heading
