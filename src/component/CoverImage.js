import React from 'react'
import cImage from '../images/coverImage.jpg'
import '../customeCSS/coverImage.css'
const CoverImage = () => {
  return (
    <>
    <div>
        <img className='coverImage' src={cImage} alt="no Image found"/>
      
    </div>
    </>
  )
}



export default CoverImage