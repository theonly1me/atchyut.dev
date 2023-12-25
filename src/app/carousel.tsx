import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import atchyut_1 from '../../public/atchyut_1.jpg';
import atchyut_2 from '../../public/atchyut_2.jpg';
import atchyut_3 from '../../public/atchyut_3.jpg';
import atchyut_4 from '../../public/atchyut_4.png';

const images = [atchyut_1, atchyut_2, atchyut_3, atchyut_4];
const subtexts = [
  'Etersheim, North Holland, Netherlands.',
  'Disneyland, Paris, France.',
  'Cavenagh bridge, Downtown core, Singapore.',
  'Pa tong, Phuket, Thailand.',
];

const Carousel: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
    setHasLoaded(false);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
    setHasLoaded(false);
  };

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="relative rounded-3xl w-60 h-60 mt-20 overflow-hidden border-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={images[currentImage]}
            alt={`Picture of Atchyut, ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            loading="eager"
            className="pointer-events-none"
            onLoad={() => setHasLoaded(true)}
          />
          <FaArrowCircleLeft
            onClick={prevImage}
            className="text-neutral-400 absolute text-3xl bottom-6 left-2 z-50 bg-white rounded-full opacity-90 hover:scale-105 active:scale-95 transform transition-transform duration-300"
          />
          <FaArrowCircleRight
            onClick={nextImage}
            className="text-neutral-400 absolute text-3xl bottom-6 right-2 z-50 bg-white rounded-full opacity-90 hover:scale-105 active:scale-95 transform transition-transform duration-300"
          />
        </motion.div>
      </AnimatePresence>
      <span className="text-neutral-400 text-md max-w-60 text-center">
        Picture from {subtexts[currentImage]}
      </span>
    </div>
  );
};

export default Carousel;
