import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
const AdminRegistration = () => {
  const options = [
    { value: "5 Members For $5", label: "5 Members For $5" },
    { value: "10 Members for $8", label: "10 Members for $8" },
    { value: "20 Members for $15", label: "20 Members for $15" },
  ];
  const { createUser, updateUserProfile, loginWithGoogle } = useAuth();
  const [selectedPackage, setSelectedPackage] = useState(" ");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  //   console.log(selectedPackage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    console.log(email, password, "only email,password");
    const formData = { ...data, selectedPackage };

    // console.log(formData);

    createUser(email, password)
      .then((res) => {
        // const regUser = res.user;
        console.log(res.data);

        updateUserProfile(data.name, data.photo).then(() => {
          console.log("name, and photo update");

          const userInfo = {
            name: data.name,
            email: data.email,
            company: data.companyName,
            photo: data.photo,
            selectedPackage,
            date: data.date,
            role: "admin",
          };

          console.log(userInfo);

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your registration successfully completed as an Admin",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/payment");
            }
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Admin Registration</title>
      </Helmet>
      <div className="min-h-screen bg-orange-500">
        <div className="flex gap-10 items-center justify-center flex-col lg:flex-row-reverse">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Join now!</h1>
            <p className="py-6 text-3xl">Join As a Admin</p>
          </div>

          <div className="card w-96 shadow-2xl bg-transparent  ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              {/* full name */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-xl  ">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>

              {/* Company name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  ">Company Name</span>
                </label>

                <input
                  type="text"
                  {...register("companyName", { required: true })}
                  placeholder="Company Name"
                  className="input input-bordered"
                />
              </div>

              {/* Company Logo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-xl">Photo</span>
                </label>

                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Give url of Company Logo"
                  className="input input-bordered"
                />
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  ">Email</span>
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
                  <span className="label-text text-xl  ">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text text-xl  -alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* dob */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  ">Date Of Birth</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("date", { required: true })}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text text-xl  -alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Select Options */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  ">Select Packages</span>
                </label>
                <Select
                  // {...register("selectedPackage", { required: true })}
                  onChange={(selectedOptions) => {
                    const selectPackage = selectedOptions?.value || "";
                    setSelectedPackage(selectPackage);
                  }}
                  options={options}
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
