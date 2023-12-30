import React, { ReactElement, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import notionJSX from 'notion-jsx';
import Spinner from './Spinner';
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FaFacebook, FaLinkedin, FaReddit, FaWhatsapp } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Blog = () => {
  const [blocks, setBlocks] = useState<ReactElement[]>();

  const pathname = usePathname();

  const pageId = pathname.split('/')[2];

  useEffect(() => {
    fetch(`/api/fetchPage?pageId=${pageId}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }

        throw new Error('Something went wrong! Please try again.');
      })
      .then(d => {
        if (d.length) {
          setBlocks(notionJSX.generateJSX(d) as ReactElement[]);
        }
      });
  }, [pageId]);

  if (!blocks || !blocks.length) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const blogURL = window.location.href;

  return (
    <div className="p-10 font-normal">
      <div className="flex gap-1">
        <span className="text-neutral-500">Share this blog: </span>
        <TwitterShareButton url={blogURL}>
          <FaSquareXTwitter className="text-black text-2xl" />
        </TwitterShareButton>
        <FacebookShareButton url={blogURL}>
          {' '}
          <FaFacebook className="text-blue-600 text-2xl" />
        </FacebookShareButton>
        <RedditShareButton url={blogURL}>
          <FaReddit className="text-2xl text-orange-600" />
        </RedditShareButton>
        <WhatsappShareButton url={blogURL}>
          <FaWhatsapp className="text-2xl text-green-400" />
        </WhatsappShareButton>
      </div>
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
