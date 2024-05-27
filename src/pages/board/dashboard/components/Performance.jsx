import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import analyticsPhoto from "../../../../assets/images/analytics-a.png"
import analyticsVideo from "../../../../assets/images/analytics-b.png"

import Table2 from '../../../../components/TableTwo';
import { fetchAllParticularContest } from '../../../../features/board/dashboard/allParticularContestSlice';

const Performance = () => {
  
  const userData  = useSelector(state => state.userLogin)
  const particularContest = useSelector(state => state.allParticularContest)
  const dispatch = useDispatch();

  const { user } = userData.data 
  const contestData = particularContest.data 


  // useEffect(() => {
  //   dispatch(fetchAllParticularContest(user));
  // }, [])


    const performanceData = [
        {
          id: 1,
          image: analyticsPhoto,
          contests: "MBGN",
          category: "Photo Contest",
          views: 100,
          participation: 2,
          votes: 40,
        },
        {
          id: 2,
          image: analyticsVideo,
          contests: "Jump Off Live",
          category: "Video Contest",
          views: 5000,
          participation: 467,
          votes: 4900,
        },
    
      ];

      const columns = [
        { 
            Header: "Contests", 
            accessor: "contests" 
        },
        {   Header: "Category", 
            accessor: "category" 
        },
        { 
            Header: "Views", 
            accessor: "views" 
        },
        {   
            Header: "Participation", 
            accessor: "participation" 
        },
        { 
            Header: "Votes", 
            accessor: "votes" 
        },
      ];

      const data = performanceData?.map((data) => ({ //contestData
        contests:  
            <div className='flex flex-row gap-2 items-center' >
                {/* <img src={data?.contest_photo || analyticsPhoto } alt='contest-image' className='w-14 h-14'/> */}
                    <p className='text-sm font-medium text-[#1D2939]'>{data?.contest_name}</p>
            </div>,
        category: <div className='text-base font-semibold text-[#333333]'>{data?.category}</div>,
        views: <div className='text-base font-semibold text-[#333333]'>{data?.number_entries}</div>,
        participation: <div className='text-base font-semibold text-[#333333]'>{data?.age_limit}</div>,
        votes: <div className='text-base font-semibold text-[#333333]'>{data?.limits_per_vote}</div>,
    }
    
    ))  

  return (
    <div className='bg-[#fff] rounded-xl flex flex-col gap-5 p-8'>
        <h2 className='text-[#000] text-xl font-semibold font-manja'>Hackathon Performance</h2>
            
        <Table2 data={data} columns={columns}/>
    </div>
  )
}

export default Performance