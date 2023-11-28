import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ handleGoogleLogin }) => {
  return (
    <>
      <button onClick={handleGoogleLogin} className="btn text-lg  btn-primary">
        <FcGoogle /> Login With Google
      </button>
    </>
  );
};

export default GoogleLogin;
