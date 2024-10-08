import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { FaTrophy, FaUserCircle} from "react-icons/fa"
import { TbAwardFilled } from "react-icons/tb"
import { useDispatch, useSelector } from 'react-redux'

import addIcon from "../../../assets/icons/add.svg"
import ContestImage from "../../../assets/images/contest.png"
import LineReport from './components/LineReport'
import Performance from './components/Performance'
import ActivityFeed from './components/ActivityFeed'

import { fetchAllContest } from '../../../features/board/dashboard/allContestSlice'
import { fetchAllAdmins } from '../../../features/board/admin/getAdminSlice'

const Dashboard = () => {

  const userData  = useSelector(state => state.userLogin)
  const allContest = useSelector(state => state.allContest);

  console.log(allContest, "allContest")

  // const { user } = userData.data; 
  const { data } = allContest

  const analyticsData = useSelector(state => state.analytics)
  const analyticsDetails = analyticsData?.data


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllAdmins())
  }, [])


  useEffect(() => {
    dispatch(fetchAllContest());
    
  }, [])


  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Overview</h1>
        <div className='flex gap-3'>
          <button onClick={() => navigate("/create-campaign")} type='button' className='bg-[#027315] flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
            <img src={addIcon} alt="add-icon" />
            <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Create Campaign</p>
          </button>
        </div>
      </div>
      <div className='w-full flex xs:flex-col md:flex-row h-full gap-5 mt-5'>
        <div className='xs:w-full lg:w-6/12 flex flex-col gap-5'>
          <div className='flex xs:gap-2 lg:gap-5 justify-between'>

            <div className='xs:w-[95px] md:w-[120px] lg:w-[179px] lg:h-[109px] bg-[#fff] flex flex-col gap-2 xs:p-3 md:p-5 rounded-xl'>
              <div className='flex  gap-2'>
                <FaTrophy className="text-primary"/>
                <p className='xs:text-[8px] lg:text-xs text-NEUTRAL-_700'>Live Contests</p>
              </div>
              <p className='font-semibold xs:text-2xl lg:text-4xl'>
                {data === "You have not created any contest" ? 0 : analyticsDetails?.contestsCount }
              </p>
            </div>

            <div className='xs:w-[95px] md:w-[120px] lg:w-[179px] lg:h-[109px] bg-[#fff] flex flex-col gap-2 xs:p-3 md:p-5 rounded-xl'>
              <div className='flex justify-between gap-0.5'>
                <FaUserCircle className="text-PURPLE-_100"/>
                <p className='xs:text-[8px] lg:text-xs text-NEUTRAL-_700 '>Total Participants</p>
              </div>
              <p className='font-semibold xs:text-2xl lg:text-4xl'>{analyticsDetails?.entriesCount}</p>
            </div>

            <div className='xs:w-[95px] md:w-[120px] lg:w-[179px] lg:h-[109px] bg-[#fff] flex flex-col gap-2 xs:p-3 md:p-5 rounded-xl'>
              <div className='flex  gap-2'>
                <TbAwardFilled className="text-YELLOW-_100"/>
                <p className='xs:text-[8px] lg:text-xs text-NEUTRAL-_700'>Total Winners</p>
              </div>
              <p className='font-semibold xs:text-2xl lg:text-4xl'>0</p>
            </div>

          </div>

          <div className='mt-5 xs:mx-2 md:mx-0'>
            <h2 className='font-bold text-base text-[#000]'>Live Contests</h2>

            <div className='bg-[#fff] xs:w-full lg:w-full lg:h-[211px] flex flex-row rounded xs:p-4 lg:p-0 gap-5 mt-4 items-center align-center'>
              <div className='md:ml-8 shadow-xl'>
                <img src={ContestImage} alt="Contest-image" className='xs:w-[140px] xs:h-[140px] lg:w-[180px] lg:h-[151px]'/>
              </div>
              <div className='flex flex-col gap- mt-4'>
                <h2 className='font-medium text-[#000] xs:text-center xs:text-base lg:text-xl'>Hackathon Contest</h2>

                <div className='flex xs:mt-3 md:mt-3 lg:mt-3 gap-2 flex-col'>
                  <button 
                    type="button" 
                    onClick={() => navigate("/manage-contests")}
                    className="xs:w-[130px] lg:w-[180px] font-normal bg-[#027315] xs:text-sm lg:text-base font-mont_alt p-2 rounded-md text-[#fff] border border-solid"
                    // style={{ width: "150px" }}
                  >
                    View Entries
                  </button>

                  {/* <button 
                    type="button" 
                    className="xs:w-[130px] lg:w-[180px] font-normal border-[#027315] bg-[#fff] font-mont_alt rounded-md text-[#027315] xs:text-sm lg:text-base p-2 border border-solid"
                  >
                    Edit Contest
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className='flex mt-6 hidden'>
            <LineReport />
          </div>

        </div>
        <div className='xs:w-full lg:w-6/12'>
          <ActivityFeed />
        </div>
      </div>

      <div className='mt-6'>
        <Performance />
      </div>

    </div>
  )
}

export default Dashboard