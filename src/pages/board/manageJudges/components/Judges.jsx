import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table2 from '../../../../components/TableTwo'
import TableMenu from '../../../../components/TableMenu'
import firstJudge from "../../../../assets/images/judge.png"

const Judges = () => {
    // const [judgesData, setJudgesData] = useState();

    const judgesData = [
        {
            id: 1,
            image: firstJudge,
            name: "Meshack Ojodu",
            email: "Ojodumeshack@gmail.com",
            assigned: 2,
            ongoing: 1,
            completed: 1,
            status: "Active"
        },
        {
            id: 1,
            image: firstJudge,
            name: "Clarity Oshodi",
            email: "clarityoshodi@gmail.com",
            assigned: 1,
            ongoing: 1,
            completed: 0,
            status: "Inactive"
        },

    ];

    const menuOptions = [<Link to="/manage-judges/judges-info">View</Link>]

    const columns = [
        { 
            Header: "Judges", 
            accessor: "judge" 
        },
        {   Header: "Assigned", 
            accessor: "assigned" 
        },
        { 
            Header: "Ongoing", 
            accessor: "ongoing" 
        },
        {   
            Header: "Completed", 
            accessor: "completed" 
        },
        { 
            Header: "Status", 
            accessor: "status" 
        },
        { 
            Header: "Action", 
            accessor: "action" 
        },
      ]



    const rows = judgesData.map((judges) => ({
        judge:  
            <div className='flex flex-row gap-2' >
                <img src={firstJudge} alt='judges' className='w-14 h-14'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium text-[#1D2939]'>{judges.name}</p>
                    <p className='text-sm font-normal text-[#667085]'>{judges.email}</p>
                </div>
            </div>,
        assigned: <div className='text-base font-semibold text-[#333333]'>{judges.assigned}</div>,
        ongoing: <div className='text-base font-semibold text-[#333333]'>{judges.ongoing}</div>,
        completed: <div className='text-base font-semibold text-[#333333]'>{judges.completed}</div>,
        status: <div className='text-base font-semibold text-[#333333]'>{judges.status}</div>,
        action: 
                <TableMenu
                    options={[<Link to="/manage-judges/judges-info" state={judges}>View</Link>]} 
                />
    }
    
    ))

  return (
    <div className='mt-14 bg-[#fff] rounded-md'>
        <Table2 
            data={rows}
            columns={columns}
        />
    </div>
  )
}

export default Judges