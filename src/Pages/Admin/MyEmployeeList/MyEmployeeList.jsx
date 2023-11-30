import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useTeam from "../../../Hook/useTeam";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const MyEmployeeList = () => {
  const [team] = useTeam();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // const handleDelete = (id) => {
  //   console.log(id);
  //   axiosSecure.delete(`/team/${id}`).then((res) => {
  //     console.log(res.data);
  //     if (res.data.deletedCount > 0) {
  //       // refetch();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "data delete",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/team/${id}`).then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log("delete", err);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Member Name</th>
                <th>Member Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {team.map((user) => (
                <tr key={user?._id}>
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
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className="btn btn-primary"
                    >
                      Remove from team
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
};

export default MyEmployeeList;
