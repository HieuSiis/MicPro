import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Header />
      {/* <section className='px-5 lg:container lg:mx-auto xl:px-16'>{children}</section> */}
      <section>{children}</section>
      <Footer />
    </>
  )
}

export default Layout
