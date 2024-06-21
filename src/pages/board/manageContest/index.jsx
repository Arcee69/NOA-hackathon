import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import addIcon from "../../../assets/icons/add.svg"
import ContestImage from "../../../assets/images/contest.png"
import Table2 from '../../../components/TableTwo';
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'

const ITEMS_PER_PAGE = 5;  // Set the number of items per page

const ManageContest = () => {
  const [liveContestData, setLiveContestData] = useState([])
  const [page, setPage] = useState(1)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1)

  const fetchLiveContestData = async() => {
    await api.get(appUrls?.GET_ALL_OPEN_CONTEST_URL)
    .then((res) => {
      console.log(res, "data")
      setLiveContestData(res?.data?.data)
      setTotalNumberOfPages(Math.ceil(res?.data?.data.length / ITEMS_PER_PAGE));
    })
    .catch((err) => {
      console.log(err, "err")
    })
  }

  useEffect(() => {
    fetchLiveContestData();
  }, [])

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  const columns = [
    { 
        Header: "Title", 
        accessor: "title" 
    },
    {   Header: "Type", 
        accessor: "type" 
    },
    { 
        Header: "Entries", 
        accessor: "entries" 
    },
    {   
        Header: "Date Created", 
        accessor: "dateCreated" 
    },
    { 
        Header: "Status", 
        accessor: "status" 
    },
  ];

  console.log(liveContestData, "liveContestData");

  const data = liveContestData?.map((contest) => ({
    title:  
        <div className='flex items-center' >
            <p className='text-sm font-medium text-[#1D2939]'>{contest.title}</p>
        </div>,
    type: <div className='text-base font-semibold text-[#333333]'>{contest.type}</div>,
    entries: <div className='text-base font-semibold text-[#333333]'>{contest.max_entries || 0}</div>,
    dateCreated: <div className='text-base font-semibold text-[#333333]'>{new Date(contest.created_at).toDateString()}</div>,
    status: <div className='text-base font-semibold text-[#333333]'>{contest.open === 1 ? "Active" : "Inactive" }</div>,
}

))


  return (
    <div className='p-[2%]'>
      
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Manage Contests</h1>
          <div className='flex gap-3'>
            {/* <button type='button' className='bg-primary flex justify-center gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'>
              <img src={addIcon} alt="add-icon" />
              <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Create Campaign</p>
            </button> */}
            {/* <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
              <img src={addIcon} alt="add-icon" />
              <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
            </button> */}
          </div>
        </div>
        <p className='xs:mt-5 lg:mt-2.5 text-base font-normal'>Explore our campaign categories and find the perfect way to engage with your audience.</p>
      </div>

      <div className='mt-5 xs:mx-2 md:mx-0'>
        <h2 className='font-bold text-base text-[#000]'>Live Contests</h2>

        <div className='w-full overflow-x-scroll'>
          <div className='w-[150vw] flex gap-4'>
            {
              liveContestData?.length > 0 
              ? (
                liveContestData?.slice(0, 5)?.map((contestData) => (
                  <div className='bg-[#fff] xs:w-full md:w-[458px] md:h-[242px] flex flex-row rounded p-4 gap-5 mt-4 items-center justify-center' key={contestData?.id}>
                    <div className='shadow-xl flex-shrink-0'>
                      <img src={contestData?.flier || ContestImage} alt="Contest-image" className='w-[180px] h-[151px] object-cover'/>
                    </div>
                    <div className='flex flex-col gap-4 mt-4 items-center'>
                      <h2 className='font-medium text-[#000] text-center text-xl'>{contestData?.type}</h2>

                      <div className='flex flex-col gap-2 items-center'>
                        <Link 
                          to="/manage-contests/manage-entries" 
                          state={contestData} 
                          className="w-[130px] text-center font-normal bg-[#027315] text-base p-2 rounded-md text-[#fff] border border-solid"
                        >
                          Manage
                        </Link>

                        <button 
                          type="button" 
                          className="w-[130px] font-normal border-primary bg-[#fff] rounded-md text-primary text-base p-2 border border-solid"
                        >
                          Edit Contest
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) 
              : <div>No Live Contest</div>
            }
          </div>
        </div>


      </div>

      <div className=" xs:mt-10 lg:mt-20 xs:mx-2 md::mx-auto">
        <Table2 
          data={data}  
          columns={columns}
          totalNumberOfPages={totalNumberOfPages}
          page={page}
          handlePaginationChange={handlePageChange}
        />
      </div>

    </div>
  )
}

export default ManageContest