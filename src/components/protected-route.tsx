import React, { type ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();
  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (
    user != undefined &&
    !user.unsafeMetadata.role &&
    pathname !== "/onboarding"
  )
    return <Navigate to="/onborading" />;
  return <>{children}</>;
};

export default ProtectedRoute;
