import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import useScrollBlock from '../components/hooks/useScrollBlock'

import {Link} from "react-router-dom"
import logo from "../logo.png"

function Header() {
  const [openModal, setOpenModal] = useState(false)
  const modalHandler =()=> {
    setOpenModal(!openModal)
    console.log(5)

   }  

  const linkFunc =() => {
    setOpenModal(!openModal)
  }

  const [blockScroll, allowScroll] = useScrollBlock()
  useEffect(() => {
    openModal ? blockScroll() : allowScroll()
  }, [openModal, allowScroll, blockScroll])
  
  return (
          <div className="">
            <nav className='w-full drop-shadow-xl  md:px-14 px-8 bg-primaryTwo flex justify-between items-center'>
              <div className="w-3/12 logo">
                <img src={logo} alt="" className='lg:w-4/12 md:w-10/12 w-full'/>
              </div>
              <div className="nav-links w-6/12 hidden lg:block">
                <ul className=' flex font-medium justify-evenly leading-4 text-base'>
                  
                  <li>
                    <Link to='/about' className='text-secondary hover:text-white'>About Me</Link>
                  </li>
                  <li>
                    <Link to='/services'className='text-secondary hover:text-white'>Services</Link>
                  </li>
                  <li>
                    <Link to='/works' className='text-secondary hover:text-white'>Works</Link>
                  </li>
                  <li>
                    <Link to='/contact' className='text-secondary hover:text-white'>Contact</Link>
                  </li>

                </ul>
              </div>
              <div className="w-3/12 hire-me-btn flex justify-end">
                <button type='button' className='bg-secondary text-primaryTwo font-medium p-2 rounded-sm text-base hidden lg:block'>Hire Me</button>
                <button className="lg:hidden md:text-5xl text-4xl text-secondary z-50" onClick={modalHandler}>
                {openModal ? <FaTimes/> : <FaBars/>}
                </button>
              </div>
            </nav>

            {
              openModal ? (
                <div className="lg:hidden flex w-screen fixed z-10 h-screen">
                  <div className="w-full h-full flex items-end bg-newbg">
                    <nav className="bg-primaryTwo rounded-[50px] h-4/5 w-full">
                        <ul className="flex flex-col gap-8 text-xl font-bold w-full h-[70vh] justify-center items-center">
                          <li>
                              <Link to='/about' className='text-secondary hover:text-white' onClick={ linkFunc }>About Me</Link>
                          </li>
                          <li>
                              <Link to='/services'className='text-secondary hover:text-white' onClick={ linkFunc }>Services</Link>
                          </li>
                          <li>
                              <Link to='/works' className='text-secondary hover:text-white' onClick={ linkFunc }>Works</Link>
                          </li>
                          <li>
                              <Link to='/contact' className='text-secondary hover:text-white' onClick={ linkFunc }>Contact</Link>
                          </li>
                        </ul>
                    </nav>
                  </div>
              </div>
              ):null
            }
            
          </div>            
  )
}

export default Header

