import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import SportPage from 'components/pages/SportPage'

export default function Sport() {
    return (
        <div className='relative'>
            <SEOHead title='Sport' />
            <div className='absolute inset-0 -z-10 overflow-hidden'>
                <div className="sm:w-[670px] sm:h-[377px] sm:rounded-[262px] w-[242px] h-[158px] rounded-[95px] bg-fuchsia-300 sm:blur-[148px] blur-[53px] absolute sm:top-[375px] sm:left-[882px] top-[498px] left-[238px]"></div>
                <div className="sm:w-[1362px] sm:h-[766px] sm:rounded-[532px] w-[492px] h-[404px] rounded-[192px] bg-blue-400 sm:blur-[148px] blur-[53px]  absolute  sm:top-[281px] sm:-left-[753px] top-[436px] -left-[412px]"></div>
                <div className="sm:w-[751px] sm:h-[422px] sm:rounded-[293px] w-[271px] h-[152px] rounded-[105px] bg-violet-600 sm:blur-[148px] blur-[53px] absolute sm:top-[529px] sm:left-[29px] top-[575px] -left-[30px]"></div>
                <div className="sm:w-[625px] sm:h-[351px] sm:rounded-[244px] w-[226px] h-[127px] rounded-[88px] bg-amber-200 sm:blur-[148px] blur-[53px] absolute sm:top-[564px] sm:left-[592px] top-[588px] left-[133px]"></div>
            </div>
            <Layout>
                <SportPage />
            </Layout>
        </div>
    )
}
