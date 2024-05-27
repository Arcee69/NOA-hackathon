import React from 'react'
import Empty from "../../../../assets/images/Empty.png"

const PendingInvites = () => {
  return (
    <div className='md:p-4'>
        <div className='w-full flex flex-col mt-10 gap-5 items-center'>
            <img src={Empty} alt='Empty' />
            <p className='font-medium text-base text-center w-8/12'>
                Currently, there are no contests available for judging. 
                Please check back later for upcoming contests or wait 
                for new contest invitations.
            </p>

        </div>
    </div>
  )
}

export default PendingInvites