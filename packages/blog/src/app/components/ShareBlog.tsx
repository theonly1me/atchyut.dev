'use client';

import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FaFacebook,
  FaReddit,
  FaWhatsapp,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const ShareBlog: React.FC<{
  blogURL: string;
  title: string;
  imageUrl: string;
}> = ({ blogURL, title, imageUrl }) => {
  return (
    <div className="flex gap-1 items-center">
      <span className="text-neutral-500 text-sm">Share this blog via</span>
      <TwitterShareButton
        url={blogURL}
        title={title}
        hashtags={['tech', 'developers']}
        related={['@tchyut_p']}
      >
        <FaSquareXTwitter className="text-black text-2xl hover:scale-105 active:scale-95 transition-all duration-300" />
      </TwitterShareButton>
      <FacebookShareButton url={blogURL} hashtag="blog">
        {' '}
        <FaFacebook className="text-blue-600 text-2xl hover:scale-105 active:scale-95 transition-transform duration-300" />
      </FacebookShareButton>
      <RedditShareButton url={blogURL} title={title}>
        <FaReddit className="text-2xl text-orange-600 hover:scale-105 active:scale-95 transition-transform duration-300" />
      </RedditShareButton>
      <WhatsappShareButton url={blogURL} title={title}>
        <FaWhatsapp className="text-2xl text-green-400 hover:scale-105 active:scale-95 transition-transform duration-300" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareBlog;
