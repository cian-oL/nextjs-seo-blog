import Link from "next/link";
import Image from "next/image";

import profileLogo from "@/../public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 mr-4 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileLogo}
          alt="A cartoon render of a profile image"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">CodeBucks</span>
    </Link>
  );
};
export default Logo;
