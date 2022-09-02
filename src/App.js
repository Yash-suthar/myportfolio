
import './App.css';
import About from './component/About';
import ProfileImage from './component/ProfileImage';
import CoverImage from './component/CoverImage';
function App() {
  return (
    <>
      <div className='ci position-fixed top-0 coverImage'>
        <CoverImage />
      </div>
      <div>
        <div className='pi d-flex align-items-end  justify-content-center'>
          <div className='m-5'>
            <ProfileImage />
          </div>

        </div>

        <About />
      </div>

    </>
  );
}


export default App;
