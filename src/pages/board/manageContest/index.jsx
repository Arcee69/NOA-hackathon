import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import addIcon from "../../../assets/icons/add.svg"
import ContestImage from "../../../assets/images/contest.png"
import Table2 from '../../../components/TableTwo';
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'


const ManageContest = () => {
  const [liveContestData, setLiveContestData] = useState([])

  const navigate = useNavigate()

  const userData = JSON.parse(sessionStorage.getItem('userObj'))

  const { user } = userData 


  const fetchLiveContestData = async() => {
 
    await api.get(appUrls?.GET_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL + `/${user?.id}`)
    .then((res) => {
      console.log(res, "data")
      setLiveContestData(res)
    })
    .catch((err) => {
      console.log(err, "err")
    })
  }

  useEffect(() => {
    fetchLiveContestData();
  }, [])

  const contestData = [
    {
      id: 1,
      participant: "Photo Contest",
      email: 10,
      entries: 1,
      dateCreated: "04/04/23",
      status: "Valid"
    },
    {
      id: 2,
      participant: "Video Contest",
      email: 10,
      entries: 1,
      dateCreated: "04/04/23",
      status: "Invalid"
    },

  ];

  const columns = [
    { 
        Header: "Participant", 
        accessor: "participant" 
    },
    {   Header: "Email", 
        accessor: "email" 
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

  const data = contestData.map((contest) => ({
    participant:  
        <div className='flex items-center' >
            <p className='text-sm font-medium text-[#1D2939]'>{contest.participant}</p>
        </div>,
    email: <div className='text-base font-semibold text-[#333333]'>{contest.email}</div>,
    entries: <div className='text-base font-semibold text-[#333333]'>{contest.entries}</div>,
    dateCreated: <div className='text-base font-semibold text-[#333333]'>{contest.dateCreated}</div>,
    status: <div className='text-base font-semibold text-[#333333]'>{contest.status}</div>,
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
            <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
              <img src={addIcon} alt="add-icon" />
              <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
            </button>
          </div>
        </div>
        <p className='xs:mt-5 lg:mt-2.5 text-base font-normal'>Explore our campaign categories and find the perfect way to engage with your audience.</p>
      </div>

      <div className='mt-5 xs:mx-2 md:mx-0'>
        <h2 className='font-bold text-base text-[#000]'>Live Contests</h2>

        <div className='w-full  overflow-x-scroll'>
          <div className='w-[100vw] flex gap-4 '>
            {
              liveContestData?.data?.length > 0 
              ? (
                liveContestData?.data?.map((contestData) => (
                  <div className='bg-[#fff] xs:w-full md:w-[458px] md:h-[242px] flex flex-row rounded xs:p-4 lg:p-0 gap-5 mt-4 items-center align-center justify-center' key={contestData?.id}>
                    <div className='shadow-xl'>
                      <img src={contestData?.contest_photo || ContestImage} alt="Contest-image" className='xs:w-[140px] xs:h-[140px] lg:w-[180px] lg:h-[151px]'/>
                    </div>
                    <div className='flex flex-col gap- mt-4'>
                      <h2 className='font-medium text-[#000] xs:text-center xs:text-base lg:text-xl'>{contestData?.category}</h2>

                      <div className='flex xs:mt-3 md:mt-3 lg:mt-3 gap-2 flex-col'>
                        <Link 
                          // type="button" 
                          to="/manage-contests/manage-entries" 
                          state={contestData} 
                          // onClick={() => { navigate("/manage-contests/manage-entries"); state={contestData} }}
                          className="xs:w-[130px] lg:w-[150px] font-normal bg-primary xs:text-sm lg:text-base p-2 rounded-md text-[#fff] border border-solid"
                          // style={{ width: "150px" }}
                        >
                          Manage Entries
                        </Link>

                        <button 
                          type="button" 
                          // onClick={() => setActiveTab("User Details")}
                          className="xs:w-[130px] lg:w-[150px] font-normal border-primary bg-[#fff] rounded-md text-primary xs:text-sm lg:text-base p-2 border border-solid"
                          // style={{ width: "150px" }}
                        >
                          Edit Contest
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) 
              : <div>No Live Contest </div>
            }

          </div>
        </div>


      </div>

      <div className=" xs:mt-10 lg:mt-20 xs:mx-2 md::mx-auto">
        <Table2 data={data}  columns={columns}/>
      </div>

    </div>
  )
}

export default ManageContest