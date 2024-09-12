import React, { useState } from 'react'
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import uploadLogo from "../../../../../assets/icons/uploadLogo.svg"
import Button from "../../../../../components/Button"
import SearchableSelect from '../../../../../components/CustomSelect'
import { uploadFile } from '@uploadcare/upload-client'
import { uploadPhoto } from '../../../../../features/board/createCampain/photoContest/uploadPhotoSlice'
import { createNewQuiz } from '../../../../../features/board/quiz/createQuizSlice'
import { CgSpinner } from 'react-icons/cg'
import { api } from '../../../../../services/api'
import { appUrls } from '../../../../../services/urls'




const BasicInfo = ({ setActiveTab, state }) => {
  const [loading, setLoading] = useState(false)

  const userData  = useSelector(state => state.userLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(state, "panda")

  const token = localStorage.getItem("token")
  let BaseURL = import.meta.env.VITE_APP_API_URL;

  const { user } = userData.data;

  const formValidationSchema = Yup.object().shape({
    quizName: Yup.string().required("Quiz Name is Required"),
    startDate: Yup.date().required("Start Date Is Required"),
    endDate: Yup.date().required("End Date is Required"),
    imageDoc: Yup.mixed().required('Quiz Image is required'),
    description: Yup.mixed().required("Quiz Description is Required")
  });

  const prize = [
    { value:"100", label: "100" },
    { value:"200", label: "200" },
    { value:"500", label: "500" },
    { value:"1000", label: "1000" },
    { value:"2000", label: "2000" },
  ]

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file")
    dispatch(uploadPhoto(file))
  
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const fileUpload = reader.result;
    //     setUploadFile(fileUpload);
    //     localStorage.setItem('imageDoc', fileUpload);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };


  const submitForm =  async (values) => {
      // max_number_of_winners
      // 10
      setLoading(true)

      const startDate = values?.startDate.replace('T', ' ');
      const endDate = values?.endDate.replace('T', ' ');

      const data = {
        "title": state?.title || values?.quizName,
        "budget": state?.budget || values?.budget,
        "desc":  state?.desc || values?.description,
        "start_date": state?.start_date || startDate,
        "end_date": state?.end_date || endDate,
        "duration_of_quiz": state?.duration_of_quiz || `${values?.duration}`,
        "amount_for_winners": state?.amount_for_winners ||  values?.prizeValue,
      }


      let formData = new FormData()
    
      formData.append("image", state?.image ||  values?.imageDoc)

      try {
        const res = await api.put(`${appUrls?.EDIT_QUIZ_URL}/${state?.id}`, data)
        const imgRes = axios.post(`${BaseURL}${appUrls?.EDIT_QUIZ_IMAGE_URL}/${state?.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        })
        setLoading(false)
        toast("Quiz Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
        navigate("/quiz/view-all")
      } catch (err) {
        console.log(err, "fast")
        setLoading(false)
        toast(`${err?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
      }


      // if (imageDoc) {
      //   const result = await uploadFile(
      //     imageDoc,
      //     {
      //       publicKey: import.meta.env.VITE_APP_UPLOAD_API_PUBLIC_KEY,
      //       store: 'auto',
      //       metadata: {
      //         subsystem: 'js-client',
      //       }
      //     }
      //   )
      //   console.log(result?.cdnUrl, "result")
      //   if (result?.cdnUrl) {
      //     localStorage.setItem("quizName", quizName),
      //     localStorage.setItem("startDate", startDate),
      //     localStorage.setItem("endDate", endDate),
      //     localStorage.setItem("description", description),
      //     localStorage.setItem("type", "picture"),
      //     localStorage.setItem("sponsorName", sponsorName),
      
      //     setActiveTab("User Details");

      //   }
      // }

        
      
    
    




      
  }

  return (
    <div className='p-4'>
        <div className='w-full  h-[116px]  bg-[#fff] rounded-xl'>
          <div className='xs:p-4 lg:p-8'>
              <h2 className='text-xl text-[#000]'>General Information</h2>
              <p className='text-base text-NEUTRAL-_800'>Fill in the basic details of your campaign</p>
          </div>
        </div>

        <div className='xs:w-full md:w-full mt-6 '>
          <Formik
              initialValues={{
                quizName: state?.title || "",
                startDate: state?.start_date || "",
                endDate: state?.end_date || "",
                imageDoc: "",
                description: state?.desc || "",
                duration: state?.duration_of_quiz || 0,
                prizeValue: state?.amount_for_winners || "",
                budget: state?.budget || ""
           
              }}
              validationSchema={formValidationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                  window.scrollTo(0, 0);
                  console.log(values, "ruger");
                  submitForm(values)
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
                  <Form onSubmit={handleSubmit} className="mt-2 lg:mx-3 ">
                      <div className='flex flex-col gap-8'>
                        <div className='flex xs:flex-col lg:flex-row justify-between w-full lg:items-center'>

                          <div className='flex flex-col gap-6 lg:w-5/12'>

                            <div className='flex flex-col '>
                              <label htmlFor='Contest Name' className='text-sm font-medium text-NEUTRAL-_200'>Quiz Name</label>
                              <input
                                name='quizName' 
                                type='text'
                                placeholder='Quiz Name'
                                className='lg:w-[649px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.quizName}
                                onChange={handleChange}
                              />
                              {errors.quizName && touched.quizName ? 
                                <div className='text-RED-_100'>{errors.quizName}</div> 
                                : null
                              }
                            </div>

                            <div className='flex flex-col '>
                              <label htmlFor='Quiz Budget' className='text-sm font-medium text-NEUTRAL-_200'>Quiz Budget</label>
                              <input
                                name='budget' 
                                type='number'
                                placeholder='0'
                                className='lg:w-[649px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.budget}
                                onChange={handleChange}
                              />
                              {errors.budget && touched.budget ? 
                                <div className='text-RED-_100'>{errors.budget}</div> 
                                : null
                              }
                            </div>

                            <div className='lg:w-[640px] lg:h-[70px] flex xs:flex-col lg:flex-row justify-between xs:mt-3 lg:mt-6'>
                              <div className='flex flex-col'>
                                <label htmlFor='Start Date' className='text-sm font-medium text-NEUTRAL-_200'>Start Date</label>
                                <input 
                                  name='startDate'
                                  type='datetime-local'
                                  placeholder='DD/MM/YYYY'
                                  className='xs:w-full  lg:w-[300px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                  value={values?.startDate}
                                  onChange={handleChange}
                                />
                                  {errors.startDate && touched.startDate ? 
                                    <div className='text-RED-_100'>{errors.startDate}</div> 
                                    : null
                                  }
                              </div>

                              <div className='flex flex-col xs:mt-4 lg:mt-0'>
                                <label htmlFor='End Date' className='text-sm font-medium text-NEUTRAL-_200'>End Date</label>
                                <input 
                                  name='endDate'
                                  type='datetime-local'
                                  placeholder='DD/MM/YYYY'
                                  className='xs:w-full lg:w-[300px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                  value={values?.endDate}
                                  onChange={handleChange}
                                />
                                  {errors.endDate && touched.endDate ? 
                                    <div className='text-RED-_100'>{errors.endDate}</div> 
                                    : null
                                  }
                              </div>
                            </div>

                          </div>

                          <div className="flex items-end flex-col xs:mt-4 lg:mt-0 justify-end lg:w-2/12">
                            {values?.imageDoc
                              ? 
                                <div className="pt-0 " >
                                    <img alt="upload" width={"300px"} height={"100px"} src={URL.createObjectURL(values?.imageDoc)} />
                                </div>
                              
                              :
                              <label className="flex flex-col xs:w-full lg:w-[244px] h-56 py-4 px-6  border-2 bg-BLUE-_300 border-BLUE-_200 border-dashed">
                              <div className="flex flex-col my-auto items-center">
                                  <img src={uploadLogo} alt="upload" />
                                  <div className="text-center font-medium text-sm text-primary">
                                      Click to upload <span className='block text-primary'>PNG or JPG (max 5mb)</span>
                                  </div>   
                              </div>
                              <input
                                  type="file"
                                  name="imageDoc"
                                  value={values?.imageDoc}
                                  className="opacity-0"
                                  onChange={(e) => {setFieldValue("imageDoc", e.target.files[0])}}
                                  // onChange={(e) => {handleFileChange(e), setFieldValue("imageDoc", e.target.files[0])}}
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
                        </div>

                        
                        <div className='lg:w-[640px] lg:h-[70px] flex xs:flex-col lg:flex-row justify-between xs:mt-3 lg:mt-6'>
                          <div className='flex flex-col xs:w-full lg:w-[300px] gap-2 '>
                              <label htmlFor='Prize value/question' className='text-sm font-medium text-NEUTRAL-_200'>Prize value/question</label>
                              <SearchableSelect
                                options={prize}
                                name="prizeValue"
                                placeholder="1"
                                type="text"
                                setFieldValue={setFieldValue}
                                value={values?.prizeValue}
                                className="rounded-md outline-none w-full"
                              />
                              {errors.prizeValue && touched.prizeValue ? 
                                <div className='text-RED-_100'>{errors.prizeValue}</div> 
                                : null
                              }
                          </div>

                          <div className='flex flex-col xs:w-full lg:w-[300px]'>
                              <label htmlFor='Contest Name' className='text-sm font-medium text-NEUTRAL-_200'>Time Duration (mins)</label>
                              <input
                                name='duration' 
                                type='number'
                                placeholder='5'
                                className='w-full h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.duration}
                                onChange={handleChange}
                              />
                              {errors.duration && touched.duration ? 
                                <div className='text-RED-_100'>{errors.duration}</div> 
                                : null
                              }
                          </div>

                        </div>


                        <div className='flex flex-col '>
                          <label htmlFor='Contest Description' className='text-sm font-medium text-NEUTRAL-_200'>Quiz Description</label>
                          <textarea
                            name="description"
                            placeholder="Type here...."
                            type="text"
                            rows="5"
                            className="lg:w-[649px] h-[193px] mt-1.5 py-2.5 px-3.5 outline-none"                               
                            value={values.description}
                            onChange={handleChange}
                          >
                          </textarea>
                            {errors.description && touched.description ? 
                              <div className='text-RED-_100'>{errors.description}</div> 
                              : null
                            }
                        </div>

                        
                      </div>

                      <div className='flex xs:mt-4 md:mt-5 lg:mt-5 gap-4 justify-end'>
                        <button 
                          type="submit" 
                          className="font-normal bg-[#027315] text-base p-2 flex items-center justify-center rounded-md text-[#fff] border border-solid"
                          style={{ width: "130px" }}
                        >
                          <p className='text-[#fff] text-base font-inter text-[18px] text-center font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Update"}</p>
                        </button>

                        <button 
                          type="button" 
                          onClick={() => navigate("/quiz/view-all")}
                          className="font-normal border-primary bg-[#fff] rounded-md text-primary text-base p-2 border border-solid"
                          style={{ width: "130px" }}
                        >
                          Cancel
                        </button>
        
                      </div>
                  </Form>
              )}
          </Formik>
        </div>

    </div>
  )
}

export default BasicInfo