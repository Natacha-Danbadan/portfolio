import {useState } from "react"; 

const SkillsItem =({ skillsobj }) => {
    let {source, name} = skillsobj
    let [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true)

    const handleMouseLeave = () => setIsHovered(false)

    let imageClass = isHovered ? "animate-[spin_5s_ease-in-out_infinite] transition-all duration-1000" 
                                : "transition-all duration-1000"

  return (
    <div className="flex min-w-[140px] xs:min-w-[44%] sm:min-w-[150px] md:min-w-[160px] lg:min-w-[200px] items-center justify-center bg-primaryTwo rounded-[6px] gap-2 lg:gap-4 py-6 md:py-8 lg:py-12 px-2 lg:px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" onMouseEnter={ handleMouseEnter } 
    onMouseLeave={ handleMouseLeave }>
      <div className="w-8 lg:w-12 aspect-square">
        <img src={ source } alt={ name } className={ imageClass }  /> 
      </div>
      <p className="text-xs md:text-sm lg:text-[16px] text-secondary font-medium">{ name }</p>

    </div>
  )
}

export default SkillsItem

