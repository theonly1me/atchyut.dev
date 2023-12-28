import React, { ReactElement, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import notionJSX from 'notion-jsx';
import Spinner from './Spinner';

const Blog = () => {
  const [blocks, setBlocks] = useState<ReactElement[]>();

  const pathname = usePathname();

  const pageId = pathname.split('/')[2];

  useEffect(() => {
    fetch(`/api/fetchPage?pageId=${pageId}`)
      .then(res => res.json())
      .then(d => {
        if (d.length) {
          setBlocks(notionJSX.generateJSX(d) as ReactElement[]);
        }
      });
  }, [pageId]);

  if (!blocks || !blocks.length) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-10 font-normal">
      {blocks?.map((element: ReactElement, index: number) => {
        return React.createElement(
          element.type,
          {
            key: element.key || index,
            className: element.props.className,
            ...element.props,
          },
          element.props.children
        );
      })}
    </div>
  );
};

export default Blog;
