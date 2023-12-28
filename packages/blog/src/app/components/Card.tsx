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
      className="flex flex-col md:flex-row md:gap-2 border w-full min-h-52 md:w-1/2 md:h-52 rounded-lg hover:translate-y-1 hover:scale-105 active:-translate-y-0 active:scale-100 transition-transform duration-300 cursor-pointer"
    >
      <Image
        src={imageUrl}
        width={400}
        height={200}
        alt={`Cover image for ${pageName}`}
        className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:w-64"
        placeholder="blur"
        blurDataURL={imageUrl}
        loader={imageLoader}
        quality={75}
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-neutral-700">{pageName}</h3>
        <hr className="my-4" />
        <div className="text-neutral-600">{pageSummary}</div>
      </div>
    </div>
  );
};

export default Card;
