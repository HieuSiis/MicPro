import React from 'react';

interface OptionCardProps {
    icon: string;
    bgIcon: string;
    name: string;
    description: string;
    className?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, bgIcon, name, description, className = '' }) => {
    return (
        <div className={`flex flex-1 ${className} rounded-lg p-6 gap-[14px]`}>
            <div className={`flex ${bgIcon} w-10 h-10 items-center rounded-full justify-center`}>
                <img src={icon} alt="" />
            </div>
            <div className="flex flex-col space-y-[9px]">
                <h4 className='text-slate-900 font-manrope text-sm font-bold'>{name}</h4>
                <p className='text-gray-500 font-manrope text-xs font-medium'>{description}</p>
            </div>
        </div>
    );
};

export default OptionCard;
