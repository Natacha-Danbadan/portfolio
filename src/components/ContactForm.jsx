// import {useState} from 'react'

function ContactForm() {
   
    const formSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form action="" method="post" onSubmit={formSubmit}>
        <div className="flex flex-col lg:flex-row lg:w-4/5 gap-4 mx-auto items-stretch">
            <div className="w-full lg:w-1/2  flex flex-col justify-start gap-4 lg:justify-between">
                <label htmlFor="Full Name">
                    <input type="text" placeholder="Your full name" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
                <label htmlFor="Email Address">
                    <input type="text" placeholder="Your email address" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
                <label htmlFor="Phone Number">
                    <input  type="text" placeholder="Your phone number (optional)" className="w-full bg-white placeholder-gray-700 focus:outline-none rounded-[8px] px-4 py-[16px]"/>
                </label>
            </div>
            <div className="w-full lg:w-1/2">
                <textarea className="w-full bg-white h-full rounded-[8px] px-4 py-[14px] placeholder-gray-700 focus:outline-none" name="message" id="" cols="30" rows="10" placeholder="Drop your Message Here">

                </textarea>
            </div>
        </div>
        <button type="submit" className="border-solid border-2 rounded-[8px] p-3 border-secondary flex mx-auto my-10 px-10 text-white text-base hover:bg-secondary hover:text-primaryTwo hover:font-semibold">Submit Form</button>
    </form>
  )
}

export default ContactForm
