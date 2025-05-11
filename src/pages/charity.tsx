import Layout from 'components/layout/Layout'
import CharityPage from 'components/pages/CharityPage'
import SEOHead from 'components/seo'

const Charity = () => {
  return (
    <div className='relative'>
      <SEOHead title='Charity' />
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -left-[412px] top-[436px] h-[492px] w-[492px] rounded-[192px] bg-blue-400 blur-[53px] sm:-left-[753px] sm:top-[331px] sm:h-[766px] sm:w-[1362px] sm:rounded-[532px] sm:blur-[148px]' />
        <div className='absolute -left-[30px] top-[575px] h-[152px] w-[270px] rounded-[105px] bg-violet-600 blur-[53px] sm:left-[29px] sm:top-[579px] sm:h-[422px] sm:w-[751px] sm:rounded-[293px] sm:blur-[148px]' />
        <div className='absolute left-[133px] top-[588px] h-[126px] w-[255px] rounded-[88px] bg-amber-200 blur-[53px] sm:left-[592px] sm:top-[564px] sm:h-[351px] sm:w-[625px] sm:rounded-[244px] sm:blur-[148px]' />
        <div className='absolute left-[238px] top-[498px] h-[158px] w-[242px] rounded-[94px] bg-fuchsia-300 blur-[53px] sm:-top-[172px] sm:left-[1090px] sm:h-[377px] sm:w-[670px] sm:rounded-[262px] sm:blur-[250px]' />
      </div>
      <Layout>
        <CharityPage />
      </Layout>
    </div>
  )
}

export default Charity
