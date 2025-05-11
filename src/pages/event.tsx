import Layout from 'components/layout/Layout'
import EventPage from 'components/pages/EventPage'
import SEOHead from 'components/seo'

export default function Event() {
  return (
    <div className='relative'>
      <SEOHead title='Event' />
      <div className='absolute inset-0 -z-10  overflow-hidden'>
        <div className='absolute -right-[243px] top-[737px] -z-20 h-[295px] w-[525px] rounded-[532px] bg-blue-400 blur-[150px] sm:-right-[516px] sm:top-[279px] sm:h-[523px] sm:w-[930px]' />
        <div className='absolute -right-[261px] top-[813px] -z-10 h-[238px] w-[525px] rounded-[293px] bg-violet-600 blur-[150px] sm:-right-[549px] sm:top-[413px] sm:h-[422px] sm:w-[751px]' />
        <div className='absolute left-[29px] top-[70px] -z-10 h-[97px] w-[172px] rounded-[244px] bg-amber-200 blur-[100px] sm:left-[145px] sm:top-[189px] sm:h-[390px] sm:w-[693px] sm:blur-[150px]' />
        <div className='absolute -left-[64px] -top-[53] -z-20 h-[159px] w-[162px] rounded-[262px] bg-fuchsia-300 blur-[100px] sm:-left-[140px] sm:-top-[25px] sm:h-[377px] sm:w-[670px] sm:blur-[150px]' />
      </div>
      <Layout>
        <EventPage />
      </Layout>
    </div>
  )
}
