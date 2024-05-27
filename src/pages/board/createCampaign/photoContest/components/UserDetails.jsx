import React from 'react'
import { Form, Formik, ErrorMessage, FieldArray, Field as Input } from 'formik'
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux'

import SearchableSelect from '../../../../../components/CustomSelect'
import addIcon from "../../../../../assets/icons/add.svg"
import { userDetails } from '../../../../../features/board/createCampain/photoContest/userDetailsSlice'

const UserDetails = ({ setActiveTab }) => {
  
  // const userData  = useSelector(state => state.userLogin)
  // const { user } = userData.data;

  // const info = useSelector(state => state.basicInfo)
  // const { id } = info.data.data;

  const dispatch = useDispatch()


  const formValidationSchema = Yup.object().shape({
    age: Yup.number().required("Age Limit is Required"),
    gender: Yup.string().required("Gender is Required"),
    voteLimit: Yup.number().required("Vote Limit is Required"),
    entry: Yup.boolean(),
    customs: Yup.array().of(Yup.object().shape({
      field: Yup.string().required("Required"),
    })),
  })

  const gender = [
    {  value:"male", label: "Male" },
    {  value:"female", label: "Female" },
  ];

  const voteLimit = [
    { value: 1, label: "1"},
    { value: 2, label: "2"},
    { value: 3, label: "3"}
  ];

  const submitForm = async (values) => {
    
    let contestDetails = [];
      values?.customs.map((list, index) => {
        // console.log(list, index, "tete")
        return contestDetails.push({ 
          field : list?.field,
        })
      })

      const entry = values?.entry ? "yes" : "no";

      const data = {
        user_id: user.id,
        contest_id: id,
        age_limit: values?.age,
        gender: values?.gender,
        number_entries: values?.voteLimit,
        daily_limit: entry,
        submission_details: {...contestDetails}
      }

      dispatch(userDetails(data))
      .then(() => {
        setActiveTab("Winner Selection");
        window.scrollTo(0, 0)
      })

  }


  return (
    <div className='p-4'>

      <div className='w-full  h-[116px] bg-[#fff] rounded-xl'>
        <div className='xs:p-4 md:p-8'>
            <h2 className='text-xl text-[#000]'>User Details</h2>
            <p className='text-base text-NEUTRAL-_800'>Choose how your users log in and what info they must provide.</p>
        </div>
      </div>

      <div className='xs:w-full md:w-full mt-6 '>
          <Formik
              initialValues={{
                  age: "",
                  gender: "",
                  voteLimit: "",
                  entry: false,
                  customs: [{ field: "" }],
          
              }}
              // validationSchema={formValidationSchema}
              onSubmit={(values) => {
                  window.scrollTo(0, 0);
                  console.log(values, "realize");
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
                        <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-5 justify-between w-full items-center'>

                          <div className='flex flex-col xs:w-full lg:w-[500px] '>
                            <label htmlFor='Age Limit' className='text-sm font-medium text-NEUTRAL-_200'>Age Limit</label>
                            <input
                              name='age' 
                              type='number'
                              placeholder='18'
                              className=' xs:w-full lg:w-[450px] border border-[0.2px] rounded h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                              value={values?.age}
                              onChange={handleChange}
                            />
                            {errors.age && touched.age ? 
                              <div className='text-RED-_100'>{errors.age}</div> 
                              : null
                            }
                          </div>

                          <div className='flex flex-col xs:w-full lg:w-[500px] '>
                            <label htmlFor="Gender" className='text-sm font-medium text-NEUTRAL-_200'>Gender</label>
                            <SearchableSelect 
                              options={gender}
                              name="gender"
                              type="text"
                              placeholder="Ex. Male"
                              setFieldValue={setFieldValue}
                              value={values?.gender}
                              className=" mt-1.5 rounded-md outline-none xs:w-full lg:w-[450px]"
                            />
                            {errors.gender && touched.gender ? 
                              <div className='text-RED-_100'>{errors.gender}</div> 
                              : null
                            }
                          </div>

                          <div className='flex flex-col lg:w-[500px] gap-2 '>
                            <label htmlFor='Vote Limit' className='text-sm font-medium text-NEUTRAL-_200'>How many times can a contestant enter</label>
                            <SearchableSelect 
                              options={voteLimit}
                              name="voteLimit"
                              placeholder="1"
                              // type="number"
                              setFieldValue={setFieldValue}
                              value={values?.voteLimit}
                              className=" mt-1.5 rounded-md outline-none lg:w-[450px]"
                            />
                            {errors.voteLimit && touched.voteLimit ? 
                              <div className='text-RED-_100'>{errors.voteLimit}</div> 
                              : null
                            }
                             <div className='flex flex-col lg:w-[500px] '>
                                <div className='flex'>
                                  <input
                                    type='checkbox'
                                    name='entry'
                                    value={values?.entry}
                                    onChange={handleChange}
                                  />
                                  <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Daily Limit</span>
                                </div>
                                <ErrorMessage name='entry'/>
                              </div>

                          </div>

                          {/* <div className='flex flex-col lg:w-[500px] '>
                            <label htmlFor='Login Options' className='text-sm font-medium text-NEUTRAL-_200'>Login Options</label>
                            <SearchableSelect 
                              options={LoginOptions}
                              placeholder="Email"
                              setFieldValue={setFieldValue}
                              value={values?.loginOptions}
                              className=" mt-1.5 rounded-md outline-none lg:w-[450px]"
                            />
                            {errors.loginOptions && touched.loginOptions ? 
                              <div className='text-RED-_100'>{errors.loginOptions}</div> 
                              : null
                            }
                          </div> */}


                        </div>

                        <div className='w-full  h-[116px] bg-[#fff] rounded-xl'>
                          <div className='xs:p-4 md:p-8'>
                              <h2 className='text-xl text-[#000]'>Submission Details</h2>
                              <p className='text-base text-NEUTRAL-_800'>
                                Choose how your users log in and what info they must provide
                              </p>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                        <FieldArray
                          name='customs'
                          render={arrayHelpers => (
                            <div className='flex flex-col gap-10'>
                              <div className='grid xs:grid-cols-1 gap-2'>
                                {
                                  values.customs && values.customs.length > 0 ? 
                                    values.customs.map((custom, index) => (
                                      <div key={index}>
                                        <input 
                                          name={`customs[${index}].field`}
                                          value={custom.field}
                                          onChange= {handleChange}
                                          placeholder="Ex. FullName" 
                                          className=' xs:w-full lg:w-[450px] h-[40px] border border-[0.2px] bg-[#fff] text-[#000] text-base p-2'
                                        />
                                      </div>
                                    )) :
                                    <div></div>
                                }
                              </div>
                              <button
                                className='bg-NEUTRAL-_900 flex justify-center xs:mt-3 lg:mt-3 gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'
                                // style={{ height: "56px"}}
                                type='button'
                                onClick={() => {
                                  arrayHelpers.push({field: " "})
                                }}
                              >
                                <img src={addIcon} alt="Add Custom Field" loading='lazy' />
                                <span className='xs:text-sm lg:text-lg text-[#fff]'>Add Custom Field</span>
                              </button>
                            </div>
                          )}
                        />
{/* 
                          <button type='button' className='bg-NEUTRAL-_900 flex justify-center mt-5 gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'>
                            <img src={addIcon} alt="add-icon" />
                            <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'></p>
                          </button> */}
                        </div>

                      </div>

                      <div className='flex xs:mt-5 md:mt-5 lg:mt-5 gap-4 justify-end'>
                        <button 
                          type="submit" 
                          className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid"
                          style={{ width: "130px" }}
                        >
                          Continue
                        </button>

                        <button 
                          type="button" 
                          onClick={() => setActiveTab("Basic Info")}
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

export default UserDetails