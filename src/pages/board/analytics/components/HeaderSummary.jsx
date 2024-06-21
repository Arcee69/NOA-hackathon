import React, { useState } from 'react'

import { Divider } from '@material-ui/core'

const HeaderSummary = ({ data }) => {

    console.log(data, "key")


  return (
    <div className='bg-[#fff] rounded-xl flex justify-between xs:p-2 lg:p-8'>
        <div className='flex flex-col p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Contests</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>{data?.contestsCount}</p>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col p-3 xs:gap-2 '>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Participants</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>{data?.usersCount}</p>
            {/* <p className='text-[#000] font-normal xs:text-xs md:text-sm'>2% average partcipation</p> */}
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col  p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Entries</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>{data?.entriesCount}</p>
            {/* <p className='text-[#000] font-normal xs:text-xs md:text-sm'>40% Average Voting</p> */}
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='flex flex-col p-3 xs:gap-2'>
            <p className='text-NEUTRAL-_700 font-normal xs:text-sm md:text-base'>Total Votes</p>
            <p className='text-primary font-bold xs:text-base md:text-2xl'>{data?.votesCount}</p>
        </div>

    </div>
  )
}

export default HeaderSummary