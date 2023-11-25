import { NavLink } from "react-router-dom";
import logo from "../assets/5f55175d9ecd1400ee2626df64545058.png";

const Navbar = () => {
  // TODO: need import user: user employee and hr/admin

  const employee = false;
  const admin = false;

  const links = (
    <>
      {employee ? (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/my-team"}>My Team</NavLink>
          </li>

          <li>
            <NavLink to={"/my-assets"}>My Assets</NavLink>
          </li>
          <li>
            <NavLink to={"/request-for-asset"}>Request For an Asset</NavLink>
          </li>
          <li>
            <NavLink to={"/make-a-custom-request"}>
              Make a Custom Request
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Profile</NavLink>
          </li>
        </>
      ) : admin ? (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/employee-list"}>My Employee List</NavLink>
          </li>

          <li>
            <NavLink to={"/add-an-employee"}>Add an Employee</NavLink>
          </li>
          <li>
            <NavLink to={"/assets"}>Asset List</NavLink>
          </li>
          <li>
            <NavLink to={"/all-request"}>All Request</NavLink>
          </li>
          <li>
            <NavLink to={"/custom-request"}>Custom Request List</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/join-as-emp"}>Join as Employee</NavLink>
          </li>

          <li>
            <NavLink to={"/join-as-admin"}>Join as HR/Admin</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar text-2xl font-bold   ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <div className="avatar">
            <div className="w-12">
              <img src={logo} className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* navbar end image and logout */}
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
