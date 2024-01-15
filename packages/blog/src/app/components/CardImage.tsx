'use client';

import Image from 'next/image';
import imageLoader from '../../../imageLoader';

const CardImage: React.FC<{ pageName: string; imageUrl: string }> = ({
  pageName,
  imageUrl,
}) => {
  return (
    <Image
      src={imageUrl}
      objectFit="cover"
      width={400}
      height={200}
      alt={`Cover image for ${pageName}`}
      className="rounded-t-lg"
      placeholder="blur"
      blurDataURL={imageUrl}
      loader={imageLoader}
      quality={75}
    />
  );
};

export default CardImage;
