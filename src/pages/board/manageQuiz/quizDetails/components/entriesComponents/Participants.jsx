import React, { useEffect, useState } from 'react'
import Table2 from '../../../../../../components/TableTwo';
import { api } from '../../../../../../services/api';
import { appUrls } from '../../../../../../services/urls';

const Participants = ({ quizDetails }) => {

  const scorersData = [
    {
      id: 1,
      name: "Oluwaseun Adebayo",
      number: "08098765432",
      residence: "Lagos",
      score: 1,
      amount: "₦1,000",
      date: "04/04/23",
      time: "5:45:13"
    },
    {
      id: 2,
      name: "Chioma Nwosu",
      number: "08098765432",
      residence: "Lagos",
      score: 5,
      amount: "₦10,000",
      date: "04/04/23",
      time: "5:45:13"
    },

  ];

  const participants = quizDetails?.participants
  console.log(participants, "participants")

  const columns = [
    { 
        Header: "Name", 
        accessor: "name" 
    },
    {   Header: "Phone Number", 
        accessor: "phone" 
    },
    { 
        Header: "State of Resident", 
        accessor: "resident" 
    },
    {   
        Header: "Score", 
        accessor: "score" 
    },
    { 
        Header: "Amount Won", 
        accessor: "amount" 
    },
    { 
        Header: "Date", 
        accessor: "date" 
    },
    { 
        Header: "Time spent", 
        accessor: "time" 
    },
  ];

     
  const data = participants?.map((data) => ({ 
    name:  
        <div className='flex flex-row gap-2 items-center' >
            <p className='text-sm font-medium font-mont_alt text-[#1D2939]'>{data?.name}</p>
        </div>,
    phone: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{data?.phone}</div>,
    resident: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{data?.state_id}</div>,
    score: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{data?.score}</div>,
    amount: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{data?.amount_won}</div>,
    date: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{new Date(data?.created_at).toDateString()}</div>,
    time: <div className='text-base font-medium font-mont_alt text-[#1D2939]'>{Math.round(parseInt(data?.time_spent) / 60)} mins</div>,
  }

))  
    

  return (
    <div className='bg-[#fff] rounded-b-md'>
        <Table2 data={data} columns={columns} />
    </div>
  )
}

export default Participants