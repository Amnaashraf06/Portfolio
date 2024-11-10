import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id='About'>
      <section className="text-blue-200 body-font -mb-[5rem] bg-black">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
    <Image
        className="object-cover object-center rounded mx-auto "
        alt="Profile"
        src={require("../../../public/Profile.jpg")}
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
     About Me
      </h1>
      <p className="mb-5 leading-relaxed ">
      My name is Amna. I have done BS in Mathematics.I am a teacher having 3 years experience in this field.
      I am a multitasker, hardworking and passionate girl.
      I am also enroll in Governor sindh IT course and I want to persue my career in IT field.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
