import React from 'react'

function CircleLines() {
  return (
    <div className="w-auto flex flex-col items-center">
            <div className="circle w-5 aspect-square rounded-full border border-white bg-white"></div>
            <div className="line w-[1px] h-[80px] bg-secondary"></div>
            <div className="first-line:circle w-5 aspect-square rounded-full border border-white"></div>
            <div className="line w-[1px] h-[80px] bg-secondary"></div>
            <div className="circle w-5 aspect-square rounded-full border border-white"></div>
            <div className="line w-[1px] h-[80px] bg-secondary"></div>
            <div className="circle w-5 aspect-square rounded-full border border-white"></div>
        </div>
  )
}

export default CircleLines
