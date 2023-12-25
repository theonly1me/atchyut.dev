import React, { useState, useRef, ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

const Button: React.FC<{
  href?: string;
  heading: string;
  subheading?: string;
  children?: ReactNode;
}> = ({ href, heading, subheading, children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="whileHover"
      href={href}
      target="_blank"
      className={`text-white group relative overflow-x-hidden flex items-center  gap-2 justify-end transition-colors duration-300 bg-neutral-950 px-4 py-2.5 mx-auto my-auto rounded-xl border-2 border-purple-50 hover:border-purple-200`}
    >
      <motion.div
        variants={{
          initial: {
            x: '20%',
            opacity: 1,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
          duration: 0.3,
        }}
      >
        <span
          className={`text-sm text-purple-50 transition-colors duration-300 md:text-md group-hover:text-purple-300`}
        >
          {heading}
        </span>
        {subheading && (
          <span className="mt-2 text-purple-50 transition-colors duration-300 group-hover:text-purple-200">
            {subheading}
          </span>
        )}
      </motion.div>
      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
          duration: 0.3,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default Button;
