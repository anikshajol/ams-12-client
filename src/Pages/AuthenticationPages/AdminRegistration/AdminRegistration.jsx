import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
const AdminRegistration = () => {
  const options = [
    { value: "5 Members For $5", label: "5 Members For $5" },
    { value: "10 Members for $8", label: "10 Members for $8" },
    { value: "20 Members for $15", label: "20 Members for $15" },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  //   console.log(selectedPackage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, selectedPackage });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-orange-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Join now!</h1>
            <p className="py-6">Join As a Admin</p>
          </div>

          <div className="card max-w-sm shadow-2xl bg-base-100">
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

              {/* Company name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
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
                  <span className="label-text">Company Logo</span>
                </label>

                <input
                  type="text"
                  {...register("companyLogo", { required: true })}
                  placeholder="Company Logo"
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
                  <span className="label-text">Date Of Birth</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("date", { required: true })}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Select Options */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Packages</span>
                </label>
                <Select
                  //   {...register("selectedPackage", { required: true })}
                  onChange={(selectedOptions) => {
                    const selectPackage = selectedOptions?.value || "N/A";
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
