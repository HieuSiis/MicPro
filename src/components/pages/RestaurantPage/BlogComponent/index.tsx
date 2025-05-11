import Heading from 'components/ui/Heading';
import React from 'react'
import Image from 'next/image';
import { Arrow } from 'assets/icons';
import { GrillBeef, NamPrik, PennePasta } from 'assets/images/restaurant-page';

const blogPosts = [
    {
        id: 1,
        title: "How to make a rice bowl?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...",
        image: GrillBeef,
    },
    {
        id: 2,
        title: "Get the pizza of the week.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...",
        image: NamPrik,
    },
    {
        id: 3,
        title: "Make your burger like this.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...",
        image: PennePasta,
    },
];

const BlogComponent = () => {
    return (
        <section className="bg-grayF1 sm:mt-[120px] mt-[60px]">
            <div className="w-full flex sm:flex-row flex-col sm:px-[135px] px-6 sm:py-[115px] py-10 justify-center sm:space-x-[140px]">
                {/* Left content */}
                <div className="">
                    <Heading className="sm:text-left sm:mb-[30px] mb-[14px]">
                        Our Food <span className="text-blue-600">Blog</span>
                    </Heading>
                    <p className='sm:text-left text-center mx-auto text-dark1 sm:max-w-[411px] max-w-[289px] text-base font-normal font-poppins'>Eat the food you dream about at affordable prices. No need to come to us just call is.</p>
                    <button className=' bg-primary sm:mx-0 mx-auto flex justify-center text-white py-[18px] px-11 rounded-lg sm:mt-11 mt-6'>
                        Learn More <Image className='ml-[10px]' src={Arrow} alt='' width={24} height={24}></Image>
                    </button>
                </div>

                {/* Right content - Blog list */}
                <div className="flex flex-col sm:mt-0 mt-11">
                    {blogPosts.map((post, index) => (
                        <div>
                            <div key={post.id} className="flex  sm:space-x-[50px] space-x-[13px]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className='sm:w-[230px] sm:h-[160px] w-[134px] h-[118px] rounded-xl '
                                />
                                <div>
                                    <p className="text-sm text-dark1 font-normal font-poppins">Blog 0{index + 1}</p>
                                    <h3 className="sm:text-xl text-sm font-semibold text-gray-800 font-sora sm:mt-2 mt-[6px] sm:mb-4 mb-[10px]">{post.title}</h3>
                                    <p className="text-gray-500 sm:text-base text-xs sm:max-w-[334px] max-w-[178px] font-normal font-poppins">{post.description}</p>
                                </div>
                            </div>
                            {index !== blogPosts.length - 1 && (
                                <div className="border border-grayE2 my-[35px]"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogComponent
