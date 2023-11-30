import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const usePackages = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: packages = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/packages`);
      console.log(res.data);
      return res.data;
    },
  });

  return [packages, isPending, refetch];
};

export default usePackages;
