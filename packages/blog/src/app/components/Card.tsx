import Image from 'next/image';

const Card = () => {
  return (
    <div className="max-w-xl border rounded-lg max-h-72 hover:translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-95 transition-transform duration-300">
      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <Image
            src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMzYyODA5NA&ixlib=rb-4.0.3&q=80&w=1080"
            layout="fill"
            objectFit="cover"
            alt="image"
            className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            // placeholder="blur"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-lg font-semibold text-slate-900">
              First Blog
            </h3>
          </div>
          <div className="flex items-baseline mt-4 mb-4 p-4 border-t border-slate-200 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex
            perspiciatis eos aliquam suscipit tempora eveniet repellat corrupti
            nemo tenetur modi beatae fugiat dolorum mollitia amet, esse...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
