import { useEffect, useState } from "react";
import moment from "moment";
import useAssets from "../../../Hook/useAssets";
import { MdDelete } from "react-icons/md";

const AssetList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [selectType, setSelectType] = useState(null);
  const [assets, isPending, refetch] = useAssets(search);
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
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Quantity</th>
              <th>Date Added</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="text-lg font-medium">
            {/* row 1 */}
            {assets.map((asset, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{asset.assetName}</td>
                <td>{asset.returnType}</td>

                <td>{asset.quantity ? asset.quantity : "1"}</td>

                <td className="font-bold">{asset?.dateAdded || "N/A"}</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button className="btn btn-error">
                    {" "}
                    <MdDelete className="text-xl text-white" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
