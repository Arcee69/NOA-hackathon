import React, { useState } from 'react'
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ModalPop from '../../../../../components/modal/modalPop';
import ContestView from './contest/ContestView';
import { entry } from '../../../../../features/board/createCampain/photoContest/entrySlice';

const Entry = ({ setActiveTab }) => {
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate();

  // const userData  = useSelector(state => state.userLogin)
  // const { user } = userData.data;

  // const info = useSelector(state => state.basicInfo)
  // const { id } = info.data.data;


  const dispatch = useDispatch()


  const formValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    userUpload: Yup.string(),
    jpeg: Yup.boolean(),
    jpg: Yup.boolean(),
    png: Yup.boolean(),
    gif: Yup.boolean(),
    eps: Yup.boolean(),
  });

  const submitForm = async (values) => {
    let documentType = [];
    let type1 = values?.jpeg ? documentType.push("jpeg") : "";
    let type2 = values?.jpg ? documentType.push("jpg") : "";
    let type3 = values?.png ? documentType.push("png") : "";
    let type4 = values?.gif ? documentType.push("gif") : "";
    let type5 = values?.eps ? documentType.push("eps") : "";

    const data = {
      contest_id : id,
      user_id: user?.id,
      document_slug: values?.title,
      document_type: documentType,
      document_to_upload: values?.userUpload
    };

    dispatch(entry(data))
    .then(() => {
      navigate("/create-campaign/contest-view")
    })

  }

  return (
    <div className='p-4'>

      <div className='w-full  lg:h-[116px] bg-[#fff] rounded-xl'>
        <div className='p-8'>
          <h2 className='xs:text-base  md:text-xl text-[#000]'>Setup Entry Process </h2>
          <p className='xs:text-sm md:text-base text-NEUTRAL-_800'>Set up the Entry Requirements for this Photo contest </p>
        </div>
      </div>

      <div className='xs:w-full md:w-full mt-6 '>
          <Formik
              initialValues={{
                title: "",
                userUpload: "",
                jpeg: "",
                jpg: "",
                png: "",
                gif: "",
                eps: "",
              }}
              validationSchema={formValidationSchema}
              onSubmit={(values) => {
                  window.scrollTo(0, 0);
                  console.log(values, "asa");
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
                  <Form onSubmit={handleSubmit} className="mt-2 mx-3 ">
                      <div className='flex flex-col gap-8'>
                        <div className='flex xs:flex-col lg:flex-row justify-between w-full lg:items-center'>

                          <div className='flex flex-col '>
                            <label htmlFor='Title' className='text-sm font-medium text-NEUTRAL-_200'>Title</label>
                            <input
                              name='title' 
                              type='text'
                              placeholder='Upload your photos'
                              className='xs:w-full lg:w-[392px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                              value={values?.title}
                              onChange={handleChange}
                            />
                            {errors.title && touched.title ? 
                              <div className='text-RED-_100'>{errors.title}</div> 
                              : null
                            }
                          </div>

                          <div className='flex flex-col xs:mt-4 lg:mt-0'>
                            <label htmlFor='userUpload' className='text-sm font-medium text-NEUTRAL-_200'>What should the user upload</label>
                            <input
                              name='userUpload' 
                              type='text'
                              placeholder='A photo of your Dog'
                              className='xs:w-full lg:w-[392px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                              value={values?.userUpload}
                              onChange={handleChange}
                            />
                            {errors.userUpload && touched.userUpload ? 
                              <div className='text-RED-_100'>{errors.userUpload}</div> 
                              : null
                            }
                          </div> 
                        </div>

                        <div className='bg-NEUTRAL-_1000 p-3 mt-8 rounded-md'>
                          <p className='text-base text-[#000] font-medium'>Choose File Types</p>
                        </div>

                        <div className='flex gap-5'>

                          <div className='flex flex-col'>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='jpeg'
                                value={values?.jpeg}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Jpeg</span>
                            </div>
                            <ErrorMessage name='jpeg'/>
                          </div>

                          <div className='flex flex-col'>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='jpg'
                                value={values?.jpg}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Jpg</span>
                            </div>
                            <ErrorMessage name='jpg'/>
                          </div>

                          <div className='flex flex-col'>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='png'
                                value={values?.png}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>PNG</span>
                            </div>
                            <ErrorMessage name='png'/>
                          </div>

                          <div className='flex flex-col'>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='gif'
                                value={values?.gif}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Gif</span>
                            </div>
                            <ErrorMessage name='gif'/>
                          </div>

                          <div className='flex flex-col'>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='eps'
                                value={values?.eps}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Eps</span>
                            </div>
                            <ErrorMessage name='eps'/>
                          </div>

                        </div>

                      </div>

                      <div className='flex xs:mt-3 md:mt-5 lg:mt-5 gap-4 justify-end'>
                        <button 
                          type="submit" 
                          // onClick={() => navigate("/create-campaign/contest-view")}
                          className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid"
                          style={{ width: "130px" }}
                        >
                          Save
                        </button>

                        <button 
                          type="button" 
                          onClick={() => {setActiveTab("Prizes"), window.scrollTo(0, 0)}}
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
        {/* <ModalPop isOpen={openModal}> 
            <ContestView handleClose={() => setOpenModal(false)} />
        </ModalPop> */}

    </div>
  )
}

export default Entry