import Link from "next/link";
import { FunctionComponent } from "react";
import { UserButton } from "@clerk/nextjs";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <div className="px-2 py-2 border-black border-b flex justify-between">
        <Link href={"/"} className="text-4xl px-2 py-4">
          LOGO
        </Link>
        <UserButton afterSignOutUrl="/" />
        <button className="text-white bg-black p-4">
          Sign In
        </button>
      </div>
    </>
  );
};

export default Header;
