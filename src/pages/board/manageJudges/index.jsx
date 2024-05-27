import React from 'react'
import addIcon from "../../../assets/icons/add.svg"
import Judges from './components/Judges'

const ManageJudges = () => {
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Judges</h1>
            <div className='flex gap-3'>
                {/* <button type='button' className='bg-primary flex justify-center gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'>
                    <img src={addIcon} alt="add-icon" />
                    <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Create Campaign</p>
                </button>  h-[879px] */}
                {/* <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[150px] xs:p-2 md:p-0 md:w-[257px] h-[56px]'>
                    <img src={addIcon} alt="add-icon" />
                    <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
                </button> */}
            </div>
        </div>
        <Judges />
    </div>
  )
}

export default ManageJudges