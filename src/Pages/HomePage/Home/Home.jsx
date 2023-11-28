import useAdmin from "../../../Hook/useAdmin";
import useAuth from "../../../Hook/useAuth";
import AdminHome from "../../Admin/AdminHome/AdminHome";
import CustomRequest from "../../Employee/CustomRequest/CustomRequest";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";

const Home = () => {
  const { user } = useAuth();
  const isAdmin = useAdmin();
  return (
    <div>
      {!user ? (
        <>
          <Banner />
          <AboutUs />
          <Packages />
        </>
      ) : isAdmin === false ? (
        <>
          <CustomRequest />
        </>
      ) : (
        <>
          <AdminHome></AdminHome>
        </>
      )}
    </div>
  );
};

export default Home;
