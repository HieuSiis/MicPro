import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import EducationPage from 'components/pages/EducationPage'

export default function Education() {
    return (
        <div className='relative'>
            <SEOHead title='Education' />
            <div className='absolute inset-0 sm:overflow-x-hidden overflow-hidden -z-10'>
                <div className="sm:w-[610px] sm:h-[463px] sm:rounded-[532px] w-[299px] h-[295px] rounded-[192px] bg-blue-400 sm:blur-[250px] blur-[100px] absolute sm:-top-[134px] sm:-left-[159px] -top-[87px] -left-[222px] -z-20"></div>
                <div className="sm:w-[686px] sm:h-[422px] sm:rounded-[293px] w-[270px] h-[152px] rounded-[105px] bg-violet-600 sm:blur-[200px] blur-[100px] absolute sm:top-[991px] sm:left-[377px] top-[658px] left-[47px] -z-10"></div>
                <div className="sm:w-[854px] sm:h-[352px] sm:rounded-[244px] w-[235px] h-[109px] rounded-[88px] bg-amber-200 sm:blur-[150px] blur-[73px] absolute sm:top-[564px] sm:left-[293px] top-[534px] left-[69px] -z-10"></div>
                <div className="sm:w-[384px] sm:h-[377px] sm:rounded-[262px] w-[242px] h-[158px] rounded-[94px] bg-fuchsia-300 sm:blur-[200px] blur-[100px] absolute sm:-top-[128px] sm:left-[1149px] -top-[27px] left-[206px] -z-20"></div>
            </div>
            <Layout>
                <EducationPage />
            </Layout>
        </div>
    )
}
