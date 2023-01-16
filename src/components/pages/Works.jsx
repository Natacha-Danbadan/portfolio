import PROJECTS from "../../data/data"
import WorkSlides from "../WorkSlides"

function Works() {
  return (
    <section className="md:px-14 px-8 w-full py-8 ">
      <p className="text-[20px] text-white font-semibold">Works</p>
      <h2 className="text-[55px] leading-[55px] font-bold text-secondary pb-14 lg:pb-10">Recent Projects</h2>
      <WorkSlides mainarray={PROJECTS}/>
    </section>
    
  )
}

export default Works
