import { Divider } from '@material-ui/core'
import React from 'react'

const HeaderSummary = () => {
  return (
    <div className='bg-[#fff] rounded-xl flex justify-between xs:p-2 lg:p-8'>
        <div className='flex flex-col p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Contests</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>2</p>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col p-3 xs:gap-2 '>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Participants</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>469</p>
            <p className='text-[#000] font-normal xs:text-xs md:text-sm'>2% average partcipation</p>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col  p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Entries</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>876</p>
            <p className='text-[#000] font-normal xs:text-xs md:text-sm'>40% Average Voting</p>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Views </p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>5100</p>
        </div>

    </div>
  )
}

export default HeaderSummary