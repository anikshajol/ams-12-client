import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useEmp = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isEmployee } = useQuery({
    queryKey: [user?.email, "isEmployee"],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/employee/${user.email}`);
      return res.data?.employee;
    },
  });
  return [isEmployee];
};

export default useEmp;
