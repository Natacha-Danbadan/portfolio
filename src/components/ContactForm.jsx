import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle } from "react-icons/fa";

const Result = () => {
    return(
        <div className='text-white text-center flex justify-center items-center'>Your message has been sent succesfully <FaCheckCircle size={20} style={{color: 'green'}}/> </div>
    )
}

function ContactForm() {
    const [sentResult, setSentResult] = useState(false)
    const form = useRef();
    const formSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_x1c9zzs', 'template_dqfq03m', form.current, 'Fkcs91y6nN8hcLeLB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
      setSentResult(true)
    }

  return (
    <form action="" method="post" ref={form} onSubmit={formSubmit}>
        <div className="flex flex-col lg:flex-row lg:w-4/5 gap-4 mx-auto items-stretch">
            <div className="w-full lg:w-1/2  flex flex-col justify-start gap-4 lg:justify-between">
                <label htmlFor="Full Name">
                    <input required type="text" name="user_name" placeholder="Your full name" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
                <label htmlFor="Email Address">
                    <input type="text" name="user_email" placeholder="Your email address" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
                <label htmlFor="Phone Number">
                    <input  type="text" name="user_number" placeholder="Your phone number (optional)" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
            </div>
            <div className="w-full lg:w-1/2">
                <textarea name="message" className="w-full bg-white h-full rounded-[8px] px-4 py-[14px] placeholder-gray-700 focus:outline-none"  id="" cols="30" rows="10" placeholder="Drop your Message Here">

                </textarea>
            </div>
        </div>
        <button type="submit"  className="border-solid border-2 rounded-[8px] py-3 border-secondary flex mx-auto mt-10 mb-3 px-10 text-white text-base hover:bg-secondary hover:text-primaryTwo hover:font-semibold">Submit Form</button>
        <div> 
            {sentResult ? <Result/> : null}
        </div>
    </form>
  )
}

export default ContactForm
