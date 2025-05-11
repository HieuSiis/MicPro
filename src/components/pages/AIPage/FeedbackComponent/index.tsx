import { StarFilled } from '@ant-design/icons';
import { Carousel } from 'antd';
import { Avatar1, Avatar2, Avatar3 } from 'assets/images/ai-page';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        name: "Sarah Rose",
        role: "Co- Founder of Web Design",
        avatar: Avatar1,
        content:
            "I love this app!! Very easy to use. The more you use, the more it learns your store’s language and the better the descriptions get. Oh! The new Advertising feature...game changer and time saver",
    },
    {
        name: "Meghan Scutt",
        role: "Co- Founder of Vector CX",
        avatar: Avatar2,
        content:
            "This is the first AI writer I’ve used. But I must confess, it surpassed my expectations. I’m confident that it will help me create more content.",
    },
    {
        name: "Valentina",
        role: "Founder of Web UI",
        avatar: Avatar3,
        content:
            "This app is like magic. It helped me a lot saving time doing content writing for each of my products and now I am seeing improvements in my online visibility",
    },
    {
        name: "Sarah Rose",
        role: "Co- Founder of Web Design",
        avatar: Avatar1,
        content:
            "To be honest, it did an awesome job, and it did it fast. I’m particularly impressed with the title ideas it generated and I was totally blown away by the H2 titles.",
    },
    {
        name: "Meghan Scutt",
        role: "Co- Founder of Vector CX",
        avatar: Avatar2,
        content:
            "I own a second-hand fashion store and this app is perfect for small businesses like mine. Not only does it save time, but it also helps with creative blocks! Easy to use as well so would definitely recommend it!",
    },
    {
        name: "Valentina",
        role: "Founder of Web UI",
        avatar: Avatar3,
        content:
            "I use this app to create product descriptions and it’s so easy! Makes it so easy and saves me so much time. You can edit the descriptions as well.",
    },
    {
        name: "Sarah Rose",
        role: "Co- Founder of Web Design",
        avatar: Avatar1,
        content:
            "To be honest, it did an awesome job, and it did it fast. I’m particularly impressed with the title ideas it generated and I was totally blown away by the H2 titles.",
    },
    {
        name: "Meghan Scutt",
        role: "Co- Founder of Vector CX",
        avatar: Avatar2,
        content:
            "I own a second-hand fashion store and this app is perfect for small businesses like mine. Not only does it save time, but it also helps with creative blocks! Easy to use as well so would definitely recommend it!",
    },
    {
        name: "Valentina",
        role: "Founder of Web UI",
        avatar: Avatar3,
        content:
            "I use this app to create product descriptions and it’s so easy! Makes it so easy and saves me so much time. You can edit the descriptions as well.",
    },
];

const FeedbackComponent = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // gọi lần đầu khi component mount
        window.addEventListener('resize', handleResize); // lắng nghe thay đổi kích thước

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section className="sm:main-container mobile-container bg-gradientCarousel sm:mt-20 mt-[70px] sm:p-[70px] pt-[30px] px-4 pb-[76px] rounded-2xl">
            <h3 className="text-white sm:text-[34px] text-xl font-sora sm:font-bold font-semibold sm:mb-[50px] mb-6 mx-auto text-center sm:max-w-[693px] max-w-[284px] ">
                Loved by marketers and writers like you
            </h3>
            {isMobile ? (
                <Carousel autoplay className='custom-carousel-card-ai'>
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex">
                            <div className="bg-white rounded-md shadow-sm p-5 flex flex-col justify-between max-w-[295px] mx-auto h-[231px]">
                                <div className="flex gap-1">
                                    {Array(5).fill(0).map((item, index) => (
                                        <div key={index} className="text-starYellow text-base"><StarFilled /></div>
                                    ))}
                                </div>
                                <p className="text-dark1 max-w-[242px] text-xs font-poppins font-normal">{item.content}</p>
                                <div className="flex items-center gap-3 mt-6">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="font-poppins sm:space-y-0 -space-y-3">
                                        <p className="font-semibold text-dark text-sm">{item.name}</p>
                                        <p className="text-xs text-dark1">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className='overflow-x-auto'>
                    <div className="grid grid-cols-3 gap-[30px] w-max pb-2">
                        {testimonials.map((item, index) => (
                            <div key={index} className="bg-white rounded-md shadow-sm p-[29px] flex flex-col justify-between w-[370px] h-full">
                                <p className="text-dark1 max-w-[314px] text-sm font-poppins font-normal">
                                    {item.content}
                                </p>

                                <div className="flex items-center gap-3 mt-6">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className='font-poppins'>
                                        <p className="font-semibold text-dark text-base ">{item.name}</p>
                                        <p className="text-sm text-dark1">{item.role}</p>
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
