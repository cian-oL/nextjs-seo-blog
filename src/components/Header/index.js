import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 px-10 ">
      <Logo />
      <nav className="fixed top-6 right-1/2 translate-x-1/2 flex items-center w-max py-3 px-8 border border-solid border-dark rounded-full font-medium">
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
      <div>social links</div>
    </header>
  );
};

export default Header;