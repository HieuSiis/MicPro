import { ImgBlog1, ImgBlog2, ImgBlog3 } from 'assets/images/agency-page'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

const blogItems = [
    {
        category: "Design Blog",
        time: "Jul 12, 2022",
        title: "15 Important Usability Principles for User Interface Design",
        image: ImgBlog1
    },
    {
        category: "Design Blog",
        time: "Jul 12, 2022",
        title: "15 Important Usability Principles for User Interface Design",
        image: ImgBlog2
    },
    {
        category: "Design Blog",
        time: "Jul 12, 2022",
        title: "15 Important Usability Principles for User Interface Design",
        image: ImgBlog3
    }

]

const BlogComponent = () => {
    return (
        <section className='sm:pb-[112px] pb-[60px]'>
            <div className="sm:main-container mobile-container">
                <Heading className='sm:mb-[58px] mb-10'>OUR Design <span className='text-primary'>BLOG</span></Heading>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-7">
                    {blogItems.map((item, index) => (
                        <div key={index}>
                            <div className='aspect-video relative w-full mb-7'>
                                <Image src={item.image} alt='' fill className='w-full h-full object-cover rounded-lg'></Image>
                            </div>
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='inline-block py-1.5 px-2 text-sm font-medium bg-orangeFF rounded'>{item.category}</span>
                                <span className='text-dark1 text-xs'>{item.time}</span>
                            </div>
                            <h3 className='font-medium text-[16px] font-poppins'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default BlogComponent
