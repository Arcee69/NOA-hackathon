import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import addIcon from "../../../../../assets/icons/add.svg";

import { Prize } from './prizes/Prize';
import { createPrizes } from '../../../../../features/board/createCampain/photoContest/prizesSlice';
import TokenService from '../../../../../services/token';


const Prizes = ({ setActiveTab }) => {

  const info = useSelector(state => state.createContest)
  console.log(info, "info")
  const { id } = info?.data?.data?.data;

  const token = TokenService.getToken() || undefined; 

  const navigate = useNavigate()

  const schema = Yup.object().shape({
    prize: Yup.array().of(Yup.object().shape({
      name: Yup.string().required("Required"),
      winners: Yup.number().required("Required"),
      imageDoc: Yup.mixed().required('File is required'),
     })),

  });

  const initialValues = {
    prize: [{ name: "", winners: "", imageDoc: null}],
  };

 

  const submitForm = async(values) => {
    let prizes = [];
      values?.prize?.map((list, index) => {
        console.log(list, "dodo")
        return prizes.push({ 
          name: list?.name,
          winners: list?.winners,
          imageDoc: list?.imageDoc
        })
      });
      console.log(prizes, "lala")
      const formData = new FormData();


      prizes?.forEach((prize, index) => {
        formData.append(`name[${index}]`, prize.name);
        formData.append(`no_of_winners[${index}]`, prize.winners);
        if (prize.imageDoc) {
          formData.append(`image[${index}]`, prize.imageDoc);
        } else {
          console.error(`No image found for prize index ${index}`);
        }
      });

       // Check FormData entries
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      await axios.post(`https://hackathon.smhptech.com/api/prizes/create/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res, "lak")
        toast("Success", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
        navigate("/create-campaign/contest-view")
      })
      .catch((err) => {
        console.log(err, "err")
        toast("Error", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
      })
        
  }


  return (
    <div className='p-4'>

      <div className='xs:w-full lg:w-[1000px]  lg:h-[116px] bg-[#fff] rounded-xl p-6'>
        <h2 className='xs:text-base  md:text-xl text-[#000]'>Prize setup </h2>
        <p className='xs:text-sm md:text-base text-NEUTRAL-_800'>
          Customise the Prize Area of the NOA Hackathon, 
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
              const { handleSubmit, handleChange, values, setFieldValue,  errors, touched } = formikProps
              return (
                <Form onSubmit={handleSubmit} className="flex flex-col ">
                  <div className='xs:w-full lg:w-11/12 flex flex-col  gap-4 mb-10'>

                   <FieldArray
                      name='prize'
                      render={arrayHelpers => (
                        <div className='flex flex-col gap-10'>
                          <div className='grid xs:grid-cols-1 gap-2'>
                            {
                              values?.prize && values?.prize?.length > 0 ? (
                                values?.prize?.map((prize, index) => (
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
                    
                  </div>

                  <div className='flex xs:mt-3 md:mt-5 lg:mt-5 gap-4 justify-end'>
                    <button 
                      type="submit" 
                      onClick={() => { window.scrollTo(0, 0)}} 
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