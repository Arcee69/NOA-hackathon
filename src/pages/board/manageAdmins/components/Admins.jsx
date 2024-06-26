import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table2 from '../../../../components/TableTwo'
import TableMenu from '../../../../components/TableMenu'
import firstJudge from "../../../../assets/images/judge.png"
import { useSelector } from 'react-redux'
import { api } from '../../../../services/api'
import { toast } from 'react-toastify'

const Admins = () => {

    const allAdmins = useSelector(state => state.admins)
    console.log(allAdmins, "allAdmins")
    const adminData = allAdmins?.data?.data?.user
    console.log(adminData, "adminData")


    const menuOptions = [<Link to="/manage-admins/admins-info">View</Link>]

    const columns = [
        { 
            Header: "Admins", 
            accessor: "admin" 
        },
        {   Header: "Date Added", 
            accessor: "date" 
        },
        { 
            Header: "Role", 
            accessor: "role" 
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

      const handleEnableDisable = async (id, status) => {
        console.log(id, status, "ovov")
        const data = {
            "status": status === 1 ? false : true,
            "user_id" : id
        }
        await api.post("/api/user/enable-disable", data)
        .then((res) => {
            console.log(res, 'res')
            toast("Updated Successfully", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
        .catch((err) => {
            console.log(err, "err")
            toast("Error", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
      }



    const rows = adminData?.map((admins) => ({
        admin:  
            <div className='flex flex-row gap-2' >
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium text-[#1D2939]'>{admins.name}</p>
                    <p className='text-sm font-normal text-[#667085]'>{admins.email}</p>
                </div>
            </div>,
            date: <div className='text-base font-semibold text-[#333333]'>{new Date(admins?.created_at)?.toDateString() }</div>,
            role: <div className='text-base font-semibold text-[#333333]'>{admins.role}</div>,
            status: <div className={`${admins.status === "1" ? "text-[#027315]" : "text-[#f00]"} text-base font-semibold`}>{admins?.status === "1" ? "Active" : "Inactive"}</div>,
            action: 
                <TableMenu
                    options={[
                        // <Link to="/manage-admins/admins-info" state={admins}>View</Link>,
                        <p onClick={() => handleEnableDisable(admins.id, admins.status)} className={`${admins?.status === "1" ? "text-[#f00]" : "text-[#027315]"}`}>{admins?.status === "1" ? "Deactivate" : "Activate"}</p>
                    ]} 
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

export default Admins