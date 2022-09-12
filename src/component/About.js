import React from 'react'
import ProfileImage from './ProfileImage'
import '../customeCSS/About.css'
import image from '../images/id-card.png'
const About = () => {
  return (
    <>
      <div className='about pt-2'>

        <div className='text-center d-flex  justify-content-center'>
         
          <h3 className='bg-white p-3 rounded-pill shadow-lg'>
          <img src={image} className='aboutimage'/>About</h3>
        </div>

        <div className='bg-white container rounded-3 shadow-lg'>
          <div className=' row'>
            <div className='col-3 '>
              <ProfileImage />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About;