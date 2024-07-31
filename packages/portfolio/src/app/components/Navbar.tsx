import { MdOutlinePersonPin } from 'react-icons/md';
import { GrBlog } from 'react-icons/gr';
import { RiHomeHeartLine } from 'react-icons/ri';
import Link from 'next/link';

import Button from './Button';

const Navbar: React.FC<{ origin?: string }> = ({ origin }) => {
  let secondaryBtnHeading,
    secondaryBtnHref,
    isSecondaryBtnBlog = false;

  if (origin === 'home') {
    isSecondaryBtnBlog = true;
    secondaryBtnHeading = 'Checkout My Blog';
    secondaryBtnHref = 'https://blog.atchyut.dev';
  } else {
    secondaryBtnHeading = 'Visit Homepage';
    secondaryBtnHref = 'https://www.atchyut.dev';
  }

  return (
    <nav className="pt-10 flex flex-col justify-between items-center">
      <Link href="/">
        <h1 className="text-xl text-black border-b-2 border-white hover:border-black hover:from-purple-400 hover:to-pink-600 bg-gradient-to-r bg-clip-text hover:text-transparent cursor-pointer transition-all duration-200 mb-4 md:mb-2">
          atchyut.dev
        </h1>
      </Link>
      <ul className="flex flex-col items-center gap-2">
        <li>
          <Button
            headingOffset="5%"
            heading="View My Résumé"
            href="https://drive.google.com/file/d/1Kr7MmTc3FAN7a-2xV_pttmjiFoRAAFon/view"
          >
            <MdOutlinePersonPin className="text-xl text-purple-300" />
          </Button>
        </li>
        <li>
          <Button
            heading={secondaryBtnHeading}
            headingOffset="5%"
            href={secondaryBtnHref}
          >
            {isSecondaryBtnBlog ? (
              <GrBlog className="text-xl text-purple-300" />
            ) : (
              <RiHomeHeartLine className="text-xl text-purple-300" />
            )}
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
