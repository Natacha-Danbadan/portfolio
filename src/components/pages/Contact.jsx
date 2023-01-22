import ContactForm from "../ContactForm"

function Contact() {
  return (
    <div className="md:px-14 px-8 w-full pt-6 h-auto lg:h-height">
      <h2 className="lg:text-4xl text-base text-center text-secondary font-bold">Got A Project?</h2>
      <h2 className="lg:text-4xl text-base text-center text-secondary font-bold my-6">Contact Me Now</h2>
      <ContactForm/>
    </div>
  )
}

export default Contact
