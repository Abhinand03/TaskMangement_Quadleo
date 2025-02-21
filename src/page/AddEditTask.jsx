import { Form, Formik } from "formik";
import React from "react";
import InputForm from "../component/common/InputForm";
import { taskValidation } from "../utils/Validation";
import { addNewTask, updateTask } from "../hooks/useTask";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function AddEditTask() {
  const locatin = useLocation();
  const initialValues = {
    title: locatin?.state?.title || "",
    dueDate: "",
    completed: false,
  };
  const id = locatin?.state?.id;
  const navigate = useNavigate();

  const { mutate, isPending } = addNewTask();
  const { mutate: editTask, isPending: editLoading } = updateTask();
  // add or edit task
  const handleAddTask = (values) => {
    if (locatin?.pathname === "/new-task") {
      mutate(values, {
        onSuccess: () => {
          toast.success("New task Added");
          navigate("/");
        },
      });
    } else {
      editTask(
        { values, id },
        {
          onSuccess: () => {
            toast.success("Task Updated");
            navigate("/");
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    }
  };

  return (
    <div className="flex justify-center p-6 mt-8">
      <div className="border shadow rounded-lg px-8 py-4 w-[50%]">
        <h1 className="text-center my-4 text-2xl font-bold">Add your Task</h1>
        <div className="flex flex-col">
          <Formik
            validationSchema={taskValidation}
            initialValues={initialValues}
            onSubmit={handleAddTask}
          >
            <Form>
              <InputForm
                label="Task name"
                type="text"
                name="title"
                placeholder="Enter your task"
              />
              <InputForm type="date" label="Due Date" name="dueDate" />
              <div className="grid">
                <button
                  type="submit"
                  className="my-4 bg-blue-500 text-white font-medium py-2 rounded-2xl"
                >
                  {locatin.pathname === "/edit-task" ? (
                    editLoading ? (
                      <BeatLoader color="white" />
                    ) : (
                      "Update Task"
                    )
                  ) : isPending ? (
                    <BeatLoader color="white" />
                  ) : (
                    "Add Task"
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddEditTask;
