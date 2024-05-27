import React from 'react'
import Media from "../../../../assets/images/media.png"
import Collaboration from "../../../../assets/images/collaboration.png"
import SchoolOps from "../../../../assets/images/schoolOps.png"
import Finance from "../../../../assets/images/finance.png"
import Edutools from "../../../../assets/images/edutools.png"
import Marketplace from "../../../../assets/images/marketplace.png"
import Logistics from "../../../../assets/images/logistics.png"
import Circle from "../../../../assets/images/circle.svg"
import Book from "../../../../assets/images/book.png"

const Apps = () => {
  return (
    <div className='w-full'>
         <h2 className='text-NEUTRAL-_100 font-normal text-center xs:text-2xl lg:text-3xl'>We've Got Something For 
            <strong className='ml-2 font-bold xs:text-2xl xs:block lg:inline-block lg:text-3xl text-NEUTRAL-_100'>Everyone</strong>
        </h2>
        <div className='mt-14 w-full flex flex-col'>

            <div className='xs:w-full lg:h-[400px] flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                            {/* For Mobile and Tablet */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px]  flex flex-col align-center items-center rounded-xl'>
                    <img src={Media} alt="Media" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Media</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        Looking for an exciting way to connect with friends, family, or colleagues? 
                        Try hosting a live game with questions on a big screen or sharing a game with remote players! 
                        With our platform, you can create a fun and enganging quiz experience that everyone will love.
                    </p>
                </div>
                                                {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Media} alt="Media" loading='lazy' />
                </div>
            </div>

            <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                            {/* For Mobile and Tablet */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Collaboration} alt="Collaboration" loading='lazy' />
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Collaboration</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        This is the hub for all activities involving socializing and networking with people.
                        Engage and build relationships with individuals whi share similar interests. It Includes
                        apps such as EDU-SOCIAL, EDU-GAMES, and EDU-CONTEST, among others.
                    </p>
                </div>
                                                        {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Collaboration} alt="Collaboration" loading='lazy'/>
                </div>
            </div>

            <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                                    {/* For Mobile and Tablets */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={SchoolOps} alt="SchoolOps" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>School Ops</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        This pertains to all aspects of school management and administration, including the 
                        operation and organization of various functions. Some of the apps falling under this
                        category are EDU-UIS, EDU-HUB, and EDU-INTELLIGENCE.
                    </p>
                </div>
                                                            {/* For Laptops */}
                <div className='lg:flex xs:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={SchoolOps} alt="SchoolOps" loading='lazy'/>
                </div>
            </div>

            <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                                {/* For Mobile and Tablet */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Finance} alt="Game-Pad" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Finance</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        This encompasses all matters pertaining to financial transactions and funding. It Includes
                        two components namely EDU-FUND and EDU-PAY.
                    </p>
                </div>
                                                {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Finance} alt="Finance" loading='lazy'/>
                </div>
            </div>

           <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                            {/* For Mobile and Tablets */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Edutools} alt="Edutools" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Edutools</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        If you're searching for resources that can streamline your learning and interactions, then
                        you've come to the right place. Utilizing EDU-CLOUD, EDU-DRIVE, EDU-PUBLISHER, and EDU-SCANNER
                        can ensure that your educational journey is a seamless experience.
                    </p>
                </div>
                                                {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Edutools} alt="Edutools" loading='lazy'/>
                </div>
            </div>

           <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                            {/* For Mobile and Tablets */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Marketplace} alt="Marketplace" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Marketplace</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        You may be suprised to find a marketplace on an educational platform. However, this is simply 
                        a central location for promoting products that enhance the learning experience. Additionally,
                        you can also reserve lodging at EDU-HOSTEL through this platform.
                    </p>
                </div>
                                                {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Marketplace} alt="Marketplace" loading='lazy'/>
                </div>
            </div>

           <div className='xs:w-full lg:h-[400px] xs:mt-8 lg:mt-0 flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-36 xs:items-center lg:items-start lg:justify-center justify-items'>
                                            {/* For Mobile and Tablets */}
                <div className='xs:flex lg:hidden w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Logistics} alt="Logistics" loading='lazy'/>
                </div>
                <div className='w-full lg:w-[692px] lg:h-[284px] flex flex-col'>
                    <h3 className='xs:font-semibold lg:font-normal xs:text-2xl lg:text-4xl xs:text-center lg:text-left text-NEUTRAL-_300'>Logistics</h3>
                    <p className='xs:text-base lg:text-lg mt-4 font-normal xs:text-center lg:text-left text-NEUTRAL-_400'>
                        EDU-RIDE, EDU-LOGISTICS, and EDU-TRACKER are all-in-one solutions that address various logistical 
                        aspects. Educatial has simplified the process for users by introducing these applications, which 
                        you can explore to get started stress-free.
                    </p>
                </div>
                                                {/* For Laptops */}
                <div className='xs:hidden lg:flex w-[201px] h-[210px] flex flex-col align-center items-center rounded-xl'>
                    <img src={Logistics} alt="Logistics" loading='lazy'/>
                </div>
            </div>

        </div>
        <div className='lg:w-[1188px] lg:h-[319px] xs:mt-12 lg:mt-4 p-4 mx-auto'>
            <div className='flex xs:flex-col lg:flex-row gap-10'>

                <div className='flex flex-col items-center  md:hidden'>
                    <p className='lg:w-[632px] lg:h-[135px] text-2xl text-center font-normal'>You can learn at your own pace, with flexible schedules and deadlines with EduCatial.</p>
                    <button className='bg-primary rounded-lg p-3 mt-5 text-[#fff]  text-center w-[177px] h-[54px] text-lg font-medium'>
                        START NOW
                    </button>
                </div>
                <div className='relative xs:hidden lg:block  lg:inset-x-28 lg:-inset-y-12'>
                    <img src={Circle} alt="Circle" /> 
                </div>
                <div className='z-40'>
                    <img src={Book} alt="Studying" className='w-[333px] h-[257px] xs:mx-auto lg:mx-0' />
                </div>

                <div className='md:flex flex-col xs:hidden'>
                    <p className='w-[632px] h-[135px] text-4xl lg:text-left md:text-center font-normal'>You can learn at your own pace, with flexible schedules and deadlines with EduCatial.</p>
                    <button className='bg-primary rounded-lg p-3 mt-5 text-[#fff] md:mx-auto lg:mx-0 text-center w-[177px] h-[54px] text-lg font-medium'>
                        START NOW
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Apps