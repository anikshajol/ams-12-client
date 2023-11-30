import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTeam = () => {
  const axiosSecure = useAxiosSecure();

  const { data: team = [], refetch } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosSecure.get("/team");
      return res.data;
    },
  });

  return [team, refetch];
};

export default useTeam;
