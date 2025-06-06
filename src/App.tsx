import { Button } from "./components/ui/button";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme-provider";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/Landing";
import OnBoarding from "./pages/OnBoarding";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import SavedJobs from "./pages/SavedJobs";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/job-listing",
        element: <JobListing />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/post-jobs",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
