import React from 'react'
import GamePad from '../../../../assets/images/Gamepad.svg'
import Typewriter from 'typewriter-effect';
import { CgArrowLongRight } from "react-icons/cg"
import { useNavigate } from 'react-router-dom';
import Logo from "../../../../assets/icons/Educontest.svg"

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex xs:justify-center md:justify-between'>
        <div className='xs:hidden md:block'>
          <img src={GamePad} alt="game-image" className='md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]'/>
        </div>
        <div className='flex flex-col justify-center text-center'>
        <div className='w-full flex justify-center'>
                    <img
                        src={Logo}
                        alt="educontest-logo"
                        className="cursor-pointer mt-1 w-[200px] h-[50px] xs:hidden md:block"
                        onClick={() => navigate('/')}
                    />
                </div>
          {/* <h3 className='w-full xs:text-base xs:h-[24px] lg:h-[36px] lg:text-2xl text-YELLOW-_100 font-semibold'>EduContest</h3> */}
          <p className='xs:text-2xl xs:h-[52px] xs:mt-2.5 lg:w-[1012px] lg:leading-[130%] lg:h-[133px] lg:text-[56px] font-semibold text-NEUTRAL-_300'>
            Create your own Contest, <br /> own your process
            {/* <span> */}
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Knowledge").pauseFor(2000).deleteAll().loop(true).start()
              }} 
            /> */}
            {/* </span> */}
          </p>
          <p className='xs:flex md:flex xs:text-sm lg:text-xl lg:w-[866px] mx-auto lg:h-[48px] xs:mt-14 lg:mt-8 text-center font-normal text-NEUTRAL-_400 leading-6'>
            With EduContest, you have the power to design and customize your contests, 
            from setting the rules to judging the entries. 
            Take your contests to the next level and unleash your creativity with EduContest. 
            Start creating now!
          </p>
          <button onClick={() => navigate("/login")} className='bg-primary flex justify-center items-center gap-2 rounded-lg p-3 mx-auto mt-14 text-[#fff] text-center w-[277px] h-[54px] text-lg font-medium'>
            Get Started <CgArrowLongRight />
          </button>
        </div>
        <div className='xs:hidden md:flex flex-col justify-end'>
          <img 
            src={GamePad}
            alt="game-image"
            className='md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]'
          />
        </div>
    </div>
  )
}

export default Banner