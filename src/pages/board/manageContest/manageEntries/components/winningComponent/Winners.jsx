import React from 'react'
import BasicTable from '../../../../../../components/Table';

const Winners = () => {

    const data = [
        {
          id: 1,
          participant: "Mayowa Cole",
          participantEmail: "mayowacole@gmail.com",
          votes: 30,
          entries: 1,
          dateCreated: "04/04/23",
          status: "Approved"
        },
        {
          id: 2,
          participant: "Samuel Perry",
          participantEmail: "samuelperry@gmail.com",
          votes: 20,
          entries: 10,
          dateCreated: "04/04/23",
          status: "Pending"
        },
    
      ];
    
      const column = [
        {
          id: 1,
          name: "Name"
        },
        {
          id: 2,
          name: "Votes"
        },
        {
          id: 3,
          name: "Entries"
        },
        {
          id: 4,
          name: "Date Created"
        },
        {
          id:5,
          name: "Status"
        }
      ]

  return (
    <div className='bg-[#fff] rounded-b-md'>
        <BasicTable data={data} column={column} />
    </div>
  )
}

export default Winners