import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/icons/noa_logo.svg"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white w-full h-[120px]'>
        <div className='flex flex-row items-center mx-5 lg:p-5'>
            <img
                src={Logo}
                alt="noa-logo"
                className="cursor-pointer mt-1 xs:flex md:block" //
                onClick={() => navigate("/")}
            />
            {/* <p className='text-[#000066] text-2xl font-semibold xs:hidden lg:flex'>Educatial</p> */}
        </div>
    </div>
  )
}

export default Header