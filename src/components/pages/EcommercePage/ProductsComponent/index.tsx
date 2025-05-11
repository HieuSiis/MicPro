import Image from 'next/image';
import React from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Arrow } from 'assets/icons';
import { TShirtBlack, TShirtBlue, TShirtOrange, TShirtPink } from 'assets/images/ecommerce-page';
import { Carousel } from 'antd';

const productList = [
    { img: TShirtBlack, liked: true },
    { img: TShirtOrange, liked: false },
    { img: TShirtBlue, liked: false },
    { img: TShirtPink, liked: false },
];

const ProductsComponent = () => {
    return (
        <section className='sm:main-container mobile-container bg-white rounded-3xl sm:py-[70px] py-10 sm:px-12 px-[38px]'>
            <div className="flex justify-between items-center mb-12">
                <h1 className='sm:text-[50px] text-[28px] font-bold font-sora leading-tight'>
                    Popular <span className='text-primary'>Products</span>
                </h1>
                <button className='bg-primary sm:flex hidden items-center text-white py-[14px] px-6 rounded-lg text-base font-medium'>
                    See all Products
                    <Image className='ml-[10px]' src={Arrow} alt='arrow' width={24} height={24} />
                </button>
            </div>
            <Carousel autoplay className='sm:hidden custom-carousel-card'>
                {productList.map((product, index) => (
                    <div key={index} className='relative group'>
                        <div className="bg-gray-100 rounded-t-md h-[250px] w-[250px] flex items-center justify-center mb-4 relative ">
                            <Image src={product.img} alt={`t-shirt-${index}`} className="object-contain" />

                            {product.liked ?
                                <div className="absolute top-4 right-4 text-xl text-pink-500">
                                    <HeartFilled />
                                </div>
                                :
                                <div className="absolute top-4 right-4 text-xl text-dark1">
                                    <HeartOutlined />
                                </div>
                            }
                        </div>
                        <div className="flex justify-between items-center px-5 py-[10px] rounded-b-md group-hover:shadow-xl">
                            <div>
                                <h2 className="font-semibold text-lg text-indigo-950 font-poppins">Smart t- Sirt</h2>
                                <div className="font-poppins mt-1">
                                    <span className="font-semibold text-xl">40<small className='text-[13px] font-semibold text-primary'>$</small> </span>
                                    <span className="text-neutral-400 line-through text-[10px] font-normal">100$</span>
                                </div>
                            </div>
                            <button className="bg-primary text-white rounded-[4px] px-5 py-1 font-poppins font-medium text-base">
                                BUY
                            </button>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className='hidden sm:flex justify-between items-center'>
                {productList.map((product, index) => (
                    <div key={index} className='relative group cursor-pointer'>
                        <div className="bg-gray-100 rounded-t-md h-[250px] w-[250px] flex items-center justify-center relative ">
                            <Image src={product.img} alt={`t-shirt-${index}`} className="object-contain" />

                            {product.liked ?
                                <div className="absolute top-4 right-4 text-xl text-pink-500">
                                    <HeartFilled />
                                </div>
                                :
                                <div className="absolute top-4 right-4 text-xl text-dark1">
                                    <HeartOutlined />
                                </div>
                            }
                        </div>
                        <div className="flex justify-between items-center group-hover:px-5 py-[10px] rounded-b-md group-hover:shadow-xl">
                            <div>
                                <h2 className="font-semibold text-lg text-indigo-950 font-poppins mt-[18px]">Smart t- Sirt</h2>
                                <div className="font-poppins mt-1">
                                    <span className="font-semibold text-xl">40<small className='text-[13px] font-semibold text-primary'>$</small> </span>
                                    <span className="text-neutral-400 line-through text-[10px] font-normal">100$</span>
                                </div>
                            </div>
                            <button className="bg-primary text-white rounded-[4px] px-5 py-1 font-poppins font-medium text-base">
                                BUY
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProductsComponent;
