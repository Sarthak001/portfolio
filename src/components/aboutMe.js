import React from "react"

import Profile from "../assets/profile.jpg"


const AboutMe = (props) => {
  return (<>
    <div name='about' className='w-full h-screen bg-blue-50 text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 sm:grid-col-1 gap-8'>
          <div className="flex flex-wrap justify-center">
            <div className=" sm:w-4/12 md:w-6/12 lg:w-9/12 w-6/12 px-4 mb-10">
              <img src={Profile} alt="..." className="shadow-lg rounded-full align-middle border-none" />
            </div>
          </div>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
            <div className='sm:text-left text-4xl font-bold my-5 mb-3 py-2'>
              <p>Hi. I'm Sarthak, nice to meet you. Please take a look around.</p>
            </div>
            <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.</p>
          </div>
        </div>
      </div>
    </div>
  </>)

}



export default AboutMe;