import React, { useEffect } from "react";

import useCustomRequestList from "../../../Hook/useCustomRequestList";

const CustomRequestList = () => {
  const [requestAssets, isPending, refetch] = useCustomRequestList();
  console.log(requestAssets);

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
              <th>Image</th>
              <th>Why need this</th>
              <th>Additional Information</th>
              <th>Approved</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody className="text-lg uppercase ">
            {/* row 1 */}
            {requestAssets.map((asset, index) => (
              <tr key={asset._id}>
                <th>{index + 1}</th>
                <td> {asset.assetName} </td>
                <td>${asset.price}</td>
                <td>{asset.returnType || asset.type}</td>
                <td>
                  <img src={asset.image} className="w-24" alt="" />
                </td>

                <td>{asset.whyNeed}</td>
                <td>{asset.additionalInformation || "No information"}</td>

                <td>
                  <button className="btn btn-primary">Approve </button>
                </td>
                <td>
                  <button className="btn btn-warning">Reject </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomRequestList;
