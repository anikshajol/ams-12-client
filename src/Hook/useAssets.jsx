import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAssets = () => {
  const axiosSecure = useAxiosSecure();

  const { data: assets = [], isPending } = useQuery({
    queryKey: ["assetsList"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });

  return [assets, isPending];
};

export default useAssets;
