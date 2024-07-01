import React from 'react'
import { useNavigate } from 'react-router-dom'
import addIcon from "../../../assets/icons/add.svg"
import photoIcon from "../../../assets/images/photo.png"
import videoIcon from "../../../assets/images/video.png"
import essayIcon from "../../../assets/images/essay.png"
import visualIcon from "../../../assets/images/visual.png"

const CreateCampaign = () => {

  const navigate = useNavigate()


  return (
    <div className='p-[2%]'>

      <div className='flex flex-col xs:m-1 md:m-0'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Campaign Templates</h1>
          {/* <button type='button' className='bg-YELLOW-_100 flex justify-center gap-3 items-center rounded-md xs:w-[180px] xs:p-2  md:w-[257px] h-[56px]'>
            <img src={addIcon} alt="add-icon" />
            <p className='font-semibold xs:text-sm lg:text-lg text-[#fff]'>Upgrade Now</p>
          </button> */}
        </div>
        <p className='xs:mt-5 lg:mt-2.5 text-base font-normal'>Explore our campaign categories and find the perfect way to engage with your audience.</p>
      </div>

      <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14'>
                        {/* first Card */}
        <div className='w-80 xs:mx-auto md:mx-0 bg-[#fff] h-[392px] cursor-pointer shadow-xl' onClick={() => navigate("/create-campaign/photo-contest")}> {/* h-[412px] */}
          <img src={photoIcon} alt="photo-icon"/>
          <div className='flex flex-col rounded-bl-3xl rounded-br-3xl p-4'>
            <p className='font-medium text-xl'>Photo Hackathon</p>
            <p className='font-normal text-sm mt-1 text-[#000] opacity-50'>
              Create an engaging photo contest that showcases your brand and captivates your audience. 
              Choose from various themes like travel, fashion, nature, and more.
            </p>
            
          </div>
        </div>
                        {/* Second Card */}
        <div className='w-80 xs:mx-auto md:mx-0 bg-[#fff]  h-[392px] shadow-xl' onClick={() => navigate("/create-campaign/video-contest")}> {/* h-[412px] */}
          <img src={videoIcon} alt="video-icon"/>
          <div className='flex flex-col rounded-bl-3xl rounded-br-3xl p-4'>
            <p className='font-medium text-xl'>Video Contest</p>
            <p className='font-normal text-sm mt-1 text-[#000] opacity-50'>
              Drive engagement and promote your brand through a video contest. 
              Create campaigns for product demos, brand stories, commercials, and more.
            </p>
          </div>
        </div>
                        {/* Third Card w-[334px]*/}
        <div className='w-80 xs:mx-auto md:mx-0 bg-[#fff] h-[392px] shadow-xl' onClick={() => navigate("/create-campaign/essay-contest")}> {/* h-[412px]  */}
          <img src={essayIcon} alt="essay-icon"/>
          <div className='flex flex-col rounded-bl-3xl rounded-br-3xl p-4'>
            <p className='font-medium text-xl'>Essay Contest</p>
            <p className='font-normal text-sm mt-1 text-[#000] opacity-50'>
              Create a compelling essay contest that sparks meaningful conversations 
              and taps into your audience's intellect. Choose from topics like education, 
              sustainability, social justice, and more.
            </p>
          </div>
        </div>
                        {/* Fourth Card */}
        {/* <div className='w-80 xs:mx-auto md:mx-0 bg-[#fff] h-[392px] shadow-xl'> {/* h-[412px] 
          <img src={visualIcon} alt="visual-icon"/>
          <div className='flex flex-col rounded-bl-3xl rounded-br-3xl p-4'>
            <p className='font-medium text-xl'>Visual Hackathon</p>
            <p className='font-normal text-sm mt-1 text-[#000] opacity-50'>
              Drive innovation and problem-solving with a visual hackathon contest. 
              Create campaigns for tech, design, social impact, and more.
            </p>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default CreateCampaign