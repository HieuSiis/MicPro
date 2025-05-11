import React from 'react'

import ArrowButton from 'components/ui/Button/ArrowButton'

const CtaComponent = () => {
  return (
    <section>
      <div className='sm:main-container mobile-container rounded-2xl bg-gradientBlue2 pb-[30px] pt-[30px] sm:pb-[56px] sm:pt-20'>
        <h3 className='mx-auto mb-[30px] max-w-[279px] text-center font-sora text-[28px] font-bold text-white sm:max-w-[858px] sm:text-[34px]'>
          We&apos;ll take the time to understand your goals and then help you create a website
          that&apos;s exactly what you envisioned.
        </h3>
        <p className='mx-auto max-w-[692px] text-center font-poppins font-thin text-white'>
          We believe your project is only as good as the team that&apos;s working on it. When we
          work with you and your team, we know there are no shortcuts to success. Your research is
          done; now lets get down to business!
        </p>
        <div className='mt-10 flex justify-center'>
          <ArrowButton>Join the team</ArrowButton>
        </div>
      </div>
    </section>
  )
}

export default CtaComponent
