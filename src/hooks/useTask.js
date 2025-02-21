import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL2 } from "./base_url";


export const getAlltasks =(limit)=>{

    return useQuery({
        queryKey: ["task",limit],
        queryFn: async () => {
          const result = await axios.get(`${BASE_URL2}/todos?_limit=${limit}`);
          return result.data;

        },
        
        

      });
}

export const deleteTask=()=>{
    return useMutation({
        mutationFn:async(id)=>{
            const result= await axios.delete(`${BASE_URL2}/todos/${id}`)
        }
    })
}

export const addNewTask=()=>{
    return useMutation({
        mutationFn:async(data)=>{
            const result= await axios.post(`${BASE_URL2}/todos`,data)
            return result.data
        }
    })
}

export const updateTask=()=>{
    return useMutation({
        mutationFn:async({data,id})=>{
            console.log(data,id)
            const result = await axios.put(`${BASE_URL2}/todos/${id}`,data)
            return result.data
        }
    })
}