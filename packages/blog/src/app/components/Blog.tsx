import { Client } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Blocks from './Blocks';
import ShareBlog from './ShareBlog';
import moment from 'moment';

export const revalidate = 600;

export default async function Blog({
  pageId,
  title,
  publishedOn,
  imageUrl,
}: Readonly<{
  pageId: string;
  title: string;
  publishedOn: string;
  imageUrl: string;
}>) {
  const blogURL = 'https://blog.atchyut.dev/blogpost/' + pageId;

  const { NOTION_KEY } = process.env;

  const notion = new Client({
    auth: NOTION_KEY as string,
  });

  const { results } = await notion.blocks.children.list({
    block_id: pageId,
  });

  return (
    <div className="p-10 font-normal">
      <div className="flex flex-col justify-between">
        <ShareBlog blogURL={blogURL} title={title} imageUrl={imageUrl} />
        {publishedOn && (
          <span className="text-neutral-500 text-sm">
            Published on {moment(publishedOn).format('dddd, MMMM Do YYYY')}
          </span>
        )}
      </div>
      {Array.isArray(results) && (
        <Blocks blocks={results as BlockObjectResponse[]} />
      )}
    </div>
  );
}
