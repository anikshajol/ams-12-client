import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAssets = (search) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: assets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["assetsList"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assets?search=${search}`);
      return res.data;
    },
  });

  return [assets, isPending, refetch];
};

export default useAssets;
