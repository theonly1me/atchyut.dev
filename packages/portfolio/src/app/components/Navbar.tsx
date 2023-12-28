import { MdOutlinePersonPin } from 'react-icons/md';
import { GrBlog } from 'react-icons/gr';
import { RiHomeHeartLine } from 'react-icons/ri';

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
      <h1 className="text-xl text-black border-b-2 border-white hover:border-black hover:from-purple-400 hover:to-pink-600 bg-gradient-to-r bg-clip-text hover:text-transparent cursor-pointer transition-all duration-200 mb-4 md:mb-2">
        atchyut.dev
      </h1>
      <ul className="flex flex-col items-center gap-2">
        <li>
          <Button
            headingOffset="5%"
            heading="Grab My Résumé"
            href="https://www.icloud.com/iclouddrive/0cb1xJia0vNIPXnDY7e6eGG-A#Atchyut%5FResume"
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
