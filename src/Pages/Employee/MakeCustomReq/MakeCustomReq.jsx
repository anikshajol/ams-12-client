import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import moment from "moment";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const MakeCustomReq = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(Object.keys(data).join(","));

    const { assetName, price, type, image, whyNeed, additionalInformation } =
      data;
    const imageFile = { image: data.image[0] };
    const response = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      const assetRequest = {
        assetName: assetName.toUpperCase(),
        price: parseFloat(price),
        returnType: type,
        image: response.data.data.display_url,
        whyNeed,
        additionalInformation,
        status: "pending",
        requestDate: moment().format("DD/MM/YYYY, h:mm A"),
      };

      const reqRes = await axiosSecure.post("/custom-request", assetRequest);
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
    }
    // console.log(response.data);
  };

  return (
    <div className="max-w-7xl border border-orange-500 shadow-xl bg-base-200 mx-auto flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1st two input */}
        <div className="flex items-center gap-4">
          {/* asset name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Asset Name</span>
            </label>
            <input
              type="text"
              {...register("assetName", { required: true })}
              placeholder="Asset Name"
              className="input input-bordered"
            />
          </div>

          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("price", { required: true })}
              placeholder=" Input Price here"
              className="input input-bordered"
            />
          </div>
        </div>

        {/* 2nd two input */}

        <div className="flex gap-4 items-end">
          {/* asset type */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              {...register("type", { required: true })}
              placeholder=" Input Price here"
              className="input input-bordered"
            />
          </div>

          {/* IMAGE */}
          <div className="form-control">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-warning"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* why need this */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Why Need This?</span>
            </label>
            <textarea
              {...register("whyNeed", { required: true })}
              className="textarea px-10 textarea-warning"
              placeholder="Please give us details why you need this"
            ></textarea>
          </div>

          {/* additional information */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Additional Information</span>
            </label>
            <textarea
              {...register("additionalInformation", { required: true })}
              className="textarea textarea-warning px-10"
              placeholder="Additional Information"
            ></textarea>
          </div>
        </div>
        <div className="my-3 flex justify-center">
          <input type="submit" value={"Request"} className="btn btn-warning" />
        </div>
      </form>
    </div>
  );
};

export default MakeCustomReq;
