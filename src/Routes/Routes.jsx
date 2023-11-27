import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeeRegistration from "../Pages/AuthenticationPages/EmployeeRegistration/EmployeeRegistration";
import AdminRegistration from "../Pages/AuthenticationPages/AdminRegistration/AdminRegistration";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/AuthenticationPages/Login/Login";
import MyAssets from "../Pages/Employee/Assets/MyAssets";
import RequestAssets from "../Pages/Employee/RequestAssets/RequestAssets";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/join-as-emp",
        element: <EmployeeRegistration></EmployeeRegistration>,
      },
      {
        path: "/join-as-admin",
        element: <AdminRegistration></AdminRegistration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/my-assets",
        element: <MyAssets></MyAssets>,
      },
      {
        path: "/request-for-asset",
        element: (
          <PrivateRoute>
            <RequestAssets></RequestAssets>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
