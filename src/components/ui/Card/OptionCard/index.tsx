import React from 'react'

interface OptionCardProps {
  icon: string
  bgIcon: string
  name: string
  description: string
  className?: string
}

const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  bgIcon,
  name,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-1 ${className} gap-[14px] rounded-lg p-6`}>
      <div className={`flex ${bgIcon} h-10 w-10 items-center justify-center rounded-full`}>
        <img src={icon} alt='' />
      </div>
      <div className='flex flex-col space-y-[9px]'>
        <h4 className='font-manrope text-sm font-bold text-slate-900'>{name}</h4>
        <p className='font-manrope text-xs font-medium text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default OptionCard
