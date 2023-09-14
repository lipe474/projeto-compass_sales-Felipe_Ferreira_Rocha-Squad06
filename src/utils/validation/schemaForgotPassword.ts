import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Provide an email")
    .email("Not a valid email address. Should be your@email.com")
});
