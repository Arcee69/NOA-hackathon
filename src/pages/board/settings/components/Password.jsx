import React, { useState } from 'react'
import {Form, Formik } from 'formik';
import * as Yup from "yup"
import { CgSpinner } from 'react-icons/cg';
import { updatePassword } from '../../../../features/board/settings/updatePasswordSlice';
import { useDispatch } from 'react-redux';


const Password = () => {
    const [loading, setLoading] = useState(false) 

    const dispatch = useDispatch()

    const formValidationSchema = Yup.object().shape({
        currentPassword: Yup.string().required("Required"),
        newPassword: Yup.string().required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
    })

    const submitForm = (values, action) => {
        setLoading(true)
        const data = {
            current_password: values?.currentPassword,
            new_password: values?.newPassword,
            new_password_confirmation: values?.confirmPassword
        }
        dispatch(updatePassword(data))
        .then((res) => {
            setLoading(false)
            action.resetForm()
        })
    }

  return (
    <div className='p-2'>
        <div className='w-[90%] flex flex-col mx--auto'>
            <div className='flex flex-col gap-1 my-5'>
                <p className='font-mont_alt text-[#101828] font-medium text-[18px]'>Password</p>
                <p className='font-mont_alt text-[#667085] text-sm'>Please enter your current password to change your password.</p>
            </div>
            <hr />
            <div className='mt-6'>
                <Formik
                initialValues={{
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                validationSchema={formValidationSchema}
                enableReinitialize={true}
                onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    // console.log(values, "ruger");
                    submitForm(values, action)
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
                    <Form onSubmit={handleSubmit} className="mt-2 lg:mx-3 ">
                        <div className='flex flex-col gap-8'>
                            <div className='flex xs:flex-col lg:flex-row justify-between w-full lg:items-center'>

                                <div className='flex flex-col gap-6 w-full'>

                                    <div className='flex flex-col lg:flex-row gap-[32px]'>
                                        <label htmlFor='Current Password' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>Current Password</label>
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='currentPassword' 
                                                type='password'
                                                placeholder='Current Password'
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.currentPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.currentPassword && touched.currentPassword ? 
                                                <div className='text-RED-_100'>{errors.currentPassword}</div> 
                                                : null
                                            }
                                        </div>
                                    </div>

                                    <div className='flex flex-col lg:flex-row gap-[32px]'>
                                        <label htmlFor='newPassword' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>New Password</label>
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='newPassword' 
                                                type='password'
                                                placeholder='New Password'
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.newPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.newPassword && touched.newPassword ? 
                                                <div className='text-RED-_100'>{errors.newPassword}</div> 
                                                : null
                                            }
                                        </div>
                                    </div>

                                    
                                    <div className='flex flex-col lg:flex-row gap-[32px]'>
                                        <label htmlFor='Confirm Password' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>Confirm Password</label>
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='confirmPassword' 
                                                type='password'
                                                placeholder='Confirm Password'
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.confirmPassword && touched.confirmPassword ? 
                                                <div className='text-RED-_100'>{errors.confirmPassword}</div> 
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>

                            
                            </div>

                        

            


                        </div>

                        <div className='flex xs:mt-4 md:mt-5 lg:mt-5 gap-4 justify-end'>
                            <button 
                                type="button" 
                                // onClick={() => setActiveTab("User Details")}
                                className="font-normal border-[#027315] bg-[#fff] rounded-lg text-[#027315] text-base p-2 border border-solid"
                                style={{ width: "130px" }}
                            >
                                Cancel
                            </button>

                            <button 
                                type="submit" 
                                // onClick={() => }
                                className="font-normal h-[52px] bg-[#027315] flex items-center justify-center text-base p-2 rounded-lg text-[#fff] border border-solid"
                                style={{ width: "225px" }}
                            >
                                <p className='text-[#fff] text-base font-mont_alt text-[18px] text-center font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Save Changes"}</p>
                            </button>

                        
            
                        </div>
                    </Form>
                )}
                </Formik>
            </div>

        </div>
    </div>
  )
}

export default Password