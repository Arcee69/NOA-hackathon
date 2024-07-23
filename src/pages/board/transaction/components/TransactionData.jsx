import React, { useState } from 'react'

import Table2 from '../../../../components/TableTwo'



const TransactionData = ({ allTransactions, totalNumberOfPages, handlePaginationChange, page}) => {

    console.log(allTransactions, "allTransactions")


    const columns = [
        { 
            Header: "Phone", 
            accessor: "phone" 
        },
        { 
            Header: "Reference", 
            accessor: "reference" 
        },
        { 
            Header: "Amount", 
            accessor: "amount" 
        },
        { 
            Header: "Participant Id", 
            accessor: "participant" 
        },
        {   Header: "Date Added", 
            accessor: "date" 
        },
        {   
            Header: "Status", 
            accessor: "status" 
        },
       
      ]



    const rows = allTransactions?.map((item) => ({
        phone:  
            <div className='flex flex-row gap-2' >
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium text-[#1D2939]'>{item.customer_phone}</p>
                </div>
            </div>,
            reference: <div className='text-base font-semibold text-[#333333]'>{item.payment_reference}</div>,
            amount: <div className='text-base font-semibold text-[#333333]'>{item.amount}</div>,
            participant: <div className='text-base font-semibold text-[#333333]'>{item.participant_id.slice(0, 8)}</div>,
            date: <div className='text-base font-semibold text-[#333333]'>{new Date(item?.created_at)?.toDateString() }</div>,
            status: <div className={`${item.status === "success" ? "text-[#027315]" : "text-[#f00]"} text-base font-semibold`}>{item?.status === "success" ? "Success" : "Failed"}</div>,
            
        }
    
    ))

  return (
    <div className='mt-14 bg-[#fff] rounded-md'>
        <Table2 
            data={rows}
            columns={columns}
            page={page}
            totalNumberOfPages={totalNumberOfPages}
            handlePaginationChange={handlePaginationChange}
        />
    </div>
  )
}

export default TransactionData