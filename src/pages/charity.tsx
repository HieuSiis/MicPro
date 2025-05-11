import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import CharityPage from 'components/pages/CharityPage'

export default function Charity() {
    return (
        <div className='relative'>
            <SEOHead title='Charity' />
            <div className='absolute inset-0 overflow-hidden -z-10'>
                <div className="sm:w-[1362px] w-[492px] sm:h-[766px] h-[492px] sm:rounded-[532px] rounded-[192px] bg-blue-400 sm:blur-[148px] blur-[53px] absolute sm:top-[331px] top-[436px] sm:-left-[753px] -left-[412px]"></div>
                <div className="sm:w-[751px] w-[270px] sm:h-[422px] h-[152px] sm:rounded-[293px] rounded-[105px] bg-violet-600 sm:blur-[148px] blur-[53px] absolute sm:top-[579px] top-[575px] sm:left-[29px] -left-[30px]"></div>
                <div className="sm:w-[625px] w-[255px] sm:h-[351px] h-[126px] sm:rounded-[244px] rounded-[88px] bg-amber-200 sm:blur-[148px] blur-[53px] absolute sm:top-[564px] top-[588px] sm:left-[592px] left-[133px]"></div>
                <div className="sm:w-[670px] w-[242px] sm:h-[377px] h-[158px] sm:rounded-[262px] rounded-[94px] bg-fuchsia-300 sm:blur-[250px] blur-[53px] absolute sm:-top-[172px] top-[498px] sm:left-[1090px] left-[238px]"></div>
            </div>
            <Layout>
                <CharityPage />
            </Layout>
        </div>
    )
}
