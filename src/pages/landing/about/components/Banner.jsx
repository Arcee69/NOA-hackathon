import React from 'react'
import DotOne from "../../../../assets/icons/dot-one.svg"
import DotTwo from "../../../../assets/icons/dot-about-a.svg"
import DotThree from "../../../../assets/icons/dot-three.svg"
import Big from "../../../../assets/images/about-big.png"
import Small from "../../../../assets/images/about-small.png"

const Banner = () => {
  return (
    <div className='w-full flex justify-between lg:gap-40 xs:h-[308px] lg:h-[738px]'>
        <div className='lg:w-[553px] lg:h-[552px] xs:hidden lg:flex'>
          <div className='absolute left-[55px] top-[341px]'>  {/* */}
            <img src={DotTwo} alt="Dot-img"/>
          </div>
          <div className='absolute  top-[143px] left-[253px]'> {/* top-[143px] left-[353px] */}
            <img src={DotThree} alt="Dot-img"/>
          </div>
          <div className='absolute top-[339px] left-[153px] '> {/* top-[545px] left-[553px] */}
            <img src={DotOne} alt="Dot-img"/>
          </div>
          <div className='absolute top-[314px] left-[97px]'>
            <img src={Big}/>
          </div>
          <div className='absolute top-[238px] left-[346px]'>
            <img src={Small} />
          </div>
        </div>
        <div className='xs:w-full xs:h-[35px] lg:w-[692px] lg:h-[215px] '> {/*lg:mt-24 */}
            <h2 className='xs:font-semibold lg:font-normal xs:text-3xl flex xs:mt-4 lg:mt-0 xs:justify-center lg:justify-start lg:text-4xl text-NEUTRAL-_300'>About EduCatial</h2>
            <div className='flex flex-col gap-2 mt-4'>
              <p className='text-NEUTRAL-_400 xs:text-center xs:text-base  lg:text-left md:text-lg font-normal'>
                Welcome to EduCatial - the next gen platform that makes learning smarter, more engaging and more fun than
                ever before! Our platform is designed to empower educators and students alike with a range of innovative
                tools and features that unlock a limitless world of learning.
              </p>
              <p className='text-NEUTRAL-_400 xs:text-center xs:text-base  lg:text-left md:text-lg font-normal'>
                With Educatial you'll discover a range of personalized learning experiences that cater to your needs and 
                goals. Our platform is more than just a traditional learning tool - it's a complete ecosystem that fosters 
                collaboration, creativity and growth.
              </p>
              <p className='text-NEUTRAL-_400 xs:text-center xs:text-base  lg:text-left md:text-lg font-normal'>
                We're constantly shaping the future of education with our cutting-edge features and tools, making learning
                more accessible and enjoyable to everyone. Whether you are a student looking to improve your grades, an 
                educator seeking new ways to engage your students, or simply someone who loves to learn, Educatial has 
                something for you.
              </p>
              <p className='text-NEUTRAL-_400 xs:text-center xs:text-base  lg:text-left md:text-lg font-normal'>
                So why wait? Join us today and unlock the limitless potential of your learning journey! With our next-gen
                Saas platform, you'll discover a whole new world of learning that is smarter, more engaging and more fun
                than you ever thought possible.
              </p>
            </div>
        </div>

      </div>
  )
}

export default Banner