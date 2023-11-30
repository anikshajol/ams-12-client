import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeeRegistration from "../Pages/AuthenticationPages/EmployeeRegistration/EmployeeRegistration";
import AdminRegistration from "../Pages/AuthenticationPages/AdminRegistration/AdminRegistration";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/AuthenticationPages/Login/Login";
import MyAssets from "../Pages/Employee/Assets/MyAssets";
import RequestAssets from "../Pages/Employee/RequestAssets/RequestAssets";
import PrivateRoute from "./PrivateRoute";
import MakeCustomReq from "../Pages/Employee/MakeCustomReq/MakeCustomReq";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import AddAnAsset from "../Pages/Admin/AddAnAsset/AddAnAsset";
import AllRequest from "../Pages/Admin/AllRequest/AllRequest";
import MyEmployeeList from "../Pages/Admin/MyEmployeeList/MyEmployeeList";
import AddAnEmployee from "../Pages/Admin/AddAnEmployee/AddAnEmployee";
import AdminProfile from "../Pages/Admin/AdminProfile/AdminProfile";
import AssetList from "../Pages/Admin/AssetList/AssetList";
import CustomRequestList from "../Pages/Admin/CustomRequest/CustomRequestList";
import Payment from "../Pages/Admin/Payment/Payment";
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
      {
        path: "/make-a-custom-request",
        element: <MakeCustomReq></MakeCustomReq>,
      },

      {
        path: "assetList",
        element: <AssetList></AssetList>,
      },

      {
        path: "addAsset",
        element: <AddAnAsset></AddAnAsset>,
      },
      {
        path: "allRequest",
        element: <AllRequest></AllRequest>,
      },
      {
        path: "customRequest",
        element: <CustomRequestList></CustomRequestList>,
      },
      {
        path: "myEmployee",
        element: <MyEmployeeList></MyEmployeeList>,
      },
      {
        path: "addEmployee",
        element: <AddAnEmployee></AddAnEmployee>,
      },
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
