import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';


import addIcon from "../../../../../assets/icons/add.svg";
import { Prize } from './prizes/Prize';
import uploadLogo from "../../../../../assets/icons/uploadLogo.svg"
import SearchableSelect from '../../../../../components/CustomSelect';
import { winnerPrizes } from '../../../../../features/board/createCampain/photoContest/prizesSlice';

const Prizes = ({ setActiveTab }) => {

  // const userData  = useSelector(state => state.userLogin)
  // const { user } = userData.data;

  // const info = useSelector(state => state.basicInfo)
  // const { id } = info.data.data;

  const dispatch = useDispatch()

  const schema = Yup.object().shape({
    prize: Yup.array().of(Yup.object().shape({
      name: Yup.string().required("Required"),
      winners: Yup.number().required("Required"),
      imageDoc: Yup.mixed().required('File is required'),
     })),
    // prize: Yup.string().required("Prize is Required"),
    // winners: Yup.number().required("Winners is Required"),
    // file: Yup.mixed().required('File is required'),
   
   

  });

  const initialValues = {
    prize: [{ name: "", winners: "", imageDoc: ""}],
    // prize: "",
    // winners: "",
    // file: "",
  };

 

  const submitForm = async(values) => {
    let prizes = [];
      values?.prize.map((list) => {
        console.log(list, "dodo")
        return prizes.push({ 
          name: list?.name,
          winners: list?.winners,
          imageDoc: values?.imageDoc
        })
      });
      console.log(prizes, "lala")
      const formData = new FormData();
      formData.append("contest_id", id);
      formData.append("user_id", user?.id);
      formData.append("prize_name", prizes[0]?.name);
      formData.append("number_of_winners", prizes[0]?.winners);
      formData.append("prize_pic", prizes[0]?.imageDoc);

      dispatch(winnerPrizes(formData))
      .then(() => {
        navigate("/create-campaign/contest-view")
      })

  }


  return (
    <div className='p-4'>

      <div className='xs:w-full lg:w-[1000px]  lg:h-[116px] bg-[#fff] rounded-xl p-6'>
        <h2 className='xs:text-base  md:text-xl text-[#000]'>Prize setup </h2>
        <p className='xs:text-sm md:text-base text-NEUTRAL-_800'>
          Customise the Prize Area of the EduContest modal, 
          add images or carousels and set your competition description.
        </p>
      </div>

      <div>
        <Formik
            initialValues={initialValues}
            // validationSchema={schema}
            onSubmit={(values) => {
              console.log(values, "ruger");
              submitForm(values)
            }
            }
          >
            {(formikProps) => {
              const { handleSubmit, handleChange, values, setFieldValue, isSubmitting, errors, touched } = formikProps
              return (
                <Form onSubmit={handleSubmit} className="flex flex-col ">
                  <div className='xs:w-full lg:w-11/12 flex flex-col  gap-4 mb-10'>

                  {/* <div className='grid xs:grid-cols-1 lg:grid-cols-2 mt-5 xs:gap-4 md:gap-8'>
                    <div className='w-full flex flex-col'>
                      <h2 className="font-medium text-sm text-NEUTRAL-_200">
                        Prize Name
                      </h2>
                      <div className="xs:w-full lg:w-[400px] mt-1 rounded-md h-[44px]">
                        <input
                          name="prize"
                          value={values?.prize}
                          placeholder='Amazon Gift Card'
                          onChange={handleChange}
                          className='w-full outline-none rounded-md p-2.5'
                        />
                      </div>
                      {errors.prize && touched.prize ? 
                        <div className='text-RED-_100'>{errors.prize}</div> 
                        : null
                      }
                    </div>

                    <div className='w-full flex flex-col '>
                      <h2 className="font-medium text-sm text-NEUTRAL-_200">
                        Winners (1/10)
                      </h2>
                      <div className='xs:w-full h-[44px]'>
                          <SearchableSelect
                              name="winners"
                              placeholder='1'
                              options={[{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 } ]}
                              setFieldValue={setFieldValue}
                              value={values?.winners}
                              className="rounded-md outline-none lg:w-[450px]"
                          />
                          {errors.winners && touched.winners ? 
                            <div className='text-RED-_100'>{errors.winners}</div> 
                            : null
                          }
                      </div>
                    </div>
                </div> */}

                   <FieldArray
                      name='prize'
                      render={arrayHelpers => (
                        <div className='flex flex-col gap-10'>
                          <div className='grid xs:grid-cols-1 gap-2'>
                            {
                              values.prize && values.prize.length > 0 ? (
                                values.prize.map((prize, index) => (
                                  <Prize
                                    key={index} //  + victim?.firstName + victim?.lastName
                                    index={index}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    prize={prize}
                                    errors={errors}
                                    touched={touched}
                                  />
                                ))) :
                                <div></div>
                            } 
                          </div>
                          <div className='flex justify-between items-center xs:mt-3 lg:mt-5 '>

                            <button
                              className='bg-NEUTRAL-_900 flex justify-center gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'
                              type='button'
                              onClick={() => {
                                arrayHelpers.push({ name: "", winners: "", imageDoc: "" })
                              }}
                            >
                              <img src={addIcon} alt="Add Prize" loading='lazy' />
                              <span className='xs:text-sm lg:text-lg text-[#fff]'>Add Prize</span>
                            </button>

                            <button 
                              type="submit" 
                              className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid xs:w-[180px]  h-[56px]"
                            >
                              Save
                            </button>

                          </div>
                        </div>
                      )}
                    />
                    
                      {/* <div className='flex xs:flex-col mt-3 md:flex-row gap-4 w-12/12'>
                        <div className="flex flex-col xs:w-full md:w-4/12">
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
                              id="upload"
                              accept={"image/*"}
                              multiple={false}
                            />
                          </label>
                          }
                        </div> 

                        </div> */}


                
                  </div>

                  <div className='flex xs:mt-3 md:mt-5 lg:mt-5 gap-4 justify-end'>
                    <button 
                      type="submit" 
                      onClick={() => { window.scrollTo(0, 0)}}  //setActiveTab("Entry"),
                      className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid"
                      style={{ width: "130px" }}
                    >
                      Continue
                    </button>

                    <button 
                      type="button" 
                      onClick={() => {setActiveTab("Winner Selection"), window.scrollTo(0, 0)}}
                      className="font-normal border-primary bg-[#fff] rounded-md text-primary text-base p-2 border border-solid"
                      style={{ width: "130px" }}
                    >
                      Cancel
                    </button>
    
                  </div>
                </Form>
              )
            }}
          </Formik>

      </div>

    </div>
  )
}

export default Prizes