import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCustomRequestList = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: requestAssets = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["customRequestList"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/customRequestList`);
      console.log(response.data);
      console.log(response);
      return response.data;
    },
  });
  return [requestAssets, isPending, refetch];
};

export default useCustomRequestList;
