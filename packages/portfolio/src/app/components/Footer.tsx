import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareGithub,
  FaLinkedin,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="pt-9 bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="text-5xl mt-15 flex justify-center gap-x-6">
          <a
            href="https://linkedin.com/in/atchyutpulavarthi"
            target="_blank"
            className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
          >
            <FaLinkedin className="fill-blue-600" />
          </a>
          <a
            href="https://github.com/theonly1me"
            target="_blank"
            className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
          >
            <FaSquareGithub className="fill-gray-800" />
          </a>
          <a
            href="https://twitter.com/@tchyut_p"
            target="_blank"
            className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
          >
            <FaSquareXTwitter className="fill-black" />
          </a>
          <a
            href="https://instagram.com/_theonly1me"
            target="_blank"
            className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
          >
            <FaSquareInstagram className="fill-rose-500" />
          </a>
        </div>
        <div className="flex flex-col items-center mb-2">
          <p className="block text-black">Made with ☕️ by</p>
          <p className="block text-neutral-500">
            Atchyut Preetham Pulavarthi &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
