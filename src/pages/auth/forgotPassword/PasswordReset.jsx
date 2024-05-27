import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import Game from "../../../assets/images/project-b.png";
import PasswordField from '../../../components/InputFields/PasswordField'

const PasswordReset = () => {

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        otpCode: Yup.number().required("Otp is Required"),
        email: Yup.string().email("Enter A Valid Email").required("Email is Required"),
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
                    )
                    .matches(
                    /^(?=.*[!@#\$%\^&\*])/,
                    "  Must Contain  One Special Case Character"
                    ),
        confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required("Confirm Password is required"),
    });


    const submitResetPassword = async (values) => {
        const data = {
            email: values?.email,
            token: values?.otpCode,
            password: values?.password,
            password_confirmation: values?.confirmPassword
        }
        await api.post(appUrls?.RESET_PASSWORD_WITH_OTP_URL, data)
        .then((response) => {
            console.log(response, "Tinubu");
            toast(response?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            navigate("/login")
        })
        .catch((error) => {
            console.log(error, "soso");
            toast(error?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
    }
 
  return (
    <div className="w-full h-full">
    <div className="flex lg:justify-between lg:items-center align-center">
        <div className="xs:hidden lg:flex" >
            <img src={Game} alt="Contest" className="h-screen"/>
        </div>
        <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-[670px]'> {/* h-[670px] */}
            <p className="text-primary font-semibold xs:text-2xl md:text-3xl xs:mx-auto lg:mx-0 ">Reset Password</p>
            <div className="lg:w-[507px] h-[300px]">
                <Formik
                    initialValues={{
                        otpCode: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values) => {
                        // window.scrollTo(0, 0)
                        console.log(values, "daft")
                        submitResetPassword(values)
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
                    <div className='flex flex-col gap-6 h-[47px]'>
            
                        {/* <div className="font-normal text-[#8692A6] xs:text-base xs:text-center md:text-left md:text-lg">
                            We've sent an OTP Verification code to your inbox. Remember to check your spam folder too!
                        </div> */}
                        <div className="flex flex-col ">
                            <label htmlFor='email' className="text-base font-semibold text-[#000000]">Enter your Email</label>
                                <input
                                    name="email"
                                    placeholder="youremail@domain.com"
                                    type="text" 
                                    value={values.email}
                                    onChange={handleChange}
                                    className="rounded xs:w-full mt-3 outline-none border-[#5377F0]  lg:w-[470px] h-[51px] border-solid  p-3 border"
                                />
                                {errors.email && touched.email ? (
                                <div className='text-RED-_100'>{errors.email}</div>
                                ) : null}
                        </div>

                        <div className="flex flex-col xs:w-full lg:w-[470px]">
                            <label htmlFor='password' className="text-base font-semibold text-[#000000]">New Password</label>
                            <PasswordField 
                                name="password"
                                value={values.password}
                                placeholder="Password"
                                className="border border-[#5377F0]  lg:w-[470px] h-[51px]"
                                onChange={handleChange}
                            />
                            {errors.password && touched.password ? (
                                <div className='text-RED-_100'>{errors.password}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col xs:w-full lg:w-[470px]">
                            <label htmlFor='Confirm password' className="text-base font-semibold text-[#000000]">Confirm New Password</label>
                            <PasswordField 
                                name="confirmPassword"
                                value={values.confirmPassword}
                                placeholder="Password"
                                className="border border-[#5377F0]  lg:w-[470px] h-[51px]"
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div className='text-RED-_100'>{errors.confirmPassword}</div>
                            ) : null}
                        </div>

                        <div className="mb-5 mt-2">
                            <label htmlFor='Otp' className="text-base font-semibold text-[#000]">Enter OTP</label>
                                {/* Tablet and Laptop */}
                            <div className="mt-3 xs:hidden md:block">
                                <OtpInput
                                name="otpCode"
                                value={values.otpCode}
                                onChange={(e) => setFieldValue("otpCode", e)}
                                placeholder="123456"
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                inputStyle={{
                                    border: "1px solid #5377F0",
                                    borderRadius: "4px",
                                    width: "72px",
                                    height: "60px",
                                    fontSize: "12px",
                                    color: "#000",
                                    fontWeight: "400",
                                    caretColor: "black",
                                }}
                                focusStyle={{
                                    border: "1px solid #227EFF",
                                    outline: "none",
                                }}
                            />
                                {errors.otpCode && touched.otpCode ? (
                                    <div className='text-RED-_100'>{errors.otpCode}</div>   
                                ) : null}
                            </div>
                                {/* Mobile Version  38px*/}
                            <div className="mt-3 xs:block md:hidden">
                                <OtpInput
                                    name="otpCode"
                                    value={values.otpCode}
                                    onChange={(e) => setFieldValue("otpCode", e)}
                                    placeholder="123456"
                                    numInputs={6}
                                    separator={<span style={{ width: "8px" }}></span>}
                                    isInputNum={true}
                                    shouldAutoFocus={true}
                                    inputStyle={{
                                        border: "1px solid #5377F0",
                                        borderRadius: "4px",
                                        width: "38px",
                                        height: "38px",
                                        fontSize: "16px",
                                        color: "#000",
                                        fontWeight: "400",
                                        caretColor: "black",
                                    }}
                                    focusStyle={{
                                        border: "1px solid #227EFF",
                                        outline: "none",
                                    }}
                                />
                                {errors.otpCode && touched.otpCode ? (
                                    <div className='text-RED-_100'>{errors.otpCode}</div>
                                   
                                ) : null}
                            </div>
                        </div>

                        <button 
                        className='xs:w-full lg:w-[507px]  bg-primary rounded-lg p-3 text-[#fff] cursor-pointer text-center w-full h-[54px] text-lg font-medium'
                        type="submit"
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
  )
}

export default PasswordReset