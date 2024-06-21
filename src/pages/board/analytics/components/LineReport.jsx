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

const LineReport = ({ data }) => {
  const contestData = [
    {
      "name": "Jan",
      "Entries": data?.entriesCount,
      "Votes": data?.votesCount,
    },
    {
      "name": "Feb",
      "Entries": 10,
      "Votes": 20,
    },
    {
      "name": "Mar",
      "Entries": 20,
      "Votes": 12,
    },
    {
      "name": "Apr",
      "Entries": 20,
      "Votes": 20,
    },
    {
      "name": "May",
      "Entries": 70,
      "Votes": 20,
    },
    {
      "name": "Jun",
      "Entries": 10,
      "Votes": 20,
    },
    {
      "name": "Jul",
      "Entries": 10,
      "Votes": 30,
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
            <p className='text-sm text-NEUTRAL-_700 font-medium'>Entries</p>
            <p className='text-xl font-bold text-PURPLE-_100'>{data?.entriesCount}</p>
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
              <Line dataKey="Entries" stroke="#4A3195" />
              <Line dataKey="Votes" stroke="#0098FA" />
            </LineChart>
          </ResponsiveContainer>
    </div>
  )
}

export default LineReport