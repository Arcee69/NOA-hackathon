import React, { useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Header.css';
import Logo from "../../../assets/icons/Educontest.svg"

const Header = () => {
    const [showAppsDropdown, setShowAppsDropdown] = useState(false);

    const navigate = useNavigate()

  return (
    <div className='bg-white w-full h-[120px]'>
        <div className='w-full flex justify-between items-center mx-5 p-5'>
            <div className='flex items-center'>
                {/* <div className=''> */}
                    {/* <img
                        src={Logo}
                        alt="educontest-logo"
                        className="cursor-pointer  xs:hidden md:block"
                        onClick={() => navigate('/')}
                    /> */}
                {/* </div> */}
                {/* <div className='flex w-[498px] items-center mt-2.5 justify-evenly'>
                    <div className="relative inline-block dropdown-wrapper">
                        <div 
                            onClick={() => setShowAppsDropdown(true)}
                            // onMouseOver={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                            className="block font-medium cursor-pointer text-lg flex items-center gap-1 text-gray-900 hover:text-red-500 focus:outline-none"
                        >
                            Apps <RiArrowDropDownLine className='mt-1'/>
                        </div> 
                        {showAppsDropdown && (
                            <div className="dropdown-menu bg-[#fff] shadow-2xl rounded-md mt-1 py-0 w-[960px]" onClick={() => setShowAppsDropdown(false)}> {/*  
                                <div className="block grid grid-cols-5 gap-5 cursor-pointer px-8 py-10 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>Media and Entertainment</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="https://edutv.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduTv </Link>
                                            <Link to="https://eduradio.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduRadio </Link>
                                            <Link to="http://educhat.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduChat </Link>
                                            <Link to="http://eduforum.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduForum </Link>
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduNews </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>Collaboration</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="http://edufield.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduField </Link>
                                            <Link to="https://educatial.social" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduSocial </Link>
                                            <Link to="https://edugames.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduGame </Link> {/* https://edugames-main.netlify.app 
                                            <Link to="https://educontest.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduContest </Link> {/* https://educontest-main.netlify.app 
                                            <Link to="http://geolocator.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduGeolocator </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>School Ops</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="http://edusims.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduSims </Link>
                                            <Link to="https://eduhub.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduHub </Link>
                                            <Link to="http://eduintelligence.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduIntelligence </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>Finance</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="http://edufunds.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduFund </Link>
                                            <Link to="" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduPay </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>EduTools</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="https://educatial.up.railway.app" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduCloud </Link>
                                            <Link to="http://edudrive.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduDrive </Link>
                                            <Link to="http://edupublisher.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduPublisher </Link>
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduScanner </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>Logistics</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduRide </Link>
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduLogistics </Link>
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduTracker </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-YELLOW-_100 text-sm font-semibold'>Marketplace</p>
                                        <div className='flex flex-col gap-3' >
                                            <Link to="https://edumarketplace.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduMarketplace </Link>
                                            <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduHostel </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='font-medium cursor-pointer text-lg' onClick={() => navigate("/about")}>About</div>
                    <div className='font-medium cursor-pointer text-lg' onClick={() => navigate("#")}>Talk to us</div>
                </div> */}
            </div>
            <div className='flex mx-10 mt-2'>
                <button className='mr-5 text-lg cursor-pointer font-medium' onClick={() => navigate("/login")}>LOGIN</button>
                <button 
                    className='bg-primary cursor-pointer rounded-lg p-3 text-[#fff] text-center w-[177px] h-[54px] text-lg font-medium'
                    // onClick={() => navigate("/Kyc")}
                    onClick={() => navigate("/register")}
                >
                    SIGN UP
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header