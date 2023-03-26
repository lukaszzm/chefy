import { Alert } from "@/ui/Alert";
import { Button } from "@/ui/Button";
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { useLogin } from "@/hooks/useLogin";

interface ILoginFormProps {
  switchModal: () => void;
}

export const LoginForm: React.FC<ILoginFormProps> = ({ switchModal }) => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    onSubmit,
    apiResponse,
  } = useLogin();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="example@example.com"
          error={errors.email}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="********"
          error={errors.password}
        />
        {apiResponse && <Alert isError>{apiResponse.text}</Alert>}
        <Button
          variant="primary"
          fullWidth
          disabled={!isValid || !isDirty}
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
      <p className="text-center my-2">
        Not have an account?
        <a
          onClick={switchModal}
          className="cursor-pointer font-medium mx-2 text-primary hover:text-primary-hover transition duration-150 ease-in-out hover:underline"
        >
          Sign up here!
        </a>
      </p>
    </>
  );
};
