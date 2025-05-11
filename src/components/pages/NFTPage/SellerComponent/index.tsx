import { Person1Seller, Person2Seller, Person3Seller, Person4Seller, Person5Seller, Person6Seller, Person7Seller, Person8Seller } from 'assets/images/nft-page';
import Heading from 'components/ui/Heading'
import Image from 'next/image';
import React from 'react'

const users = [
    { id: 1, name: 'Killan James', eth: '3,224', img: Person1Seller, bgImg: 'bg-orange-100' },
    { id: 2, name: 'Killan James', eth: '2,123', img: Person2Seller, bgImg: 'bg-sky-200' },
    { id: 3, name: 'Killan James', eth: '1,254', img: Person3Seller, bgImg: 'bg-pink-100' },
    { id: 4, name: 'Killan James', eth: '2,789', img: Person4Seller, bgImg: 'bg-rose-200' },
    { id: 5, name: 'Killan James', eth: '1,963', img: Person5Seller, bgImg: 'bg-orange-200' },
    { id: 6, name: 'Killan James', eth: '0,285', img: Person6Seller, bgImg: 'bg-pink-100' },
    { id: 7, name: 'Killan James', eth: '0,654', img: Person7Seller, bgImg: 'bg-indigo-50' },
    { id: 8, name: 'Killan James', eth: '1,224', img: Person8Seller, bgImg: 'bg-amber-100' },
];

const SellerComponent = () => {
    return (
        <section className='sm:main-container mobile-container sm:mt-[120px] mt-[60px]'>
            <Heading>Top <span className='text-blue-600'>Seller</span></Heading>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-[30px] gap-4 sm:mt-20 mt-10">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="relative p-4 rounded-xl shadow-md bg-white flex items-center gap-4 w-full overflow-hidden"
                    >
                        <div className={`w-[70px] h-[62px] ${user.bgImg} rounded-lg flex justify-center items-center`}>
                            <Image
                                src={user.img}
                                alt={user.name}
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl font-sora">{user.name}</h3>
                            <p className="text-sm font-poppins font-normal text-slate-500">{user.eth} ETH</p>
                        </div>
                        <span className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-medium font-poppins px-2 py-0.5 rounded-bl-lg ">
                            {String(user.id).padStart(2, '0')}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SellerComponent
