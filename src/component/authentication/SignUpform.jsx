import React from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import InputForm from "../common/InputForm";
import { useRegister } from "../../hooks/useAuth";
import { signUpValidation } from "../../utils/Validation";

function SignUpform() {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const navigate = useNavigate();

  const { mutate, isPending } = useRegister();

  //user register funciton
  const onSubmit = async (values) => {
    mutate(values, {
      onSuccess: (result) => {
        toast.success("Registration successful");
        navigate("/login");
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
        validationSchema={signUpValidation}
        onSubmit={onSubmit}
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
          <InputForm
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
            placeholder="Enter your password"
          />

          <div className="grid mt-6">
            <button
              type="submit"
              className="bg-[#155E53] text-white py-2 rounded-3xl px-5 mt-3"
            >
              {isPending ? (
                <BeatLoader size={10} color={"#ffffff"} />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpform;
