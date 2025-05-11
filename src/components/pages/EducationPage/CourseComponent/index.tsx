import { StarFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { IGraduate } from 'assets/icons'
import { Img1, Img2, Img3, Img4 } from 'assets/images/education-page'
import Heading from 'components/ui/Heading'

const Courses = [
  { img: Img1, name: 'Teach Your Kids Math In The Simple Way', lesson: 42 },
  { img: Img2, name: 'Learn Coding in the most Easiest Way', lesson: 22 },
  { img: Img3, name: 'Learn Geography with Fun & Exciting Way', lesson: 24 },
  { img: Img4, name: 'Kid’s English Native Spoken  & Grammer ', lesson: 15 },
]

const chunkArray = (arr: any[], size: number) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

const CourseComponent = () => {
  const [groupedCourses, setGroupedCourses] = useState<any[][]>([])

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640
      const chunkSize = isMobile ? 1 : 4
      setGroupedCourses(chunkArray(Courses, chunkSize))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <section className='main-container mt-8 bg-white px-12 py-10 sm:mt-[52px] sm:rounded-2xl sm:py-[60px]'>
      <Heading>
        Browse Our Best <span className='text-primary'>Courses</span>
      </Heading>
      <Carousel autoplay className='custom-carousel-card mb-[30px] sm:mb-10'>
        {groupedCourses.map((group, idx) => (
          <div
            key={idx}
            className='mt-5 grid grid-cols-1 justify-items-center sm:mt-10 sm:grid-cols-4'
          >
            {group.map((item, index) => (
              <div
                key={index}
                className='flex flex-col rounded-xl border border-zinc-100 p-[14px] '
              >
                <Image className='rounded-lg' src={item.img} alt='' />
                <h3 className='max-w-[211px] py-[14px] font-poppins text-base font-medium'>
                  {item.name}
                </h3>
                <div className='flex items-center gap-[3px]'>
                  <img src={IGraduate} alt='' />
                  <span className='w-full font-inter text-[13px] font-medium text-dark1'>
                    {item.lesson} Lessons
                  </span>
                  <div className='flex gap-1'>
                    {Array(5)
                      .fill(0)
                      .map((item, index) => (
                        <div key={index} className='text-xs text-starYellow'>
                          <StarFilled />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default CourseComponent
