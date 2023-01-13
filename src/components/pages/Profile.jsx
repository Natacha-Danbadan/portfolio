import CircleLines from "../CircleLines"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import picture from "../../../src/nat.png"

function Profile() {
  return (
    <section className='flex flex-col md:items-center lg:flex-row  md:px-14 px-8 w-full lg:justify-between py-8 h-auto lg:h-height'>
      <div className="profile-text lg:w-6/12 w-full flex flex-col lg:justify-center">
        <h1 className="md:text-5xl lg:text-6xl text-4xl w-full text-left">
            <span className="italic text-white">Hello!</span> <span className="text-secondary">I'm Natacha</span> 
            <br/> <span className="text-secondary">Elohor Danbadan</span> 
        </h1>
        <p className="text-white lg:text-xl md:text-base text-sm py-8 w-full">
          I am a versatile and innovative frontend developer with experience in
          developing and managing web designs. I'm a proven team player
          working with scrupulous care and interested in everything
          revolving web development.
      </p>
      <div className="flex text-secondary md:w-2/5 w-1/2 justify-between text-3xl">
        <FaTwitter/>
        <FaGithub/>
        <FaLinkedinIn/>
        <FaWhatsapp/>
      </div>
      </div>
      <div className="circle-lines lg:block  lg:items-center hidden lg:w-3/12">
        <CircleLines/>
      </div>
      <div className="profile-image  md:w-6/12 lg:w-4/12 w-full py-8">
        <img src={picture} alt="Natacha - React Developer"  className="w-full rounded-[10px] shadow-profile"/>
      </div>
    </section>
  )
}

export default Profile



