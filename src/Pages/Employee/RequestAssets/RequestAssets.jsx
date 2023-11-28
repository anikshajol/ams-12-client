import { Helmet } from "react-helmet-async";
import useAssets from "../../../Hook/useAssets";
import useAuth from "../../../Hook/useAuth";
import { useEffect, useState } from "react";

const RequestAssets = () => {
  const [search, setSearch] = useState("");
  const [assets, isPending, refetch] = useAssets(search);
  const { loading } = useAuth();
  console.log(assets);
  const [selectType, setSelectType] = useState(null);

  const handleFilterChange = (e) => {
    setSelectType(e.target.value);
  };

  // Todo: need modal for request button

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
        <title>All Assets</title>
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
                      <button className="btn btn-primary">Request</button>
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
