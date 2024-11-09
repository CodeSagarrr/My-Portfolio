import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { projects  } from '../Components/ProjectLinks.jsx'



const Projects = () => {
  return (
    <>
    <div className="flex"> 
        <Navbar/>

    <div className="py-20 px-6 bg-gray-900 text-white flex flex-col w-full items-center" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-yellow-500">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <a href={project.link} rel="noopener noreferrer" className="mt-4 inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Projects;