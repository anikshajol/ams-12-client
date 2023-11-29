import { Helmet } from "react-helmet-async";
import useAssets from "../../../Hook/useAssets";
import useAuth from "../../../Hook/useAuth";
import { useEffect, useState } from "react";
import moment from "moment";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const RequestAssets = () => {
  const [search, setSearch] = useState("");
  const [assets, isPending, refetch] = useAssets(search);
  console.log(assets);
  const { loading } = useAuth();
  // console.log(assets);
  const [selectType, setSelectType] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const handleFilterChange = (e) => {
    setSelectType(e.target.value);
  };

  // Todo: need modal for request button

  const handleSubmitRequest = async (id, additionalInformation, e) => {
    try {
      e.preventDefault();
      const requestInfo = {
        additionalInformation,
        requestDate: moment().format("DD/MM/YYYY, h:mm A"),
        emailOfRequester: user?.email,
        nameOfRequester: user?.displayName,
      };

      console.log(requestInfo);
      const res = await axiosSecure.put(`/assets/${id}`, requestInfo);

      console.log(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading  loading-spinner w-44 text-info"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>All Assets Request</title>
      </Helmet>
      <div className="py-8 flex gap-3 justify-center">
        <div className="flex">
          <input
            type="text"
            placeholder="Search here"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            className="input relative  input-warning w-full max-w-xs"
            value={search}
          />
        </div>

        <select
          className="select select-bordered  max-w-xs"
          value={selectType}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="approved">Approved</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-Returnable</option>
        </select>
      </div>
      {isPending ? (
        <div className="flex justify-center">
          <span className="loading  loading-spinner w-44 text-info"></span>
        </div>
      ) : (
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="table table-md">
            {/* head */}
            <thead className="text-xl font-bold text-black">
              <tr>
                <th>SL</th>
                <th>Asset Name</th>
                <th>Asset Type</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg font-medium">
              {/* row 1 */}
              {assets.map((asset, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{asset.assetName}</td>
                  <td>{asset.returnType || asset.type}</td>
                  <td
                    className="font-bold"
                    style={{
                      color: asset.availability ? "green" : "red",
                    }}
                  >
                    {asset.availability ? "Available" : "Out of Stock"}
                  </td>
                  <td>
                    {asset.availability ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${asset._id}`)
                              .showModal()
                          }
                        >
                          Request
                        </button>
                        <dialog id={`my_modal_${asset._id}`} className="modal ">
                          <div className="modal-box min-w-screen">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>

                            <form
                              onSubmit={(e) =>
                                handleSubmitRequest(
                                  asset._id,
                                  e.target.info.value,
                                  e
                                )
                              }
                            >
                              <div className="form-control py-3">
                                <label className="label">
                                  <span className="label-text">
                                    Additional Information
                                  </span>
                                </label>
                                <textarea
                                  name="info"
                                  className="textarea textarea-warning px-10"
                                  placeholder="Additional Information"
                                ></textarea>
                              </div>

                              <div className="my-3 flex justify-center">
                                <input
                                  type="submit"
                                  value={"Request"}
                                  className="btn btn-warning"
                                />
                              </div>
                            </form>
                          </div>
                        </dialog>
                      </>
                    ) : (
                      <button disabled className="btn btn-primary">
                        Request
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestAssets;
