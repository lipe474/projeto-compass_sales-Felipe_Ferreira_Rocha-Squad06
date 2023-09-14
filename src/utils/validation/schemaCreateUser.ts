import * as yup from "yup";

export const signUpSchema = yup.object({
  displayName: yup.string().required("Informe o nome."),
  email: yup
    .string()
    .required("Informe o e-mail.")
    .email("Digite um e-mail válido."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(4, "A senha deve ter pelo menos 4 dígitos."),
  password_confirm: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password"), ""], "As senhas não coincidem.")
});
