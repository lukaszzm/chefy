import { Formik, Field, Form, getIn } from "formik";
import { LoginSchema } from "../schemas/LoginSchema";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useState } from "react";
import { Alert } from "./Alert";

const getStyles = (errors: any, touched: any, fieldName: any) => {
  return getIn(errors, fieldName) && getIn(touched, fieldName)
    ? "bg-gray-100 p-2 rounded border border-red-500 focus:outline-none"
    : "bg-gray-100 p-2 mb-2 rounded border border-gray-200 focus:outline-none";
};

interface ILoginFormProps {
  type: "register" | "login";
  switchModal: () => void;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { type, switchModal } = props;
  const [apiError, setApiError] = useState<string | null>(null);
  const isRegisterForm = type === "register" ? true : false;

  return (
    <>
      <Formik
        initialValues={
          isRegisterForm
            ? { name: "", email: "", password: "" }
            : { email: "", password: "" }
        }
        validationSchema={isRegisterForm ? RegisterSchema : LoginSchema}
        onSubmit={async (values) => {
          setApiError(null);
          const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
          });
          if (res?.error) return setApiError(res?.error);
          Router.push("/dashboard");
        }}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="flex flex-col justify-center">
            {isRegisterForm ? (
              <>
                <label htmlFor="name" className="p-1 font-semibold">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className={getStyles(errors, touched, "name")}
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500 px-1 text-xs">{errors.name}</div>
                ) : null}
              </>
            ) : null}
            <label htmlFor="email" className="p-1 font-semibold">
              E-mail
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="e.g example@domain.com"
              className={getStyles(errors, touched, "email")}
            />
            {errors.email && touched.email ? (
              <div className="text-red-500 px-1 text-xs">{errors.email}</div>
            ) : null}
            <label htmlFor="password" className="p-1 font-semibold">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password must have at least 8 characters"
              className={getStyles(errors, touched, "password")}
            />
            {errors.password && touched.password ? (
              <div className="text-red-500 px-1 text-xs mb-2">
                {errors.password}
              </div>
            ) : null}
            {apiError ? <Alert>{apiError}</Alert> : null}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-3.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center my-2">
        {isRegisterForm ? "Already have an account?" : "Not have an account?"}
        <a
          onClick={switchModal}
          className="cursor-pointer font-semibold mx-2 text-primary hover:text-primary-hover transition duration-150 ease-in-out hover:underline"
        >
          {isRegisterForm ? "Sign in here!" : "Sign up here!"}
        </a>
      </p>
    </>
  );
};
