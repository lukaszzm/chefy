import * as Yup from "yup";

export const UserSettingsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
});
