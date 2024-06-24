import React, { useEffect } from 'react'
import addIcon from "../../../assets/icons/add.svg"
import Admins from './components/Admins'
import { useDispatch } from 'react-redux'
import { fetchAllAdmins } from '../../../features/board/admin/getAdminSlice'
import { useNavigate } from 'react-router-dom'

const ManageAdmins = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllAdmins())
    }, [])
    

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Admin</h1>
            <div className='flex gap-3'>
                <button onClick={() => navigate('/manage-admin/create-admin')} type='button' className='bg-[#027315] flex justify-center gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'>
                    <img src={addIcon} alt="add-icon" />
                    <p className='font-semibold font-mont_alt xs:text-sm lg:text-base text-[#fff]'>Add Admin</p>
                </button>  
          
            </div>
        </div>
        <Admins />
    </div>
  )
}

export default ManageAdmins