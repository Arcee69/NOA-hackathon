import { Divider } from '@mui/material';
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

const Report = () => {
  const data = [
    {
      "name": "January",
      "Views": 50,
      "Entries": 2,
      "Votes": 40,
    },
    {
      "name": "Febuary",
      "Views": 10,
      "Entries": 20,
      "Votes": 46,
    },
    {
      "name": "March",
      "Views": 20,
      "Entries": 12,
      "Votes": 40,
    },

  ]

  return (
    <div className='p-4'>

      <div className='flex flex-col gap-16'>

        <div className='flex flex-col w-full'>
          <h2 className='text-xl font-semibold'>Performance Report</h2>
        </div>

        <div className='bg-[#fff] rounded-xl h-[667px] p-5 '>
        <div className='mb-10'>
          <div className='flex flex-row w-[500px]'>

            <div className='border-r border-NEUTRAL-_700'>
              <div className='items-center flex flex-col mx-4 '>
                <p className='font-medium text-sm text-NEUTRAL-_700'>Total Views</p>
                <p className='text-xl text-BLUE-_400 font-bold'>50</p>
              </div>
            </div>

            <div className='border-r border-NEUTRAL-_700'>
              <div className='items-center flex flex-col mx-4 '>
                <p className='font-medium text-sm text-NEUTRAL-_700'>Entries</p>
                <p className='text-xl text-YELLOW-_100 font-bold'>2</p>
              </div>
            </div>

            <div className='border-r border-NEUTRAL-_700'>
              <div className='items-center flex flex-col mx-4 '>
                <p className='font-medium text-sm text-NEUTRAL-_700'>Votes</p>
                <p className='text-xl text-RED-_200 font-bold'>40</p>
              </div>
            </div>

          </div>
          <Divider />
        </div>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart width="" height={128} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Views" fill="#3B82F6" />
              <Bar dataKey="Entries" fill="#F0C046" />
              <Bar dataKey="Votes" fill="#FF6C4C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>



    </div>
  )
}

export default Report