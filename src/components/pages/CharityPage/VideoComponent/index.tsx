import React from 'react'

const VideoComponent = () => {
  return (
    <section className='main-container mt-[60px] flex items-center justify-center sm:mt-0 '>
      <div className='absolute -z-10 h-[1074px] w-full translate-y-[530px] bg-slate-100' />
      <video className=' rounded-xl sm:rounded-[30px]' controls>
        <source src='/videos/charity.mp4' type='video/mp4' />
        <track src='captions.vtt' kind='captions' label='English captions' />
      </video>
    </section>
  )
}

export default VideoComponent
