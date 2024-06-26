import React, { useState } from "react";
import * as Yup from 'yup'
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Game from "../../../assets/images/project-b.png";
import NigeriaFlag from "../../../assets/images/nigeria_flag.png";
import Google from "../../../assets/icons/google-icon.svg";
import Facebook from "../../../assets/icons/facebook-icon.svg";
import PasswordField from "../../../components/InputFields/PasswordField";
import { loginUser } from "../../../features/auth/loginSlice";

const LoginPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const userLoggedIn  = useSelector(state => state.userLogin)
  const { loading } = userLoggedIn
  
  const dispatch = useDispatch()
  
  const from = location.state?.from?.pathname || "/dashboard";
  

  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
    .required("Password is required"),
  }) 


  const submitForm = (values) => {

    const data = {
      email: values?.email,
      password: values?.password
    }
    // login(data, from, setLoading)
    dispatch(loginUser(data))
    .then(() => {
      navigate(from , { replace: true });
    })

  };


  return (
    <div className="w-full h-full">
      <div className="flex lg:justify-between">
        <div className="xs:hidden lg:flex" >
          <img src={NigeriaFlag} alt="Contest" className="h-[450px]"/>
        </div>
        <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-[670px]'> {/* h-[670px] */}
          <p className="text-[#6F8EB3] font-normal text-base xs:mx-auto lg:mx-0 leading-6">Welcome, Please enter your details</p>
          <div className="h-[300px]">
            <Formik
              initialValues={{
                  email: "",
                  password: ""
              }}
              validationSchema={formValidationSchema}
              onSubmit={(values) => {
                  window.scrollTo(0, 0)
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
                      <label htmlFor='email' className="text-base font-semibold text-[#000000]">Email</label>
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
                    <div className="flex flex-col xs:w-full lg:w-[507px]">
                      <div className="flex flex-row items-center justify-between">
                        <label htmlFor='email' className="text-base font-semibold text-[#000000]">Password</label>
                        <p className="text-[#027315]  text-sm cursor-pointer" onClick={() => navigate("/forgot-password")}>Forgot Password?</p>
                      </div>
                      <PasswordField 
                        name="password"
                        value={values.password}
                        placeholder="Password"
                        className="border lg:w-[507px] h-[51px] shadow"
                        onChange={handleChange}
                      />
                       {errors.password && touched.password ? (
                        <div className='text-RED-_100'>{errors.password}</div>
                        ) : null}
                    </div>

                    <button 
                      className= {`${loading ? "bg-[#e8e9eb] text-[#fff]" : " bg-[#027315]  text-[#fff] "} xs:w-full lg:w-[507px]  rounded-lg p-3 cursor-pointer text-center w-full h-[54px] text-lg font-medium`}
                      type="submit"
                    >
                      {loading ?  "Please wait..."  :  "Login"}
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

export default LoginPage


// const [showPassword, setShowPassword] = useState(false);
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleShowPassword = () => {
//   setShowPassword(!showPassword);
// };

{/* <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
<div>
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Welcome 
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
              ) : (
                <AiFillEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      </div>
    </div>

</div> 

</div> */}