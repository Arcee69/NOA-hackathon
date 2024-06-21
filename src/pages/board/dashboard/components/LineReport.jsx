import React, { useEffect } from 'react'
import {
  ResponsiveContainer, 
  LineChart, 
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line 
} from 'recharts';
import { Divider } from '@material-ui/core';
import CalenderDropdown from '../../../../components/CalendarDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalytics } from '../../../../features/board/analytics/getAnalyticsSlice';

const LineReport = () => {

  const dispatch = useDispatch() 

  const key = import.meta.env.VITE_APP_SECRET_KEY

  useEffect(() => {
    dispatch(fetchAnalytics(key))
  },[])

  const analyticsData = useSelector(state => state.analytics)
  const { data } = analyticsData

  const contestData = [
    {
      "name": "Jan",
      "Participants": data?.entriesCount,
      "Views": data?.votesCount,
    },
    {
      "name": "Feb",
      "Participants": 10,
      "Views": 20,
    },
    {
      "name": "Mar",
      "Participants": 20,
      "Views": 12,
    },
    {
      "name": "Apr",
      "Participants": 20,
      "Views": 20,
    },
    {
      "name": "May",
      "Participants": 70,
      "Views": 20,
    },
    {
      "name": "Jun",
      "Participants": 10,
      "Views": 20,
    },
    {
      "name": "Jul",
      "Participants": 10,
      "Views": 30,
    },
    
  ]

  const handleDateChange = (e) => {
    const convertedEndDate = convertDateTimeStamp(e?.endDate)
    const convertedStartDate = convertDateTimeStamp(e?.startDate)
    setStartDate(`&startDate=${convertedStartDate}`);
    setEndDate(`endDate=${convertedEndDate}`);
  }
  
  return (
    <div className='bg-[#fff] xs:w-full lg:w-full rounded-xl'>
      <div className='flex flex-row w-full justify-between p-4'>
        <div className='flex flex-row w-6/12 justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Participants</p>
            <p className='text-xl font-bold text-PURPLE-_100'>{data?.usersCount}</p>
          </div>
          <Divider flexItem orientation='vertical' />
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Votes</p>
            <p className='text-xl font-bold text-BLUE-_200'>{data?.votesCount}</p>
          </div>
        </div>
        <div className='w-6/12 flex justify-end'>
          <CalenderDropdown onChange={handleDateChange} className="border-[2px] border-slate-200 py-1 px-3 rounded-2xl" />
        </div>
      </div>
      <Divider  />
       <ResponsiveContainer width="98%" height="80%" className="mt-5">
            <LineChart width="" height={128} data={contestData}   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="Participants" stroke="#4A3195" />
              <Line dataKey="Views" stroke="#0098FA" />
            </LineChart>
          </ResponsiveContainer>
    </div>
  )
}

export default LineReport