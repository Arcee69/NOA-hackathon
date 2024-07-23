import React from 'react'
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useLocation } from 'react-router-dom'

import Logo from "../../../../../assets/icons/educontest-logo.svg"
import Power from "../../../../../assets/images/power.png"
import { copyTextToClipboard } from '../../../../../helper'
import ContestImage from "../../../../../assets/images/photo-contest.png"

const Overview = () => {

  const { state } = useLocation();

  console.log(state, "HELATH")

  const formValidationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is Required"),
    email: Yup.string().required("Full Name is Required"),
  })

  return (
    <div className='p-4'>
      <div className='flex xs:flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-8 bg-[#fff] p-3 h-full rounded-md'>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[202px]'>
            <p className='font-medium text-lg text-[#000] '>Status</p>
            <div className='mt-5 gap-2 flex flex-col'>
              <p className='font-normal text-sm'>Contest will start:</p>
              <p className='text-primary font-semibold text-base'>{state?.start_date}</p>
            </div>
            <div className='mt-5'>
              <p className='font-normal text-sm'>Contest will end:</p>
              <p className='text-primary font-semibold text-base'>{state?.end_date}</p>
            </div>
          </div>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[202px]'>
            <p className='font-medium text-lg text-[#000] '>Entries</p>
            <div className='mt-5 gap-2 flex flex-col'>
              <p className='font-normal text-sm'>Total Entries</p>
              <p className='text-primary font-semibold text-base'>{state?.max_entries || 0} Entries</p>
            </div>
            <div className='mt-5'>
              <p className='font-normal text-sm'>Valid Entries</p>
              <p className='text-primary font-semibold text-base'>0 Entries</p>
            </div>
          </div>
          <div className='flex flex-col bg-[#fff] border p-3 border-[#F8F8F8] border-8 rounded-md lg:w-[336px] h-[90px]'>
            <p className='font-medium text-base text-[#000] '>Live Link</p>
            <div className='mt-2 gap-2 flex flex-col cursor-pointer' onClick={() => copyTextToClipboard(" https://noa.gov.ng/hackathon")}>
              <p className='font-normal text-xs text-NEUTRAL-_700'> https://noa.gov.ng/hackathon</p> {/* http://localhost:5173/contest-page  */}
            </div>
          </div>
        </div>

        <div className='bg-[#fff] flex flex-col lg:w-[600px] lg:h-[738px] lg:mt-24 rounded-md'>
            <div className='w-full h-[50px] flex  border-b border-[#D1D3D4]'>
              <button className='w-[300px] flex p-4 justify-center border-[#D1D3D4] text-YELLOW-_100 border-r'>Enter</button>
              <button className='w-[300px] flex p-4 justify-center text-NEUTRAL-_1200'>Vote</button>
            </div>
            <div className='w-full flex flex-col items-center mt-14 justify-center'>
              <p className='font-medium text-NEUTRAL-_1200 text-2xl' >{state?.category}</p>
              <img src={state?.flier || ContestImage} alt='contest-flyer' className='w-[200px] h-[200px]'/>
            </div>
            <p className='text-base lg:text-center xs:mx-3 lg:mx-auto mt-10 flex flex-col lg:w-[554px] lg:h-[120px] text-NEUTRAL-_1200'>
              {state?.desc}
              {/* Enter our photo contest for a chance to showcase your creativity and win cash prizes. 
              Submit your best photos in any category and impress our judges with your technical skills, originality, 
              and emotional impact. The top three winners will be featured on our website and social media. Good luck! */}
            </p>
            <div className="h-[300px] mt-11">
              <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                // validationSchema={formValidationSchema}
                onSubmit={(values) => {
                    // window.scrollTo(0, 0)
                    console.log(values, "often")
                    // submitForm(values)
                }}
              >
              {({
                  handleSubmit,
                  handleChange,
                  dirty,
                  isValid,
                  setFieldValue,
                  errors,
                  touched,
                  // setFieldTouched,
                  values,
              }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col lg:items-center">
                  <div className='flex flex-col gap-6 lg:items-center h-[47px]'>
          
                      <div className="flex flex-col xs:mx-3 lg:mx-0">
                        <label htmlFor='Full Name' className="text-base font-semibold text-[#000000]">Full Name</label>
                          <input
                              name="fullName"
                              placeholder="John Doe"
                              type="text" 
                              value={values.email}
                              onChange={handleChange}
                              className="rounded xs:w-full outline-none shadow lg:w-[507px] h-[51px] border-solid  p-3 border"
                          />
                          <ErrorMessage name="email" className='text-red-500'/>
                      </div>

                      <div className="flex flex-col  xs:mx-3 lg:mx-0">
                        <label htmlFor='email' className="text-base font-semibold text-[#000000]">Email</label>
                          <input
                              name="email"
                              placeholder="yourdomain@com"
                              type="text" 
                              value={values.email}
                              onChange={handleChange}
                              className="rounded xs:w-full outline-none shadow lg:w-[507px] h-[51px] border-solid  p-3 border"
                          />
                          <ErrorMessage name="email" className='text-red-500'/>
                      </div>
                 

                      {/* <button 
                        className='xs:w-full lg:w-[507px]  bg-primary rounded-lg p-3 text-[#fff] cursor-pointer text-center w-full h-[54px] text-lg font-medium'
                        type="submit"
                        onClick={() => navigate("/create-campaign")}
                      >
                          Login
                      </button> */}
                  
                  </div>
                  

                </Form>
                )}
              </Formik>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Overview