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
    queryKey: ["requestAssets", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/custom-request?email=${user.email}`
      );
      console.log(response.data);
      console.log(response);
      return response.data;
    },
  });

  return [requestAssets, isPending, refetch];
};

export default useCustomRequest;
