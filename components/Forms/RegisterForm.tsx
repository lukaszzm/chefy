import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../schemas/RegisterSchema";
import { useState } from "react";
import { Alert } from "../UI/Alert";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";

interface IRegisterFormProps {
  switchModal: () => void;
}

interface IFormInputs {
  email: string;
  name: string;
  password: string;
}

export const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const { switchModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const onSubmit = async (values: IFormInputs) => {
    setApiResponse(null);
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (!response.ok)
      return setApiResponse({ isError: true, text: data.message });

    setApiResponse({
      isError: false,
      text: data.message,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name" className="p-1 font-semibold">
          Name
        </Label>
        <input
          {...register("name")}
          type="text"
          placeholder="John"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.name ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.name?.message}</p>
        <Label htmlFor="email" className="p-1 font-semibold">
          Email
        </Label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@example.com"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.email?.message}</p>
        <Label htmlFor="password">Password</Label>
        <input
          {...register("password")}
          type="password"
          placeholder="password must be at least 8 characters"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.password?.message}</p>
        {apiResponse && (
          <Alert isError={apiResponse.isError} className="mt-2">
            {apiResponse.text}
          </Alert>
        )}
        <Button
          type="primary"
          fullWidth
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Submit
        </Button>
      </form>
      <p className="text-center my-2">
        Already have an account?
        <a
          onClick={switchModal}
          className="cursor-pointer font-semibold mx-2 text-primary hover:text-primary-hover transition duration-150 ease-in-out hover:underline"
        >
          Sign in here!
        </a>
      </p>
    </>
  );
};
