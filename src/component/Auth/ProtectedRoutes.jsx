import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({ role, Element,userData }) => {
  const auth = userData;

  if (!userData.login) {
    return <Navigate to="/" replace />;
  }

  if (userData.login && role.includes(userData.role)) {
    return Element;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoutes;
