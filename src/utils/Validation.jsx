import * as yup from "yup";

export const loignValidation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const signUpValidation=yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirm:yup.string().oneOf([yup.ref("password"), null],"Passwords must match")
    .required("Confirm Password is required"),
})

export const taskValidation=yup.object({
    title:yup.string().required("Title is required"),
    dueDate:yup.string().required("Date is required"),
    completed:yup.boolean().required("Completed is required"),
})