import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeeRegistration from "../Pages/AuthenticationPages/EmployeeRegistration/EmployeeRegistration";
import AdminRegistration from "../Pages/AuthenticationPages/AdminRegistration/AdminRegistration";
import Home from "../Pages/HomePage/Home/Home";

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
    ],
  },
]);
