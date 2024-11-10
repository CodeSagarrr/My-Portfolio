import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import Navbar from './Navbar';
import { BiLogoMongodb } from 'react-icons/bi';
function Skills() {


    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500" />, color: "bg-blue-100" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, color: "bg-yellow-100" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "bg-green-100" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" />, color: "bg-blue-200" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, color: "bg-teal-100" },
        { name: "HTML5", icon: <FaHtml5  className="text-orange-100" />, color: "bg-orange-500" },
        { name: "MongoDB", icon: <BiLogoMongodb  className="text-green-600" />, color: "bg-green-100" },
        
    ];

    return (
        <>
            <div className='flex  sm:flex-row flex-col'>
            <Navbar/>

                <div className="sm:py-20 py-8  text-white flex flex-col w-full items-center" id="skills">
                    <h2 className="text-4xl font-bold mb-12 text-yellow-500">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-lg shadow-lg ${skill.color} flex flex-col items-center transform transition duration-300 hover:scale-105`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="text-6xl mb-4">{skill.icon}</div>
                                <h3 className="text-xl font-semibold">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills
