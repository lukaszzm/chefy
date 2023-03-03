import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useForm } from "react-hook-form";
import { PasswordSchema } from "../../schemas/PasswordSchema";
import { Label } from "../UI/Label";
import { Button } from "../UI/Button";
import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";

interface FormValues {
  currentPassword: string;
  newPassword: string;
}

export const Password: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(PasswordSchema),
    mode: "onChange",
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>();

  const onSubmit = async (values: FormValues) => {
    setApiResponse(null);
    const response = await fetch("/api/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const data = await response.json();
      return setApiResponse({ isError: true, text: data.message });
    }

    setApiResponse({
      isError: false,
      text: "Success! Your password has been changed. ",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <Label htmlFor="currentPassword">Current Password</Label>
      <input
        {...register("currentPassword")}
        type="password"
        placeholder="********"
        className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
          errors.currentPassword ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">
        {errors.currentPassword?.message}
      </p>
      <Label htmlFor="newPassword">New Password</Label>
      <input
        {...register("newPassword")}
        type="password"
        placeholder="********"
        className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
          errors.newPassword ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">
        {errors.newPassword?.message}
      </p>
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        fullWidth
        disabled={!isValid || !isDirty || isSubmitting}
      >
        Change
      </Button>
    </form>
  );
};
