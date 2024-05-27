import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FiUser } from "react-icons/fi"
import { BiBriefcaseAlt } from "react-icons/bi"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Kyc.css"
import Game from "../../../../assets/images/project-b.png";

const Kyc = () => {
  const [showStudent, setShowStudent] = useState(false);
  const [showEducator, setShowEducator] = useState(false);

  const navigate = useNavigate()

  function handleMouseOver() {
    setShowStudent(true);
  }

  function handleMouseLeave() {
    setShowStudent(false);
  }

  function handleEducatorOver() {
    setShowEducator(true)
  }

  function handleEducatorLeave() {
    setShowEducator(false)
  }

  return (
    <div className="w-full h-full">
    <div className="flex lg:gap-24 lg:justify-center">
      <div className="xs:hidden lg:flex" >
        <img src={Game} alt="Contest" />
      </div>
      <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-[803px]'> {/*  h-[670px]  w-[854px] h-[800px]*/}
        <h2 className='font-semibold xs:mx-auto lg:mx-0 text-3xl text-[#000]'>Tell us a few things!</h2>
        <p className="text-[#8692A6] lg:w-[411px] font-normal xs:mx-auto xs:text-center lg:text-left lg:mx-0 text-base leading-6">To begin this journey tell us what type of account you'd be opening</p>

        <div 
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseLeave} 
          className={`${showStudent ? "bg-[#F4F8FB] border-[#1565D8]" : ""} cursor-pointer h-[108px] md:w-[426px] flex xs:gap-5 md:mx-auto lg:mx-0 items-center shadow-lg rounded p-5`}
          onClick={() => navigate("/register")}
        >
          <div class="bg-primary xs:w-14 xs:h-14 lg:w-12 lg:h-12 rounded-xl clip-muffin items-center flex"><FiUser className='text-[#fff] mx-auto w-5 h-5' /></div>
          <div className='flex flex-col '>
            <p className='text-base text-[#000] font-medium'>Student</p>
            <p className='text-sm text-NEUTRAL-_600'>Personal account to manage all your activities</p>
          </div>
          <div>
              <AiOutlineArrowRight />
          </div>
        </div>

        <div 
          onMouseOver={handleEducatorOver} 
          onMouseLeave={handleEducatorLeave} 
          className={`${showEducator ? "bg-[#F4F8FB] border-[#1565D8]" : ""} cursor-pointer h-[108px] md:w-[426px] flex xs:gap-5 md:mx-auto lg:mx-0 items-center shadow-lg rounded p-5`}
          onClick={() => navigate("/register")}
        >
          <div class=" border border-primary border-solid border-4 xs:w-14 xs:h-14 lg:w-12 lg:h-12 rounded-xl clip-muffin items-center flex"><BiBriefcaseAlt className='text-primary mx-auto w-5 h-5' /></div>
          <div className='flex flex-col '>
            <p className='text-base text-[#000] font-medium'>Educator</p>
            <p className='text-sm text-NEUTRAL-_600'>Personal account to manage all your activities</p>
          </div>
          <div>
              <AiOutlineArrowRight />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Kyc