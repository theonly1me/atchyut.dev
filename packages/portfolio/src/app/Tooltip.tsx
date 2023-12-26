import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

const Tooltip: React.FC<{
  isVisible: boolean;
  children: ReactNode;
  className: string;
  placement: string;
}> = ({ isVisible, children, className, placement }) => {
  const style: {
    top?: string;
    bottom?: string;
    transform: string;
    boxShadow: string;
  } = {
    transform: 'translateX(-50%)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  if (placement === 'bottom') {
    style.top = '100%';
  } else if (placement === 'top') {
    style.bottom = '100%';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className={`absolute z-50 left-1/2 p-2 bg-white rounded ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Tooltip;
