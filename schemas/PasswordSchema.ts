import * as Yup from "yup";

export const PasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, "Your password must have at least 8 characters")
    .required("Required"),
  newPassword: Yup.string()
    .min(8, "Your password must have at least 8 characters")
    .required("Required"),
});
