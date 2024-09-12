
import logo from "../../images/meLogo.png"
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";


function Footer() {


    return (
        <div className='bg-blue-950 md:px-14 p-4 maxiwiscreen-2xl mx-auto'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a className='text-2xl font-semibold flex items-center space-x-3 text-white' href="">
                        <img className='w-10 rounded-full border-2 inline-block items-center' src={logo} alt="" /><span className='text-white'>EriDalene</span>
                    </a>

                    <p className='md:w-1/2 text-white'>
                    Join me on a journey of sound and exploration, where the rhythms of bass guitar and piano keyboard come together in perfect harmony. Discover the beauty and emotion of music with me.
                    </p>
                    <div>
                        <input className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' type="email" id='email' name='email' placeholder='Your Email...' />
                        <input className='font-bold px-4 py-2 rounded-md bg-yellow-700 ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' type="submit" value="Subscribe" />
                    </div>
                </div>

                {/* Footer naigation */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start text-white'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platforms</h4>
                        <ul className='space-y-3'>
                            <a className='block hover:text-gray-300' href="">Overview</a>
                            <a className='block hover:text-gray-300' href="">Features</a>
                            <a className='block hover:text-gray-300' href="">About</a>
                            <a className='block hover:text-gray-300' href="">Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a className='block hover:text-gray-300' href="">How does it works?</a>
                            <a className='block hover:text-gray-300' href="">Where to ask questions?</a>
                            <a className='block hover:text-gray-300' href="">How to play?</a>
                            <a className='block hover:text-gray-300' href="">Requirements</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contact Us</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-300'>+233-556-762-407</p>
                            <p className='hover:text-gray-300'>CA-6993-9730</p>
                            <p className='hover:text-gray-300'>Nduom School of Business and Technology</p>
                            <p className='hover:text-gray-300'>Terms & Conditions</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className='text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p> &copy; EricDalene 2024 --- All Rights Reserved.</p>
                <div className="flex items-center space-x-5">
                    <a className="" href=""> <MdEmail className="size-8  cursor-pointer hover:translate-y-2 transition-all duration-300" /></a>
                    <a className="" href=""> <FaGithub className="size-8 cursor-pointer hover:translate-y-2 transition-all duration-300" /></a>
                    <a className="" href=""> <IoLogoLinkedin className=" cursor-pointer hover:translate-y-2 transition-all size-8 duration-300" /></a>
                    <a className="" href=""> <RiWhatsappFill className=" cursor-pointer hover:translate-y-2 transition-all size-8 duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer