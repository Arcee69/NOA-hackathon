import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import addIcon from "../../../../assets/icons/add.svg"
import Profile from "../../../../assets/images/firstJudgeDetails.png"
import ContestA from "../../../../assets/images/contest-a.png"
import ContestB from "../../../../assets/images/contest-b.png"
import Table2 from '../../../../components/TableTwo'
import TableMenu from '../../../../components/TableMenu'

const JudgesInfo = () => {

    const { state } = useLocation()

    console.log(state, "zazoo");

    const judgesData = [
        {
            id: 1,
            name: "Meshack Ojodu",
            email: "Ojodumeshack@gmail.com",
            criteriaA: 10,
            criteriaB: 10,
            criteriaC: 5,
            total: 25,
        },
        {
            id: 2,
            name: "Meshack Ojodu",
            email: "Ojodumeshack@gmail.com",
            criteriaA: 5,
            criteriaB: 5,
            criteriaC: 0,
            total: 11,
        },
        {
            id: 3,
            name: "Clarity Oshodi",
            email: "clarityoshodi@gmail.com",
            criteriaA: 10,
            criteriaB: 10,
            criteriaC: 10,
            total: 30,
        },

    ];


    const columns = [
        { 
            Header: "Entry", 
            accessor: "entry" 
        },
        {   Header: "Criteria 1", 
            accessor: "criteriaA" 
        },
        { 
            Header: "Criteria 2", 
            accessor: "criteriaB" 
        },
        {   
            Header: "Criteria 3", 
            accessor: "criteriaC" 
        },
        { 
            Header: "Total", 
            accessor: "total" 
        },
        { 
            Header: "Action", 
            accessor: "action" 
        },
      ]
 
      const rows = judgesData.map((judges) => ({
        entry:  
            <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium text-[#1D2939]'>{judges.name}</p>
                <p className='text-sm font-normal text-[#667085]'>{judges.email}</p>
            </div>,
        criteriaA: <div className='text-base font-semibold text-[#333333]'>{judges.criteriaA}</div>,
        criteriaB: <div className='text-base font-semibold text-[#333333]'>{judges.criteriaB}</div>,
        criteriaC: <div className='text-base font-semibold text-[#333333]'>{judges.criteriaC}</div>,
        total: <div className='text-base font-semibold text-[#333333]'>{judges.total}</div>,
        action: 
                <TableMenu
                    options={[<Link to="/manage-judges/judges-info" state={judges}>View</Link>]} 
                />
    }
    
    ))

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Judges</h1>
            <div className='flex gap-3'>
                {/* <button type='button' className='bg-primary flex justify-center gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'>
                    <img src={addIcon} alt="add-icon" />
                    <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Create Campaign</p>
                </button>  h-[879px] */}
                <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
                    <img src={addIcon} alt="add-icon" />
                    <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
                </button>
            </div>
        </div>
        <div className='mt-14 bg-[#fff] h-[316px] rounded-md'>
            <div className='flex justify-end text-sm font-medium text-[#000] p-3'>Status: <span className='ml-2 text-sm text-[#666262]'> 🔵Active</span></div>
            <div className='p-3 flex justify-between'>
                <div className='flex gap-4'>
                    <img src={Profile} alt='judge-profile' className='w-[200px] h-[200px]' />
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-base text-[#000] font-medium'>Details</p>
                            <p className='text-2xl font-semibold text-[#000]'>{state?.name}</p>
                            <p className='text-[#686868] text-base font-medium'>{state?.email}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-[#000] font-semibold'>Assigned Contest</p>
                            <div className='flex gap-1'>
                                <img src={ContestA}  alt='first-contest' className='w-12 h-12'/>
                                <img src={ContestB}  alt="second-contest" className='w-12 h-12'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

        <div className='mt-16'>
            <p className='text-2xl text-[#000] font-semibold'>Submission</p>
            <div className='mt-4 bg-[#fff] rounded-md'>
                <Table2 
                    data={rows}
                    columns={columns}
                />

            </div>
        </div>
    </div>
    
  )
}

export default JudgesInfo