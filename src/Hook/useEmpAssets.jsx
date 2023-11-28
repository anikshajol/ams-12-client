import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEmpAssets = (search) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: empAssets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["empAssets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-assets?email=${user.email}&search=${search}
       `
      );
      return res.data;
    },
  });

  return [empAssets, isPending, refetch];
};

export default useEmpAssets;
