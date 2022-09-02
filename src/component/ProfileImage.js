import Photo from '../images/profileImage2.jpg'
import '../customeCSS/profileImage.css'
function ProfileImage() {
   return (
      <>
         <div>

            <img className='profileImage d-block m-auto' src={Photo} alt="" />
         </div>
         <div>
            <h1 className=' text-white mt-5  text-center'>Yash Suthar</h1>
         </div>
      </>

   )

}

export default ProfileImage;