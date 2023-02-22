import * as Yup from "yup";

export const CheckboxesSchema = Yup.object().shape({
  checkboxes: Yup.array().min(1).of(Yup.string().required()).required(),
});
