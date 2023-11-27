import { Helmet } from "react-helmet-async";
import useAssets from "../../../Hook/useAssets";
import useAuth from "../../../Hook/useAuth";

const RequestAssets = () => {
  const [assets, isPending] = useAssets();
  const { loading } = useAuth();
  console.log(assets);

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
        <title>Admin Registration</title>
      </Helmet>
      {loading ? (
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
                  <td>{asset.returnType}</td>
                  <td
                    className="font-bold"
                    style={{
                      color: asset.availability ? "green" : "red",
                    }}
                  >
                    {asset.availability ? "Available" : "Out of Stock"}
                  </td>
                  <td>
                    <button className="btn btn-primary">Request</button>
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
