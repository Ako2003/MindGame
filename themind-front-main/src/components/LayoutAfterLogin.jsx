import { Outlet } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin";

const LayoutAfterLogin = () => {
  return (
    <div className="top-light w-full pt-24 min-h-screen">
      <NavbarAfterLogin />
      <Outlet />
    </div>
  );
};

export default LayoutAfterLogin;
