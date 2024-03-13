import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layouts/private/Sidebar";
import Navbar from "@/components/layouts/private/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivateLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="wrapper font-bold bg-background">
      {/* sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <ScrollArea className="main" color="bg-gray-400">
        {/* navbar */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* main */}
        <main className="content p-8 space-y-4">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  );
};

export default PrivateLayout;
