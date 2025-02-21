import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL1 } from "./base_url";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data) => {
      const result = await axios.post(`${BASE_URL1}/register`, data);
      return result.data;
    },
  });
};
export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      const result = await axios.post(`${BASE_URL1}/login`, data);
      return result.data;
    },
  });
};

export const userDetails=()=>{
    return useQuery({
        queryKey:"user",
        queryFn:async()=>{
            const result= await axios.get(`${BASE_URL1}/users/2`)
            return result.data
        },
        
    })
}
