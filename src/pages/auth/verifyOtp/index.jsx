import React, { useState } from 'react'
import * as Yup from 'yup'
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import {Form, Formik } from "formik";
import Game from "../../../assets/images/project-b.png";
import { appUrls } from '../../../services/urls';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

const VerifyOtp = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    
    const formValidationSchema = Yup.object().shape({
        otpCode: Yup.number().required("OTP is required"),
    });

    const submitForm = async (values) => {
        const data = {
            otp: values?.otpCode
        }
        setLoading(true)
        await api.post(appUrls?.VERIFY_OTP_URL, data)
        .then((response) => {
            console.log(response, "sososl")
            setLoading(false)
            if(response.status === 200) {
                toast(`${response?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                });
            }
            navigate("/login")
        })
        .catch((error) => {
            toast(`${error?.data?.description}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
            
        })
    }

    return (
        <div className="w-full h-full">
        <div className="flex lg:justify-between lg:items-center align-center">
            <div className="xs:hidden lg:flex" >
                <img src={Game} alt="Contest" className="h-screen"/>
            </div>
            <div className='xs:w-full flex flex-col gap-6 lg:w-[507px] lg:h-[670px]'> {/* h-[670px] */}
                <p className="text-primary font-semibold xs:text-2xl md:text-3xl xs:mx-auto lg:mx-0 ">Thanks for signing up!</p>
                <div className="lg:w-[507px] h-[300px]">
                    <Formik
                    initialValues={{
                        otpCode: "",
                    }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values) => {
                        // window.scrollTo(0, 0)
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
                        <div className='flex flex-col gap-6 h-[47px]'>
                
                            <div className="font-normal text-[#8692A6] xs:text-base xs:text-center md:text-left md:text-lg">
                                We've sent an OTP Verification code to your inbox. Remember to check your spam folder too!
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
                            className={`${loading ? "bg-[#e8e9eb] text-[#fff]" : " bg-primary text-[#fff] "} xs:w-full lg:w-[507px]  rounded-lg p-3 cursor-pointer text-center w-full h-[54px] text-lg font-medium`}
                            type="submit"
                            >
                                {loading ?  "Please wait..."  :  "Verify OTP"} 
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

export default VerifyOtp