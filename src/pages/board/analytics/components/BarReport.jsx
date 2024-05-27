import React from 'react'
import {
    ResponsiveContainer, 
    BarChart, 
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar 
  } from 'recharts';
import CalenderDropdown from '../../../../components/CalendarDropdown';
import { Divider } from '@material-ui/core';

const BarReport = () => {
    const data = [
        {
          "name": "Apr 2",
          "Participants": 50,
          "Contest": 2,
        },
        {
          "name": "Apr 3",
          "Participants": 10,
          "Contest": 20,
        },
        {
          "name": "Apr 4",
          "Participants": 20,
          "Contest": 12,
        },
        {
          "name": "Apr 5",
          "Participants": 20,
          "Contest": 20,
        },
        {
          "name": "Apr 6",
          "Participants": 70,
          "Contest": 20,
        },
        {
          "name": "Apr 7",
          "Participants": 10,
          "Contest": 20,
        },
        {
          "name": "Apr 8",
          "Participants": 10,
          "Contest": 30,
        },
        
      ]

      const handleDateChange = (e) => {
        const convertedEndDate = convertDateTimeStamp(e?.endDate)
        const convertedStartDate = convertDateTimeStamp(e?.startDate)
        setStartDate(`&startDate=${convertedStartDate}`);
        setEndDate(`endDate=${convertedEndDate}`);
      }

  return (
    <div className='bg-[#fff] xs:w-full lg:w-[524px]  rounded-xl'>
      <div className='flex flex-row w-full justify-between p-4'>
        <div className='flex flex-row w-6/12 justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Participants</p>
            <p className='text-xl font-bold text-PURPLE-_100'>172</p>
          </div>
          <Divider flexItem orientation='vertical' />
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Contest</p>
            <p className='text-xl font-bold text-YELLOW-_100'>300</p>
          </div>
        </div>
        <div className='w-6/12 flex justify-end'>
          <CalenderDropdown onChange={handleDateChange} className="border-[2px] border-slate-200 py-1 px-3 rounded-2xl" />
        </div>
      </div>
      <Divider  />
         <ResponsiveContainer width="98%" height="80%" className="mt-5">
            <BarChart width="" height={128} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Participants" fill="#4A3195" />
              <Bar dataKey="Contest" fill="#F0C046" />
            </BarChart>
          </ResponsiveContainer>

    </div>
  )
}

export default BarReport