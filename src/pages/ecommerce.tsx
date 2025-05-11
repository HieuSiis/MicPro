import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import EcommercePage from 'components/pages/EcommercePage'

export default function Ecommerce() {
    return (
        <div className='relative'>
            <SEOHead title='Ecommerce' />
            <div className='absolute inset-0 overflow-hidden -z-10'>
                <div className="sm:w-[1362px] sm:h-[766px] sm:rounded-[532px] w-[492px] h-[404px] rounded-[192px] bg-blue-400 sm:blur-[150px] blur-[53px] absolute sm:top-[281px] sm:-left-[753px] top-[196px] -left-[412px] -z-20"></div>
                <div className="sm:w-[751px] sm:h-[422px] sm:rounded-[293px] w-[271px] h-[152px] rounded-[106px] bg-violet-600 sm:blur-[150px] blur-[53px] absolute sm:top-[529px] sm:left-[29px] top-[335px] -left-[30px] -z-10"></div>
                <div className="sm:w-[625px] sm:h-[351px] sm:rounded-[244px] w-[226px] h-[127px] rounded-[88px] bg-amber-200 sm:blur-[150px] blur-[53px] absolute sm:top-[564px] sm:left-[592px] top-[348px] left-[133px] -z-10"></div>
                <div className="sm:w-[670px] sm:h-[377px] sm:rounded-[262px] w-[242px] h-[158px] rounded-[95px] bg-fuchsia-300 sm:blur-[150px] blur-[53px] absolute sm:top-[375px] sm:left-[882px] top-[218px] left-[238px] -z-20"></div>
            </div>
            <Layout>
                <EcommercePage />
            </Layout>
        </div>
    )
}
