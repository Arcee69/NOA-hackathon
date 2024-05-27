import React, { useState } from 'react'

import EducontestLogo from "../../assets/icons/Educontest.svg"
import ImageA from "../../assets/images/votingImage-a.png"
import ImageB from "../../assets/images/votingImage-b.png"
import ImageC from "../../assets/images/votingImage-c.png"
import ModalPop from '../../components/modal/modalPop'
import Voting from './component/Voting'
import Logo from "../../assets/icons/educontest-logo.svg"
import Power from "../../assets/images/power.png"


const Vote = () => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState();

    const entries = [
        {
            id: 1,
            entryImage: ImageA,
            imageAlt: "Entry-pic"
        },
        {
            id: 2,
            entryImage: ImageB,
            imageAlt: "Entry-pic"
        },
        {
            id: 3,
            entryImage: ImageC,
            imageAlt: "Entry-pic"
        },
        {
            id: 4,
            entryImage: ImageA,
            imageAlt: "Entry-pic"
        },
        {
            id: 5,
            entryImage: ImageB,
            imageAlt: "Entry-pic"
        },
        {
            id: 6,
            entryImage: ImageC,
            imageAlt: "Entry-pic"
        },
    ]

    // h-[1070px] md:h-[1000px]

  return (
    <div className='w-full bg-[#F8F8F8]'>
        <div className='w-full flex flex-col items-center '>
            <img src={EducontestLogo} alt='educontest-logo' className='mt-16'/>
            <div className='w-full md:w-[600px] mb-5 bg-[#fff] mt-20 p-6 flex flex-col items-center gap-5 mt-2 border border-[#D0D5DD] rounded-lg'>
                <h2 className='text-2xl text-[#475467] font-medium'>Vote For Your Fave</h2>
                <p className='text-base text-center'>
                    Vote now for your favorite photos in our contest! 
                    Your vote counts towards helping determine the winners, 
                    who will be featured on our website and social media. 
                    Thank you for participating!
                </p>
                <div className='grid mt-12 gap-4 grid-cols-2 md:grid-cols-3'>
                    {
                        entries.map((entry) => (
                            <div key={entry?.id}>
                                <img src={entry?.entryImage} alt={entry?.imageAlt} className='cursor-pointer w-[180px] h-[180px]' onClick={() => {setOpenModal(true), setData(entry)}}/>

                            </div>
                        ))
                    }

                </div>
                <div className='w-full flex items-center border-t border-[#D1D3D4]'>
                    <button className='w-[300px] flex p-4 text-sm md:text-base justify-center border-[#D1D3D4] text-[#000] font-medium border-r'>Terms and Conditions</button>
                    <button className='w-[300px] flex p-4 justify-center items-center text-NEUTRAL-_1200'>
                        <img src={Logo} alt="logo" className='w-[38px] h-[40px]'/> 
                        <img src={Power} alt="logo" className=''/> 
                    </button>
                </div>
            </div>
        </div>

        <ModalPop isOpen={openModal}>
            <Voting handleClose={() => setOpenModal(false)} data={data} />
        </ModalPop>

    </div>
  )
}

export default Vote