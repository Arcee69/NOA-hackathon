import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { CgSpinner } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../../features/board/settings/updateProfileSlice';

const Profile = () => {
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getProfile = useSelector(state => state.getProfile)
    console.log(getProfile, "getProfile")

    const profileDetails = getProfile?.data?.data?.user

    const formValidationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        // lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required")
    })

    const submitForm = (values, action) => {
        setLoading(true)
        const data = {
            // name: values?.firstName + " " + values?.lastName,
            name: values?.name,
            email: values?.email
        }
        dispatch(updateProfile(data))
        .then((res) => {
            setLoading(false)
            action.resetForm()
        })
    }
    
  return (
    <div className='p-2'>
        <div className='w-[90%] flex flex-col mx--auto'>
            <div className='flex flex-col gap-1 my-5'>
                <p className='font-mont_alt text-[#101828] font-medium text-[18px]'>Profile</p>
                <p className='font-mont_alt text-[#667085] text-sm'>Update your photo and personal details here.</p>
            </div>
            <hr />
            <div className='mt-6'>
                <Formik
                initialValues={{
                    name: "",
                    // lastName: "",
                    email: "",
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

                                    <div className='flex flex-col lg:flex-row gap-[32px] w-full '>
                                        <label htmlFor='Name' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>Name</label>
                                        {/* <div className='w-full flex flex-col lg:flex-row items-center gap-3'>
                                            <div className=' flex flex-col gap-1'>
                                                <input
                                                    name='lastName' 
                                                    type='text'
                                                    placeholder='Last Name'
                                                    className='lg:w-[280px] rounded-lg capitalize h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD]'
                                                    value={values?.lastName}
                                                    onChange={handleChange}
                                                />
                                                {errors.lastName && touched.lastName ? 
                                                    <div className='text-RED-_100'>{errors.lastName}</div> 
                                                    : null
                                                }
                                            </div>
                                            <div className=' flex flex-col gap-1'>
                                                <input
                                                    name='firstName' 
                                                    type='text'
                                                    placeholder='First Name'
                                                    className='lg:w-[280px] rounded-lg h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD]'
                                                    value={values?.firstName}
                                                    onChange={handleChange}
                                                />
                                                {errors.firstName && touched.firstName ? 
                                                    <div className='text-RED-_100'>{errors.firstName}</div> 
                                                    : null
                                                }
                                            </div>
                                        </div> */}
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='name' 
                                                type='text'
                                                placeholder={profileDetails?.name}
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && touched.name ? 
                                                <div className='text-RED-_100'>{errors.name}</div> 
                                                : null
                                            }
                                        </div>
                                       
                                    </div>
                                    

                                

                                    <div className='flex flex-col lg:flex-row gap-[32px]'>
                                        <label htmlFor='Email' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>Email</label>
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='email' 
                                                type='email'
                                                placeholder={profileDetails?.email}
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && touched.email ? 
                                                <div className='text-RED-_100'>{errors.email}</div> 
                                                : null
                                            }
                                        </div>
                                    </div>

                                    
                                    <div className='flex flex-col lg:flex-row gap-[32px]'>
                                        <label htmlFor='Role' className='lg:w-[280px] text-sm font-medium text-[#344054] font-mont_alt'>Role</label>
                                        <div className='w-full flex flex-col gap-1'>
                                            <input
                                                name='role' 
                                                type='text'
                                                placeholder={profileDetails?.role}
                                                className='xs:w-full lg:w-[572px] lg:h-[44px] mt-1.5 py-2.5 px-3.5 border outline-none border-[#D0D5DD] rounded-lg'
                                                value={values?.role}
                                                readOnly
                                                onChange={handleChange}
                                            />
                                            {errors.role && touched.role ? 
                                                <div className='text-RED-_100'>{errors.role}</div> 
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

export default Profile