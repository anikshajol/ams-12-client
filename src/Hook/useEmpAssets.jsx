import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmpAssets = (search) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: empAssets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["empAssets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-assets?search=${search}`);
      return res.data;
    },
  });

  return [empAssets, isPending, refetch];
};

export default useEmpAssets;
