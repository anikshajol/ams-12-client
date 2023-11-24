import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeeRegistration from "../Pages/AuthenticationPages/EmployeeRegistration/EmployeeRegistration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/join-as-emp",
        element: <EmployeeRegistration></EmployeeRegistration>,
      },
    ],
  },
]);
