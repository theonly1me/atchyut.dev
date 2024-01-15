import { Page } from '../../types';
import moment from 'moment';
import Link from 'next/link';
import CardImage from './CardImage';

export default function Card({
  pageName,
  pageId,
  imageUrl,
  pageSummary,
  tags,
  publishedOn,
}: Readonly<Page>) {
  return (
    <Link
      href={`/blogpost/${pageId}?title=${pageName}&imageUrl=${imageUrl}&publishedOn=${publishedOn}`}
      className="max-w-64 md:max-w-80"
    >
      <div
        key={pageId}
        className="flex flex-col border max-w-64 md:max-w-80 min-h-52 rounded-lg hover:translate-y-1 hover:scale-105 active:-translate-y-0 active:scale-100 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:shadow-sm"
      >
        <CardImage pageName={pageName} imageUrl={imageUrl} />
        <div className="p-4 max-w-1/2">
          <h3 className="text-lg md:text-xl font-semibold text-neutral-700">
            {pageName}
          </h3>
          <hr className="my-4 w-full" />
          <div className="text-neutral-600 text-sm md:text-md">
            {pageSummary}
          </div>
          <div className="text-neutral-500 flex flex-col mt-2 text-xs py-1 gap-2">
            <span>{moment(publishedOn).format('dddd, MMMM Do YYYY')}</span>
            <div className="grid grid-cols-2 gap-2 text-center">
              {tags.length > 0 &&
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
    </Link>
  );
}
