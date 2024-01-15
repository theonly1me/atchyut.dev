'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Button: React.FC<{
  href?: string;
  heading: string;
  headingOffset: string;
  subheading?: string;
  children?: ReactNode;
}> = ({ href, heading, subheading, children, headingOffset }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="whileHover"
      href={href}
      target="_blank"
      className={`text-white w-48 group relative overflow-x-hidden flex items-center  gap-2 justify-end transition-colors duration-300 bg-neutral-950 px-4 py-2.5 mx-auto my-auto rounded-xl border-2 border-neutral-50 hover:border-neutral-200`}
    >
      <motion.div
        variants={{
          initial: {
            x: headingOffset,
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
          className={`text-sm text-neutral-50 transition-colors duration-300 md:text-md group-hover:text-neutral-300`}
        >
          {heading}
        </span>
        {subheading && (
          <span className="mt-2 text-neutral-50 transition-colors duration-300 group-hover:text-neutral-200">
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
