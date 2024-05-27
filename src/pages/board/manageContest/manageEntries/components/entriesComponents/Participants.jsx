import React, { useEffect, useState } from 'react'
import Table2 from '../../../../../../components/TableTwo';
import { api } from '../../../../../../services/api';
import { appUrls } from '../../../../../../services/urls';

const Participants = () => {
  const [participantData, setParticipantData] = useState([])

  const fetchAllParticipant = async () => {
     await api.get(appUrls?.GET_ALL_PARTICIPANT_URL)
     .then((res) => {
      console.log(res, "dodo")
      setParticipantData(res?.data)
     })
     .catch((err) => {
      console.log(err, "dodo")
     })
  };

  useEffect(() => {
    fetchAllParticipant();
  }, [])

  console.log(participantData, "father")


    // const participantData = [
    //     {
    //       id: 1,
    //       participant: "Mayowa Cole",
    //       participantEmail: "mayowacole@gmail.com",
    //       votes: 30,
    //       entries: 1,
    //       dateCreated: "04/04/23",
    //       status: "Approved"
    //     },
    //     {
    //       id: 2,
    //       participant: "Samuel Perry",
    //       participantEmail: "samuelperry@gmail.com",
    //       votes: 20,
    //       entries: 10,
    //       dateCreated: "04/04/23",
    //       status: "Pending"
    //     },
    //     {
    //       id: 3,
    //       participant: "Emmanuel Perry",
    //       participantEmail: "emmanuelperry@gmail.com",
    //       votes: 20,
    //       entries: 10,
    //       dateCreated: "04/04/23",
    //       status: "Pending"
    //     },
    //     {
    //       id: 4,
    //       participant: "Barry Allen",
    //       participantEmail: "barryallen@gmail.com",
    //       votes: 20,
    //       entries: 10,
    //       dateCreated: "04/04/23",
    //       status: "Pending"
    //     },
    
    //   ];

      const columns = [
        { 
            Header: "Name", 
            accessor: "name" 
        },
        {   Header: "Votes", 
            accessor: "votes" 
        },
        { 
            Header: "Entries", 
            accessor: "entries" 
        },
        {   
            Header: "Date Created", 
            accessor: "date_created" 
        },
        { 
            Header: "Status", 
            accessor: "status" 
        },
      ];

      const data = participantData.map((data) => ({
        name:  
            <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium text-[#1D2939]'>{`${data?.first_name} ${data?.last_name}`}</p>
                <p className='text-NEUTRAL-_1100 text-sm'>{data?.email}</p>
            </div>,
        votes: <div className='text-base font-semibold text-[#333333]'>{data?.votes}</div>,
        entries: <div className='text-base font-semibold text-[#333333]'>{data?.entries}</div>,
        date_created: <div className='text-base font-semibold text-[#333333]'>{data?.date_created.toISOString()}</div>,
        status: <div className='text-base font-semibold text-[#333333]'>{data?.status}</div>,
    }
    
    ))  
    

  return (
    <div className='bg-[#fff] rounded-b-md'>
        <Table2 data={data} columns={columns} />
    </div>
  )
}

export default Participants