import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
    <section className="text-black body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/Resume.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
             Resume Builder  project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-4">
              This  is the project which I have created for those people who wants to make their resume professional and attractive.
            </p>
            <Link target='_blank' href={"https://hackathon-5-ten.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">View project</p>
            </Link>
          </div>
          
        </div>
      </div>

        {/*projects*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/Tic tac toe.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
             Tic Tac Toe game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Tic Tac Toe
            </h1>
            <p className="leading-relaxed line-clamp-4">
              This is a fun game which I made by HTML, CSS and JS. If you want to try this game than click on the link below.
            </p>
            <Link target='_blank' href={"https://tic-tac-toe-gilt-omega.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">Play Game</p>
            </Link>
          </div>
          
        </div>
      </div>

       {/*projects*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/Calendar.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
            Mini Calendar Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Mini Calendar
            </h1>
            <p className="leading-relaxed line-clamp-4">
              This is a calendar made by using HTML,CSS and JS. This is very informative project. Check this project by
              clicking on the link below.
            </p>
            <Link target='_blank' href={"https://mini-calendar-nine.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">View project</p>
            </Link>
          </div>
          
        </div>
      </div>


      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
