import { Client } from '@notionhq/client';
import { Handler } from '@netlify/functions';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import _ from 'lodash';
import { response } from '../../src/utils/response';
import { Page } from '../../src/types';

const { NOTION_KEY, NOTION_DB } = process.env;

const notion = new Client({
  auth: NOTION_KEY as string,
});

const handler: Handler = async (event, context) => {
  const { results }: QueryDatabaseResponse = await notion.databases.query({
    database_id: NOTION_DB as string,
    filter: {
      property: 'tags',
      status: {
        equals: 'Live',
      },
    },
  });

  const data = results.map(result => {
    return {
      pageId: _.get(result, ['properties', 'pageId', 'rich_text'])[0]
        ?.plain_text,
      imageUrl: _.get(result, ['properties', 'imageUrl', 'url']),
      pageName: _.get(result, ['properties', 'name', 'title'])[0]?.plain_text,
      pageSummary: _.get(result, ['properties', 'pageSummary', 'rich_text'])[0]
        ?.plain_text,
    };
  });

  return response(200, data);
};

export { handler };
