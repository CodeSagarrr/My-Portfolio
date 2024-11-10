import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import resume from '../images/Resume.pdf'

function Home() {
  return (
    <>
      <div className='flex sm:flex-row flex-col'>
        <Navbar />
        <section className="flex flex-col lg:flex-row items-center justify-center sm:min-h-screen min-h-[78vh] text-white sm:p-[3rem] p-[2rem]">
          {/* Text Section */}
          <div className="flex flex-col items-start space-y-4 text-center lg:text-left lg:w-1/2">
            <p className="text-yellow-500">Hello, Welcome</p>
            <h1 className="text-2xl md:text-4xl font-bold">I'm Sagar Vishwakarma</h1>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            a passionate Full-Stack Developer specializing in building dynamic, user-friendly web applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded mx-auto lg:mx-0"
             ><a href={resume} download={resume}>
             My Resume
             </a>
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.div
            className="mt-8 lg:mt-0 lg:ml-12 rounded-full border-4 border-yellow-500 lg:w-1/3 sm:w-1/2 w-[71%]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png"
              alt="profile"
              className="rounded-full"
            />
          </motion.div>
        </section>
      </div>

    </>
  )
}

export default Home
