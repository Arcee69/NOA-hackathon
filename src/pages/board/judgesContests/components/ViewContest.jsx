import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Grass from "../../../../assets/images/grass.png"
import Sunset from "../../../../assets/images/sunset.png"
import addIcon from "../../../../assets/icons/add.svg"
import Table2 from '../../../../components/TableTwo'
import ModalPop from '../../../../components/modal/modalPop'
import EntriesDetails from './EntriesDetails'

const ViewContest = () => {
    const [openModal, setOpenModal] = useState(false);
    const [entries, setEntries] = useState(null)

    const { state } = useLocation()
    console.log(state, "old")

    const entriesData = [
        {
            id: 1,
            name: "Mayowa Cole",
            contestant_photo: Grass,
            email: "mayowacole@gmail.com",
            judgement: 30,
            entries: 1,
            votes: 30,
            creativity: 10,
            clarity: 10,
            technique: 10,
            dateCreated: "04/04/23",
            status: "Judged"
        },
        {
            id: 2,
            name: "Ololade Asake",
            contestant_photo: Sunset,
            email: "ololadeasake@gmail.com",
            judgement: 23,
            entries: 1,
            votes: 10,
            creativity: 10,
            clarity: 10,
            technique: 10,
            dateCreated: "02/04/23",
            status: "Pending"
        }
    ]

    const columns = [
        { 
            Header: "Contestants", 
            accessor: "contestants" 
        },
        {   Header: "Judgement", 
            accessor: "judgement" 
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

      const data = entriesData?.map((data) => ({
        contestants:  
            <div className='flex flex-row gap-2 items-center' onClick={() => {setOpenModal(true), setEntries(data)}} >
                <img src={data?.contestant_photo} alt='contest-image' className='w-14 h-14'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium text-[#1D2939]'>{data?.name}</p>
                    <p className='text-sm font-normal text-[#667085]'>{data?.email}</p>
                </div>
            </div>,
        judgement: <div className='text-base font-semibold text-[#333333]'>{data?.judgement}</div>,
        entries: <div className='text-base font-semibold text-[#333333]'>{data?.entries}</div>,
        dateCreated: <div className='text-base font-semibold text-[#333333]'>{data?.dateCreated}</div>,
        status: <div className={`${data?.status === "Judged" ? "text-[#0098FA]" : "text-[#FFC440]"} text-base font-semibold`}>{data?.status}</div>,
    }
    
    ))  

    const criteria = ["Glowing", "Creative", "beauty" ]

    return (
        <div className='p-4 overflow-x-hidden'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Judges</h1>
                <div className='flex gap-3'>
                    <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
                        <img src={addIcon} alt="add-icon" />
                        <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
                    </button>
                </div>
            </div>
            <div className='w-full my-5'>
                <p className='font-medium text-2xl'>{state?.category}</p>
            </div>
            <div className='w-full flex flex-col gap-4 bg-[#fff] mt-5 p-8 rounded'>
                <div className='w-full gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-3'>
                    <div className='w-12/12'>
                        <img src={state?.contest_photo} alt='Contest-img' className='w-full h-[250px]'/>
                    </div>
                    <div className='w-12/12 flex flex-col gap-4'>
                        <p className='font-medium text-xl'>{state?.category}</p>
                        <p className='font-medium text-base'>{state?.contest_description}</p>
                        <div className='flex flex-col mt-4'>
                            <p className='text-[#686868] text-sm font-semibold'>Judging Criteria</p>
                            <div className='w-full flex gap-6 mt-3'>
                                {criteria.map((items) => (
                                    <div key={items} className='w-12/12 text-center rounded-full p-4 bg-[#c720361f]'>
                                        <p className='text-[#C72036] text-xs font-medium'>{items}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className='text-GREEN-_100 text-xs'>300 Entries</p>
                        <p className='text-NEUTRAL-_1300 text-xs'>Deadline: <span>{state?.end_date}</span></p>
                    </div>
                    <div className='w-12/12 flex flex-col'>
                        <p className='text-[#686868]'>Contest Creator</p>
                        <p className='text-sm'>{state?.sponsor_name}</p>
                    </div>
                </div>

                <div className='mt-14 flex flex-col gap-6'>
                    <p className='text-[#A5A5A5]'>Entries</p>
                    <Table2 data={data} columns={columns} />
                </div>
            </div>
            
            <ModalPop isOpen={openModal}>
                <EntriesDetails handleClose={() => setOpenModal(false)}  entries={entries}/>
            </ModalPop>

        </div>
    )
}

export default ViewContest