import { StarFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Avatar1, Avatar2, Avatar3 } from 'assets/images/ai-page'

const testimonials = [
  {
    name: 'Sarah Rose',
    role: 'Co- Founder of Web Design',
    avatar: Avatar1,
    content:
      'I love this app!! Very easy to use. The more you use, the more it learns your store’s language and the better the descriptions get. Oh! The new Advertising feature...game changer and time saver',
  },
  {
    name: 'Meghan Scutt',
    role: 'Co- Founder of Vector CX',
    avatar: Avatar2,
    content:
      'This is the first AI writer I’ve used. But I must confess, it surpassed my expectations. I’m confident that it will help me create more content.',
  },
  {
    name: 'Valentina',
    role: 'Founder of Web UI',
    avatar: Avatar3,
    content:
      'This app is like magic. It helped me a lot saving time doing content writing for each of my products and now I am seeing improvements in my online visibility',
  },
  {
    name: 'Sarah Rose',
    role: 'Co- Founder of Web Design',
    avatar: Avatar1,
    content:
      'To be honest, it did an awesome job, and it did it fast. I’m particularly impressed with the title ideas it generated and I was totally blown away by the H2 titles.',
  },
  {
    name: 'Meghan Scutt',
    role: 'Co- Founder of Vector CX',
    avatar: Avatar2,
    content:
      'I own a second-hand fashion store and this app is perfect for small businesses like mine. Not only does it save time, but it also helps with creative blocks! Easy to use as well so would definitely recommend it!',
  },
  {
    name: 'Valentina',
    role: 'Founder of Web UI',
    avatar: Avatar3,
    content:
      'I use this app to create product descriptions and it’s so easy! Makes it so easy and saves me so much time. You can edit the descriptions as well.',
  },
  {
    name: 'Sarah Rose',
    role: 'Co- Founder of Web Design',
    avatar: Avatar1,
    content:
      'To be honest, it did an awesome job, and it did it fast. I’m particularly impressed with the title ideas it generated and I was totally blown away by the H2 titles.',
  },
  {
    name: 'Meghan Scutt',
    role: 'Co- Founder of Vector CX',
    avatar: Avatar2,
    content:
      'I own a second-hand fashion store and this app is perfect for small businesses like mine. Not only does it save time, but it also helps with creative blocks! Easy to use as well so would definitely recommend it!',
  },
  {
    name: 'Valentina',
    role: 'Founder of Web UI',
    avatar: Avatar3,
    content:
      'I use this app to create product descriptions and it’s so easy! Makes it so easy and saves me so much time. You can edit the descriptions as well.',
  },
]

const FeedbackComponent = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // gọi lần đầu khi component mount
    window.addEventListener('resize', handleResize) // lắng nghe thay đổi kích thước

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <section className='sm:main-container mobile-container mt-[70px] rounded-2xl bg-gradientCarousel px-4 pb-[76px] pt-[30px] sm:mt-20 sm:p-[70px]'>
      <h3 className='mx-auto mb-6 max-w-[284px] text-center font-sora text-xl font-semibold text-white sm:mb-[50px] sm:max-w-[693px] sm:text-[34px] sm:font-bold '>
        Loved by marketers and writers like you
      </h3>
      {isMobile ? (
        <Carousel autoplay className='custom-carousel-card-ai'>
          {testimonials.map((item, index) => (
            <div key={index} className='flex'>
              <div className='mx-auto flex h-[231px] max-w-[295px] flex-col justify-between rounded-md bg-white p-5 shadow-sm'>
                <div className='flex gap-1'>
                  {Array(5)
                    .fill(0)
                    .map((itm, idx) => (
                      <div key={idx} className='text-base text-starYellow'>
                        <StarFilled />
                      </div>
                    ))}
                </div>
                <p className='max-w-[242px] font-poppins text-xs font-normal text-dark1'>
                  {item.content}
                </p>
                <div className='mt-6 flex items-center gap-3'>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div className='-space-y-3 font-poppins sm:space-y-0'>
                    <p className='text-sm font-semibold text-dark'>{item.name}</p>
                    <p className='text-xs text-dark1'>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className='overflow-x-auto'>
          <div className='grid w-max grid-cols-3 gap-[30px] pb-2'>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className='flex h-full w-[370px] flex-col justify-between rounded-md bg-white p-[29px] shadow-sm'
              >
                <p className='max-w-[314px] font-poppins text-sm font-normal text-dark1'>
                  {item.content}
                </p>

                <div className='mt-6 flex items-center gap-3'>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div className='font-poppins'>
                    <p className='text-base font-semibold text-dark '>{item.name}</p>
                    <p className='text-sm text-dark1'>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default FeedbackComponent
