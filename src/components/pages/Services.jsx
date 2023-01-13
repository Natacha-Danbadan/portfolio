import SkillsList from '../SkillsList'
import { SKILLS } from '../../data/data'


function Services() {
  return (
    <section className="md:px-14 px-8 w-full py-8 h-auto lg:h-height">
      <p className="text-[20px] text-white font-semibold">Services</p>
      <h2 className="text-[55px] leading-[55px] font-bold text-secondary">Skill-Set</h2>
      < SkillsList mainarray={SKILLS}/>
    </section>
  )
}

export default Services
