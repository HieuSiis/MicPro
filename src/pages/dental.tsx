import Layout from 'components/layout/Layout'
import DentalPage from 'components/pages/DentalPage'
import SEOHead from 'components/seo'

export default function Dental() {
  return (
    <div className='relative'>
      <SEOHead title='Dental' />
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute right-[179px] top-[1012px] -z-10 h-[97px] w-[172px] rounded-[244px] bg-amber-200 blur-[100px] sm:right-[223px] sm:top-[774px] sm:h-[351px] sm:w-[625px] sm:blur-[150px]' />
        <div className='absolute -right-[30px] top-[993px] -z-20 h-[159px] w-[162px] rounded-[262px] bg-fuchsia-300 blur-[150px] sm:-right-[113px] sm:top-[375px] sm:h-[377px] sm:w-[670px]' />
      </div>
      <Layout>
        <DentalPage />
      </Layout>
    </div>
  )
}
