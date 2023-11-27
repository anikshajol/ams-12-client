import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hook/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="justify-center flex">
        <span className="loading loading-spinner text-2xl w-40  text-info"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
