import { PasswordSchema } from "../../schemas/PasswordSchema";
import { Label } from "../UI/Label";
import { Button } from "../UI/Button";
import { Alert } from "../UI/Alert";
import { useSettingsForm } from "../../hooks/useSettingsForm";
import { Input } from "../UI/Input";

export const Password: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    apiResponse,
    onSubmit,
  } = useSettingsForm({
    schema: PasswordSchema,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left m-2">
      <Label htmlFor="currentPassword">Current Password</Label>
      <Input
        {...register("currentPassword")}
        type="password"
        placeholder="********"
        error={errors.currentPassword}
      />
      <Label htmlFor="newPassword">New Password</Label>
      <Input
        {...register("newPassword")}
        type="password"
        placeholder="********"
        error={errors.newPassword}
      />
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        className="p-4 w-24"
        disabled={!isValid || !isDirty}
        isLoading={isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
