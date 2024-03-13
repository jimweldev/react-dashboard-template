import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
