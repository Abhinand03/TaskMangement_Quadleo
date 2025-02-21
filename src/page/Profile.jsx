import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { userDetails } from "../hooks/useAuth";

function Profile() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const {data,isPending,error}= userDetails()
  console.log(data)


  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.clear();
      toast.success("Logged out successfully");
      navigate("/login");
    }, 1000);
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="border rounded-lg p-6 mt-16">
        <p className="text-2xl font-bold">User Details</p>
        <hr className="my-4" />
        {
            isPending?<BeatLoader/>:<div className="font-semibold">
            <h1>Email: <span className="mx-2">{data?.data?.email}
                
                </span> </h1>
            <h1>First Name: <span className="mx-2">{data?.data?.first_name}</span></h1>
            <h1>First Name: <span className="mx-2">{data?.data?.last_name}</span></h1>
            <button
          onClick={handleLogout}
          className="bg-red-500 rounded-2xl mt-6 text-white flex items-center gap-2 py-2 px-10"
        >
          {isLoading ? (
              <BeatLoader color="white" size={10} />
            ) : (
                <>
                <MdLogout />
              Log out
            </>
          )}
        </button>
            </div>
        }
        
      
      </div>
    </div>
  );
}

export default Profile;
