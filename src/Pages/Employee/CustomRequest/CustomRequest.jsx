import { useEffect } from "react";
import useCustomRequest from "../../../Hook/useCustomRequest";

const CustomRequest = () => {
  const [requestAssets, isPending, refetch] = useCustomRequest();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="">
      <div className="overflow-x-auto  max-w-6xl mx-auto">
        <table className="table table-md table-pin-rows table-pin-cols">
          {/* head */}
          <thead className="text-xl font-bold">
            <tr>
              <th>Sl</th>
              <th>Asset Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody className="text-lg uppercase ">
            {/* row 1 */}
            {requestAssets.map((asset, index) => (
              <tr key={asset.id}>
                <th>{index + 1}</th>
                <td> {asset.assetName} </td>
                <td>${asset.price}</td>
                <td>{asset.returnType || asset.type}</td>
                <td
                  style={{
                    color: asset.status === "Approved" ? "green" : "red",
                  }}
                >
                  {asset.status}
                </td>
                <td>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document
                        .getElementById(`my_modal_${asset.id}`)
                        .showModal()
                    }
                  >
                    View Details
                  </button>
                  <dialog id={`my_modal_${asset.id}`} className="modal ">
                    <div className="modal-box min-w-screen">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <div className=" pt-3 ">
                        <figure className="flex justify-center">
                          <img
                            className="h-56 w-full"
                            src={asset.image}
                            alt={asset.assetName}
                          />
                        </figure>
                        <div className="">
                          <h2 className="card-title">{asset.assetName}</h2>
                          <h3>{asset.type}</h3>
                          <div className="flex items-center gap-4 justify-center flex-wrap text-lg">
                            <p className="">
                              <span className=" font-bold">Type: </span>
                              {asset.returnType || asset.type}
                            </p>
                            <p className="text-orange-600 font-semibold text-lg">
                              {" "}
                              ${asset.price}
                            </p>
                          </div>

                          <div className="flex justify-center text-lg flex-col items-center ">
                            <p>
                              <span className=" font-bold">Info: </span>
                              {asset.additionalInformation}
                            </p>
                            <p>
                              <span className=" font-bold">Posting Time: </span>
                              {asset.requestDate}
                            </p>
                            <p>{asset.whyNeed}</p>
                          </div>

                          <div className="card-actions justify-between items-center">
                            <p
                              style={{
                                color:
                                  asset.status === "Approved" ? "green" : "red",
                                fontSize: "1.3rem",
                                fontWeight: "bold",
                              }}
                            >
                              {asset.status}
                            </p>
                            <button className="btn btn-primary">Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomRequest;
