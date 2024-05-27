import React, { useState } from 'react';
import Logo from "../../../assets/icons/Educontest.svg";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate, Link } from 'react-router-dom';


const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [mediaOpen, setMediaOpen] = useState(false)
    const [collaborationOpen, setCollaborationOpen] = useState(false)
    const [schoolOpsOpen, setSchoolOpsOpen] = useState(false)
    const [financeOpen, setFinanceOpen] = useState(false)
    const [eduToolsOpen, setEduToolsOpen] = useState(false)
    const [logisticOpen, setLogisticOpen] = useState(false)
    const [marketPlaceOpen, setMarketPlaceOpen] = useState(false)

    const navigate = useNavigate()

    function appClick () {
      setIsOpen(!isOpen)
    }

    function mediaClick () {
      setMediaOpen(!mediaOpen)
    }

    function collaborationClick () {
      setCollaborationOpen(!collaborationOpen)
    }

    function schoolOpsClick() {
      setSchoolOpsOpen(!schoolOpsOpen)
    } 

    function financeClick() {
      setFinanceOpen(!financeOpen)
    } 

    function eduToolsClick() {
      setEduToolsOpen(!eduToolsOpen)
    } 

    function logisticClick() {
      setLogisticOpen(!logisticOpen)
    } 

    function marketPlaceClick() {
      setMarketPlaceOpen(!marketPlaceOpen)
    } 

  return (
    <div className=''>
      <div className='w-full flex flex-row justify-between items-center'>
            <div className="w-full flex " onClick={() => navigate("/") }>
                <img src={Logo} alt="logo" loading="lazy" className="h-[30%] w-[30%] " />
            </div>
        </div>
      <div className='w-full mx-auto flex flex-col gap-3 p-10 justify-center text-center items-center'>
        <div className='flex flex-col h-auto'>
          <div
            onClick={() => appClick(true)}
            className="block justify-center font-medium cursor-pointer text-lg flex items-center text-gray-900 hover:text-red-500 focus:outline-none"
          >
            Apps <RiArrowDropDownLine className='mt-1'/>
          </div>
            {isOpen && (
              <div className='flex flex-col gap-3'>

                <div className='flex flex-col gap-3 mt-2'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => mediaClick(true)}>Media and Entertainment <RiArrowDropDownLine className='mt-1'/></p>
                  {mediaOpen && (
                    <div className='flex flex-col gap-3' >
                        <Link to="https://edutv.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduTv </Link>
                        <Link to="https://eduradio.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduRadio </Link>
                        <Link to="http://educhat.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduChat </Link>
                        <Link to="http://eduforum.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduForum </Link>
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduNews </Link>
                    </div>
                  )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                    <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => collaborationClick(true)}>Collaboration <RiArrowDropDownLine className='mt-1'/></p>
                    {collaborationOpen && (
                      <div className='flex flex-col gap-3' >
                          <Link to="http://edufield.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduField </Link>
                          <Link to="https://educatial.social" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduSocial </Link>
                          <Link to="https://edugames-main.netlify.app" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduGame </Link>
                          <Link to="https://educontest-main.netlify.app" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduContest </Link>
                          <Link to="http://geolocator.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduGeolocator </Link>
                      </div>
                    )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => schoolOpsClick(true)}>School Ops <RiArrowDropDownLine className='mt-1'/></p>
                  {schoolOpsOpen && (
                    <div className='flex flex-col gap-3' >
                        <Link to="http://edusims.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduSims </Link>
                        <Link to="https://eduhub.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduHub </Link>
                        <Link to="http://eduintelligence.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduIntelligence </Link>
                    </div>
                  )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => financeClick(true)}>Finance <RiArrowDropDownLine className='mt-1'/></p>
                  {financeOpen && (
                    <div className='flex flex-col gap-3' >
                        <Link to="http://edufunds.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduFund </Link>
                        <Link to="" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduPay </Link>
                    </div>
                  )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => eduToolsClick(true)}>EduTools <RiArrowDropDownLine className='mt-1'/></p>
                  {eduToolsOpen && (
                    <div className='flex flex-col items-center gap-3'>
                        <Link to="https://educatial.up.railway.app" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduCloud </Link>
                        <Link to="http://edudrive.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduDrive </Link>
                        <Link to="http://edupublisher.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduPublisher </Link>
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduScanner </Link>
                    </div>
                  )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => logisticClick(true)}>Logistics <RiArrowDropDownLine className='mt-1'/></p>
                  {logisticOpen && (
                    <div className='flex flex-col items-center gap-3' >
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduRide </Link>
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduLogistics </Link>
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduTracker </Link>
                    </div>
                  )}
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <p className='text-YELLOW-_100 text-sm flex items-center font-semibold' onClick={() => marketPlaceClick(true)}>Marketplace <RiArrowDropDownLine className='mt-1'/></p>
                  {marketPlaceOpen && (
                    <div className='flex flex-col items-center gap-3' >
                        <Link to="https://edumarketplace.educatial.com" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduMarketplace </Link>
                        <Link to="#" target='_blank' className='text-NEUTRAL-_600 text-sm font-normal'>EduHostel </Link>
                    </div>
                  )}
                </div>

              </div>
            )}
          
        </div>
        <div className='font-medium cursor-pointer text-lg' onClick={() => navigate("/about")}>About</div>
        <div className='font-medium cursor-pointer text-lg' onClick={() => navigate("#")}>Talk to us</div>

      </div>

    </div>
  )

}

export default MobileNavbar;
