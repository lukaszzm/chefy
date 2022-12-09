import { Formik, Field, Form, getIn } from "formik";
import { LoginSchema } from "../schemas/LoginSchema";
import { RegisterSchema } from "../schemas/RegisterSchema";

const getStyles = (errors: any, fieldName: any) => {
  return getIn(errors, fieldName)
    ? "bg-gray-100 p-2 rounded border border-red-500"
    : "bg-gray-100 p-2 rounded border border-gray-200";
};

interface ILoginFormProps {
  type: "register" | "login";
  switchModal: () => void;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { type, switchModal } = props;
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
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
                  className={getStyles(errors, "name")}
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
        {isRegisterForm ? "Already have an account?" : "Not have an account?"}
        <a
          onClick={switchModal}
          className="cursor-pointer mx-2 text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out hover:underline"
        >
          {isRegisterForm ? "Sign in here" : "Sign up here?"}
        </a>
      </p>
    </>
  );
};
