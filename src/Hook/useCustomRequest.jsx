import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCustomRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: requestAssets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["customRequestAssets"],
    queryFn: async () => {
      const response = await axiosSecure.get("/custom-request");
      return response.data;
    },
  });

  return [requestAssets, isPending, refetch];
};

export default useCustomRequest;
