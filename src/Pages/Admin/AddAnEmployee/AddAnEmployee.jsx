import Select from "react-select";
import useUsers from "../../../Hook/useUsers";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const AddAnEmployee = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState("");
  const axiosSecure = useAxiosSecure();
  const [users] = useUsers();
  // const navigate = Navigate();
  console.log(users);
  const options = [
    { value: "5 Members For $5", label: "5 Members For $5" },
    { value: "10 Members for $8", label: "10 Members for $8" },
    { value: "20 Members for $15", label: "20 Members for $15" },
  ];

  const handleCheckboxChange = (userId) => {
    setSelectedCheckboxes(userId);
  };

  console.log(selectedCheckboxes);

  const handleIncrease = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCheckboxes.length === 0) {
      // Handle the case when no users are selected
      return;
    }

    const addEmployees = users.find((user) => user._id === selectedCheckboxes);

    console.log(addEmployees);

    axiosSecure
      .post("/team", addEmployees)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your registration successfully completed as an Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <form onSubmit={handleSubmit} action="">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>image</th>
                <th>Member Name</th>
                <th>Member Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user?._id}>
                  <th>
                    <label>
                      <input
                        name="checkbox"
                        type="checkbox"
                        className="checkbox"
                        checked={selectedCheckboxes.includes(user?._id)}
                        onChange={() => handleCheckboxChange(user?._id)}
                      />
                    </label>
                  </th>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {user?.photo || user?.companyLogo ? (
                            <img
                              src={user?.photo || user?.companyLogo}
                              alt={user?.assetName}
                            />
                          ) : (
                            <p>no photo</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.role}</td>
                  <th>
                    <button className="btn btn-primary">Add to the team</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>

      {/* Select Options */}
      <form onSubmit={handleIncrease}>
        <div className=" form-control w-1/2 mx-auto">
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
        <Link to={"/payment"}>
          {" "}
          <div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Increase Members"
            />
          </div>
        </Link>
      </form>
    </div>
  );
};

export default AddAnEmployee;
