

function Work({props}) {
  let {img, title, description, skills, link} = props

    return (
        <div className='w-full lg:w-11/12 rounded-[20px] bg-primaryTwo text-gray-500 text-center pb-8 overflow-hidden'>
          <div className='w-full aspect-[1.845] rounded-[20px]'>
            <img className='object-cover' src={ img } alt={title}/>
          </div>
          <a href={ link }><h3 className='text-secondary text-2xl lg:text-[32px] hover:underline hover:underline-offset-8 font-bold my-4'>{ title }</h3></a>
          <p className="text-sm lg:text-lg font-semibold">{ description }</p>
          <div className="flex justify-center gap-4 lg:gap-8 items-center mt-6">
                { skills.map((item,idx) => (
                        <div key={title + idx + 10} className="w-[30px] lg:w-[40px] aspect-square">
                            <img key={title + idx} alt="skill" src={ item } />
                        </div>
                    )
                ) }
            </div>
        </div>
    )
}

export default Work
