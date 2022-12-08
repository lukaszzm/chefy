import { Formik, Field, Form, getIn } from "formik";
import { LoginSchema } from "../schemas/LoginSchema";

const getStyles = (errors: any, fieldName: any) => {
  return getIn(errors, fieldName)
    ? "bg-gray-100 p-2 rounded border border-red-500"
    : "bg-gray-100 p-2 rounded border border-gray-200";
};

export const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center">
            <label htmlFor="email" className="p-1 font-semibold">
              E-mail
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="e.g example@domain.com"
              className={getStyles(errors, "email")}
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
              className={getStyles(errors, "password")}
            />
            {errors.password && touched.password ? (
              <div className="text-red-500 px-1 text-xs">{errors.password}</div>
            ) : null}
            <button
              type="submit"
              className="w-full py-3.5 bg-blue-600 text-white font-medium text-l my-4 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center">
        Not have an account?
        <a
          href="/test"
          className=" mx-2 text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
        >
          Sign up here!
        </a>
      </p>
    </>
  );
};
