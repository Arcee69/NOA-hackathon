import React from 'react'
import addIcon from "../../../assets/icons/add.svg"
import HeaderSummary from './components/HeaderSummary'
import BarReport from './components/BarReport'
import LineReport from './components/LineReport'
import Performance from './components/Performance'

const Analytics = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Analytics</h1>
        {/* <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[180px] xs:p-2  md:w-[257px] h-[56px]'>
          <img src={addIcon} alt="add-icon" />
          <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
        </button> */}
      </div>

      <div className='mt-6'>
        <HeaderSummary />
      </div>
      <div className='flex mt-6 xs:flex-col lg:flex-row gap-8'>
        <BarReport />
        <LineReport />
      </div>

      <div className='mt-6'>
        <Performance />
      </div>

    </div>
  )
}

export default Analytics