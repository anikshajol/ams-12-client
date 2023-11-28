import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const EmployeeRegistration = () => {
  const { createUser, loading, updateUserProfile } = useAuth();
  // console.log(loading);

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then((res) => {
        console.log(res.data);
        updateUserProfile(data.name, data.companyLogo).then(() => {
          console.log("name and photo updated");

          const userInfo = {
            name: data.name,
            email: data.email,
            role: "employee",
          };

          console.log(userInfo);

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your registration successfully completed as a Employee",
                showConfirmButton: false,
                timer: 1500,
              });
              // navigate("/");
            }
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Employee Registration</title>
      </Helmet>
      <div className="hero min-h-screen bg-orange-500">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join now!</h1>
            <p className="py-6 text-xl text-white font-bold ">
              Join As an Employee
            </p>
          </div>

          <div className="card  shadow-2xl bg-transparent">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* full name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>

              {/* Company Logo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-xl">Photo URL</span>
                </label>

                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Give your Photo url "
                  className="input input-bordered"
                />
              </div>

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

              {/* dob */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date Of birth</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("date", { required: true })}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  Register
                </button>
              </div>
              <div>
                <p className="text-lg text-white font-medium">
                  All ready Registered? Please{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-700 text-lg font-bold "
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
