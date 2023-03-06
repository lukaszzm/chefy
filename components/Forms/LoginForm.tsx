import { LoginSchema } from "../../schemas/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";
import { IApiResponse } from "../../interfaces/ApiResponse";

interface ILoginFormProps {
  switchModal: () => void;
}

interface IFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { switchModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const onSubmit = async (values: IFormInputs) => {
    const { email, password } = values;
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (!response?.ok)
      setApiResponse({
        isError: true,
        text: response?.error || "Something went wrong.",
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email" className="p-1 font-semibold">
          Email
        </Label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@example.com"
          className={`w-full p-2 mb-1 bg-gray-100 rounded border focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.email?.message}</p>
        <Label htmlFor="password">Password</Label>
        <input
          {...register("password")}
          type="password"
          placeholder="Your password"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.password?.message}</p>
        {apiResponse && (
          <Alert className="mt-2" isError>
            {apiResponse.text}
          </Alert>
        )}
        <Button
          type="primary"
          fullWidth
          disabled={!isValid || !isDirty || isSubmitting}
        >
          Submit
        </Button>
      </form>
      <p className="text-center my-2">
        Not have an account?
        <a
          onClick={switchModal}
          className="cursor-pointer font-semibold mx-2 text-primary hover:text-primary-hover transition duration-150 ease-in-out hover:underline"
        >
          Sign up here!
        </a>
      </p>
    </>
  );
};
