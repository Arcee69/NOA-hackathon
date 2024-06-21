import React, { useEffect } from 'react'
import addIcon from "../../../assets/icons/add.svg"
import HeaderSummary from './components/HeaderSummary'
import BarReport from './components/BarReport'
import LineReport from './components/LineReport'
import Performance from './components/Performance'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnalytics } from '../../../features/board/analytics/getAnalyticsSlice'

const Analytics = () => {

  const dispatch = useDispatch()

  const key = import.meta.env.VITE_APP_SECRET_KEY

  useEffect(() => {
    dispatch(fetchAnalytics(key))
  },[])

  const analyticsData = useSelector(state => state.analytics)
  const { data } = analyticsData

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
        <HeaderSummary data={data} />
      </div>
      <div className='flex mt-6 xs:flex-col lg:flex-row gap-8'>
        <BarReport data={data} />
        <LineReport data={data} />
      </div>

      {/* <div className='mt-6'>
        <Performance />
      </div> */}

    </div>
  )
}

export default Analytics