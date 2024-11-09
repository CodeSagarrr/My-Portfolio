import React from 'react'
import { Link } from 'react-router-dom'

import { FaHome, FaUser, FaTools, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {

    return (
        <>

        

            <header className=" flex flex-col flex-wrap sm:w-[21vw] w-[22vw]  sm:p-4 p-[10px] border-r-2 border-[#EBB306] bg-gray-900 text-white ">
                <div >
                    <h1 className=' text-2xl font-bold text-[#EBB306] sm:block hidden'>Portfolio</h1>
                </div>


                <div className='flex flex-wrap flex-col sm:h-[92vh] h-[99vh] items-center  justify-center font-[Roboto] font-medium'>
                    <nav className='flex flex-col'>
                        <Link to="/" className="mr-4 mb-12"><span className=' flex items-center sm:flex-row flex-col gap-x-2 text-[18px] font-bold'> <FaHome className='text-[22px]' />Home</span></Link>


                        <Link to="/about" className="mr-4 mb-12"><span  className=' flex  items-center  gap-x-2 text-[18px] font-bold sm:flex-row flex-col'> <FaUser className='text-[22px]'/> About</span></Link>


                        <Link to="/skills" className="mr-4 mb-12"><span  className=' flex items-center  gap-x-2 text-[18px] font-bold sm:flex-row flex-col'><FaTools className='text-[22px]'/> Skills</span></Link>


                        <Link to="/projects" className="mr-4 mb-12"><span  className=' flex items-center  gap-x-2 text-[18px] font-bold sm:flex-row flex-col'> <FaProjectDiagram className='text-[22px]'/>Projects</span></Link>
                    </nav>

                </div>
            </header>




        </>
    )
}

export default Navbar

