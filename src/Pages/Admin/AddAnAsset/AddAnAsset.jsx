import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AddAnAsset = () => {
  //   const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(Object.keys(data).join(","));
    console.log(data);

    const { assetName, type, quantity } = data;

    const addAsset = {
      assetName,
      type,
      quantity,
      //   availability: Boolean(availability),
    };

    const reqRes = await axiosSecure.post("/assets", addAsset);
    console.log(reqRes);
    if (reqRes.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your request has been sent to the HR/Admin ",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };
  // console.log(response.data)

  return (
    <div>
      <div className="max-w-7xl border border-orange-500 shadow-xl bg-base-200 mx-auto flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1st two input */}
          <div className="flex items-center gap-4">
            {/* product name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                {...register("assetName", { required: true })}
                placeholder="Asset Name"
                className="input input-bordered"
              />
            </div>

            {/* asset type */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <input
                type="text"
                {...register("type", { required: true })}
                placeholder=" Returnable/Non-Returnable"
                className="input input-bordered"
              />
            </div>
            {/* available type */}

            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Product Avilabilty</span>
              </label>
              <input
                type="text"
                {...register("availability", { required: true })}
                placeholder=" Returnable/Non-Returnable"
                className="input input-bordered"
              />
            </div> */}

            {/* 3rd input */}

            {/* quantity */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Qyantity</span>
              </label>
              <input
                type="number"
                {...register("quantity", { required: true })}
                placeholder=""
                className="input input-bordered"
              />
            </div>
          </div>

          {/* submit */}
          <div className="my-3 flex justify-center">
            <input
              type="submit"
              value={"Add Asset"}
              className="btn btn-warning"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnAsset;
