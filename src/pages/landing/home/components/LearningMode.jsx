import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import Create from "../../../../assets/images/create.png"
import Host from "../../../../assets/images/host.png"
import Fun from "../../../../assets/images/fun.png"

const LearningMode = () => {
  return (
    <div className='flex justify-center mx-auto xs:mt-24 lg:mt-36 xs:w-full lg:w-[1108px] lg:h-[760px]'>
        <div className='flex flex-col '>
            <h3 className='font-semibold text-center mx-auto xs:w-[325px] lg:w-[448px] xs:text-2xl lg:leading-10 lg:text-[40px]'>Your Class Activities Made Fun</h3>
            <div className='flex xs:flex-col lg:flex-row xs:mt-14 lg:mt-0 gap-6 '>
                <div className='flex flex-col lg:justify-start lg:w-[378px] lg:h-[548px]'>
                    <img src={Create} alt="Play" loading='lazy' className='w-[333px] h-[293px] shadow-outline'/>
                    <h3 className='text-NEUTRAL-_100 font-bold text-2xl mt-10'>Create contest</h3>
                    <p className='mt-4 font-normal text-lg text-tertiary'>
                        Get ready to level up your learning with Edugames! From math to science, 
                        history to literature, there's something for everyone. 
                        Join now and discover a new world of learning.
                    </p>
                    <a href='#' className='mt-0.5 text-secondary font-bold flex gap-1 items-center'>
                        Dive right in <FaGreaterThan className='w-3 h-3' />
                    </a>
                </div>
                <div className='flex flex-col justify-start xs:mt-8 lg:mt-0  lg:pt-16 lg:w-[378px] lg:h-[549px]'>
                    <img src={Host} alt="Learn" loading='lazy' className='w-[333px] h-[293px] shadow-outline'/>
                    <h3 className='text-NEUTRAL-_100 font-bold text-2xl mt-10'>Host Competitions</h3>
                    <p className='mt-4 font-normal text-lg text-tertiary'>
                        Create your own contests, challenge your peers, 
                        and explore categories ranging from science to literature. 
                        Join us today and let's ignite our intellectual curiosity together!
                    </p>
                    <a href='#' className='mt-1 text-secondary font-bold flex gap-1 items-center'>
                        Explore now <FaGreaterThan className='w-3 h-3'/>
                    </a>
                </div>
                <div className='flex flex-col justify-start xs:mt-8 lg:mt-0  lg:pt-36 lg:w-[378px] lg:h-[522px]'>
                    <img src={Fun} alt="Share" loading='lazy' className='w-[333px] h-[293px] shadow-outline'/>
                    <h3 className='text-NEUTRAL-_100 font-bold text-2xl mt-10'>Share the fun</h3>
                    <p className='mt-4 font-normal text-lg text-tertiary'>
                        Eductial is one of the fastest-growing Online learning communities. 
                    </p>
                    <a href='#' className='mt-6 text-secondary font-bold flex gap-1 items-center'>
                        Check our Forums <FaGreaterThan className='w-3 h-3' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearningMode