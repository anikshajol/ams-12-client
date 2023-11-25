import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your registration successfully completed as an Admin",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button onClick={handleGoogleLogin} className="btn text-lg  btn-primary">
        <FcGoogle /> Login With Google
      </button>
    </>
  );
};

export default GoogleLogin;
