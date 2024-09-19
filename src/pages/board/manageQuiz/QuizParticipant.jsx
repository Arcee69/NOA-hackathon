import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import Table2 from '../../../components/TableTwo';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';
import { MdKeyboardBackspace } from 'react-icons/md';

const ITEMS_PER_PAGE = 10;  // Set the number of items per page

const QuizParticipant = () => {
    const [allParticipants, setAllParticipants] = useState([])
    const [page, setPage] = useState(1)
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1)


    const { state } = useLocation() 
    const navigate = useNavigate()

    const fetchQuizParticipantsData = async() => {
        await api.get(appUrls?.GET_PARTICIPANT_URL + `/${state?.id}`)
        .then((res) => {
          console.log(res, "data")
          setAllParticipants(res?.data?.data)
          setTotalNumberOfPages(Math.ceil(res?.data?.data.length / ITEMS_PER_PAGE));
        })
        .catch((err) => {
          console.log(err, "err")
        })
      }
    
    useEffect(() => {
        fetchQuizParticipantsData();
    }, [])

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const currentPageParticipants = allParticipants?.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    console.log(allParticipants, "allParticipants")


    const columns = [
        { 
            Header: "Name", 
            accessor: "name" 
        },
        {   Header: "Phone Number", 
            accessor: "phone" 
        },
        { 
            Header: "Email", 
            accessor: "email" 
        },
        {   
            Header: "Score", 
            accessor: "score" 
        },
        { 
            Header: "Amount Won", 
            accessor: "amount" 
        },
        // { 
        //     Header: "Date", 
        //     accessor: "date" 
        // },
        { 
            Header: "Time spent", 
            accessor: "time" 
        },
      ];


      const data = currentPageParticipants?.map((data) => ({ 
        name:  
            <div className='flex flex-row gap-2 items-center' >
                <p className='text-sm font-medium font-mont_alt capitalize text-[#1D2939]'>{data?.name}</p>
            </div>,
        phone: <div className='text-base font-medium font-mont_alt capitalize text-[#1D2939]'>{data?.phone}</div>,
        email: <div className='text-base font-medium font-mont_alt capitalize text-[#1D2939]'>{data?.email}</div>,
        score: <div className='text-base font-medium font-mont_alt capitalize text-[#1D2939]'>{data?.score}</div>,
        amount: <div className='text-base font-medium font-mont_alt capitalize text-[#1D2939]'>{`₦${data?.amount_won || 0}`}</div>,
        time: <div className='text-base font-medium font-mont_alt capitalize text-[#1D2939]'>{data?.time_spent}</div>,
    }
    
    )) 

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(allParticipants);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
        XLSX.writeFile(workbook, "participants.xlsx");
    };


  return (
    <div className='p-4'>
         <div className='flex items-center gap-2' onClick={() => navigate(-1)}>
            <MdKeyboardBackspace className="text-[#000]"/>
            <p className='text-sm text-[#000]'>Back</p>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Quiz Participants</h1>
            <button
              className='rounded-lg p-2 bg-[#027315] flex items-center justify-center w-[100px] h-[48px]'
              type='button'
              onClick={exportToExcel}
            >
              <p className='text-[#fff]  font-mont_alt text-sm'>Export CSV</p>
            </button>
        </div>
        <div className='bg-[#fff] rounded-xl flex flex-col my-10 gap-5 p-8'>
            <h2 className='text-[#000] text-xl font-semibold font-mont_alt'>Participants</h2>
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

export default QuizParticipant