import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useForm } from "react-hook-form";
import { UserSettingsSchema } from "../../schemas/UserSettingsSchema";
import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";

interface IAccountProps {
  name: string;
}

export const Account: React.FC<IAccountProps> = (props) => {
  const { name } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<IAccountProps>({
    resolver: yupResolver(UserSettingsSchema),
    mode: "onChange",
    defaultValues: {
      name: name,
    },
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const onSubmit = async (values: IAccountProps) => {
    setApiResponse(null);
    const response = await fetch("/api/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok)
      return setApiResponse({ isError: true, text: "Something went wrong." });

    setApiResponse({
      isError: false,
      text: "Success! Your data has been changed. Log in again to see the changes. ",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <Label htmlFor="name">Name</Label>
      <input
        {...register("name")}
        type="text"
        placeholder="Your name"
        className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
          errors.name ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">{errors.name?.message}</p>
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button type="primary" disabled={!isValid || !isDirty || isSubmitting}>
        Change
      </Button>
    </form>
  );
};
