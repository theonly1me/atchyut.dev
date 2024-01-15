import Card from './components/Card';
import { Page } from '@/types';
import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import _ from 'lodash';
import Spinner from './components/Spinner';

export default async function Home() {
  const { NOTION_KEY, NOTION_DB } = process.env;

  const notion = new Client({
    auth: NOTION_KEY as string,
  });

  const { results }: QueryDatabaseResponse = await notion.databases.query({
    database_id: NOTION_DB as string,
    filter: {
      property: 'status',
      status: {
        equals: 'Live',
      },
    },
  });

  const blogs = results.map((result): Page => {
    return {
      pageId: _.get(result, ['properties', 'pageId', 'rich_text'])[0]
        ?.plain_text,
      imageUrl: _.get(result, ['properties', 'imageUrl', 'url']),
      pageName: _.get(result, ['properties', 'name', 'title'])[0]?.plain_text,
      tags: _.get(result, ['properties', 'tags', 'rich_text'])[0]?.plain_text,
      publishedOn: _.get(result, [
        'properties',
        'publishedOn',
        'date',
        'start',
      ]),
      pageSummary: _.get(result, ['properties', 'pageSummary', 'rich_text'])[0]
        ?.plain_text,
    };
  });

  return (
    <div className="bg-white">
      <main className="bg-white px-10 flex flex-col items-center my-10">
        <section className="min-h-screen max-w-4xl">
          {(blogs?.length && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
              {blogs.map(
                ({
                  pageId,
                  imageUrl,
                  pageName,
                  pageSummary,
                  tags,
                  publishedOn,
                }) => {
                  return (
                    <Card
                      key={pageId}
                      pageId={pageId}
                      pageName={pageName}
                      pageSummary={pageSummary}
                      imageUrl={imageUrl}
                      tags={tags}
                      publishedOn={publishedOn}
                    />
                  );
                }
              )}
            </div>
          )) || (
            <div className="flex justify-center">
              <Spinner />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
