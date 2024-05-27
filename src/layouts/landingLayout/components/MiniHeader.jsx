import React, { useState } from 'react'
import Logo from "../../../assets/icons/Educontest.svg";
import { GiHamburgerMenu } from 'react-icons/gi'
import MiniNavList from './MiniNavList';
import SideModal from '../../../components/modal/SideModal';
import MobileNavbar from './MobileNavbar';

const MiniHeader = () => {
    const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <div className='bg-white w-full flex justify-between items-center'>
        <div className='cursor-pointer' onClick={() => navigate('/')}>
            <img
                src={Logo}
                alt="educontest-logo"
                className="cursor-pointer lg:hidden xs:block"
            />
        </div>
        {/* <div className='bg-[#ef6b6c] rounded w-10 h-10 flex justify-center items-center text-[#fff]' onClick={() => setOpenModal(true) }>
            <GiHamburgerMenu />
        </div> */}
    </div>
    <SideModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <MobileNavbar />
        {/* <MiniNavList handleClose={() => setOpenModal(false)} /> */}
    </SideModal>
    </>
  )
}

export default MiniHeader