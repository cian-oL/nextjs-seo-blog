import Link from "next/link";
import Logo from "./Logo";
import { DribbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "../icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 px-10 ">
      <Logo />
      <nav className="fixed top-6 right-1/2 translate-x-1/2 flex items-center w-max py-3 px-8 border border-solid border-dark rounded-full font-medium bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>T</button>
      </nav>
      <div className="flex">
        <a href="https://example.com" className="w-6 h-6 mr-4">
          <LinkedInIcon />
        </a>
        <a href="https://example.com" className="w-6 h-6 mr-4">
          <TwitterIcon />
        </a>
        <a href="https://example.com" className="w-6 h-6 mr-4">
          <GithubIcon />
        </a>
        <a href="https://example.com" className="w-6 h-6 mr-4">
          <DribbleIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
