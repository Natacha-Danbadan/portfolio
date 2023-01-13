
const SkillsItem =({ skillsobj }) => {
    let {source, name} = skillsobj
  return (
    <div className="flex min-w-[159px] xs:min-w-[49%] sm:min-w-[160px] md:min-w-[160px] lg:min-w-[200px] items-center justify-center bg-primaryTwo rounded-[6px] gap-2 lg:gap-4 py-6 md:py-8 lg:py-12 px-2 lg:px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">

      <div className="w-8 lg:w-12 aspect-square">
        <img src={ source } alt={ name }  /> 
      </div>
      <p className="text-xs md:text-sm lg:text-[16px] text-secondary font-medium">{ name }</p>

    </div>
  )
}

export default SkillsItem

