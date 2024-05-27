import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import MiniHeader from './components/MiniHeader'

const HomePageLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='w-full relative  xs:hidden lg:flex'>
        <Header />
      </div>
      <div className="w-full relative z-50 xs:flex lg:hidden h-[105px] py-3.5 px-5">
        <MiniHeader />
      </div>
      <div className='mx-5 p-5'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePageLayout