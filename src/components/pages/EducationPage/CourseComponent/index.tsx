import Heading from 'components/ui/Heading'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { Img1, Img2, Img3, Img4 } from 'assets/images/education-page'
import { IGraduate } from 'assets/icons'
import { Carousel } from 'antd'

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
        <section className='main-container sm:rounded-2xl sm:py-[60px] py-10 px-12 sm:mt-[52px] mt-8 bg-white'>
            <Heading>Browse Our Best <span className='text-primary'>Courses</span></Heading>
            <Carousel autoplay className='sm:mb-10 mb-[30px] custom-carousel-card'>
                {groupedCourses.map((group, idx) => (
                    <div key={idx} className="grid sm:grid-cols-4 grid-cols-1 justify-items-center sm:mt-10 mt-5">
                        {group.map((item, index) => (
                            <div key={index} className="flex flex-col p-[14px] border border-zinc-100 rounded-xl ">
                                <Image className='rounded-lg' src={item.img} alt=''></Image>
                                <h3 className='text-base max-w-[211px] font-poppins font-medium py-[14px]'>{item.name}</h3>
                                <div className="flex items-center gap-[3px]">
                                    <img src={IGraduate} alt="" />
                                    <span className='text-dark1 text-[13px] font-medium font-inter w-full'>{item.lesson} Lessons</span>
                                    <div className="flex gap-1">
                                        {Array(5).fill(0).map((item, index) => (
                                            <div key={index} className="text-starYellow text-xs"><StarFilled /></div>
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
