import Image from 'next/image'
import React from 'react'

import Img from 'assets/images/charity-page/img-breathe.png'
import Heading from 'components/ui/Heading'

const stats = [
  { value: '254K', label: 'Collaborators', color: 'text-blue-600' },
  { value: '488K', label: 'Companies', color: 'text-rose-400' },
  { value: '157K', label: 'Human Impacted', color: 'text-sky-400' },
  { value: '325K', label: 'Assisted Communities', color: 'text-orange-400' },
]

const BreatheComponent = () => {
  // Chia mang thanh tung cap
  const groupedStats = []
  for (let i = 0; i < stats.length; i += 2) {
    // slice() là ham cat mang
    groupedStats.push(stats.slice(i, i + 2))
  }

  return (
    <section className=' mt-[60px] w-full bg-white py-[60px] sm:mt-[100px] sm:py-[120px]'>
      <Heading className='max-w-[278px] sm:max-w-[757px]'>
        We're here to help our Earth <span className='text-primary'>breathe</span> again.
      </Heading>
      <p className='mx-auto mt-6 max-w-[311px] text-center font-dmSans text-lg font-normal text-dark1 sm:max-w-[555px]'>
        Voluptatem accusantium doloremque laud totam rem aperiam, eaque ipsa quae ab illoaperiam,
        eaque ipsa quae.
      </p>

      <div className='mt-10 flex flex-col justify-center gap-10 px-6 sm:mt-11 sm:flex-row sm:gap-[120px]'>
        <Image
          src={Img}
          alt=''
          className='h-[302px] w-[327px] object-cover sm:h-[302px] sm:w-[566px]'
        />
        <div className='flex max-w-lg'>
          <table className='w-full table-fixed border-collapse'>
            <tbody>
              {groupedStats.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex === 0 ? 'border-b border-gray-300' : ''}>
                  {row.map((stat, colIndex) => (
                    <td
                      key={colIndex}
                      className={`${colIndex === 0 ? 'border-r border-gray-300' : ''} p-6`}
                    >
                      <p className={`font-sora text-[34px] font-bold ${stat.color}`}>
                        {stat.value}
                      </p>
                      <p className='mt-3 font-poppins text-lg font-normal text-dark1'>
                        {stat.label}
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default BreatheComponent
