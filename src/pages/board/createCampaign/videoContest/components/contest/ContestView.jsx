import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { copyTextToClipboard } from '../../../../../../helper'

import uploadIcon from "../../../../../../assets/icons/uploadIcon.svg"
import Logo from "../../../../../../assets/icons/educontest-logo.svg"
import Power from "../../../../../../assets/images/power.png"
import { useSelector } from 'react-redux'

const ContestView = () => {

  const info = useSelector(state => state.createContest)
  console.log(info, "contestData")
  const contestData = info?.data?.data?.data;

    const formValidationSchema = Yup.object().shape({
      fullName: Yup.string().required("Full Name is Required"),
      email: Yup.string().required("Email is Required"),
      imageDoc: Yup.mixed().required('Contest photo is required'),
    })

  return (
    <div className='flex flex-col items-center'>
      <p className='text-[#000] text-2xl font-semibold mt-8'>Your Contest is Ready</p>
      <div className='md:w-6/12 flex flex-col gap-4 mt-10'>
        <p className='font-semibold text-[#000] text-base'>Contest Link</p>
        <div className='bg-[#fff] flex justify-center p-10 border border-[#D0D5DD] rounded-lg'>
          <p 
            className='cursor-pointer text-[#A5A5A5]' 
            onClick={() => copyTextToClipboard("https://noa.gov.ng/hackathon")}
          >
           https://noa.gov.ng/hackathon
            {/* http://localhost:5173/contest-page */}
          </p>
        </div>
      </div>
      <div className='w-full md:w-[600px] h-[970px] md:h-[900px] mb-5 bg-[#fff] mt-20 p-6 flex flex-col items-center gap-5 mt-2 border border-[#D0D5DD] rounded-lg'>
        <h2 className='text-2xl text-[#475467] font-medium'>{contestData?.category}</h2>
        <img src={`${contestData?.flier}`} alt='Contest Photo' className='w-[300px] h-[200px]'/>
        <p className='text-base text-center'>
          Enter our photo contest for a chance to showcase your creativity and win cash prizes. 
          Submit your best photos in any category and impress our judges with your technical skills, 
          originality, and emotional impact. 
          The top three winners will be featured on our website and social media. 
          Good luck!
        </p>
        <div className='flex flex-col gap-2'>
          <div className="h-[480px] mt-4">
            <Formik
              initialValues={{
                  fullName: "",
                  email: "",
                  imageDoc: ""
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
                            value={values.fullName}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] h-[51px] border-solid  p-3 border"
                        />
                        {errors.fullName && touched.fullName ? 
                          <div className='text-RED-_100'>{errors.fullName}</div> 
                          : null
                        }
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
                        {errors.email && touched.email ? 
                          <div className='text-RED-_100'>{errors.email}</div> 
                          : null
                        }
                    </div>
                    <div className="flex flex-col items-center mt-4 w-12/12">
                        {values?.imageDoc
                          ? 
                            <div className="pt-0 " >
                                <img alt="upload" width={"300px"} height={"100px"} src={URL.createObjectURL(values?.imageDoc)} />
                            </div>
                          
                          :
                          <label className="flex flex-col w-[300px] md:w-[507px] h-[150px] py-4 px-6  border-2 bg-[#ECF9EE] border-[#027315] border-dashed">
                          <div className="flex flex-col my-auto items-center">
                              <img src={uploadIcon} alt="upload" />
                              <div className="text-center gap-3 mt-2 flex flex-col font-medium text-xs md:text-sm text-primary">
                                  <p>Click to upload or drag and drop</p>
                                  <p className='block text-primary'>PNG or JPG (max 5mb)</p>
                              </div>   
                          </div>
                          <input
                              type="file"
                              name="imageDoc"
                              value={values?.imageDoc}
                              className="opacity-0"
                              onChange={(e) => {setFieldValue("imageDoc", e.target.files[0])}}
                              id="upload"
                              accept={"image/*"}
                              multiple={false}
                          />
                        </label>
                      }
                        {errors.imageDoc && touched.imageDoc ? 
                          <div className='text-RED-_100'>{errors.imageDoc}</div> 
                          : null
                        }
                      </div> 
              

                    <button 
                      className='w-full flex justify-center  bg-[#027315] rounded-lg p-3 text-[#fff] cursor-pointer text-center w-full h-[54px] text-lg font-medium'
                      type="submit"
                      onClick={() => navigate("")}
                    >
                      Enter Contest
                    </button>
                
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

export default ContestView