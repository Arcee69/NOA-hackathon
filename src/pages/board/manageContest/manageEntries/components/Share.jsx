import React, { useState } from 'react'
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup"
import uploadLogo from "../../../../../assets/icons/uploadLogo.svg"

const Share = () => {
  const [imageDoc, setImageDoc] = useState();

  const formValidationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    file: Yup.mixed().required()
  });

  const readImageDoc = async (event) => {
    const ext = event.target.files[0];
    // const res = await uploadImageToS3Bucket(ext);
    console.log(ext, "wewe")
    setImageDoc(ext);
    // setPic(res);
  };

  const submitForm = () => {

  }

  return (
    <div className='p-4'>

      <div className='flex flex-col gap-4 w-full'>
        <h2 className='text-xl font-semibold'>Sharing Customization</h2>
        <p className='text-base font-medium lg:w-[1007px]'>
          Add an image, title, description that will display when you share your experience URL on Social Media, You can
          customize one, or all three fields here
        </p>
      </div>

      <div className='xs:w-full md:w-full mt-6 '>
          <Formik
              initialValues={{
                  title: "",
                  description: "",
                  file: "",
              }}
              // validationSchema={formValidationSchema}
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
                  <Form onSubmit={handleSubmit} className="mt-2 ">
                      <div className='flex flex-row gap-8'>
                        <div className='flex xs:flex-col md:flex-row justify-between md:items-center w-full'>

                          <div className='flex flex-col gap-6 md:w-6/12'>

                            <div className='flex flex-col '>
                              <label htmlFor='Sharing Title' className='text-sm font-medium text-NEUTRAL-_200'>Sharing Title</label>
                              <input
                                name='title' 
                                type='text'
                                placeholder='Win A Trip To Dubai'
                                className='lg:w-[649px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none rounded-md'
                                value={values?.title}
                                onChange={handleChange}
                              />
                              <ErrorMessage name="title" />
                            </div>

                            <div className='flex flex-col '>
                              <label htmlFor='Sharing Description' className='text-sm font-medium text-NEUTRAL-_200'>Sharing Description</label>
                              <textarea
                                name="description"
                                placeholder="Type here...."
                                type="text"
                                rows="5"
                                className="lg:w-[649px] h-[193px] mt-1.5 py-2.5 px-3.5 outline-none rounded-md"                               
                                value={values.description}
                                onChange={handleChange}
                              >
                              </textarea>
                              <ErrorMessage name="description" />
                            </div>
                            
                          </div>

                          <div className="flex items-end flex-col xs:mt-4 lg:mt-0 md:w-5/12">
                            {/* <label htmlFor='Sharing Image' className='text-sm font-medium text-NEUTRAL-_200'>Sharing Image</label> */}
                            {imageDoc
                              ? 
                                <div className="pt-0 " >
                                    <img alt="upload" width={"300px"} height={"100px"} src={URL.createObjectURL(imageDoc)} />
                                </div>
                              
                              :
                              <label className="flex flex-col xs:w-full lg:w-[244px] h-56 py-4 px-6  border-2 bg-BLUE-_300 rounded-md border-BLUE-_200 border-dashed">
                              <div className="flex flex-col my-auto items-center">
                                  <img src={uploadLogo} alt="upload" />
                                  <div className="text-center font-medium text-sm text-primary">
                                      Click to upload <span className='block text-primary'>PNG or JPG (max 5mb)</span>
                                  </div>   
                              </div>
                              <input
                                  type="file"
                                  name=""
                                  value={values?.imageDoc}
                                  className="opacity-0"
                                  onChange={readImageDoc}
                                  id="upload"
                                  accept={"image/*"}
                                  multiple
                              />
                            </label>
                            }
                          </div> 

                        </div>

                      </div>

                      <div className='flex xs:mt-4 md:mt-5 lg:mt-5 justify-center'>
                        <button 
                          type="button" 
                          // onClick={() => setActiveTab("User Details")}
                          className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid"
                          style={{ width: "130px" }}
                        >
                          Save
                        </button>
        
                      </div>
                  </Form>
              )}
          </Formik>
        </div>

    </div>
  )
}

export default Share