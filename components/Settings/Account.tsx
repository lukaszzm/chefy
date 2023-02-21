import { yupResolver } from "@corex/hook-form-yup-resolver";
import { useForm } from "react-hook-form";
import { UserSettingsSchema } from "../../schemas/UserSettingsSchema";
import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";

interface IAccountProps {
  name: string;
  email: string;
}

interface IFormInputs {
  name: string;
  email: string;
}

const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};

export const Account: React.FC<IAccountProps> = (props) => {
  const { email, name } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(UserSettingsSchema),
    mode: "onChange",
    defaultValues: {
      name: name,
      email: email,
    },
  });
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const onSubmit = async (values: IFormInputs) => {
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
    reloadSession();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <label htmlFor="name" className="p-2 font-semibold text-gray-700 ">
        Name
      </label>
      <input
        {...register("name")}
        type="text"
        placeholder="Your name"
        className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
          errors.name ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">{errors.name?.message}</p>
      <label htmlFor="password" className="p-2 font-semibold text-gray-700">
        Email
      </label>
      <input
        {...register("email")}
        type="email"
        placeholder="example@gmail.com"
        className={`w-full p-2 bg-gray-100 rounded border focus:outline-none ${
          errors.email ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">{errors.email?.message}</p>
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <button
        type="submit"
        disabled={!isValid || !isDirty || isSubmitting}
        className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-2.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
      >
        Change
      </button>
    </form>
  );
};
