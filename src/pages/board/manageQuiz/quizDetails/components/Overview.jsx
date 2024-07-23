import React, { useState } from 'react'
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'


import { copyTextToClipboard } from '../../../../../helper'


const Overview = ({ quizDetails }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  
  console.log(quizDetails, "samba")

  const questions = quizDetails?.questions;
  console.log(questions, "mask")

    // Ensure questions is defined and not empty
    if (!questions || questions.length === 0) {
      return <div>Loading...</div>;
    }


  const currentQuestion = questions[currentQuestionIndex];

  const handleSkip = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions?.length);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);
    setIsCorrect(option.answer === 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions?.length);
  };


  return (
    <div className='p-4'>

    <div className='flex xs:flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-8 bg-[#fff] p-3 h-full rounded-md'>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[202px]'>
            <p className='font-medium text-lg text-[#000] '>Status</p>
            <div className='mt-5 gap-2 flex flex-col'>
              <p className='font-normal font-mont_alt text-sm'>Quiz will start:</p>
              <p className='text-[#027315] font-mont_alt font-semibold text-base'>{new Date(quizDetails?.start_date).toDateString() || "Not Available"}</p>
            </div>
            <div className='mt-5'>
              <p className='font-normal font-mont_alt  text-sm'>Quiz will end:</p>
              <p className='text-[#027315] font-mont_alt font-semibold text-base'>{new Date(quizDetails?.end_date).toDateString() || "Not Available"}</p>
            </div>
          </div>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[202px]'>
            <p className='font-medium text-lg text-[#000] font-mont_alt'>Takers</p>
            <div className='mt-5 gap-2 flex flex-col'>
              <p className='font-normal font-mont_alt text-sm'>Total Takers: </p>
              <p className='text-[#027315] font-mont_alt font-semibold text-base'>{quizDetails?.participants?.length || 0} Entries</p>
            </div>
            <div className='mt-5'>
              <p className='font-normal text-sm'>Valid Takers</p>
              <p className='text-[#027315] font-mont_alt font-semibold text-base'>{quizDetails?.participants?.length || 0} Entries</p>
            </div>
          </div>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[90px]'>
            <p className='font-medium text-base text-[#000] '>Live Link</p>
            <div className='mt-2 gap-2 flex flex-col cursor-pointer' onClick={() => copyTextToClipboard(" https://noa.gov.ng/quiz")}>
              <p className='font-normal text-xs text-NEUTRAL-_700'>https://noa.gov.ng/quiz</p>
            </div>
          </div>
        </div>

        <div className='bg-[#fff] flex flex-col lg:w-[700px] p-4 lg:h-auto lg:my-14 rounded-md'>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex items-center gap-6'>
              {questions?.map((_, index) => (
                <div
                  key={index}
                  className={`w-[57px] h-[19px] rounded-[30px] ${index <= currentQuestionIndex ? 'bg-[#00AA55]' : 'bg-[#C4C4C4]'}`}
                ></div>
              ))}
            </div>
            <div className='bg-[#FFF] w-full rounded-lg flex flex-col py-4 px-5'>
              <p onClick={handleSkip} className='flex justify-end underline font-mont_alt text-[#00AA55] text-[20px] font-semibold cursor-pointer'>Skip</p>
              <div className='flex justify-center items-center flex-col'>
                <p className='font-manja text-[#4A4A4A] font-semibold'>Question {currentQuestionIndex + 1}</p>
                <p className='text-[#4A4A4A] font-manja text-[19px] mt-[51px] mb-10'>{currentQuestion.body}</p>
                <div className='flex flex-col gap-6 w-full'>
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleOptionSelect(option)}
                      className={`border-[#1935CA] w-full rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181] cursor-pointer ${
                        selectedOption === option.id ? (isCorrect ? 'bg-[#D1FAE5]' : 'bg-[#FFCDD2]') : ''
                      }`}
                    >
                      <p className={`text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff] ${selectedOption === option.id ? (isCorrect ? 'text-[#00AA55]' : 'text-[#D32F2F]') : ''}`}>
                        {option.body}
                      </p>
                    </div>
                  ))}
                  {selectedOption && (
                    <div className='mt-4'>
                      {isCorrect ? (
                        <p className='text-[#00AA55] font-manja text-[19px]'>Correct!</p>
                      ) : (
                        <p className='text-[#D32F2F] font-manja text-[19px]'>Incorrect. Please try again.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className='flex items-center justify-between my-[32px]'>
                {currentQuestionIndex > 0 && (
                  <div
                    onClick={() => setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
                    className='flex items-center w-[130px] cursor-pointer h-[69px] rounded-lg p-3 gap-2 bg-[#D1FAE5]'
                  >
                    <FaArrowLeftLong className='text-[#00AA55] text-[20px]' />
                    <p className='font-poppins text-[#00AA55] font-semibold text-[20px]'>Previous</p>
                  </div>
                )}
                <div
                  onClick={handleNext}
                  className='flex cursor-pointer w-[130px] h-[69px] justify-center items-center gap-2 p-3 rounded-lg bg-[#00AA55]'
                >
                  <p className='font-poppins text-[#fff] font-semibold text-[20px]'>Next</p>
                  <FaArrowRightLong className='text-[#fff] text-[20px]' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default Overview