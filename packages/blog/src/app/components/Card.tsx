import { Page } from '../../types';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import { useRouter } from 'next/navigation';

const Card: React.FC<Page> = ({ pageName, pageId, imageUrl, pageSummary }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/blogpost/${pageId}`);
      }}
      className="border w-xs rounded-lg h-40 hover:translate-y-1 hover:scale-105 active:-translate-y-0 active:scale-100 transition-transform duration-300 cursor-pointer"
    >
      <div className="flex">
        <div className="relative w-48">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt={`Cover image for ${pageName}`}
            className="absolute object-cover rounded-l-lg"
            placeholder="blur"
            blurDataURL={imageUrl}
            loader={imageLoader}
            quality={75}
          />
        </div>
        <div className="flex-auto px-4 py-4 flex-wrap max-w-xs h-40 ">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-lg font-semibold text-neutral-700">
              {pageName}
            </h3>
          </div>
          <div className="flex items-baseline mt-4 mb-4 py-4 border-t border-slate-200 text-neutral-600">
            {pageSummary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
