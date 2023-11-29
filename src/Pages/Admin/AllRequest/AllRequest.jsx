import { useState } from "react";
import useAssets from "../../../Hook/useAssets";
import useAuth from "../../../Hook/useAuth";

const AllRequest = () => {
  const [search, setSearch] = useState("");
  const [assets, isPending, refetch] = useAssets(search);
  console.log(assets);

  const { loading } = useAuth();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Email Of Requester</th>
              <th>Name Of Requester</th>
              <th>Request Date</th>
              <th>Additional Date</th>
              <th>Status</th>
              <th>Approve Button</th>
              <th>Reject Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assets.map((asset, index) => (
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{asset.assetName}</td>
                <td>{asset.returnType} </td>
                <td>{asset.emailOfRequester}</td>
                <td>{asset.NameOfRequester}</td>
                <td>{asset.requestDate}</td>
                <td>{asset.additionalInformation}</td>
                <td>{asset.status}</td>
                <td>
                  <button className="btn btn-primary">Approval</button>
                </td>
                <td>
                  <button className="btn btn-primary">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
