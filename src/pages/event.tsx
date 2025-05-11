import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import EventPage from 'components/pages/EventPage'

export default function Event() {
    return (
        <div className='relative'>
            <SEOHead title='Event' />
            <div className='absolute inset-0 overflow-hidden  -z-10'>
                <div className="sm:w-[930px] sm:h-[523px] rounded-[532px] w-[525px] h-[295px] bg-blue-400 blur-[150px] absolute sm:-right-[516px] -right-[243px] sm:top-[279px] top-[737px] -z-20"></div>
                <div className="sm:w-[751px] sm:h-[422px] rounded-[293px] w-[525px] h-[238px] bg-violet-600 blur-[150px] absolute sm:top-[413px] top-[813px] sm:-right-[549px] -right-[261px] -z-10"></div>
                <div className="sm:w-[693px] sm:h-[390px] rounded-[244px] w-[172px] h-[97px] bg-amber-200 sm:blur-[150px] blur-[100px] absolute sm:top-[189px] top-[70px] sm:left-[145px] left-[29px] -z-10"></div>
                <div className="sm:w-[670px] sm:h-[377px] rounded-[262px] w-[162px] h-[159px] bg-fuchsia-300 sm:blur-[150px] blur-[100px] absolute sm:-top-[25px] -top-[53] sm:-left-[140px] -left-[64px] -z-20"></div>
            </div>
            <Layout>
                <EventPage />
            </Layout>
        </div>
    )
}
