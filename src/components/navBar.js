import React, { useEffect, useState } from "react"
import { Link } from 'react-scroll';
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa';

import Resume from "../assets/Resume.pdf";



const Navbar = (props) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [title, setTitle] = useState("Home");

    useEffect(() => {
        document.title = title
    }, [title])


    return (
        <div className="fixed flex bg-white w-full justify-between items-center px-4 h-20">
            <ul className='hidden md:flex w-full justify-end'>
                <li>
                    <Link to='home' activeClass="text-blue-400" smooth={true} duration={400} spy={true} spyThrottle={500}>
                        <span onClick={(e) => setTitle(e.target.outerText)} className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">HOME</span>
                    </Link>
                </li>
                <li>
                    <Link to='about' activeClass="text-blue-400" smooth={true} duration={400} spy={true} spyThrottle={500}>
                        <span onClick={(e) => setTitle(e.target.outerText)} className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">ABOUT</span>
                    </Link>
                </li>
                <li>
                    <Link to='skills' activeClass="text-blue-400" smooth={true} duration={400} spy={true} spyThrottle={500}>
                        <span onClick={(e) => setTitle(e.target.outerText)} className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">SKILLS</span>
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} activeClass="text-blue-400" duration={400} spy={true} spyThrottle={500}>
                        <span onClick={(e) => setTitle(e.target.outerText)} className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">PROJECTS</span>
                    </Link>
                </li>
                <li>
                    <a href={Resume}>
                        <span className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">RESUME</span>
                    </a>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link isDynamic={true} onClick={handleClick} to='home' smooth={true} duration={1000}>
                        <span className="font-mono antialiased text-lg font-medium text-bold">HOME</span>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link isDynamic={true} onClick={handleClick} to='about' smooth={true} duration={1000}>
                        <span className="font-mono antialiased text-lg font-medium text-bold">ABOUT</span>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link isDynamic={true} onClick={handleClick} to='skills' smooth={true} duration={1000}>
                        <span className="font-mono antialiased text-lg font-medium text-bold">SKILLS</span>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link isDynamic={true} onClick={handleClick} to='work' smooth={true} duration={1000}>
                        <span className="font-mono antialiased text-lg font-medium text-bold">PROJECTS</span>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <a href={Resume}>
                        <span className="font-mono antialiased text-lg font-medium text-bold m-2 p-2">RESUME</span>
                    </a>
                </li>

            </ul>
        </div>
    )

}


export default Navbar;