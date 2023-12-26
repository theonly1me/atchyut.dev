import Image from 'next/image';
import soon from '../../../public/coming_soon.jpg';

const ComingSoon = () => {
  return (
    <div className="border rounded-lg max-w-5xl md:h-96 mt-9">
      <div className="flex font-sans">
        <div className="flex-none md:w-96 md:h-96 relative">
          <Image
            src={soon}
            layout="fill"
            objectFit="cover"
            alt="image"
            className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            placeholder="blur"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl lg:text-4xl text-neutral-600">
              Blogposts are coming soon...
            </h3>
          </div>
          <div className="flex text-l lg:text-xl leading-8 mt-4 p-4 md:text-justify border-t border-slate-200 text-neutral-600">
            Hey! It&apos;s great to see you come here. Unfortunately, I&apos;ve
            been quite busy with work and some other stuff, but I&apos;ll be
            sharing some blogposts soon. Until then, thanks for your patience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
