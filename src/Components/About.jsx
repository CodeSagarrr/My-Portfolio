import React from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar';

function About() {
    return (
        <>
            <div className='flex'>
                <Navbar />
                <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen  text-white px-5 lg:px-[3rem] py-8">
                    {/* Image Section */}


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-8 lg:mb-0 lg:mr-12"
                    >
                        <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 transform translate-x-6 translate-y-6"></div>
                        <img
                            src="https://preview.easetemplate.com/aboutme/assets/images/img-2.jpg"
                            alt="profile"
                            className="relative rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[250px] lg:w-[300px] z-10"
                        />
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            About <span className="text-yellow-500">Me</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0">
                             Full-stack developers passionate about transforming ideas into scalable, high-performance digital solutions. With expertise in both frontend and backend development, we bring a holistic approach to web and mobile applications, ensuring seamless functionality and user experiences across all platforms.

                        </p>
                        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0">
                            
                        Our skill set covers a wide range of modern technologies, from responsive frontend frameworks like React, and Tailwind to robust backend environments such as Node.js with Express.js. We specialize in building secure, efficient, and optimized systems, handling everything from MongoDB database architecture and API integration to interactive UI/UX design. Our goal is to deliver solutions that are not only technically sound but also aligned with your business objectives.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </section>
            </div>
        </>
    )
}

export default About
