import { Alert } from "@/ui/Alert";
import { Button } from "@/ui/Button";
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { useRegister } from "@/hooks/useRegister";

interface IRegisterFormProps {
  switchModal: () => void;
}

export const RegisterForm: React.FC<IRegisterFormProps> = ({ switchModal }) => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    onSubmit,
    apiResponse,
  } = useRegister();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name")}
          type="text"
          placeholder="John"
          error={errors.name}
        />
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
          placeholder="password must be at least 8 characters"
          error={errors.password}
        />
        {apiResponse && (
          <Alert isError={apiResponse.isError}>{apiResponse.text}</Alert>
        )}
        <Button
          variant="primary"
          fullWidth
          disabled={!isDirty || !isValid}
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
      <p className="text-center my-2">
        Already have an account?
        <a
          onClick={switchModal}
          className="cursor-pointer font-medium mx-2 text-primary hover:text-primary-hover transition duration-150 ease-in-out hover:underline"
        >
          Sign in here!
        </a>
      </p>
    </>
  );
};
