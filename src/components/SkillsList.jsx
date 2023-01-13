import SkillsItem from "./SkillsItem"


const SkillsList = ({mainarray}) => {
    return (
        <div className="flex flex-wrap gap-2 lg:gap-4 w-full lg:py-10 py-6">
            {mainarray.map((item, idx) => <SkillsItem key={idx} skillsobj={item}/>)}
        </div>
    )
}

export default SkillsList
