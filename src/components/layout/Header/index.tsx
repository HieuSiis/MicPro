import { CloseOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Dropdown from 'assets/icons/Dropdown.svg'
import {
  IAgency,
  IAi,
  ICharity,
  IDental,
  IEcommerce,
  IEducation,
  IEvent,
  INft,
  IRestaurant,
  ISport,
} from 'assets/icons/header-menu'
import Logo from 'assets/images/logo.svg'

const menuLinks = [
  { name: 'Agency', icon: IAgency, path: '/' },
  { name: 'Charity', icon: ICharity, path: '/charity' },
  { name: 'Restaurant', icon: IRestaurant, path: '/restaurant' },
  { name: 'Sports', icon: ISport, path: '/sport' },
  { name: 'Ecommerce', icon: IEcommerce, path: '/ecommerce' },
  { name: 'Education', icon: IEducation, path: '/education' },
  { name: 'AI', icon: IAi, path: '/ai' },
  { name: 'NFT', icon: INft, path: '/nft' },
  { name: 'Dental', icon: IDental, path: '/dental' },
  { name: 'Event', icon: IEvent, path: '/event' },
]

const Header = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Clean up khi component bị unmount
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  return (
    <header className='z-10 mb-11 pt-[30px]'>
      <div className='l-container flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2.5 font-sora text-lg font-semibold sm:text-xl'
        >
          <Image src={Logo} alt='MicPro' width={36} height={36} />
          <span>MicPro</span>
        </Link>

        {/* Menu icon - chỉ hiện trên mobile */}
        <button
          type='button'
          className='lg:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M20 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H20C20.6 13 21 12.6 21 12C21 11.4 20.6 11 20 11ZM4 8H20C20.6 8 21 7.6 21 7C21 6.4 20.6 6 20 6H4C3.4 6 3 6.4 3 7C3 7.6 3.4 8 4 8ZM20 16H4C3.4 16 3 16.4 3 17C3 17.6 3.4 18 4 18H20C20.6 18 21 17.6 21 17C21 16.4 20.6 16 20 16Z'
              fill='#1F2326'
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className='hidden items-center justify-center gap-3 sm:flex'>
          {menuLinks.map((item) => (
            <li key={item.name} className='relative rounded-full px-3 py-3 hover:bg-blue-200'>
              <Link href={item.path} className='flex items-center gap-2 text-sm font-medium'>
                {item.name}
                {(item.name === 'Services' ||
                  item.name === 'Expertise' ||
                  item.name === 'Company') && (
                  <Image src={Dropdown} alt='Dropdown' width={24} height={24} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          type='button'
          className='hidden rounded-full bg-blue-600 px-[50px] py-[18px] font-medium leading-normal text-white sm:block'
        >
          Start a Project
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          {/* Overlay background */}
          <div className='fixed inset-0 z-40 bg-black bg-opacity-40' />

          <div className='fixed right-0 top-0 z-50 h-full w-3/4 rounded-l-3xl bg-white p-2 shadow-lg transition-all duration-500 lg:hidden'>
            <ul className='flex flex-col items-start gap-4 px-4 py-4'>
              <CloseOutlined
                onClick={() => setMenuOpen(false)}
                className='mb-5 text-xl text-red-400'
              />

              {menuLinks.map((item) => {
                const isActive = router.pathname === item.path
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 rounded-md px-3 py-1 text-base transition-colors duration-200 ${
                        isActive ? 'bg-blue-100 font-semibold text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <Image src={item.icon} alt='' width={20} height={20} />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
              <button
                type='button'
                className='z-10 mt-10 w-full rounded-full bg-blue-600 px-5 py-3 font-medium text-white'
              >
                Start a Project
              </button>
            </ul>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
