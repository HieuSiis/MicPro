import { StarFilled } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowWhite } from 'assets/icons'
import { Dribble, Facebook, GooglePlus, Twitter } from 'assets/icons/social-media-icons'
import Logo from 'assets/images/logo.svg'

const socialMedia = [Facebook, GooglePlus, Twitter, Dribble]

const menuItems = [
  {
    title: 'Product',
    items: [
      { label: 'Careers', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'PCI Compliance', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'For Developers',
    items: [
      { label: 'Docs', href: '#' },
      { label: 'Knowledge Base', href: '#' },
      { label: 'System Status', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'About', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Press/News', href: '#' },
      { label: 'Careers/Team', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
]
const Footer = () => {
  return (
    <footer className='mt-[60px] font-poppins text-sm font-normal text-dark1 lg:mt-[120px]'>
      <div className='grid grid-cols-2 gap-x-[63px] gap-y-[30px] px-4 lg:grid-cols-5 lg:gap-10 lg:px-52'>
        {/* Logo */}
        <div className='col-span-2 lg:col-span-1'>
          <Link href='/' className='flex items-center gap-2.5 text-xl font-semibold'>
            <Image src={Logo} alt='MicPro' width={36} height={36} />
            <span className='text-dark'>MicPro</span>
          </Link>
        </div>

        {menuItems.map((item, index) => (
          <div key={index} className={index === 2 ? 'col-span-2 lg:col-span-1' : ''}>
            <h4 className='mb-6 text-base font-semibold text-gray-800'>{item.title}</h4>
            <ul className='space-y-3'>
              {item.items.map((itm, idx) => (
                <li key={idx}>
                  <Link href={itm.href}>{itm.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe */}
        <div className='col-span-2 lg:col-span-1'>
          <h4 className='mb-[30px] font-semibold text-gray-800'>Subscribe</h4>
          <form className='mb-7 flex h-[45px] max-w-[223px] items-center justify-between rounded-lg border border-gray-300'>
            <input
              type='email'
              placeholder='Email address'
              className='w-full px-2 text-sm outline-none'
            />
            <button
              type='submit'
              className='flex h-[45px] w-[60px] items-center justify-center rounded-r-lg bg-violet-500 hover:bg-violet-600'
            >
              <img src={ArrowWhite} alt='Submit' className='overflow-hidden' />
            </button>
          </form>

          <p className='text-sm font-medium text-dark'>8/10</p>
          <p className='text-sm font-medium text-dark'>Overall rating</p>
          <div className='flex gap-1'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className='mt-1 text-sm text-starYellow'>
                  <StarFilled />
                </div>
              ))}
            <div className='mt-1 text-sm text-starGray'>
              <StarFilled />
            </div>
          </div>
          <div className='mb-[62px] mt-10 flex space-x-4 lg:hidden'>
            {socialMedia.map((item, index) => (
              <img key={index} src={item} alt='Facebook' />
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto mb-9 mt-[86px] hidden w-full border-t lg:block' />

      <div className='mb-10 flex flex-col items-center justify-between space-y-4 px-4 text-center text-xs text-gray-400 lg:flex-row lg:px-[180px] md:space-y-0'>
        <div className='space-x-6'>
          <span>Platform</span>
          <span>Products</span>
          <span>Resources</span>
        </div>
        <div className='text-center text-sm'>&copy; 2021 Besnik.com | All Rights Reserved</div>
        <div className='hidden space-x-4 lg:flex'>
          {socialMedia.map((item, index) => (
            <img key={index} src={item} alt='Facebook' />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
