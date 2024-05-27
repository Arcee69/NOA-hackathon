import React, { useEffect, useState } from 'react'
import { HiUsers } from "react-icons/hi"
import { FaUserCircle, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'

import { allFeedData } from '../../../../features/board/dashboard/allFeedDataSlice'

const ActivityFeed = () => {

    const activityData = useSelector(state => state.allFeedData)
    const dispatch = useDispatch(); 

    const { data } = activityData;
    const feedData = data


    // useEffect(() => {
    //     dispatch(allFeedData());
    // }, []);


  return (
    <div className='bg-[#fff] rounded-xl p-4 w-full h-full '> {/* overflow-y-scroll */}
        <div className='flex flex-col'>
            <h2 className='font-medium text-[#000] text-2xl'>Activity Feed</h2>
            <div className='mt-3.5 flex flex-col'>
                <h3 className='text-sm text-[#000] font-medium'>Today</h3>
                {
                    feedData && feedData.map((data) => (
                        <div className='flex mt-6 gap-3' key={data?.id}>
                            <HiUsers className='text-PINK-_300'/>
                            <div className="flex flex-col gap-2">
                                <p className='text-sm'>
                                    <span className='text-BLUE-_400'>{data?.sponsor_name}</span> created a new contest called <span className='text-BLUE-_400'>{data?.contest_name}</span>
                                </p>
                                <p className='text-sm'>{new Date(data?.created_at).toUTCString()}</p>
                            </div>
                        </div>
                    ))
                }
{/* 
                <div className='flex mt-8 gap-3'>
                    <FaUserCircle className='text-PURPLE-_100'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>Contestant JohnDoe123</span> submitted their entry for <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}
{/* 
                <div className='flex mt-8 gap-3'>
                    <FaUser className='text-GREEN-_200'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>You</span> created a new contest called <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

            </div>
            <div className='mt-8 flex flex-col'>
                <h3 className='text-sm text-[#000] font-medium'>This Week</h3>
                {/* <div className='flex mt-6 gap-3'>
                    <HiUsers className='text-PINK-_300'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>Judge Smith</span> approved <span className='text-BLUE-_400'>JohnDoe123</span> entry for <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

                {/* <div className='flex mt-8 gap-3'>
                    <FaUserCircle className='text-PURPLE-_100'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>Contestant JohnDoe123</span> submitted their entry for <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

                {/* <div className='flex mt-8 gap-3'>
                    <FaUser className='text-GREEN-_200'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>You</span> created a new contest called <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

            </div>
            <div className='mt-8 flex flex-col'>
                <h3 className='text-sm text-[#000] font-medium'>This Month</h3>
                {/* <div className='flex mt-6 gap-3'>
                    <HiUsers className='text-PINK-_300'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>Judge Smith</span> approved <span className='text-BLUE-_400'>JohnDoe123</span> entry for <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

                {/* <div className='flex mt-8 gap-3'>
                    <FaUserCircle className='text-PURPLE-_100'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>Contestant JohnDoe123</span> submitted their entry for <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

                {/* <div className='flex mt-8 gap-3'>
                    <FaUser className='text-GREEN-_200'/>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm'>
                            <span className='text-BLUE-_400'>You</span> created a new contest called <span className='text-BLUE-_400'>Jumpoff! Live</span>
                        </p>
                        <p className='text-sm'>Mar 1, 2023 10:15 AM</p>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default ActivityFeed