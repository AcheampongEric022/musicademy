import React, { useState } from 'react'
import logo from "../images/meLogo.png"
import { MdOutlineLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-scroll';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ]
    return (
        <>

            <nav className='border-b fixed top-0 right-0 left-0 bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a className='text-2xl font-semibold flex items-center space-x-3 text-primary' href="">
                            <img className='w-10 inline-block items-center' src={logo} alt="" /><span>EriDalene</span></a>

                        {/* Navigation Items */}
                        {/* Navigation Items */}
                        {/* Navigation Items */}
                        {/* Navigation Items */}

                        <ul className='hidden md:flex space-x-12'>
                            {
                                navItems.map(({ link, path }) => <Link className='cursor-pointer block hover:text-gray-300' key={link} to={path}>{link}</Link>)
                            }
                        </ul>

                    </div>

                    {/* Language and sign up */}

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="" className='hidden lg:flex items-center hover:text-secondary'><MdOutlineLanguage className='mr-2' /><span>Languages</span></a>
                        <button className='hover:text-white hover:bg-indigo-800 bg-yellow-500 py-2 px-4 transition-all duration-300 rounded'>Sign up</button>
                    </div>

                    {/* Menu For Mobile display */}
                    {/* Menu For Mobile display */}
                    {/* Menu For Mobile display */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<RiMenu3Fill className='w-6 h-6 text-primary' />)}
                        </button>

                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-4 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-13 right-0 left-0 text-white text-lg" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link onClick={toggleMenu} className='cursor-pointer block hover:text-primary text-xl font-semibold' key={link} to={path}>{link}</Link>)
                }

            </div>


        </>

    )
}

export default Navbar