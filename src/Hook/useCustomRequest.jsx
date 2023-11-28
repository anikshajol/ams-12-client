import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCustomRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user.email);

  const {
    data: requestAssets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["customRequestAssets", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/custom-request`);
      console.log(response.data);
      return response.data;
    },
  });

  return [requestAssets, isPending, refetch];
};

export default useCustomRequest;
