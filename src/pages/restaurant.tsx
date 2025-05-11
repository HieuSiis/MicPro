import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import RestaurantPage from 'components/pages/RestaurantPage'

export default function Restaurant() {
    return (
        <div className='relative'>
            <SEOHead title='Restaurant' />
            <div className='absolute inset-0 overflow-x-hidden -z-10'>
                <div className="sm:w-[1362px] sm:h-[766px] sm:rounded-[532px] bg-blue-400 sm:blur-[148px] w-[492px] h-[404px] rounded-[192px] blur-[53px] absolute sm:top-[281px] sm:-left-[753px] top-[436px] -left-[412px] "></div>
                <div className="sm:w-[751px] sm:h-[422px] sm:rounded-[293px] bg-violet-600 sm:blur-[148px] w-[270px] h-[152px] rounded-[105px] blur-[53px] absolute sm:top-[529px] sm:left-[29px] top-[575px] -left-[30px]"></div>
                <div className="sm:w-[625px] sm:h-[351px] sm;rounded-[244px] bg-amber-200 sm:blur-[148px] w-[225px] h-[126px] rounded-[88px] blur-[53px] absolute sm:top-[564px] sm:left-[592px] top-[588px] left-[133px] "></div>
                <div className="sm:w-[670px] sm:h-[377px] sm:rounded-[262px] bg-fuchsia-300 sm:blur-[148px] w-[242px] h-[158px] rounded-[94px] blur-[53px] absolute sm:top-[375px] sm:left-[882px] top-[498px] left-[238px] "></div>
            </div>
            <Layout>
                <RestaurantPage />
            </Layout>
        </div>
    )
}
