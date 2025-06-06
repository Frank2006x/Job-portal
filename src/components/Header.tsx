// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2 p-2">
            <img src="logo.svg" alt="logo" className="h-12" />
            <h1 className="text-2xl">JobSphere</h1>
          </div>
        </Link>
        <Button variant={"outline"}>Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
