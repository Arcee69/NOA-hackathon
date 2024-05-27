import React from 'react'
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

const LineReport = () => {
  const data = [
    {
      "name": "Apr 2",
      "Participants": 50,
      "Views": 2,
    },
    {
      "name": "Apr 3",
      "Participants": 10,
      "Views": 20,
    },
    {
      "name": "Apr 4",
      "Participants": 20,
      "Views": 12,
    },
    {
      "name": "Apr 5",
      "Participants": 20,
      "Views": 20,
    },
    {
      "name": "Apr 6",
      "Participants": 70,
      "Views": 20,
    },
    {
      "name": "Apr 7",
      "Participants": 10,
      "Views": 20,
    },
    {
      "name": "Apr 8",
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
    <div className='bg-[#fff] xs:w-full lg:w-[524px] rounded-xl'>
      <div className='flex flex-row w-full justify-between p-4'>
        <div className='flex flex-row w-6/12 justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Participants</p>
            <p className='text-xl font-bold text-PURPLE-_100'>172</p>
          </div>
          <Divider flexItem orientation='vertical' />
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Views</p>
            <p className='text-xl font-bold text-BLUE-_200'>300</p>
          </div>
        </div>
        <div className='w-6/12 flex justify-end'>
          <CalenderDropdown onChange={handleDateChange} className="border-[2px] border-slate-200 py-1 px-3 rounded-2xl" />
        </div>
      </div>
      <Divider  />
       <ResponsiveContainer width="98%" height="80%" className="mt-5">
            <LineChart width="" height={128} data={data}   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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