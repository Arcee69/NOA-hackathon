import React, { useState } from 'react'
import PaginationControlled from '../../../../../../components/Pagination'
import Grass from "../../../../../../assets/images/grass.png"
import Sunset from "../../../../../../assets/images/sunset.png"
import ModalPop from '../../../../../../components/modal/modalPop'
import ViewEntriesDetails from './ViewEntriesDetails'

const Entry = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(null)


  const entryData = [
    {
      id: 1,
      image: Grass,
      name: "Mayowa Cole",
      email: "mayowacole@gmail.com",
      entryDate: "4rd May, 2023 03:30pm",
      votes: 30
    },
    {
      id: 2,
      image: Sunset,
      name: "Samuel Perry",
      email: "samuelperry@gmail.com",
      entryDate: "4rd May, 2023 03:30pm",
      votes: 10
    },
  ]


  return (
    <div className='bg-[#fff] p-2 rounded-b-md'>
       <div className='w-full h-full xs:p-4 md:p-0  lg:p-2'>
          <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:p-0 md:p-4 lg:p-1  xs:mx-4  xs:gap-4 md:gap-2'>
              {
                  entryData.length > 0 ? entryData.map((data) => (
                      <div key={data?.id} className='xs:w-full md:w-full lg:w-[209px] lg:h-[263px] bg-white' onClick={() => {setOpenModal(true); setData(data)}}>
                      <img src={data?.image} alt="champions" className='xs:w-full xs:h-[300px] md:w-[300px] md:h-[300px] lg:w-[209px] lg:h-[205px] rounded-t-xl' loading='lazy'/>
                      <div className='p-3 flex flex-col gap-1'>
                          <div className='xs:text-base md:text-xl text-black font-medium'>{data?.name}</div>
                          <div className="font-medium text-NEUTRAL-_700 text-sm mb-1">{data?.email}</div>
                      </div> 
                  </div>
                  )) 
                  : 
                  <div className='flex flex-row justify-center text-center text-3xl font-bold '>Not Available</div>
              } 
          </div>
          <div className='flex justify-end my-5 mr-3'>
              <PaginationControlled 
                  // page={pageNumber}
                  // totalNumberOfPages={totalNumberOfPages}
                  // handlePaginationChange={handlePaginationChange}
              />
          </div>
        </div>
        <ModalPop isOpen={openModal}>
          <ViewEntriesDetails handleClose={() => setOpenModal(false)}  data={data}/>
        </ModalPop>
    </div>

   
  )
}

export default Entry