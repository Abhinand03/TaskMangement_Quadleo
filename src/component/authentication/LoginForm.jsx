import React from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import InputForm from "../common/InputForm";
import { useLogin } from "../../hooks/useAuth";
import { loignValidation } from "../../utils/Validation";
import { adminCredential } from "../../Redux/adminSlice";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate()
  const dispacth= useDispatch()

  const { mutate, isPending } = useLogin();

  //user login funciton
  const onSubmit = async (values) => {
    mutate(values, {
      onSuccess: (result) => {

        dispacth(adminCredential(result))
        toast.success("Login successful");
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
        toast.error(error.response.data.error);
      },
    });
  };

  return (
    <div className="mt-8">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loignValidation}
      >
        <Form>
          <InputForm
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <p className="flex justify-end text-sm mt-3 text-blue-600">
            forgot password
          </p>

          <div className="grid mt-4">
            <button
              type="submit"
              className="bg-[#155E53] text-white py-2 rounded-3xl px-5 mt-3"
            >
              {isPending ? (
                <BeatLoader size={10} color={"#ffffff"} />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
