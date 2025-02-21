import React from "react";
import { FaCheck, FaEye } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteTask } from "../../hooks/useTask";
import { toast } from "react-toastify";
import TaskDetails from "./TaskDetails";
import { NavLink } from "react-router-dom";
import DeleteAlert from "./DeleteAlert";

function TaskBox({ data }) {
  const { mutate } = deleteTask();

  const handledelet = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Delte");
      },
    });
  };
  return (
    <div className="border mt-5 p-5 w-80 mx-4 rounded-3xl">
      <div>
        <h1 className="text-xl font-semibold ">{data?.title?.split(" ").slice(0, 5).join(" ")}...
        </h1>
        <div className="text-sm">
          <p className="my-4">
            Due Date: <span>12/2/2021</span>{" "}
          </p>

          <p>
            Complete status:{data?.completed? <span className="text-green-500 font-semibold">completed</span>: <span className="text-orange-600 font-semibold">Pending</span>} 
          </p>
        </div>
        <div className="flex justify-end gap-6 mt-4 text-xl">
          
          <NavLink to={'/edit-task'} state={data} className="grey-blue-500">
            <MdOutlineEdit/>
          </NavLink>
          <TaskDetails item={data}/>
         <DeleteAlert id={data?.id}/>

          
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
