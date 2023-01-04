import { LoginSchema } from "../../schemas/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Alert } from "../UI/Alert";

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
  const [apiError, setApiError] = useState<string | null>(null);

  const onSubmit = async (values: IFormInputs) => {
    const { email, password } = values;
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (!response?.ok) setApiError(response?.error || "Something went wrong.");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="p-1 font-semibold">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@example.com"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.email?.message}</p>
        <label htmlFor="password" className="p-1 font-semibold">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="Your password"
          className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
        />
        <p className="text-red-500 px-1 text-xs">{errors.password?.message}</p>
        {apiError && (
          <Alert className="mt-2" isError>
            {apiError}
          </Alert>
        )}
        <button
          type="submit"
          disabled={!isValid || !isDirty || isSubmitting}
          className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-3.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
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
