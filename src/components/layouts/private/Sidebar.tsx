import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaHouse, FaUsers } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }: any) => {
  const { pathname } = useLocation(); // Get current pathname

  return (
    <ScrollArea
      className={`sidebar ${isSidebarOpen ? "" : "collapsed"} border-r`}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>

          <div className="space-y-1">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <NavLink className="sidebar-item" to={`/`}>
                <FaHouse className="text-lg mr-2" />
                Dashboard
              </NavLink>
            </Button>
            <Button
              variant={pathname === "/users" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <NavLink className="sidebar-item" to={`/users`}>
                <FaUsers className="text-lg mr-2" />
                Users
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
