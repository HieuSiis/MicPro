import Layout from 'components/layout/Layout'
import EducationPage from 'components/pages/EducationPage'
import SEOHead from 'components/seo'

const Education = () => {
  return (
    <div className='relative'>
      <SEOHead title='Education' />
      <div className='absolute inset-0 -z-10 overflow-hidden sm:overflow-x-hidden'>
        <div className='absolute -left-[222px] -top-[87px] -z-20 h-[295px] w-[299px] rounded-[192px] bg-blue-400 blur-[100px] sm:-left-[159px] sm:-top-[134px] sm:h-[463px] sm:w-[610px] sm:rounded-[532px] sm:blur-[250px]' />
        <div className='absolute left-[47px] top-[658px] -z-10 h-[152px] w-[270px] rounded-[105px] bg-violet-600 blur-[100px] sm:left-[377px] sm:top-[991px] sm:h-[422px] sm:w-[686px] sm:rounded-[293px] sm:blur-[200px]' />
        <div className='absolute left-[69px] top-[534px] -z-10 h-[109px] w-[235px] rounded-[88px] bg-amber-200 blur-[73px] sm:left-[293px] sm:top-[564px] sm:h-[352px] sm:w-[854px] sm:rounded-[244px] sm:blur-[150px]' />
        <div className='absolute -top-[27px] left-[206px] -z-20 h-[158px] w-[242px] rounded-[94px] bg-fuchsia-300 blur-[100px] sm:-top-[128px] sm:left-[1149px] sm:h-[377px] sm:w-[384px] sm:rounded-[262px] sm:blur-[200px]' />
      </div>
      <Layout>
        <EducationPage />
      </Layout>
    </div>
  )
}
export default Education
