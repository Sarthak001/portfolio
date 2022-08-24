import React from "react"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import Github from "../assets/Octocat.png";
import Linkedin from "../assets/linkedin2.png";



const Home = (props) => {

  return (<>
    <div name='home' className='w-full h-screen bg-white'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 underline underline-offset-4 decoration-blue-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-400'>
          Sarthak Tiwari        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-600'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text- py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="grid sm:grid-col-1 md:grid-cols-10 grid-col-1 items-center">
          <div className="col-span-2 bg-blue">
            <Link to='work' smooth={true} duration={500}>
              <button className='rounded group border-2 px-6 py-3 my-2 flex items-center border-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </div>
          <div className="col-span-8 flex flex-row items-center">
            <a blank href="https://github.com/Sarthak001" className="inline-block rounded-full shadow-lg bg-gray-100 w-16 h-16 border-2 border-gray-100 hover:bg-gray-200 mx-2 p-2 flex hover:border-gray-200 items-center justify-center rounded-full">
            <img className="w-12 h-12" src={Github} alt="github"></img>

            </a>
            <a blank href="https://www.linkedin.com/in/sarthaktiwari16/" className="inline-block rounded-full shadow-lg bg-gray-100 w-16 h-16 border-2 border-gray-100 hover:bg-gray-200 mx-2 p-2 flex hover:border-gray-200 items-center justify-center rounded-full">
            <img className="w-10 h-10" src={Linkedin} alt="linkedin"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>)

}



export default Home;