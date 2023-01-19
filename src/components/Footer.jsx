
import {FaHeart} from 'react-icons/fa'
import logo from "../logo.png"

function Footer() {
  const newYear = new Date().getFullYear();
  return (
    <div className="">
            <nav className='w-full  md:px-14 px-8 bg-primaryTwo flex justify-between items-center'>
              <div className="md:w-1/2 w-1/4 logo">
                <img src={logo} alt="" className='md:w-20 w-4/5'/>
              </div>
              <div className="md:w-1/2 w-3/4 hire-me-btn md:text-base text-xs flex justify-end font-semibold text-secondary">
              portfolio &copy; {newYear} | Made with<FaHeart style={{color: 'red'}} /> Natacha
              </div>
            </nav>
    </div>
  )
}

export default Footer
