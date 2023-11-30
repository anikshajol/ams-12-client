import useAuth from "../../../Hook/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <div className="py-6 max-w-7xl mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-24 w-24 rounded-full"
            src={user?.photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="text-2xl">
            <label htmlFor="" className="text-orange-500">
              Email Address
            </label>
            <br />
            <input type="email" disabled defaultValue={user?.email} />
          </div>
          <div className="text-2xl">
            <label htmlFor="" className="text-orange-500">
              Date of Birth
            </label>
            <br />
            <input className="input input-bordered" type="text" />
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
