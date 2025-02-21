import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function InputForm({ label, name, type, className, palceholder, ...rest }) {
  const [show, setShow] = useState(false);
  const inputType = show ? "text" : type || "text";
  return (
    <div className="  relative flex flex-col mt-6">
        <label className="text-sm font-medium" >{label}</label>
      <Field
        id={name}
        name={name}
        className={
            className
            ? className
            : "bg-transparent rounded-md border  px-5 py-3 text-sm  "
        }
        type={inputType}
        palceholder={palceholder}
        {...rest}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-5 top-9 text-color_black"
      >
        {type === "password" ? (
          show ? (
            <FaRegEyeSlash size={20} />
          ) : (
            <FaRegEye size={20} />
          )
        ) : (
          ""
        )}
      </button>
      <p className="text-red-500 text-xs mt-1">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
}

export default InputForm;
