import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import AIPage from 'components/pages/AIPage'

export default function AI() {
    return (
        <div className='relative'>
            <SEOHead title='AI' />
            <div className='absolute inset-0 sm:overflow-visible overflow-hidden -z-10'>
                <div className="sm:w-[704px] sm:h-[508px] sm:rounded-[532px] w-[112px] h-[110px] rounded-[192px] bg-blue-400 sm:blur-[300px] blur-[100px] absolute sm:top-[547px] sm:left-[368px] top-[455px] left-[132px] -z-10"></div>
                <div className="sm:w-[670px] sm:h-[377px] sm:rounded-[262px] w-[242px] h-[158px] rounded-[94px] bg-fuchsia-300 sm:blur-[150px] blur-[100px] absolute sm:-top-[419px] sm:left-[346px] -top-[152px] left-[53px] -z-20"></div>
            </div>
            <Layout>
                <AIPage />
            </Layout>
        </div>
    )
}
