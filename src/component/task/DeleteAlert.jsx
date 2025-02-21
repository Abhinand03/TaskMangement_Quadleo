import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteTask } from "../../hooks/useTask";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p:2,
  borderRadius: "10px"
  
};

function DeleteAlert({ id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {mutate,isPending}= deleteTask()

  const handledelet=(id)=>{
    mutate(id,{
        onSuccess:()=>{
            toast.success("task Deleted")
            handleClose()
        }
    }
    )
  }
  return (
    <div>
       <button
            onClick={handleOpen}
            className="text-red-500"
          >
            <RiDeleteBinLine  />
          </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex justify-end">
             
              <button onClick={handleClose} className="">X</button>
            </div>

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                <p>Are you sure, You want to delete this item</p>
                <div className="flex justify-end mt-5">
                    <button onClick={handleClose}  className="bg-gray-500 text-white px-4 py-1 rounded-lg mr-3" >Cancel</button>
                    <button onClick={()=>handledelet(id)} className="bg-red-700 text-white px-4 py-1 rounded-lg ">
                        {isPending?<BeatLoader color="white" size={10}/>:
                        "Delete"}
                        </button>
                </div>
            </div>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteAlert;
