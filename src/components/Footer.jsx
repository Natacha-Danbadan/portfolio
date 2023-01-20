
import {FaHeart} from 'react-icons/fa'

function Footer() {
  const newYear = new Date().getFullYear();
  return (
    <div className="">
            <footer className='w-full bg-primaryTwo'>
              <div className="py-6 md:text-base items-center justify-center text-center text-xs flex font-semibold text-secondary">
              portfolio &copy; {newYear} | Made with <FaHeart style={{color: 'red'}} /> Natacha
              </div>
            </footer>
    </div>
  )
}

export default Footer
