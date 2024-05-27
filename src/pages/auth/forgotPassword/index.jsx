import React, { useState } from "react";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { Form, Formik, ErrorMessage } from "formik";
import Game from "../../../assets/images/project-b.png";
import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const navigate = useNavigate()

  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),

  }) 


  const submitForm = async (values) => {
    // Perform forgot password logic

    const data = {
      email: values?.email
    };

    await api.post(appUrls?.FORGETPASSWORD_URL, data) 
    .then((response) => {
      console.log(response, "data")
      toast(response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
      navigate("/reset-password")
    })
    .catch((error) => {
      console.log(error, "obi")
      toast(error?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
  };

  return (
    <div className="w-full h-full">
      <div className="flex lg:justify-between">
        <div className="xs:hidden lg:flex" >
          <img src={Game} alt="Contest" className="h-screen"/>
        </div>
        <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-[670px]'> {/* h-[670px] */}
          <p className="text-[#000] font-semibold xs:text-base lg:text-3xl xs:mx-auto lg:mx-0 leading-6">Forgot your password?</p>
          <p className="text-[#6F8EB3] font-normal xs:text-sm lg:text-base xs:mx-auto lg:mx-0 leading-6">No worries! we’ll send you reset instructions</p>
          <div className="h-[300px]">
            <Formik
              initialValues={{
                  email: ""
              }}
              validationSchema={formValidationSchema}
              onSubmit={(values) => {
                  window.scrollTo(0, 0)
                  // navigate("/password-confirmation")
                  console.log(values, "often")
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
            <Form onSubmit={handleSubmit} className="flex flex-col lg:items-center">
                <div className='flex flex-col gap-6 lg:items-center h-[47px]'>
        
                    <div className="flex flex-col ">
                      <label htmlFor='email' className="text-base font-semibold text-[#000000]">Enter your Email</label>
                        <input
                            name="email"
                            placeholder="youremail@domain.com"
                            type="text" 
                            value={values.email}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] h-[51px] border-solid  p-3 border"
                        />
                         {errors.email && touched.email ? (
                          <div className='text-RED-_100'>{errors.email}</div>
                          ) : null}
                    </div>

                    <button 
                      className='xs:w-full lg:w-[507px]  bg-primary rounded-lg p-3 text-[#fff] cursor-pointer text-center w-full h-[54px] text-lg font-medium'
                      type="submit"
                    //   onClick={() => navigate("/create-campaign")}
                    >
                        Reset Password
                    </button>
                
                </div>
                

            </Form>
        )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword