// Footer.js
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope , FaInstagramSquare  } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagramSquare />, href: "https://www.instagram.com/dev.sgr_/", color: "hover:text-blue-500" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sagar-vishwakarma-bb7939304/", color: "hover:text-blue-500" },
  { icon: <FaGithub />, href: "https://github.com/CodeSagarrr", color: "hover:text-gray-500" },
  { icon: <FaTwitter />, href: "https://www.x.com/dev_sagar_7", color: "hover:text-blue-400" },
  { icon: <FaEnvelope />, href: "sv472921@gmail.com", color: "hover:text-red-500" },
];

const Footer = () => {
  return (
    <div className=" text-white py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand */}
        <motion.div
          className="text-2xl font-bold text-yellow-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          MyPortfolio
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 my-4 md:my-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition duration-300 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-400 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} MyPortfolio Sagar Vishwakarma. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
