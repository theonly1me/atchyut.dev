'use client';

import React from 'react';
import notionJSX from 'notion-jsx';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const Blocks = ({ blocks }: { blocks: BlockObjectResponse[] }) => {
  const results = notionJSX.generateJSX(blocks);

  return (
    Array.isArray(results) &&
    results.map((element: React.ReactElement, index: number) => {
      return React.createElement(
        element.type,
        {
          key: element.key ?? index,
          className: element.props.className,
          ...element.props,
        },
        element.props.children
      );
    })
  );
};

export default Blocks;
