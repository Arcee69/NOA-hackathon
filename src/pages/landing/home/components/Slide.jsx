import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from '@mui/material'
import FirstPic from "../../../../assets/images/first-pic.png"
import SecondPic from "../../../../assets/images/second-pic.png"
import ThirdPic from "../../../../assets/images/third-pic.png"
import Step from "../../../../assets/images/step.png"
import Circle from "../../../../assets/images/circle.svg"

const Slide = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };

  return (
    <div className='xs:mt-14 lg:mt-20 bg-white '>
        <div className='flex flex-col'>
            <h2 className='text-NEUTRAL-_500 xs:text-2xl lg:text-3xl font-bold xs:text-center lg:text-left'>Our Customer Feedback</h2>
            <p className='xs:text-base lg:text-xl xs:mt-2 lg:mt-0 text-NEUTRAL-_500 font-normal xs:text-center lg:text-left'>Don't take our word for it. Trust our customers</p>
        </div>
        <div style={{ paddingBottom: '30px', position: 'relative'}} className="mt-14">
            <Carousel
                responsive={responsive}
                showDots={true}
                customTransition="all .5"
                transitionDuration={500}
                dotListClass="" 
                autoPlaySpeed={1000}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                // itemClass="carousel-item-padding-40-px"
            >
                <div className='lg:w-[410px] flex flex-col h-[295px] border rounded border-[#E7EAEC] p-3'>
                    <div className='flex justify-between'>
                        <img src={FirstPic} alt="profile-photo" className='w-[60px] h-[60px]' />
                        <Rating
                            value={3}
                        />
                    </div>
                    <h3 className='text-xl text-NEUTRAL-_500 font-semibold mt-3'>Mary Nwangu</h3>
                    <p className='mt-3 text-base font-normal'>  
                        I recently had the opportunity to use educatial and i must say that i was very impressed with the
                        quality of the platform. It offers a variety of educational resources and tools that are both 
                        engaging and effective.
                    </p>
                </div>
                <div className='lg:w-[410px] flex flex-col h-[295px] border rounded border-[#E7EAEC] p-3'>
                    <div className='flex justify-between'>
                        <img src={SecondPic} alt="profile-photo" className='w-[60px] h-[60px]' />
                        <Rating
                            value={4}
                        />
                    </div>
                    <h3 className='text-xl text-NEUTRAL-_500 font-semibold mt-3'>Adenike Jones</h3>
                    <p className='mt-3 text-base font-normal'> 
                        The interface is easy to navigate and the content is presented in a way that is both visually
                        appealing and informative. The lessons are well-organized, and the explanations are clear and
                        concise. I found myself fully engaged in the learning process, and i was able to absorb the material
                        with ease.
                    </p>
                </div>
                <div className='lg:w-[410px] flex flex-col h-[295px] border rounded border-[#E7EAEC] p-3'>
                    <div className='flex justify-between'>
                        <img src={ThirdPic} alt="profile-photo" className='w-[60px] h-[60px]' />
                        <Rating
                            value={3}
                        />
                    </div>
                    <h3 className='text-xl text-NEUTRAL-_500 font-semibold mt-3'>Joseph Donald</h3>
                    <p className='mt-3 text-base font-normal'> 
                       One thing that i particularly appreciate about this website is the wide range of topics that are
                       covered. Whether you are interested in learning a new language, studying  math or science, or exploring
                       different cultures, there is something for everyone.
                    </p>
                </div>
                {/* <div className='lg:w-[410px] flex flex-col h-[295px] overflow-y-auto border rounded border-[#E7EAEC] p-3'>
                    <div className='flex justify-between'>
                        <img src={SecondPic} alt="profile-photo" className='w-[60px] h-[60px]' />
                        <Rating
                            value={4}
                        />
                    </div>
                    <h3 className='text-xl text-NEUTRAL-_500 font-semibold mt-3'>Matt Dickson</h3>
                    <p className='mt-3 text-base font-normal'> 
                        In addition to the high-quality educational resources, the customer support team is also top-notch.
                        Whenever i have a question or concern, they were quick to respond and always provided helpful guidance.
                        Overall, I highly recommend Educatial to anyone looking for a comprehensive and effective online
                        learning platform. Whether you a student, a professional, or simply someone who enjoys learning new things,
                        this website is sure to exceed your expectations
                    </p>
                </div> */}
            </Carousel>
        </div>
        <div className='lg:w-[1188px] lg:h-[319px] xs:mt-12 lg:mt-28 p-4 mx-auto'>
            <div className='flex xs:flex-col lg:flex-row gap-10'>

                <div className='flex flex-col  lg:hidden'>
                    <p className='lg:w-[632px] lg:h-[135px] text-2xl text-center font-semibold'>Start your journey into a new world of knowledge today, get started with EduContest</p>
                    <button className='bg-primary rounded-lg p-3 mt-5 text-[#fff] mx-auto text-center w-[177px] h-[54px] text-lg font-medium'>
                        START NOW
                    </button>
                </div>
                <div className='relative xs:hidden lg:block  lg:inset-x-28 lg:-inset-y-12'>
                    <img src={Circle} alt="Circle" /> 
                </div>
                <div className='z-40'>
                    <img src={Step} alt="Climbing A Step" className='w-[333px] h-[257px] xs:mx-auto lg:mx-0' />
                </div>

                <div className='lg:flex flex-col xs:hidden'>
                    <p className='w-[632px] h-[135px] text-4xl font-semibold'>Start your journey into a new world of knowledge today, get started with EduContest</p>
                    <button className='bg-primary rounded-lg p-3 mt-5 text-[#fff] text-center w-[177px] h-[54px] text-lg font-medium'>
                        START NOW
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide