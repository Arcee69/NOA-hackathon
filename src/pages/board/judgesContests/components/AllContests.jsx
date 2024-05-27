import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ContestImage from "../../../../assets/images/contest.png"
import { api } from '../../../../services/api'
import { appUrls } from '../../../../services/urls'

const AllContests = () => {
    const [allContests, setAllContests] = useState([])

    const fetchContests = async() => {
        await api.get(appUrls?.GET_ALL_CONTEST_URL)
        .then((res) => {
            // console.log(res?.data?.contest_photo, "Linda")
            setAllContests(res?.data)
        })
        .catch((err) => {
            console.log(err, "err")
        })
    };

    useEffect(() => {
        fetchContests()
    }, [])

  return (
    <div className='md:p-4 '>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            {allContests && allContests.map((items) => (
                <Link to='/judges-contests/:id' state={items}>
                    <div className='lg:w-[458px] lg:h-[242px] bg-[#fff] p-8 gap-5 flex flex-col lg:flex-row lg:items-center' key={items?.id}>
                        <img src={items?.contest_photo} alt='contest-img' className='lg:w-[180px] h-[151.2px]'/>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium text-xl text-[#000]'>{items?.category}</p>
                            <p className='text-GREEN-_100 text-xs'>300 Entries</p>
                            <p className='text-NEUTRAL-_1300 text-xs'>Deadline: <span>{items?.end_date}</span></p>
                            <div className='flex flex-col gap-1 mt-5'>
                                <p className='text-NEUTRAL-_1300 text-xs'>Contest Creator</p> 
                                <p className='text-primary text-xs'>{items?.sponsor_name}</p> 
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>

    </div>
  )
}

export default AllContests