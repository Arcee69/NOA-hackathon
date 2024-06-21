import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import analyticsPhoto from "../../../../assets/images/analytics-a.png"
import analyticsVideo from "../../../../assets/images/analytics-b.png"

import Table2 from '../../../../components/TableTwo';
import { fetchAllParticularContest } from '../../../../features/board/dashboard/allParticularContestSlice';

const Performance = () => {
  
  const userData  = useSelector(state => state.userLogin)
  const allOpenContest = useSelector(state => state.allFeedData)
  const dispatch = useDispatch();

  console.log(allOpenContest, "allOpenContest")

  // const { user } = userData.data 
  const contestData = allOpenContest.data?.data 


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
            Header: "Entries", 
            accessor: "entries" 
        },
        {   
            Header: "Age Limit", 
            accessor: "age" 
        },
        { 
            Header: "Votes", 
            accessor: "votes" 
        },
      ];

      const data = contestData?.map((data) => ({ //contestData
        contests:  
            <div className='flex flex-row gap-2 items-center' >
                {/* <img src={data?.contest_photo || analyticsPhoto } alt='contest-image' className='w-14 h-14'/> */}
                    <p className='text-sm font-medium text-[#1D2939]'>{data?.title}</p>
            </div>,
        category: <div className='text-base font-semibold text-[#333333]'>{data?.type}</div>,
        entries: <div className='text-base font-semibold text-[#333333]'>{data?.max_entries || 0}</div>,
        age: <div className='text-base font-semibold text-[#333333]'>{data?.age_limit || "N/A"}</div>,
        votes: <div className='text-base font-semibold text-[#333333]'>{data?.limits_per_vote || 0}</div>,
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