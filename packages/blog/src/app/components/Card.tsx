import { Page } from '../../types';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import { useRouter } from 'next/navigation';
import moment from 'moment';

const Card: React.FC<Page> = ({
  pageName,
  pageId,
  imageUrl,
  pageSummary,
  tags,
  publishedOn,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/blogpost/${pageId}`);
      }}
      key={pageId}
      className="flex flex-col md:flex-row md:gap-2 border max-w-64 md:max-w-2xl min-h-52 rounded-lg hover:translate-y-1 hover:scale-105 active:-translate-y-0 active:scale-100 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:shadow-sm"
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

      <div className="p-4 max-w-1/2">
        <h3 className="text-xl font-semibold text-neutral-700">{pageName}</h3>
        <hr className="my-4 w-full" />
        <div className="text-neutral-600">{pageSummary}</div>
        <div className="text-neutral-500 flex flex-col mt-2 text-xs py-1 gap-2">
          <span>{moment(publishedOn).format('dddd, MMMM Do YYYY')}</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-center">
            {tags.length &&
              tags.split(',').map(tag => (
                <div
                  key={tag}
                  className="px-2 py-1 mt-1 border-2 border-neutral-300 rounded-2xl"
                >
                  {' '}
                  {tag}{' '}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
