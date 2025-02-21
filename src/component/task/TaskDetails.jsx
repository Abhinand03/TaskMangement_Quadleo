import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEye } from "react-icons/fa";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { updateTask } from "../../hooks/useTask";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function TaskDetails({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {mutate}=updateTask()
  const handleCompleted=(event)=>{
    mutate({completed:event.target.checked,id:item?.id},{
        onSuccess:()=>{
            toast.success("Task Updated")
            handleClose()
        }
    })
    
  }
  return (
    <div>
      <button onClick={handleOpen} className="text-blue-500">
        <FaEye />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex justify-between">
              <p>Task Details</p>
              <button onClick={handleClose} className="">
                X
              </button>
            </div>
            <p className="mt-8">{item?.title}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              Complete status:
              {item?.completed ? (
                <span className="text-green-500 font-semibold">completed</span>
              ) : (
                <span className="text-orange-600 font-semibold">Pending</span>
              )}
            </p>
            <div className="mt-6 flex justify-between">
              <p>Mark as Completed</p>
              <FormGroup>
                <FormControlLabel
                onChange={handleCompleted}
                  control={<Switch  />}
                  label="Completed"
                />
              </FormGroup>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskDetails;
