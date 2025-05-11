import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import DentalPage from 'components/pages/DentalPage'

export default function Dental() {
    return (
        <div className='relative'>
            <SEOHead title='Dental' />
            <div className='absolute inset-0 overflow-hidden -z-10'>
                <div className="sm:w-[625px] sm:h-[351px] rounded-[244px] w-[172px] h-[97px] bg-amber-200 sm:blur-[150px] blur-[100px] absolute sm:top-[774px] top-[1012px] sm:right-[223px] right-[179px] -z-10"></div>
                <div className="sm:w-[670px] sm:h-[377px] rounded-[262px] w-[162px] h-[159px] bg-fuchsia-300 blur-[150px] absolute sm:top-[375px] top-[993px] sm:-right-[113px] -right-[30px] -z-20"></div>
            </div>
            <Layout>
                <DentalPage />
            </Layout>
        </div>
    )
}
