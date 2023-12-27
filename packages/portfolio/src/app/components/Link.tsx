import React, { useState } from 'react';
import Tooltip from './Tooltip';
import Image, { StaticImageData } from 'next/image';

const Link: React.FC<{
  href?: string;
  text: string;
  image: StaticImageData;
  tooltipPlacement: string;
}> = ({ href, text, image, tooltipPlacement }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <a
        href={href}
        target="_blank"
        className="underline transition-colors duration-300 hover:text-blue-500"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {text}
      </a>
      <Tooltip
        isVisible={isTooltipVisible}
        className={`max-w-62 max-h-42 ${
          isTooltipVisible ? 'sm:block sm:absolute sm:z-50' : ''
        }`}
        placement={tooltipPlacement}
      >
        <Image
          src={image}
          loading="eager"
          alt={`${text} logo`}
          className="my-auto mx-auto max-w-52 max-h-42"
        />
      </Tooltip>
    </div>
  );
};

export default Link;
