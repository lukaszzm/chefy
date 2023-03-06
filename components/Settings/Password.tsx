import { PasswordSchema } from "../../schemas/PasswordSchema";
import { Label } from "../UI/Label";
import { Button } from "../UI/Button";
import { Alert } from "../UI/Alert";
import { useSettingsForm } from "../../hooks/useSettingsForm";

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
      <input
        {...register("currentPassword")}
        type="password"
        placeholder="********"
        className={`w-full p-2 bg-gray-200 rounded border focus:outline-none ${
          errors.currentPassword ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">
        {errors.currentPassword?.message}
      </p>
      <Label htmlFor="newPassword">New Password</Label>
      <input
        {...register("newPassword")}
        type="password"
        placeholder="********"
        className={`w-full p-2 bg-gray-200 rounded border focus:outline-none ${
          errors.newPassword ? "border-red-500" : "border-gray-200"
        }`}
      />
      <p className="text-red-500 px-1 text-xs mb-2">
        {errors.newPassword?.message}
      </p>
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        className="p-4"
        disabled={!isValid || !isDirty || isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
