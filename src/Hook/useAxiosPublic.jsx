import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ams-server-black.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
