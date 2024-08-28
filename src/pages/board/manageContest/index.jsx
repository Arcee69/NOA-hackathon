import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import addIcon from "../../../assets/icons/add.svg"
import ContestImage from "../../../assets/images/contest.png"
import Table2 from '../../../components/TableTwo';
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import TableMenu from '../../../components/TableMenu';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchAllContest } from '../../../features/board/dashboard/allContestSlice';
import { useDispatch, useSelector } from 'react-redux';

const ITEMS_PER_PAGE = 5;  // Set the number of items per page

const ManageContest = () => {
  const [liveContestData, setLiveContestData] = useState([])
  const [deleteContestLoading, setDeleteContestLoading] = useState(false)
  const [closeContestLoading, setCloseContestLoading] = useState(false)
  const [openContestLoading, setOpenContestLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1)

  const dispatch = useDispatch()

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
  }, [deleteContestLoading])

  useEffect(() => {
    dispatch(fetchAllContest())
  }, [closeContestLoading, deleteContestLoading, openContestLoading])

  const allContest = useSelector(state => state.allContest)
  console.log(allContest, "allContest")
  const contest = allContest?.data?.data

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
    { 
      Header: "Action", 
      accessor: "action" 
    },
  ];


  const handleDeleteContest = async (id) => {
    setDeleteContestLoading(true)
    await api.delete(`https://api.hackathon.noa.gov.ng/api/contest/delete/${id}`)
    .then((res) => {
      console.log(res, "pass")
      setDeleteContestLoading(false)
      toast(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    })
    .catch((err) => {
      console.log(err, "kick")
      setDeleteContestLoading(false)
      toast(`${err.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
  }

  const handleCloseContest = async (id) => {
    setCloseContestLoading(true)
    await api.post(`https://api.hackathon.noa.gov.ng/api/contest/close/${id}`)
    .then((res) => {
      console.log(res, "pass")
      setCloseContestLoading(false)
      toast(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    })
    .catch((err) => {
      console.log(err, "kick")
      setCloseContestLoading(false)
      toast(`${err.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
  }


  const handleOpenContest = async (id) => {
    setOpenContestLoading(true)
    await api.post(`https://api.hackathon.noa.gov.ng/api/contest/reopen/${id}`)
    .then((res) => {
      console.log(res, "pass")
      setOpenContestLoading(false)
      toast(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    })
    .catch((err) => {
      console.log(err, "kick")
      setOpenContestLoading(false)
      toast(`${err.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
  }



  console.log(liveContestData, "liveContestData");

  const data = contest?.map((contest) => ({
    title:  
        <div className='flex items-center' >
            <p className='text-sm font-medium text-[#1D2939]'>{contest.title}</p>
        </div>,
    type: <div className='text-base font-semibold text-[#333333]'>{contest.type}</div>,
    entries: <div className='text-base font-semibold text-[#333333]'>{contest.max_entries || 0}</div>,
    dateCreated: <div className='text-base font-semibold text-[#333333]'>{new Date(contest.created_at).toDateString()}</div>,
    status: <div className='text-base font-semibold text-[#333333]'>{contest.open === "1" ? "Open" : "Closed" }</div>,
    action: 
      <TableMenu
          options={[
              <p className="text-[#f00]" onClick={() => handleDeleteContest(contest.id)}>Delete</p>,
              <p onClick={() => {contest.open === "1"  ? handleCloseContest(contest.id) : handleOpenContest(contest.id)}} className={`${contest?.open === "1" ? "text-[#f00]" : "text-[#027315]"}`}>{contest?.open === "1" ? "Close" : "Open"}</p>
          ]} 
      />
}

))


  return (
    <div className='p-[2%]'>
      
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Manage Contests</h1>
          <div className='flex gap-3'>
        
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
                          className="w-[130px] hidden font-normal border-primary bg-[#fff] rounded-md text-primary text-base p-2 border border-solid"
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