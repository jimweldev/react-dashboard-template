import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthUserStore from "@/store/authUserStore";
import useThemeStore from "@/store/themeStore";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
  const { authUser, removeAuthUser } = useAuthUserStore((state: any) => ({
    authUser: state.authUser,
    removeAuthUser: state.removeAuthUser,
  }));

  const { theme, toggleTheme } = useThemeStore((state: any) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
  }));

  return (
    <div className="navbar border-b">
      <div className="flex h-16 items-center px-4">
        <button
          className="sidebar-toggle"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <CgMenuLeft className="text-3xl" />
        </button>

        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {authUser.firstName}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {authUser.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  Theme: {theme}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    removeAuthUser();
                  }}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
