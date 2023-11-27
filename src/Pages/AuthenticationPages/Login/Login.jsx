import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  const onSubmit = (data) => {
    // console.log(data);
    const { email, password } = data;
    setError("");
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your registration successfully completed as a Employee",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content">
          <div className="card max-w-md shadow-2xl bg-transparent">
            <div className="text-center py-4">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                {user ? (
                  <button disabled className="btn btn-primary">
                    Login
                  </button>
                ) : (
                  <button className="btn btn-primary">Login</button>
                )}
              </div>
              <div>
                <p className="text-lg text-red-600">{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
