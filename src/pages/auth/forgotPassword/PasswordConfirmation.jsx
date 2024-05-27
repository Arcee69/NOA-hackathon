import React from 'react'
import Game from "../../../assets/images/project-b.png";

const PasswordConfirmation = () => {
  return (
    <div className="w-full h-full">
        <div className="flex lg:justify-between">
        <div className="xs:hidden lg:flex" >
            <img src={Game} alt="Contest" className="h-screen"/>
        </div>
        <div className='xs:w-full flex flex-col gap-6  lg:w-[507px] lg:h-[670px]'>
            <p className="text-[#000] font-semibold xs:text-2xl lg:text-3xl xs:mx-auto lg:mx-0 leading-6">Thanks for signing up!</p>
            <p className="text-[#6F8EB3] font-normal xs:text-center lg:text-left text-base xs:mx-auto lg:mx-0 leading-6">
            We've sent a confirmation email to {email || "juniorfranklin@gmail.com"}. 
            Please check your inbox and click the verification link to complete your registration.<br/>
            Remember to check your spam folder!
            </p>
        </div>
        </div>
    </div> 
  );
}

export default PasswordConfirmation