import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { CgSpinner } from "react-icons/cg"

import uploadLogo from "../../../../assets/icons/uploadLogo.svg"
import { addAdmin } from '../../../../features/board/admin/addAdminSlice';

const CreateAdmin = () => {
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()


    const formValidationSchema = Yup.object().shape({
        name: Yup.string().required("Contest Name is Required"),
        email: Yup.string().required("Sponsor Name is Required"),
        role: Yup.string().required("Role is Required"),
        // imageDoc: Yup.mixed().required('Contest Image is required'),
    });

      
    const submitForm = async (values) => {
        setLoading(true)
        const data = {
            "name": values?.name,
            "email": values?.email,
            "role": values?.role
        }

        dispatch(addAdmin(data))
        .then((res) => {
            console.log(res, "res")
            setLoading(false)
        })

    } 

  return (
    <div className='flex flex-col py-[41px] px-[30px]'>
        <div className='bg-[#fff] w-[90%] rounded-xl h-[116px] flex flex-col gap-1 p-[34px]'>
            <p className='font-manja text-[#000] text-[20px]'>General Information</p>
            <p className='text-[#999999] font-mont_alt font-medium text-base'>Fill in the basic details of your campaign</p>
        </div>

        <div className='xs:w-full md:w-full mt-6 '>
          <Formik
              initialValues={{
                name: "",
                email: "",
                role: "",
                imageDoc: "",
                
              }}
              validationSchema={formValidationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                  window.scrollTo(0, 0);
                  // console.log(values, "ruger");
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
                              <label htmlFor='Admin Name' className='text-sm font-medium text-NEUTRAL-_200'>Admin Name</label>
                              <input
                                name='name' 
                                type='text'
                                placeholder='John Doe'
                                className='lg:w-[749px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.name}
                                onChange={handleChange}
                              />
                              {errors.name && touched.name ? 
                                <div className='text-RED-_100'>{errors.name}</div> 
                                : null
                              }
                            </div>

                          

                            <div className='flex flex-col'>
                              <label htmlFor='Email' className='text-sm font-medium text-NEUTRAL-_200'>Email</label>
                              <input
                                name='email' 
                                type='email'
                                placeholder='example@email.com'
                                className='xs:w-full lg:w-[649px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.email}
                                onChange={handleChange}
                              />
                              {errors.email && touched.email ? 
                                <div className='text-RED-_100'>{errors.email}</div> 
                                : null
                              }
                            </div>

                            
                            <div className='flex flex-col '>
                              <label htmlFor='Role' className='text-sm font-medium text-NEUTRAL-_200'>Role</label>
                              <input
                                name='role' 
                                type='text'
                                placeholder='Role'
                                className='lg:w-[749px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                                value={values?.role}
                                onChange={handleChange}
                              />
                              {errors.role && touched.role ? 
                                <div className='text-RED-_100'>{errors.role}</div> 
                                : null
                              }
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
                                  // onChange={(e) => {setFieldValue("imageDoc", e.target.files[0])}}
                                  onChange={(e) => {handleFileChange(e), setFieldValue("imageDoc", e.target.files[0])}}
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

                       

        


                      </div>

                      <div className='flex xs:mt-4 md:mt-5 lg:mt-5 gap-4 justify-end'>
                        <button 
                          type="submit" 
                          // onClick={() => }
                          className="font-normal bg-[#027315] flex items-center justify-center text-base p-2 rounded-md text-[#fff] border border-solid"
                          style={{ width: "130px" }}
                        >
                            <p className='text-[#fff] text-base font-inter text-[18px] text-center font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Submit"}</p>
                        </button>

                        <button 
                          type="button" 
                          // onClick={() => setActiveTab("User Details")}
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

export default CreateAdmin