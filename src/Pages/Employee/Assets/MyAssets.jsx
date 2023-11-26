import moment from "moment";
import { useEffect, useState } from "react";

const MyAssets = () => {
  const [empAssets, setEmpAssets] = useState([]);
  // Todo: have to fetch from server

  useEffect(() => {
    fetch("employerAssets.json")
      .then((res) => res.json())
      .then((data) => setEmpAssets(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-md">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {empAssets.map((empAsset, index) => (
              <tr className="text-lg" key={index}>
                <th>{index + 1}</th>
                <td>{empAsset.assetName}</td>
                <td>{empAsset.returnType}</td>
                <td>
                  {moment(empAsset.requestDate, "DD/MM/YYYY, h:mm A").format(
                    "MMMM Do YYYY"
                  )}
                </td>
                <td>{empAsset.approvalDate}</td>
                <td
                  className="font-bold"
                  style={{
                    color:
                      empAsset.status === "Approved"
                        ? "green"
                        : empAsset.status === "Pending"
                        ? "yellow"
                        : "red",
                  }}
                >
                  {empAsset.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssets;
