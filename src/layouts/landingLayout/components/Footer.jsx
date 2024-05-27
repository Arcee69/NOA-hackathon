import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { FaGreaterThan } from 'react-icons/fa'
import Logo from "../../../assets/icons/Educontest.svg"
// import Logo from "../../../assets/icons/Logo-Footer.svg"
import Facebook from "../../../assets/icons/Facebook.svg"
import Twitter from "../../../assets/icons/Twitter.svg"
import Instagram from "../../../assets/icons/Instagram.svg"
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ModalPop from '../../../components/modal/modalPop';
import TermsAndConditions from '../../../pages/landing/termsAndConditions';
import PrivacyPolicy from '../../../pages/landing/privacyPolicy';
import Faqs from '../../../pages/landing/faq';

const Footer = () => {
    const [openTermsAndConditionsModal, setOpenTermsAndConditionsModal] = useState(false)
    const [openPrivacyPolicyModal, setOpenPrivacyPolicyModal] = useState(false)
    const [openFaqsModal, setOpenFaqsModal] = useState(false)

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email("emailFormat").required("Required"),
    });

    const submitForm = async (values) => {
        const data = {
            email: values?.email
        };
        await api.post(appUrls.NEWSLETTER_URL, data)
        .then((response) => {
            toast("Thank you for subscribing", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
        .catch((err) => {
            toast("Invalid Email or Password", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
        })
    }


  return (
    <div className='bg-NEUTRAL-_200 py-3 xs:px-2 lg:px-14 w-full xs:h-full lg:h-[350px]'>
        <div className='flex flex-col xs:my-14 lg:my-16'>

        <div className='xs:flex lg:hidden lg:mx-2 p-5 mt-3'>
                <img
                    src={Logo}
                    alt="educontest-logo"
                    loading='lazy'
                    className="cursor-pointer mt-1"
                    onClick={() => navigate('/')}
                />
            </div>

            <div className='mx-5 flex xs:flex-col lg:flex-row justify-between'>
                                    {/* laptop Newsletter Form */}
                <div className='xs:w-full xs:gap-2 lg:gap-0 lg:mt-0 lg:w-[289px] lg:h-[139px] xs:hidden lg:flex flex-col justify-between'>
                    <h3 className='text-[#fff] font-normal w-[175px] text-xl'>Subscribe to our newsletter</h3>
                    <div className='xs:w-full md:w-min'>
                        <Formik
                                initialValues={{
                                    email: "",
                            
                                }}
                                validationSchema={formValidationSchema}
                                onSubmit={(values) => {
                                    // window.scrollTo(0, 0)
                                    console.log(values, "ozuo")
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
                            <div className='flex flex-row items-center h-[47px]'>
                    
                                <div className="flex flex-col ">
                                    <input
                                        name="email"
                                        placeholder="Email Address"
                                        type="text" 
                                        value={values.email}
                                        onChange={handleChange}
                                        className="rounded-l-2xl outline-none xs:w-[240px] md:w-[300px] bg-[#fff] lg:w-[289px] h-[51px] border-solid  p-3 border"
                                    />
                                </div>

                                <div className='xs:w-[85px] md:w-[50px] h-[51px] cursor-pointer '>
                                    <button type="submit" className='bg-[#F36F56] p-2 w-[50px] h-[50px] rounded-br-xl rounded-tr-xl flex justify-center text-center text-[#fff]'><FaGreaterThan className='flex flex-col my-auto'/></button>
                                </div>
                            
                            </div>
                            {errors.email && touched.email ? (
                                <div className='text-RED-_100'>{errors.email}</div>
                                ) : null}
            
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>

                <div className='flex flex-col xs:mt-5 xs:gap-2 lg:gap-0 lg:mt-0  lg:h-[139px] justify-between'>
                    <h3 className='text-[#FAFAFA] cursor-pointer' onClick={() => { navigate("/about"), window.scrollTo(0, 0)}}>About</h3>
                    <h3 className='text-[#C4C4C4] cursor-pointer font-light' onClick={() => {navigate("/"), window.scrollTo(0, 0)}}>Home</h3>
                    <h3 className='text-[#C4C4C4] cursor-pointer font-light' onClick={() => setOpenTermsAndConditionsModal(true)}>Terms & Conditions</h3>
                    <h3 className='text-[#C4C4C4] cursor-pointer font-light' onClick={() => setOpenPrivacyPolicyModal(true)}>Privacy Policy</h3>
                </div>
                <div className='flex flex-col xs:mt-8 xs:gap-2 lg:gap-0 lg:mt-0  lg:h-[102px] justify-between'>
                    <h3 className='text-[#FAFAFA] cursor-pointer' onClick={() => setOpenFaqsModal(false)}>FAQs</h3>
                    {/* <h3 className='text-[#C4C4C4] font-light'>FAQs</h3>
                    <h3 className='text-[#C4C4C4] font-light'>Contact</h3> */}
                </div>
                <div className='flex flex-col xs:mt-8 lg:mt-0 '> 
                    <h3 className='text-[#FAFAFA]'>Follow Us</h3>
                    <div className='flex justify-between mt-3 lg:self-center w-[133px] lg:h-[22px]'>
                        <img src={Facebook} alt="facebook-icon" />
                        <img src={Twitter} alt="twitter-icon" />
                        <img src={Instagram} alt="instagram-icon" />
                    </div>
                </div>
                                {/* mobile Newsletter Form */}
                <div className='xs:w-full xs:gap-2 lg:gap-0 xs:mt-8 lg:hidden lg:w-[289px] lg:h-[139px] xs:flex flex-col justify-between'>
                    <h3 className='text-[#fff] font-normal w-[175px] text-xl'>Subscribe to our newsletter</h3>
                    <div className='xs:w-full md:w-min'>
                        <Formik
                                initialValues={{
                                    email: "",
                            
                                }}
                                validationSchema={formValidationSchema}
                                onSubmit={(values) => {
                                    // window.scrollTo(0, 0)
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
                            <div className='flex flex-row items-center h-[47px]'>
                    
                                <div className="flex flex-col ">
                                    <input
                                        name="email"
                                        placeholder="Email Address"
                                        type="text" 
                                        value={values.email}
                                        onChange={handleChange}
                                        className="rounded-l-2xl outline-none xs:w-[240px] md:w-[300px] bg-[#fff] lg:w-[289px] h-[51px] border-solid  p-3 border"
                                    />
                                </div>

                                <div className='xs:w-[85px] md:w-[50px] h-[51px] cursor-pointer '>
                                    <button className='bg-[#F36F56] p-2 w-[50px] h-[50px] rounded-br-xl rounded-tr-xl flex justify-center text-center text-[#fff]'><FaGreaterThan className='flex flex-col my-auto'/></button>
                                </div>
                            
                            </div>
                            {errors.email && touched.email ? (
                                <div className='text-RED-_100'>{errors.email}</div>
                                ) : null}
            
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>

            </div>
            <div className='xs:hidden lg:flex lg:mx-2 p-5 mt-3'>
                <img
                    src={Logo}
                    alt="educontest-logo"
                    loading='lazy'
                    className="cursor-pointer mt-1"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>

        <ModalPop isOpen={openTermsAndConditionsModal}>
            <TermsAndConditions handleClose={() => setOpenTermsAndConditionsModal(false)} />
        </ModalPop>

        <ModalPop isOpen={openPrivacyPolicyModal}>
            <PrivacyPolicy handleClose={() => setOpenPrivacyPolicyModal(false)} />
        </ModalPop>

        <ModalPop isOpen={openFaqsModal}> 
            <Faqs handleClose={() => setOpenFaqsModal(false)} />
        </ModalPop>

    </div>
  )
}

export default Footer