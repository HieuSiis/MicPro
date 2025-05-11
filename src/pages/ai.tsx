import Layout from 'components/layout/Layout'
import AIPage from 'components/pages/AIPage'
import SEOHead from 'components/seo'

export default function AI() {
  return (
    <div className='relative'>
      <SEOHead title='AI' />
      <div className='absolute inset-0 -z-10 overflow-hidden sm:overflow-visible'>
        <div className='absolute left-[132px] top-[455px] -z-10 h-[110px] w-[112px] rounded-[192px] bg-blue-400 blur-[100px] sm:left-[368px] sm:top-[547px] sm:h-[508px] sm:w-[704px] sm:rounded-[532px] sm:blur-[300px]' />
        <div className='absolute -top-[152px] left-[53px] -z-20 h-[158px] w-[242px] rounded-[94px] bg-fuchsia-300 blur-[100px] sm:-top-[419px] sm:left-[346px] sm:h-[377px] sm:w-[670px] sm:rounded-[262px] sm:blur-[150px]' />
      </div>
      <Layout>
        <AIPage />
      </Layout>
    </div>
  )
}
