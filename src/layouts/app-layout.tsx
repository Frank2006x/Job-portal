import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen mx-4">
        <Header />
        <Outlet />
      </main>
      <div className="p-8 text-center bg-gray-900 mt-10">
        Developed by Frank
      </div>
    </div>
  );
};

export default AppLayout;
