import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';

import Game from "../../../assets/images/project-b.png";
import Google from "../../../assets/icons/google-icon.svg";
import Facebook from "../../../assets/icons/facebook-icon.svg";
// import GamePad from "../../../assets/images/game-pic-removeba.png";
// import { useUser } from '../../../providers/userDetailsProvider';
import PasswordField from "../../../components/InputFields/PasswordField";
import { signUpUser } from '../../../features/auth/signUpSlice';

const SignUp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const userSignUp = useSelector(state => state.userSignUp)
  const { loading } = userSignUp


  // console.log(userSignUp, "Pass")

  const location = useLocation()

  // const { signup } = useUser();
  const from = location.state?.from?.pathname || "/login";

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name Is Required"),
    lastName: Yup.string().required("Last Name Is Required"),
    phone: Yup.string().min(8).matches(phoneRegExp, 'Phone number is not valid').required("Phone Number Is Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password:  Yup.string().min(8, "Must Contain 8 Characters").required("Password is Required")
                  .matches(
                    /^(?=.*[a-z])/,
                    " Must Contain One Lowercase Character"
                  )
                  .matches(
                    /^(?=.*[A-Z])/,
                    "  Must Contain One Uppercase Character"
                  )
                  .matches(
                    /^(?=.*[0-9])/,
                    "  Must Contain One Number Character"
                  ),
                  // .matches(
                  //   /^(?=.*[!@#\$%\^&\*])/,
                  //   "  Must Contain  One Special Case Character"
                  // )
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Confirm Password is required"),
    }) 


  const submitForm = (values) => {
    const data = {
      first_name: values?.firstName,
      last_name: values?.lastName,
      phone_number: values?.phone,
      email: values?.email,
      // role: "educator",
      password: values?.password,
      password_confirmation: values?.confirmPassword
    }
    dispatch(signUpUser(data))
    .then(() => {
      navigate(from, { replace: true });
    })
    // signup(data, from, setLoading)

  };

  return (
    <div className="w-full h-full">
      <div className="flex lg:gap-24 lg:justify-center">
        <div className="xs:hidden lg:flex" >
          <img src={Game} alt="Contest" />
        </div>
        <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-full'> {/*  h-[670px]  w-[854px] h-[800px]*/}
          <p className="text-[#6F8EB3] font-normal xs:mx-auto lg:mx-0 text-base leading-6">Welcome, Please enter your details</p>
          <div className="h-[650px]">
            <Formik
              initialValues={{
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
              }}
              validationSchema={formValidationSchema}
              onSubmit={(values) => {
                  window.scrollTo(0, 0)

                  // console.log(values, "often")
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


                    <div className="flex flex-col  ">
                      <label htmlFor='First Name' className="text-base font-semibold text-[#000000]">First Name</label>
                        <input
                            name="firstName"
                            placeholder="Ex. John"
                            type="text" 
                            value={values.firstName}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] lg:h-[51px] border-solid  p-3 border"
                        />
                        {errors.firstName && touched.firstName ? (
                        <div className='text-RED-_100'>{errors.firstName}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor='Last Name' className="text-base font-semibold text-[#000000]">Last Name</label>
                        <input
                            name="lastName"
                            placeholder="Ex. Doe"
                            type="text" 
                            value={values.lastName}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] lg:h-[51px] border-solid  p-3 border"
                        />
                        {errors.lastName && touched.lastName ? (
                        <div className='text-RED-_100'>{errors.lastName}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor='Phone Number' className="text-base font-semibold text-[#000000]">Phone Number</label>
                        <input
                            name="phone"
                            placeholder="080******33"
                            type="text" 
                            value={values.phone}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] lg:h-[51px] border-solid  p-3 border"
                        />
                        {errors.phone && touched.phone ? (
                        <div className='text-RED-_100'>{errors.phone}</div>
                        ) : null}
                    </div>

              
        
                    <div className="flex flex-col ">
                      <label htmlFor='email' className="text-base font-semibold text-[#000000]">Email</label>
                        <input
                            name="email"
                            placeholder="youremail@domain.com"
                            type="text" 
                            value={values.email}
                            onChange={handleChange}
                            className="rounded xs:w-full outline-none shadow lg:w-[507px] lg:h-[51px] border-solid  p-3 border"
                        />
                        {errors.email && touched.email ? (
                        <div className='text-RED-_100'>{errors.email}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col lg:w-[507px]">
                      <div className="flex flex-row items-center justify-between">
                        <label htmlFor='email' className="text-base font-semibold text-[#000000]">Password</label>
                        {/* <p className="text-[#51B0F5] cursor-pointer text-sm" onClick={() => navigate("/forgot-password")}>Forgot Password?</p> */}
                      </div>
                      <PasswordField 
                        name="password"
                        value={values.password}
                        className="border lg:w-[507px] lg:h-[51px] shadow"
                        onChange={handleChange}
                      />
                      {errors.password && touched.password ? (
                        <div className='text-RED-_100'>{errors.password}</div>
                        ) : null}
                    </div>

                    
                    <div className="flex flex-col lg:w-[507px]">
                      <div className="flex flex-row items-center justify-between">
                        <label htmlFor='confirm_password' className="text-base font-semibold text-[#000000]">Confirm Password</label>
                      </div>
                      <PasswordField 
                        name="confirmPassword"
                        value={values.confirmPassword}
                        className="border lg:w-[507px] lg:h-[51px] shadow"
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className='text-RED-_100'>{errors.confirmPassword}</div>
                        ) : null}
                    </div>

                    <button 
                      className= {`${loading ? "bg-[#e8e9eb] text-[#fff]" : " bg-primary text-[#fff] "} xs:w-full lg:w-[507px]  rounded-lg p-3 cursor-pointer text-center w-full h-[54px] text-lg font-medium`}
                      type="submit"
                      // onClick={() => navigate("/create-campaign")}
                    >
                      {loading ?  "Please wait..."  :  "Sign Up"} 
                    </button>
                
                </div>
                

            </Form>
        )}
            </Formik>
          </div>
         
          <div className="flex  lg:h-[178px] flex-col gap-6">
            <p className="text-center text-base text-[#000] w-full">Or Login With</p>
            <button
              className='xs:w-full lg:w-[507px] flex items-center justify-center gap-2 border bg-[#fff] rounded-lg p-3 text-[#000] cursor-pointer w-full h-[54px] text-lg font-medium'
            >
              <img src={Google} alt="google-icon"/>
              <span className="">Continue With Google</span>
            </button>
            <button
              className='xs:w-full lg:w-[507px] flex items-center justify-center gap-2 border bg-[#fff] rounded-lg p-3 text-[#000] cursor-pointer w-full h-[54px] text-lg font-medium'
            >
              <img src={Facebook} alt="facebook-icon"/>
              <span className="">Continue With Facebook</span>
            </button>
          </div>
          <p className="text-center w-full xs:mb-3 md:mb-0 text-base font-semibold">
            Already have an account? 
            <span className="text-[#299EF3] cursor-pointer ml-1"  onClick={() => {navigate("/login"), window.scrollTo(0, 0)}}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp