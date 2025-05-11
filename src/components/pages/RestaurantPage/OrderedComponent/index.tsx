import { ShoppingCartOutlined } from '@ant-design/icons'
import Heading from 'components/ui/Heading'
import FriedChicken from 'assets/images/restaurant-page/fried-chicken.png'
import React from 'react'
import Image from 'next/image';
import { Arrow } from 'assets/icons';

const foodList = [
    {
        id: 1,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
    {
        id: 2,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
    {
        id: 3,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
    {
        id: 4,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
    {
        id: 5,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
    {
        id: 6,
        name: 'Chicken Curry',
        address: '1234 elgin st. Celina, newyork city 7894',
        price: 88,
        image: FriedChicken,
    },
];

const OrderedComponent = () => {
    return (
        <section className='main-container sm:mt-[120px] mt-[60px]'>
            <Heading className='max-w-[552px] sm:mb-[77px] mb-10'>Most Ordered Food in <span className='text-primary'>New York</span></Heading>
            <div className='bg-gradientCream bg-opacity-60 sm:p-[30px] p-[10px] rounded-2xl'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-[30px] sm:gap-y-5 gap-y-3'>
                    {foodList.map((food) => (

                        <div key={food.id} className='flex justify-between   bg-white rounded-xl sm:p-5 py-3 px-4'>
                            <div className='flex flex-col sm:flex-row sm:items-center items-start'>
                                <Image
                                    src={food.image}
                                    alt={food.name}
                                    className='sm:w-[120px] sm:h-[120px] w-[67px] h-[67px] rounded-lg bg-gradientCream sm:mb-0 mb-[10px]'
                                />
                                <div className='flex-1 sm:px-4 px-0'>
                                    <h3 className='sm:font-bold font-semibold sm:text-[28px] text-xl font-sora mb-3'>{food.name}</h3>
                                    <p className='text-[12px] sm:max-w-[229px] max-w-[180px] font-poppins font-normal text-dark1 sm:mb-4 mb-0'>{food.address}</p>
                                    <p className='hidden sm:block text-blue-600 font-bold text-[28px] font-sora'>${food.price}</p>
                                </div>
                                <div className='sm:block hidden'>
                                    <p className='sm:hidden block text-blue-600 font-bold text-[28px] font-sora'>${food.price}</p>
                                    <button className='bg-blue-600 sm:w-[60px] sm:h-[60px] w-11 h-11 rounded-md text-white hover:bg-blue-700 ml-[59px]'>
                                        <ShoppingCartOutlined className='sm:text-[32px] text-5' />
                                    </button>
                                </div>
                            </div>

                            <div className=''>
                                <div className='flex flex-col gap-[49px] sm:hidden mt-4 ' >
                                    <p className='sm:hidden block text-blue-600 font-bold text-[28px] font-sora'>${food.price}</p>
                                    <div className='ml-auto'>
                                        <button className='bg-blue-600 sm:w-[60px] sm:h-[60px] w-11 h-11 rounded-md text-white hover:bg-blue-700'>
                                            <ShoppingCartOutlined className='sm:text-[32px] text-5' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=' flex justify-center sm:mt-[50px] mt-5 mb-5'>
                    <button className=' bg-primary flex justify-center text-white py-[18px] px-11 rounded-lg'>
                        VIEW ALL FOOD <Image className='ml-[10px]' src={Arrow} alt='' width={24} height={24}></Image>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OrderedComponent
