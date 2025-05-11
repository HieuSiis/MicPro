import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

import Img from 'assets/images/charity-page/img-breathe.png'

const stats = [
    { value: "254K", label: "Collaborators", color: "text-blue-600" },
    { value: "488K", label: "Companies", color: "text-rose-400" },
    { value: "157K", label: "Human Impacted", color: "text-sky-400" },
    { value: "325K", label: "Assisted Communities", color: "text-orange-400" },
];

const BreatheComponent = () => {
    // Chia mang thanh tung cap
    const groupedStats = [];
    for (let i = 0; i < stats.length; i += 2) {
        // slice() là ham cat mang
        groupedStats.push(stats.slice(i, i + 2));
    }

    return (
        <section className=' sm:py-[120px] sm:mt-[100px] py-[60px] mt-[60px] bg-white w-full'>
            <Heading className='sm:max-w-[757px] max-w-[278px]'>
                We're here to help our Earth <span className='text-primary'>breathe</span> again.
            </Heading>
            <p className='text-dark1 text-lg font-normal font-dmSans mt-6 sm:max-w-[555px] max-w-[311px] mx-auto text-center'>
                Voluptatem accusantium doloremque laud totam rem aperiam, eaque ipsa quae ab illoaperiam, eaque ipsa quae.
            </p>

            <div className="flex sm:flex-row flex-col justify-center sm:mt-11 mt-10 sm:gap-[120px] gap-10 px-6">
                <Image src={Img} alt='' className='sm:w-[566px] sm:h-[302px] w-[327px] h-[302px] object-cover' />
                <div className="max-w-lg flex">
                    <table className="table-fixed w-full border-collapse">
                        <tbody>
                            {groupedStats.map((row, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex === 0 ? "border-b border-gray-300" : ""}>
                                    {row.map((stat, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`${colIndex === 0 ? "border-r border-gray-300" : ""} p-6`}
                                        >
                                            <p className={`text-[34px] font-sora font-bold ${stat.color}`}>{stat.value}</p>
                                            <p className="text-dark1 font-poppins text-lg font-normal mt-3">{stat.label}</p>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BreatheComponent;
