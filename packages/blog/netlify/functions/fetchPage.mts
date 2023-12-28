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
  const pageId = event.queryStringParameters?.pageId;

  const { results } = await notion.blocks.children.list({
    block_id: pageId as string,
  });

  return response(200, results);
};

export { handler };
