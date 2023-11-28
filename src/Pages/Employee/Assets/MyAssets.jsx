import moment from "moment";
import useEmpAssets from "../../../Hook/useEmpAssets";
import { useEffect, useState } from "react";

const MyAssets = () => {
  // const [empAssets, setEmpAssets] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [selectType, setSelectType] = useState(null);

  //   Todo: print button implement pdf react

  const [empAssets, isPending, refetch] = useEmpAssets(search);
  // console.log(empAssets);

  const handleClickToReturn = () => {
    setIsClicked(true);
  };

  const handleFilterChange = (e) => {
    setSelectType(e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  return (
    <div>
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

          {/* <input
            className="btn relative input-warning right-5"
            type="submit"
            value="Search"
          /> */}
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
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="table table-md">
          {/* head */}
          <thead className="text-xl font-bold text-black">
            <tr>
              <th>SL</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-lg font-medium">
            {/* row 1 */}
            {empAssets.map((empAsset, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{empAsset.assetName}</td>
                <td>{empAsset.returnType}</td>
                <td>
                  {moment(empAsset.requestDate, "DD/MM/YYYY, h:mm A").format(
                    "MMMM Do YYYY"
                  )}
                </td>
                <td>
                  {empAsset.approvalDate
                    ? moment(
                        empAsset.approvalDate,
                        "DD/MM/YYYY, h:mm A"
                      ).format("MMMM Do YYYY")
                    : ""}
                </td>
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
                <td>
                  {empAsset.status === "Pending" ? (
                    <button className="btn btn-error">Cancel</button>
                  ) : empAsset.status === "Approved" &&
                    empAsset.returnType === "Returnable" ? (
                    <button
                      onClick={handleClickToReturn}
                      disabled={isClicked}
                      className="btn btn-secondary"
                    >
                      {!isClicked ? "Return Back" : "Returned"}
                    </button>
                  ) : empAsset.status === "Approved" ? (
                    <button className="btn btn-success">Print</button>
                  ) : empAsset.status === "Approved" ? (
                    <button className="btn btn-success">Print</button>
                  ) : (
                    <button className="btn btn-secondary"> Re-Request</button>
                  )}
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
