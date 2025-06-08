import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedOut,
  SignedIn,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2 p-2">
            <img src="logo.svg" alt="logo" className="h-12" />
            <h1 className="text-2xl">JobSphere</h1>
          </div>
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          {/* condition  */}
          <SignedIn>
            {user?.unsafeMetadata.role=="Recruiter" && <Link to="/post-job">
            <Button variant={"destructive"} className="my-auto rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
            </Link>}
            
            <div className="my-auto">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-20 w-20",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    href="/my-jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    href="/saved-jobs"
                    labelIcon={<Heart size={15} />}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          onClick={handleOverlay}
          className="fixed z-1 inset-0 flex items-center justify-center bg-black/50"
        >
          <SignIn
            signUpForceRedirectUrl={"/onboarding"}
            fallbackRedirectUrl={"/onboarding"}
          />
        </div>
      )}
    </>
  );
};

export default Header;
