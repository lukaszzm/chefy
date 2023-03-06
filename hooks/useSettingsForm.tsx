import { useState } from "react";
import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { IApiResponse } from "../interfaces/ApiResponse.interface";

interface InitialProps {
  schema?: Yup.AnyObjectSchema;
  defaultValues?: any;
  successMessage?: string;
  errorMessage?: string;
}

interface FormValues {
  name: string;
  currentPassword: string;
  newPassword: string;
  prefferedCategories: string[];
  prefferedAreas: string[];
}

export const useSettingsForm = (props: InitialProps) => {
  const { schema, defaultValues, successMessage, errorMessage } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<FormValues>({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const onSubmit = async (values: FormValues) => {
    setApiResponse(null);
    const response = await fetch("/api/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok)
      return setApiResponse({
        isError: true,
        text: errorMessage || "Something went wrong.",
      });

    setApiResponse({
      isError: false,
      text: successMessage || "Success! Your data has been changed. ",
    });
  };

  return {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    onSubmit,
    apiResponse,
  };
};
