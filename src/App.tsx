import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import useAuthUserStore from "@/store/authUserStore";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/public/Login";
import Home from "./pages/private/Home";
import useThemeStore from "./store/themeStore";
import { useEffect } from "react";

const App = () => {
  const { authUser } = useAuthUserStore((state: any) => ({
    authUser: state.authUser,
  }));

  const { theme } = useThemeStore((state: any) => ({
    theme: state.theme,
  }));

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // PRIVATE LAYOUT
  const privateRoutes = [
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Home />,
        },
      ],
    },
    {
      path: "/*",
      element: <Navigate to="/" replace />,
    },
  ];

  // PUBLIC LAYOUT
  const publicRoutes = [
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
    {
      path: "/*",
      element: <Navigate to="/" replace />,
    },
  ];

  const router = createBrowserRouter(authUser ? privateRoutes : publicRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
