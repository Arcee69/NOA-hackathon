import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'

import { copyTextToClipboard } from '../../../../../../helper'

import Zones from "../../../../../../assets/images/zones.png"

const QuizView = () => {

  const quiz = useSelector(state => state.createQuiz)
  console.log(quiz, "pastor")
  const quizData = quiz?.data?.data?.data
  const quizId = quiz?.data?.data?.data

  return (
    <div className='flex flex-col items-center'>
      <p className='text-[#000] text-2xl font-semibold mt-8'>Your Quiz is ready</p>
      <p className='text-[#000] text-base w-8/12 text-center font-mont_alt font-semibold mt-7'>
        Your Quiz is good to go! You can share the link with your friends to participate to win prizes.
      </p>
      <div className='md:w-8/12 flex flex-col gap-4 mt-10'>
        <p className='font-semibold text-[#000]  font-mont_alt text-base'>Quiz Link</p>
        <div className='bg-[#fff] flex justify-center p-10 border border-[#D0D5DD] rounded-lg'>
          <p 
            className='cursor-pointer text-[#A5A5A5]' 
            onClick={() => copyTextToClipboard("https://noa.gov.ng/quiz")}
          >
           https://noa.gov.ng/quiz
            {/* http://localhost:5173/contest-page */}
          </p>
        </div>
      </div>
      <div className='w-full w-10/12 h-[366px] mb-5 bg-[#fff] mt-20 p-6 flex items-start gap-5 mt-2 border border-[#D0D5DD] rounded-lg'>
        <div className='bg-[#add8e6] p-2 w-4/12 flex items-center justify-center'>
          <img src={quizData?.image} alt='Zones' className='h-[211px]'/>
        </div>
        <div className='flex flex-col gap-6 w-8/12'>
          <div className='flex flex-col gap-1'>
            <p className='font-mont font-bold text-[32px] text-[#000]'>{quizData?.title}</p>
            <div className='flex items-center hidden gap-2'>
                <p className='text-base text-[#DC6803] font-manja font-bold'>605k Takers</p>
                <p className='text-base text-[#5F647C] font-manja font-bold'>10 Questions</p>
                <p className='text-base text-[#F0C046] font-manja font-bold'>{quizData?.duration_of_quiz} mins</p>
                <p className='text-base text-[#00AA55] font-manja font-bold'>Gifts</p>
            </div>
          </div>
          <p className='font-mont_alt text-[#475467] text-base '>
            {quizData?.desc}
          </p>
        </div>
  
      </div>
    </div>
  )
}

export default QuizView