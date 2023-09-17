import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Provide an email")
    .email("Not a valid email address. Should be your@email.com"),
  password: yup
    .string()
    .required("Provide an password")
    .min(6, "Your password should be at least 6 characters long")
});
