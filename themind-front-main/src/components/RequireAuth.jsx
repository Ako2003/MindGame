import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  return localStorage.getItem("accessToken") ? <Outlet /> : <Navigate to="/auth" />;
};

export default RequireAuth;
