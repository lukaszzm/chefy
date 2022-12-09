import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Your password must have at least 8 characters")
    .required("Required"),
  name: Yup.string().required("Required"),
});
