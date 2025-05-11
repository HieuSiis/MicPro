import Logo from 'assets/images/logo.svg'
import IButton from 'assets/icons/Button.svg'

import Link from 'next/link'
import Image from "next/image";
import { StarFilled } from '@ant-design/icons'
import { Dribble, Facebook, GooglePlus, Twitter } from 'assets/icons/social-media-icons';
import { ArrowWhite } from 'assets/icons';

const socialMedia = [Facebook, GooglePlus, Twitter, Dribble]

const menuItems = [
  {
    title: 'Product',
    items: [
      { label: "Careers", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Insights", href: "#" },
      { label: "PCI Compliance", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
    ]
  },
  {
    title: 'For Developers',
    items: [
      { label: "Docs", href: "#" },
      { label: "Knowledge Base", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Security", href: "#" },
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: "About", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Press/News", href: "#" },
      { label: "Careers/Team", href: "#" },
      { label: "Contact Us", href: "#" },
    ]
  }
]
const Footer = () => {
  return (
    <footer className="sm:mt-[120px] mt-[60px] text-sm text-dark1 font-normal font-poppins">
      <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-10 gap-x-[63px] gap-y-[30px] px-4 sm:px-52">
        {/* Logo */}
        <div className="col-span-2 sm:col-span-1">
          <Link href='/' className="font-semibold text-xl flex items-center gap-2.5">
            <Image src={Logo} alt="MicPro" width={36} height={36} />
            <span className='text-dark'>MicPro</span>
          </Link>
        </div>

        {menuItems.map((item, index) => (
          <div key={index} className={index === 2 ? 'col-span-2 sm:col-span-1' : ''}>
            <h4 className="font-semibold text-gray-800 mb-6 text-base">{item.title}</h4>
            <ul className="space-y-3">
              {item.items.map((item, index) => (
                <li key={index}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe */}
        <div className='sm:col-span-1 col-span-2'>
          <h4 className="font-semibold text-gray-800 mb-[30px]">Subscribe</h4>
          <form className="flex items-center mb-7 justify-between max-w-[223px] h-[45px] rounded-lg border border-gray-300">
            <input
              type="email"
              placeholder="Email address"
              className="px-2 text-sm outline-none w-full"
            />
            <button type="submit" className="flex items-center justify-center bg-violet-500 hover:bg-violet-600 w-[60px] h-[45px] rounded-r-lg">
              <img src={ArrowWhite} alt="Submit" className='overflow-hidden' />
            </button>
          </form>

          <p className="text-sm font-medium text-dark">8/10</p>
          <p className="text-sm font-medium text-dark">Overall rating</p>
          <div className="flex gap-1">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="text-starYellow mt-1 text-sm"><StarFilled /></div>
            ))}
            <div className="text-starGray mt-1 text-sm"><StarFilled /></div>
          </div>
          <div className="flex sm:hidden space-x-4 mt-10 mb-[62px]">
            {socialMedia.map((item, index) => (
              <img key={index} src={item} alt="Facebook" />
            ))}
          </div>
        </div>
      </div>

      <div className="sm:block hidden border-t mt-[86px] w-full mx-auto mb-9" />

      <div className='text-center px-4 sm:px-[180px] text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0'>
        <div className="space-x-6">
          <span>Platform</span>
          <span>Products</span>
          <span>Resources</span>
        </div>
        <div className="text-center text-sm">&copy; 2021 Besnik.com | All Rights Reserved</div>
        <div className="sm:flex hidden space-x-4">
          {socialMedia.map((item, index) => (
            <img key={index} src={item} alt="Facebook" />
          ))}
        </div>
      </div>
    </footer>

  );
};

export default Footer;