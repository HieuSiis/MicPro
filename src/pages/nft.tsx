import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import NFTPage from 'components/pages/NFTPage'

export default function NFT() {
    return (
        <div className='relative'>
            <SEOHead title='NFT' />
            <div className='absolute inset-0 sm:overflow-visible overflow-hidden -z-10'>
                <div className="sm:w-[253px] sm:h-[253px] sm:rounded-[383px] w-[146px] h-[143px] rounded-[192px] bg-blue-400 sm:blur-[148px] blur-[100px] absolute sm:left-[53px] sm:top-[78px] -top-[34px] -left-7 -z-20"></div>
                <div className="sm:w-[751px] sm:h-[422px] sm:rounded-[293px] w-[207px] h-[116px] rounded-[293px] bg-violet-600 sm:blur-[148px] blur-[100px] absolute sm:top-[665px] sm:left-[232px] top-[585px] left-[49px] -z-10"></div>
                <div className="sm:w-[625px] sm:h-[351px] rounded-[244px] w-[172px] h-[97px] bg-amber-200 sm:blur-[148px] blur-[100px] absolute sm:top-[636px] sm:left-[649px] top-[577px] left-[164px] -z-10"></div>
            </div>
            <Layout>
                <NFTPage />
            </Layout>
        </div>
    )
}
