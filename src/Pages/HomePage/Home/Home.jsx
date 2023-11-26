import useAuth from "../../../Hook/useAuth";
import CustomRequest from "../../Employee/CustomRequest/CustomRequest";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      {!user ? (
        <>
          <Banner />
          <AboutUs />
          <Packages />
        </>
      ) : (
        <>
          <CustomRequest />
        </>
      )}
    </div>
  );
};

export default Home;
