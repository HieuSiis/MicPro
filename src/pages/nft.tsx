import Layout from 'components/layout/Layout'
import NFTPage from 'components/pages/NFTPage'
import SEOHead from 'components/seo'

const NFT = () => {
  return (
    <div className='relative'>
      <SEOHead title='NFT' />
      <div className='absolute inset-0 -z-10 overflow-hidden sm:overflow-visible'>
        <div className='absolute -left-7 -top-[34px] -z-20 h-[143px] w-[146px] rounded-[192px] bg-blue-400 blur-[100px] sm:left-[53px] sm:top-[78px] sm:h-[253px] sm:w-[253px] sm:rounded-[383px] sm:blur-[148px]' />
        <div className='absolute left-[49px] top-[585px] -z-10 h-[116px] w-[207px] rounded-[293px] bg-violet-600 blur-[100px] sm:left-[232px] sm:top-[665px] sm:h-[422px] sm:w-[751px] sm:rounded-[293px] sm:blur-[148px]' />
        <div className='absolute left-[164px] top-[577px] -z-10 h-[97px] w-[172px] rounded-[244px] bg-amber-200 blur-[100px] sm:left-[649px] sm:top-[636px] sm:h-[351px] sm:w-[625px] sm:blur-[148px]' />
      </div>
      <Layout>
        <NFTPage />
      </Layout>
    </div>
  )
}
export default NFT
