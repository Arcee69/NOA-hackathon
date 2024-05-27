import React from 'react'
import Frame from "../../../../assets/images/Frame.png"

const Image = () => {
  return (
    <div className='xs:mt-10 lg:mt-32 flex justify-center'>
        <img src={Frame} alt="Game dashboard" loading='lazy'/>
    </div>
  )
}

export default Image